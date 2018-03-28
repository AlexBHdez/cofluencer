import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  user;
  data;

  constructor(private session: AuthService) { }

  ngOnInit() {
    this.user = this.session.getUser();
  }

  getPrivate() {
    this.session.private()
      .then((data) => {
        this.data = data;
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
