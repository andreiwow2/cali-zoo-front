import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface HttpOptions {
  body?: any;
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly options: HttpOptions;

  constructor(private readonly http: HttpClient) {
    this.options = {
      headers: new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json'),
      withCredentials: true,
    };
  }

  public isAuthenticated(): Observable<boolean> {
    return this.http.get<any>('http://localhost:3000/test', this.options)
      .pipe(map((ret: any): boolean => {
        console.log('LoginService#isAuthenticated', ret);
        return ret;
      }));
  }

  public logInUser(email: string, password: string): Observable<boolean> {
    const payload = { email, password };

    return this.http.post<any>('http://localhost:3000/login', payload, this.options)
      .pipe(map((ret: any): boolean => {
        console.log('LoginService#logInUser', ret);
        return true;
      }));
  }
}
