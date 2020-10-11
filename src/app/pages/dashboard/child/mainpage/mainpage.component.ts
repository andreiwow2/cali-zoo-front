import { Component, OnInit } from '@angular/core';
import { OrdersServiceService } from '@app/services';
import { Order } from '@app/helpers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { map } from 'rxjs/operators';

interface statistics {
  newOrders: Observable<number>,
  userRegistrations: number,
  uniqueVisitors: number,
  bounceRate: number
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  public readonly ORDERS$: Observable<Order[]>;
  public readonly statistics: statistics;

  constructor(private readonly orderService: OrdersServiceService) {
    this.ORDERS$ = this.getOrders();
    this.statistics = {
      newOrders: this.countNewOrders(),
      userRegistrations: 0,
      uniqueVisitors: 0,
      bounceRate: 0
    }
  }

  ngOnInit() {

  }

  private getOrders(): Observable<Order[]> {
    return this.orderService.loadOrders();
  }

  private countNewOrders (): Observable<number> {
    return this.ORDERS$.pipe(
      map(orders => orders.filter(
        order => this.isThisWeek(order.placed_at)
      ).length
    ));
  }

  private isThisWeek (date: any) {
    const now = +new Date();

    const oneWeek = 604800000;
    const ddate = Date.parse(date.replace(' ', 'T'));
    
  
    return (now - ddate) < oneWeek;
  }

  testEvent(e: MouseEvent): void {
    if (e.type == 'mouseover')
      (e.target as Element).classList.add('text-danger');
    else if (e.type == 'mouseout')
      (e.target as Element).classList.remove('text-danger');
  }
}
