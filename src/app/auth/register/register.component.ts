import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'doPa-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initSignUpForm();
  }

  handleSubmitForm() {
    console.log(this.signUpForm.value);
    // this.router.navigate(['/login']);
  }

  private initSignUpForm() {
    this.signUpForm = new FormGroup({
      nomPrenom: new FormControl('', Validators.email),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      medecinCheckbox: new FormControl('', Validators.required),
      patientCheckbox: new FormControl('', Validators.required),
    });
  }
}
