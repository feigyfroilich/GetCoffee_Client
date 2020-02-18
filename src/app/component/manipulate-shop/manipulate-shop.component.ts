import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import { interval } from 'rxjs';

@Component({
  selector: "app-manipulate-shop",
  templateUrl: "./manipulate-shop.component.html",
  styleUrls: ["./manipulate-shop.component.scss"]
})
export class ManipulateshopComponent implements OnInit {
  showFiller = false;
  showMainButton = true;
  showReminder = true;
  Orderamount: number;
  constructor(private route: Router, private _snackBar: MatSnackBar,
    private userService: UserService,
    private orderService: OrderService) { }
  ngOnInit() {

    this.orderService.getOrdersOfShop(this.userService.getShopId()).subscribe(shop => {
      this.Orderamount = shop.length;
    }
    )
    interval(20000).subscribe(() => {
      // this.doSomething();
      // console.log('i am here  j');
      // // this.showReminder = true;
      this.orderService.getOrdersOfShop(this.userService.getShopId()).subscribe(shop => {
        if (shop.length > this.Orderamount) {
          console.log('Orderamount', this.Orderamount, 'length', shop.length);
          this.Orderamount = shop.length;
          this.openSnackBar(
            'יש לך הזמנה חדשה',
            'הבנתי'
          );
        }
      }
      );
    });
  }
  print() {
    console.log("clicked");
  }
  print1() {
    console.log("clicked2");
  }
  navi(pageName: string) {
    this.route.navigate([pageName]);
  }
  doSomething(): any {
    console.log('wertyuio');
    // let shopCode = this.userService.getShopId();
    // this.orderService.getOrdersOfShop(shopCode).subscribe(order => {
    //   this.Orderamount = order.length;
    // });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
}
