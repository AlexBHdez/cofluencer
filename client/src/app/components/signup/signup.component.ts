import { Component, OnInit } from '@angular/core';
import { OpenCloseModalService } from '../../services/open-close-modal.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private openModalService: OpenCloseModalService,
  ) { }

  ngOnInit() {
  }

  closeSignupPage() {
    this.openModalService.closeSignupPage();
  }

}
