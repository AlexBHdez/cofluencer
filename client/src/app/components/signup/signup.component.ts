import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() close = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  closeSignup(event) {
    if (event === 'login') {
      this.close.emit(event);
      console.log(event);
    } else {
      this.close.emit(event);
      console.log(event);
    }
  }

}
