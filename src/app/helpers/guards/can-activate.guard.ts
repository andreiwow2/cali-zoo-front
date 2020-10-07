import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginService } from '@app/services/';

@Injectable({ providedIn: 'root' })
export class CanActivateGuard implements CanActivate {
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
  ) {}

  public canActivate(): Observable<boolean | UrlTree> {
    return this.loginService.isAuthenticated().pipe(
      map((isAuthenticated: boolean): boolean | UrlTree => {
        if (!isAuthenticated) {
          // Navigate to the login page
          return this.router.parseUrl('login');
        }

        return true;
      }),
    );
  }
}
