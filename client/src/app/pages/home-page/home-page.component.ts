import { Component, OnInit } from '@angular/core';
import { OpenCloseModalService } from '../../services/open-close-modal.service';

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
    private openModalService: OpenCloseModalService
  ) { }

  ngOnInit() {
  }

  openLogin() {
    this.openModalService.showLoginPage();
    this.isLoginHide = this.openModalService.isLoginHide;
    this.isNavHide = this.openModalService.isNavHide;
  }

  openSignup() {
    this.openModalService.showSignupPage();
    this.isSignupHide = this.openModalService.isSignupHide;
    this.isNavHide = this.openModalService.isNavHide;
  }

}
