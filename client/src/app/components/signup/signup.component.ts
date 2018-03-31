import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() isSignupHide: boolean;
  @Input() isNavHide: boolean;
  @Output() close = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  closeSignup() {
    this.isSignupHide = !this.isSignupHide;
    this.isNavHide = !this.isNavHide;
    this.close.emit({ signup: this.isSignupHide, nav: this.isNavHide });
  }

}
