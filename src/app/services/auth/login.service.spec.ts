import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', (): void => {
  let service: LoginService;

  beforeEach((): void => {
    TestBed.configureTestingModule({ imports: [ HttpClientTestingModule ]});
    service = TestBed.inject(LoginService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
