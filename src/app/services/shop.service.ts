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
  lat: number;
  long: number;
  latlong: Array<number> = [];

  getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`http://localhost:8090/api/shops`).pipe(
      map(res => res.map(d => new Shop(d))));
  }

  getShopById(sh: number): Observable<Shop> {
    return this.http.get<Shop[]>(`http://localhost:8090/api/shops/${sh}`).pipe(
      map(d => new Shop(d)));
  }
  addShopToDB(shop: Shop): any {
    this.http.post(`http://localhost:8090/api/shops`, shop).subscribe(res => {
      console.log('inside postmehtod of sub.function', res.toString());
    });
    console.log('shop', shop);
  }
  saveLatLong(lat: number, long: number) {
    this.latlong[0] = lat;
    this.latlong[1] = long;
  }
  getLatLong(): Array<number> {

    return this.latlong;

  }
}
