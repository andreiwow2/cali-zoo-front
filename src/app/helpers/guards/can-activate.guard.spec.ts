import { TestBed } from '@angular/core/testing';
import { UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginService } from '@app/services';
import { isAuthenticatedSubject, MockLoginService } from '@app/services/auth/mock-login.service.spec';

import { CanActivateGuard } from './can-activate.guard';

describe('CanActivateGuard', (): void => {
  let guard: CanActivateGuard;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [{ provide: LoginService, useClass: MockLoginService }],
    });
    guard = TestBed.inject(CanActivateGuard);
  });

  it('should be created', (): void => {
    expect(guard).toBeTruthy();
  });

  it('should activate when is authenticated', (done: DoneFn): void => {
    guard.canActivate()
    // .pipe(first()) // RouterGuards that return observables must complete!
    .subscribe(
      (result: boolean | UrlTree): boolean => expect(result).toBe(true, 'can activate'),
      fail,
      done,
    );

    isAuthenticatedSubject.next(true);
  });

  it('should NOT activate when is NOT authenticated', (done: DoneFn): void => {
    guard.canActivate()
    // .pipe(first()) // RouterGuards that return observables must complete!
    .subscribe(
      (result: boolean | UrlTree): boolean => expect(result.toString()).toBe('/login', 'can NOT activate'),
      fail,
      done,
    );

    isAuthenticatedSubject.next(false);
  });
});
