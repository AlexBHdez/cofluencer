import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() isSignupHide: boolean;
  @Input() isNavHide: boolean;
  @Output() close = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  closeSignup() {
    this.isSignupHide = !this.isSignupHide;
    this.close.emit(this.isSignupHide);
  }

}
