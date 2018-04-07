import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ModalComponent } from './components/modal/modal.component';

import { IgDatauserService } from './services/ig-datauser.service';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { InstagramInfoComponent } from './components/instagram-info/instagram-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [InitAuthGuardService],
    children: [
      {
        path: 'signup',
        component: SignupComponent,
        canActivateChild: [RequireAnonGuardService]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivateChild: [RequireAnonGuardService]
      },
    ]
  },
  {
    path: 'app',
    component: AppPageComponent,
    canActivate: [RequireUserGuardService]
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
    MobileMenuComponent,
    ModalComponent,
    AppPageComponent,
    InstagramInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    IgDatauserService,
    AuthService,
    RequireUserGuardService,
    RequireAnonGuardService,
    InitAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
