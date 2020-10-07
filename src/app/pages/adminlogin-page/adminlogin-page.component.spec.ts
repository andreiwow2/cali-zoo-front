import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginService } from '@app/services';
import { logInUserSubject, MockLoginService } from '@app/services/auth/mock-login.service.spec';

import { AdminloginPageComponent } from './adminlogin-page.component';

describe('AdminloginPageComponent', (): void => {
  let component: AdminloginPageComponent;
  let fixture: ComponentFixture<AdminloginPageComponent>;

  beforeEach(async((): void => {
    void TestBed.configureTestingModule({
      declarations: [ AdminloginPageComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [{ provide: LoginService, useClass: MockLoginService }],
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(AdminloginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
    logInUserSubject.next(true); // TODO: test login
  });
});
