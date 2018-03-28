import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignupPageComponentComponent } from './auth-signup-page-component.component';

describe('AuthSignupPageComponentComponent', () => {
  let component: AuthSignupPageComponentComponent;
  let fixture: ComponentFixture<AuthSignupPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSignupPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignupPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
