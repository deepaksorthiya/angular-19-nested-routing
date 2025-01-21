import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm?: any;
  showLoginError = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('LoginComponent constructor initialized.');
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required],
    });
    console.log('LoginComponent ngOnInit() initialized.');
  }

  ngOnDestroy(): void {
    console.log('LoginComponent ngOnDestroy() initialized.');
  }

  login(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      // Call the authentication service's login method
      if (this.authService.login(username, password)) {
        this.showLoginError = false;
        // Redirect to the returnUrl after successful login
        const returnUrl =
          this.route.snapshot.queryParams['returnUrl'] ||
          this.router.url ||
          'dashboard';
        console.log('Login Success and Redirecting to: ' + returnUrl);
        this.router.navigateByUrl(returnUrl).then((r) => {
          console.log('Redirecting to url ' + returnUrl + ' Success ' + r);
        });
      } else {
        // Handle authentication error (show error message, etc.)
        console.log('Invalid username or password');
        this.showLoginError = true;
      }
    }
  }
}
