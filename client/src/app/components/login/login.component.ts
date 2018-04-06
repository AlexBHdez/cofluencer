import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  @Output() close = new EventEmitter<any>();
  @Output() change = new EventEmitter<any>();

  constructor(

  ) { }

  ngOnInit() {
  }

  closeLogin() {
    this.close.emit();
  }

  changeModal(event) {
    this.change.emit(event);
  }

}
