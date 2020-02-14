import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../classes/order';
import { OrderItem } from '../classes/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  postOrderToDB(order: Order): Observable<any> {
    return this.http.post(`http://localhost:8090/api/Orders`, order).
    map(res => { console.log('add order to DB result', res); return res; });
  }
  postOrderProductToDB(item: OrderItem): Observable<any> {
    console.log('item', item);
    return this.http.post(`http://localhost:8090/api/OrderProducts`, item).
    map(res => { console.log('add order item to DB result', res); return res; });
  }
}
