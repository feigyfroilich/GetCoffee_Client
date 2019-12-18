import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from 'src/classes/shop';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from 'src/classes/product';

@Component({
  selector: 'app-shop-product-view',
  templateUrl: './shop-product-view.component.html',
  styleUrls: ['./shop-product-view.component.scss']
})
export class ShopProductViewComponent implements OnInit {
  products: Array<Product> = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllShops().subscribe(res => {
      console.log('shops', res);
      this.products = res;

    });
  }
  getAllShops(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8090/api/products`).pipe(
      map(res => res.map(d => new Product(d))));
  }

}
