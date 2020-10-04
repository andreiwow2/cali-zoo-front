import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginPageComponent } from './adminlogin-page.component';

describe('AdminloginPageComponent', () => {
  let component: AdminloginPageComponent;
  let fixture: ComponentFixture<AdminloginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminloginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
