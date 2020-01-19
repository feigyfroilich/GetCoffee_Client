import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/classes/product';
import { HttpClient } from '@angular/common/http';
import { ShopProduct } from 'src/classes/shopProduct';

@Injectable({
  providedIn: 'root'
})
export class ShopsProductService {

  constructor(private http: HttpClient) { }

  getAllShopProducts(): Observable<ShopProduct[]> {
    return this.http.get<ShopProduct[]>(`http://localhost:8090/api/Shop_sProduct/2`).pipe(
      map(res => res.map(d => new ShopProduct(d))));
  }

  updateShopProducts(products: ShopProduct[]): Observable<any> {
   let newproducts = []
   products.forEach(item => {
 let prod = new Product()
 prod.code = item.productCode,
 prod.name = item.name,
 prod.parentCode = item.shopCode
 newproducts.push(prod)
   })
return this.http.put(`http://localhost:8090/api/test`,  products);
  }
}
