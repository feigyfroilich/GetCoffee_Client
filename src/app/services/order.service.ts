import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../classes/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  postOrderToDB(order: Order): Observable<any> {
    return this.http.post(`http://localhost:8090/api/Orders`, order).map(res => console.log('add shop to DB result', res));
  }
}
