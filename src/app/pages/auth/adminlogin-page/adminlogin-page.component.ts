import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { LoginService } from '../../../services/auth/login.service';

@Component({
  selector: 'app-adminlogin-page',
  templateUrl: './adminlogin-page.component.html',
  styleUrls: ['./adminlogin-page.component.css']
})
export class AdminloginPageComponent implements OnInit, OnDestroy {

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });

  onSubmit(){
    this.LoginService.logInUser(this.loginForm.value);
  }

  constructor(private fb: FormBuilder, private LoginService: LoginService) { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }

}
