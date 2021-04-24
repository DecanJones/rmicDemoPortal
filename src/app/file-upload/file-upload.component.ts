import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})



export class FileUploadComponent implements OnInit {
  public form: FormGroup = Object.create(null);
  isContentLoaded = false;
  constructor(private fb: FormBuilder) { }


  contentLoaded(){
    setTimeout(() => {
      this.isContentLoaded = true;
    }, 500);
    return this.isContentLoaded
  } 
  ngOnInit(): void {
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


