import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  isLoginHide: boolean;
  isSignupHide: boolean;
  isNavHide: boolean;
  isMenuHide: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  openMenu() {
    this.isMenuHide = !this.isMenuHide;
    this.isNavHide = !this.isNavHide;
  }

  onCloseMenu(event) {
    this.isMenuHide = event.menu;
    this.isNavHide = event.nav;
  }

  openLogin() {
    this.isLoginHide = !this.isLoginHide;
    this.isNavHide = !this.isNavHide;
    this.router.navigate(['login']);
  }

  onCloseLogin(event) {
    this.isLoginHide = event.login;
    this.isNavHide = event.nav;
    this.router.navigate(['/']);
  }

  openSignup() {
    this.isSignupHide = !this.isSignupHide;
    this.isNavHide = !this.isNavHide;
    this.router.navigate(['signup']);
  }

  onCloseSignup(event) {
    this.isSignupHide = event.signup;
    this.isNavHide = event.nav;
    this.router.navigate(['/']);
  }

}
