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

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  openLogin() {
    this.isLoginHide = !this.isLoginHide;
    this.isNavHide = !this.isNavHide;
    this.router.navigate(['login']);
  }

  openSignup() {
    this.isSignupHide = !this.isSignupHide;
    this.isNavHide = !this.isNavHide;
    this.router.navigate(['signup']);
  }

  onClose(isSignupHide) {
    this.isSignupHide = isSignupHide;
  }

}
