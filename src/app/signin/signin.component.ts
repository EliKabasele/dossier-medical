import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  loginForm: FormGroup;
    
  submitted = false;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}
  
  ngOnInit() {
      this.loginForm = new FormGroup({
          'login': new FormControl('', [Validators.email]),
          'password': new FormControl('', Validators.required)
      });
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const { login, password } = this.loginForm.value;
      this.authenticationService.SignIn({ email: login, password })
        .subscribe(
          () => {
            this.submitted = false;
            this.router.navigate(['dashboard']);
          },
          (error: any) => {
            this.submitted = false;
            // Handle login error
          }
        );
    }
  }
}
