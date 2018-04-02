import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {

  @Input() isNavHide: boolean;
  @Input() isMenuHide: boolean;
  @Output() close = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  closeMenu() {
    this.isMenuHide = !this.isMenuHide;
    this.isNavHide = !this.isNavHide;
    this.close.emit({ menu: this.isMenuHide, nav: this.isNavHide });
  }

}
