import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  formData = this.fb.group(
    {
    account: ['', Validators.required],
    password: ['', Validators.required]
  });
  hide = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(): any {
  }
}
