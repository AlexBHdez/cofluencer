import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() optionLoginSignup: string;
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  changeModal(option) {
    if (option === 'login') {
      this.optionLoginSignup = 'login';
    } else if (option === 'signup') {
      this.optionLoginSignup = 'signup';
    }
  }


}
