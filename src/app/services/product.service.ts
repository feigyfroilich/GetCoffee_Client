import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/classes/product';
import { Category } from 'src/classes/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList1: Array<Product> = [];

  constructor(private http: HttpClient) {}

  public getProductsDB(): Observable<Category[]> {
    return this.http.get<[Product]>(`http://localhost:8090/api/products`);
  }
 public getAllProduct(): any {
  this.getProductsDB().subscribe(products => {
    this.productList1 = products;
  });
 }
 public getProducts():any{
   return this.productList1;
 }
}
