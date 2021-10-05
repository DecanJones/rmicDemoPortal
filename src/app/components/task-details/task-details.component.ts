import { Component, AfterViewInit, OnInit,ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { TextEditorComponent } from 'src/app/components/text-editor/text-editor.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { SharedService } from '../../services/shared-services';
import { HeroService } from 'src/app/services/hero.service';
import { selectAllHeroes, getSelectedHero } from '../../entities/heroes/hero-reducer';
import { Store } from '@ngrx/store';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-starter',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})



export class TaskDetailsComponent  {
  @ViewChild("dynamicComponent", { read: ViewContainerRef }) container:any;

  public componentRef:any
  public form: FormGroup = Object.create(null);
  public hero:any
  ngAfterViewInit() {
    //nav hack
    document.getElementById("navMenu")?.click();
  }



  getHeroes(): void {
    this.store.select(selectAllHeroes).subscribe(heroes=>{
    this.hero = heroes.slice(0,4);
    });
  }
  


  createComponent(type:any) {
    this.container.clear();

    if (type === 0) {
      const factory = this.resolver.resolveComponentFactory(FileUploadComponent);
      this.componentRef = this.container.createComponent(factory);
    } else if (type === 1) {
      const factory = this.resolver.resolveComponentFactory(TextEditorComponent);
      this.componentRef = this.container.createComponent(factory);
    }
    

  }
  constructor(private fb: FormBuilder,
              private resolver: ComponentFactoryResolver,
              private store:Store<any>,
              private heroService: HeroService,
              private sharedService:SharedService){
                
                this.sharedService.changedTaskEmitted$.subscribe((event)=> {
                  this.createComponent(event);
                })

                this.heroService.test();

                this.store.select(selectAllHeroes).subscribe(heroes=>{
                  this.hero = heroes.find(hero => hero.id == 13);
                  console.log("butt juice ", heroes)
                });
            
              }

  ngOnInit() {
    this.heroService.getHeroes();
    this.form = this.fb.group({
      fname: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)
        ])
      ],
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      range: [
        null,
        Validators.compose([
          Validators.required,
          CustomValidators.range([5, 9])
        ])
      ],
      url: [
        null,
        Validators.compose([Validators.required, CustomValidators.url])
      ],
      date: [
        null,
        Validators.compose([Validators.required, CustomValidators.date])
      ],
      phone: [
        null,
        Validators.compose([Validators.required])
      ],
      gender: [null, Validators.required],
      password: password,
      confirmPassword: confirmPassword
    });
  }
}
