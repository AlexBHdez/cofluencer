import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  @Input() isLoginHide: boolean;
  @Input() isNavHide: boolean;
  @Output() close = new EventEmitter<any>();

  constructor(

  ) { }

  ngOnInit() {
  }

  closeLogin() {
    this.isLoginHide = !this.isLoginHide;
    this.isNavHide = !this.isNavHide;
    this.close.emit({ login: this.isLoginHide, nav: this.isNavHide });
  }


}
