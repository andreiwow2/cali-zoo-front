import { Component, OnInit } from '@angular/core';
import { OrdersServiceService } from '@app/services';
import { Order } from '@app/helpers';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  public readonly ORDERS$: Observable<Order[]>;

  constructor(private readonly orderService: OrdersServiceService) {
    this.ORDERS$ = this.orderService.loadOrders();
  }

  ngOnInit() {

  }

  testEvent(e: MouseEvent): void {
    if (e.type == 'mouseover')
      (e.target as Element).classList.add('text-danger');
    else if (e.type == 'mouseout')
      (e.target as Element).classList.remove('text-danger');
  }
}
