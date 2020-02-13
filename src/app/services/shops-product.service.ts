import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product } from "src/app/classes/product";
import { HttpClient } from "@angular/common/http";
import { ShopProduct } from "src/app/classes/shopProduct";
import { Order } from "../classes/order";

@Injectable({
  providedIn: "root"
})
export class ShopsProductService {
  user_products: Array<ShopProduct> = [];
  all_products: Array<ShopProduct> = [];
  shop_code: number;
  user_product: ShopProduct;
  constructor(private http: HttpClient) {}

  getAllShopProducts(shopCode: number): Observable<ShopProduct[]> {
    return this.http
      .get<ShopProduct[]>(`http://localhost:8090/api/Shop_sProduct/${shopCode}`)
      .pipe(map(res => res.map(d => new ShopProduct(d))));
  }
  getAllProducts(): Observable<ShopProduct[]> {
    return this.http
      .get<ShopProduct[]>(`http://localhost:8090/api/Shop_sProduct`)
      .pipe(map(res => res.map(d => new ShopProduct(d))));
  }
  updateShopProducts(products: ShopProduct[]): Observable<any> {
    let newproducts = [];
    products.forEach(item => {
      let prod = new ShopProduct();
      prod.Code = item.Code;
      prod.productCode = item.productCode;
      prod.shopCode = item.shopCode;
      prod.price = item.price;
      prod.duration = item.duration;
      prod.status = item.status;
      prod.name = item.name;
      prod.categoryName = item.categoryName;
      newproducts.push(prod);
    });
    return this.http.put(
      `http://localhost:8090/api/Shop_sProduct`,
      newproducts
    );
  }

  addRemoveProductToUser(userProduct: ShopProduct): any {
    const index: number = this.user_products.indexOf(userProduct);

    if (index !== -1) {
      this.user_products.splice(index, 1);
      console.log("order items delete", this.user_products);
    } else {
      this.user_products.push(userProduct);
      console.log("order items add", this.user_products);
    }
    console.log("item", userProduct);
  }

  setShopCode(code: number) {
    this.shop_code = code;
  }

  resetShopProductList(): any {
    this.user_products = [];
  }

  sendOrtderToShop(products: any) {
    console.log("i'm need to be implemented", products);
    // public code: number;
    // public date: Date;
    // public deadline: Time;
    // public takeTime: Time;
    // public ready: boolean;
    // public status: boolean;
    let order1: Order;
    order1 = new Order({
      shopCode: products[0].shopCode,
      date: Date.now
    });
  }

  addSHopProduct(shopProduct: ShopProduct): any {
    return this.http.post(
      `http://localhost:8090/api/Shop_sProduct`,
      shopProduct
    );
  }
}
