import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shop } from 'src/app/classes/shop';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopProduct } from '../classes/shopProduct';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
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
   return   this.http.post(`http://localhost:8090/api/shops`, shop).map(res => {
    this.router.navigate(['/addShop']);
    return res;
    });

  }
  saveLatLong(lat: number, long: number) {
    this.latlong[0] = lat;
    this.latlong[1] = long;
  }
  getLatLong(): Array<number> {

    return this.latlong;

  }
  updateShopStatus(shop: Shop): Observable<any> {
    return this.http.put(`http://localhost:8090/api/Shops/${shop.code}`, shop);
  }
}
