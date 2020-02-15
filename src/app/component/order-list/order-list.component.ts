import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/classes/order';
import { OrderService } from 'src/app/services/order.service';
import { ShopProduct } from 'src/app/classes/shopProduct';
import { OrderItem } from 'src/app/classes/order-item';
import { ShopsProductService } from 'src/app/services/shops-product.service';
import { DatePipe, Time } from '@angular/common';

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
  orderItemDict: { [id: number]: Array<OrderItem> } = {};
  orderItemNameDict: { [id: number]: Array<string> } = {};
  now: string;
  // _datePipe: DatePipe = new DatePipe('es-ES');

  constructor(private userService: UserService, private orderService: OrderService, private shopProductService: ShopsProductService) { }

  ngOnInit() {
    this.now = new Date().getHours() + ':' + new Date().getMinutes() + ':' +  new Date().getSeconds();
    console.log(this.now);
    this.shopCode = this.userService.getShopId();
    this.orderService.getOrdersOfShop(this.shopCode).subscribe(res => {
      this.ordersList = res;
      console.log('order list', this.ordersList);
      this.numberOfOrders = this.ordersList.length;
      this.ordersList.forEach(orderch => {
        if (orderch.ready === true) {
          this.numberOfOrders--;
        }
        // tslint:disable-next-line: max-line-length
        let order_dead = orderch.deadline.getHours() + ':' + orderch.deadline.getMinutes() + ':' +  orderch.deadline.getSeconds();
        console.log('fdghjk',order_dead, this.now);
        if (this.dateCompare(order_dead, this.now ) < 1) {
          console.log(orderch.deadline, 'deadline');
        }
      });
      this.ordersList.forEach(order => {
        this.orderService.getOrderProductOfOrderId(order.code).subscribe(result => {
          this.orderItem.push(result);
          this.orderItemDict[order.code] = result;
          console.log('orderItem', this.orderItem);
          console.log('orderItem dictinary', this.orderItemDict);
        });

      });
      this.shopProductService.getAllShopProducts(this.shopCode).subscribe(res1 => {
        this.shopsProductList = res1;
        console.log('shop product  list', this.shopsProductList);
        this.ordersList.forEach(order1 => {
          this.orderItemDict[order1.code].forEach(item => {
            this.shopsProductList.forEach(product => {
              if (product.productCode === item.productCode) {
                if (!this.orderItemNameDict[order1.code]) {
                  this.orderItemNameDict[order1.code] = [];
                }
                this.orderItemNameDict[order1.code].push(product.name);
                console.log('items of order names', this.orderItemNameDict);
              }
            });
          });
        });
      });

    });

  }
  remove(order: Order) {
    console.log(order);
    let index: number;
    index = this.ordersList.indexOf(order);
    console.log(index, this.ordersList);
    this.ordersList.splice(index, 1);
    console.log(index, this.ordersList);
    this.numberOfOrders--;
    this.orderService.updateOrderAsReady(order).subscribe();
  }
   dateCompare(time1,time2) {
    let t1 = new Date();
    let parts = time1.split(':');
    t1.setHours(parts[0],parts[1],parts[2],0);
    let t2 = new Date();
    parts = time2.split(":");
    t2.setHours(parts[0],parts[1],parts[2],0);

    // returns 1 if greater, -1 if less and 0 if the same
    if (t1.getTime() > t2.getTime()) { return 1; }
    if (t1.getTime() < t2.getTime()) { return -1; }
    return 0;
  }
}
