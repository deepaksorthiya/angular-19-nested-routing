import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  authService: AuthService;
  constructor(
    authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.authService = authService;
    console.log('AppComponent constructor initialized.');
  }

  logout(): void {
    this.authService.logout();
    // go to previous page
    // const currentUrl = this.router.url;
    // const returnUrl =
    //   this.route.snapshot.queryParams['returnUrl'] ||
    //   this.router.url ||
    //   'dashboard';
    // this.router.navigateByUrl(returnUrl).then((r) => {
    //   console.log(r);
    // });
  }

  showLogin(): boolean {
    return this.authService.isAuthenticatedUser();
  }
}
