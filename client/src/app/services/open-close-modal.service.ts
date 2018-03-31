import { Injectable, } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class OpenCloseModalService {

  isLoginHide: boolean;
  isSignupHide: boolean;
  isNavHide: boolean;

  constructor(private router: Router) { }

  showLoginPage() {
    this.isLoginHide = !this.isLoginHide;
    this.isNavHide = !this.isNavHide;
    this.router.navigate(['/login']);
  }

  closeLoginPage() {
    this.isLoginHide = !this.isLoginHide;
    this.isNavHide = !this.isNavHide;
    this.router.navigate(['/']);
  }

  showSignupPage() {
    this.isSignupHide = !this.isSignupHide;
    this.isNavHide = !this.isNavHide;
    this.router.navigate(['/signup']);
  }

  closeSignupPage() {
    this.isSignupHide = !this.isSignupHide;
    this.isNavHide = !this.isNavHide;
    this.router.navigate(['/']);
  }

}
