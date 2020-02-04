import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/classes/product';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList1: Array<Product> = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  getProductsDB(): Observable<Product[]> {
    return this.http.get<[Product]>(`http://localhost:8090/api/products`);
  }
//  getAllProduct(): any {
//   this.getProductsDB().subscribe(products => {
//     this.productList1 = products;
//   });
//  }
//  getProducts(): any {
//    return this.productList1;
//  }
}
