import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../classes/order';
import { OrderItem } from '../classes/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public orderProductList: Array<any> = [];
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
  getOrdersOfShop(shopCode: number): Observable<any> {
    return this.http.get(`http://localhost:8090/api/Orders/${shopCode}`).
      map(res => { console.log('get orders from DB by id result', res); return res; });
  }
  getOrderProductOfOrders(orders: Array<Order>): any {
     orders.forEach(order => {
       this.getOrderProductOfOrderId(order.code).subscribe(res => {
        this.orderProductList.push(res);
      });
    });

  }
  getOrderProductOfOrderId(orderCode: number): Observable<any> {
    return this.http.get(`http://localhost:8090/api/OrderProducts/${orderCode}`).
      map(res => { console.log('get order item from DB result', res);
                   return res; });
  }
  updateOrderAsReady(order: Order): Observable<any> {
    order.ready = true;
    return this.http.put(`http://localhost:8090/api/Orders/${order.code}`, order);
  }
  sendEmail(): any {
    this.http.get(`http://localhost:8090/api/email`);
  }
}
