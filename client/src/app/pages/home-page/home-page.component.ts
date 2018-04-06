import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  isMenuHide: boolean;
  toggleModal: boolean;
  optionLoginSignup: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  menuControl() {
    this.isMenuHide = !this.isMenuHide;
  }

  modalControl(option) {
    this.toggleModal = !this.toggleModal;
    if (option === 'login') {
      this.optionLoginSignup = 'login';
    } else if (option === 'signup') {
      this.optionLoginSignup = 'signup';
    }
  }

  onCloseModal() {
    this.toggleModal = !this.toggleModal;
  }

}
