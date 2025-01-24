import { CommonModule, DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { NgProgressbar } from 'ngx-progressbar';
import { NgProgressRouter } from 'ngx-progressbar/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    NgProgressbar,
    NgProgressRouter,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  authService: AuthService;
  private readonly document = inject(DOCUMENT);

  private readonly selector = 'globalLoader';
  constructor(
    authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.authService = authService;
    console.log('AppComponent constructor initialized.');
  }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit() initialized.');
  }

  ngOnDestroy(): void {
    console.log('AppComponent ngOnDestroy() initialized.');
  }

  private getElement() {
    return this.document.getElementById(this.selector);
  }

  hide() {
    const el = this.getElement();
    if (el) {
      el.addEventListener('transitionend', () => {
        el.className = 'global-loader-hidden';
      });

      if (!el.classList.contains('global-loader-hidden')) {
        el.className += ' global-loader-fade-out';
      }
    }
  }

  ngAfterViewInit() {
    this.hide();
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
