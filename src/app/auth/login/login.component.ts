import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'doPa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  handleSubmitLoginForm() {
    console.log(this.loginForm.value);
  }
  navigateToSignUp(): void {
    this.router.navigate(['/register']);
  }

  private initLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
    });
  }
}
