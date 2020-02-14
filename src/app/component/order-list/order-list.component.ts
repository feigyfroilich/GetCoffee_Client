import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/classes/order';
import { OrderService } from 'src/app/services/order.service';
import { ShopProduct } from 'src/app/classes/shopProduct';
import { OrderItem } from 'src/app/classes/order-item';
import { ShopsProductService } from 'src/app/services/shops-product.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  shopCode: number;
  ordersList: Array<Order> = [];
  shopsProductList: Array<ShopProduct> = [];
  orderItem: Array<OrderItem> = [];
  numberOfOrders = 0;
  constructor(private userService: UserService, private orderService: OrderService, private shopProductService: ShopsProductService) { }

  ngOnInit() {
    this.shopCode = this.userService.getShopId();
    this.orderService.getOrdersOfShop(this.shopCode).subscribe(res => {
      this.ordersList = res;
      console.log('order list', this.ordersList);
      this.numberOfOrders = this.ordersList.length;
    });
    this.shopProductService.getAllShopProducts(this.shopCode).subscribe(res => {
      this.shopsProductList = res;
      console.log('shop product  list', this.shopsProductList);
    });

  }

}
