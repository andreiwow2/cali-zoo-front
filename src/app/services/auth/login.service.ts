import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../helpers/interfaces/User';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  options = {
    headers: new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded'),
    withCredentials: true
  };

  isAuthenticated(): boolean{
    console.warn('inside isauth');
    this.http.get<boolean>('http://localhost:3000/test', this.options).subscribe(data => {
      console.warn(data);
      return true;
    });
    return false
  }

  logInUser(value: any): void{
    this.http.post<any>('http://localhost:3000/login', value, this.options).subscribe(data => {
      //let user: User = data;
      //console.warn(data);
    });
  }

  constructor(private http: HttpClient) { }
}
