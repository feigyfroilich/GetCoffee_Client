import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product } from "src/app/classes/product";
import { HttpClient } from "@angular/common/http";
import { ShopProduct } from "src/app/classes/shopProduct";
import { Order } from "../classes/order";
import { OrderService } from "./order.service";
import { OrderItem } from "../classes/order-item";

@Injectable({
  providedIn: "root"
})
export class ShopsProductService {
  userProducts: Array<ShopProduct> = [];
  allProducts: Array<ShopProduct> = [];
  shopCode: number;
  userProduct: ShopProduct;
  orderItem: OrderItem;
  shopInCircle: Array<any> = [];
  constructor(private http: HttpClient, private orderService: OrderService) {}

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
    const index: number = this.userProducts.indexOf(userProduct);

    if (index !== -1) {
      this.userProducts.splice(index, 1);
      console.log("order items delete", this.userProducts);
    } else {
      this.userProducts.push(userProduct);
      console.log("order items add", this.userProducts);
    }
    console.log("item", userProduct);
  }

  setShopCode(code: number) {
    this.shopCode = code;
  }

  resetShopProductList(): any {
    this.userProducts = [];
  }

  sendOrtderToShop(products: any, email1: string): number {
    const now = Date.now();
    const dateFormat = 0; //require('dateformat');
    const time = 0; //dateFormat(now, 'h:MM:ss');
    const today = now;
    let order1: Order;
    order1 = new Order({
      shopCode: products[0].shopCode,
      date: today,
      deadline: time.toString(),
      ready: false,
      taken: false,
      email: email1
    });
    let orderCode: number;
    console.log("order-products", products);
    this.orderService.postOrderToDB(order1).subscribe(res => {
      orderCode = res;
      products.forEach(x => {
        this.orderItem = new OrderItem({
          Code: 0,
          orderCode: res.code,
          productCode: x.productCode,
          amount: 1
        });
        this.orderService
          .postOrderProductToDB(this.orderItem)
          .subscribe(res1 => {
            console.log("result after adding item to order", res1);
          });
      });
    });
    return orderCode;
  }

  addSHopProduct(shopProduct: ShopProduct): any {
    return this.http.post(
      `http://localhost:8090/api/Shop_sProduct`,
      shopProduct
    );
  }
}
