import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shop } from 'src/classes/shop';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`http://localhost:8090/api/shops`).pipe(
      map(res => res.map(d => new Shop(d))));
  }

  getShopById(sh: number): Observable<Shop> {
    return this.http.get<Shop[]>(`http://localhost:8090/api/shops/${sh}`).pipe(
      map(d => new Shop(d)));
  }
}
