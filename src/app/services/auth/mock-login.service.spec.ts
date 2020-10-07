import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

export const isAuthenticatedSubject = new Subject<boolean>();
export const logInUserSubject = new Subject<boolean>();

@Injectable()
export class MockLoginService {
  public isAuthenticated(): Observable<boolean> {
    // Because these are pretending to be HttpClient Observables they will only emit once per subscription.
    return isAuthenticatedSubject.pipe(take(1));
  }

  public logInUser(_email: string, _password: string): Observable<boolean> {
    // Because these are pretending to be HttpClient Observables they will only emit once per subscription.
    return logInUserSubject.pipe(take(1));
  }
}
