import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-starter',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})



export class TaskDetailsComponent  {
  public form: FormGroup = Object.create(null);
  ngAfterViewInit() {
    //nav hack
    document.getElementById("navMenu")?.click();
  }

  constructor(private fb: FormBuilder){}

  ngOnInit() {
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
