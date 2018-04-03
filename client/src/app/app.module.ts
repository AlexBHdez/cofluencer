import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { IgDatauserService } from './services/ig-datauser.service';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: '**', redirectTo: '',
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [IgDatauserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
