import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isHide: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showLoginPage(): void {
    this.isHide = !this.isHide;
    this.router.navigate(['/login']);
  }

}
