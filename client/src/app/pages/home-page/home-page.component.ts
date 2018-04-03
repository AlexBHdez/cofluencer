import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  isSignupHide: boolean;
  isLoginHide: boolean;
  isMenuHide: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signupControl(event) {
    this.isSignupHide = !this.isSignupHide;
    if (!this.isSignupHide) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/signup']);
    }
    if (event === 'login') {
      this.loginControl();
    }
  }

  loginControl() {
    this.isLoginHide = !this.isLoginHide;
    if (!this.isLoginHide) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  menuControl() {
    this.isMenuHide = !this.isMenuHide;
  }

}
