import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginPageComponentComponent } from './auth-login-page-component.component';

describe('AuthLoginPageComponentComponent', () => {
  let component: AuthLoginPageComponentComponent;
  let fixture: ComponentFixture<AuthLoginPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoginPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
