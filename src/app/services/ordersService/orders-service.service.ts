import { Injectable } from '@angular/core';
import { HttpOptions, Order } from '@app/helpers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceService {
  private readonly options: HttpOptions;

  constructor(private readonly http: HttpClient) {
    this.options = {
      headers: new HttpHeaders()
        .set('Accept', 'applicatio/json')
        .set('Content-Type', 'application/json'),
      withCredentials: true
    };
  }

  public loadOrders(): Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:3000/load/orders', this.options).pipe();
  }
}
