import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() close = new EventEmitter<any>();
  @Output() change = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  closeSignup(event) {
      this.close.emit();
  }

  changeModal(event) {
    this.change.emit(event);
  }

}
