import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from "@agm/core";
import { MatSnackBar } from '@angular/material';
import { interval } from 'rxjs';
import { UserService } from './services/user.service';
import { ShopsProductService } from './services/shops-product.service';
import { OrderService } from './services/order.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "getCoffeeClient";
  showReminder = false;
  Orderamount: number;
  constructor(private _snackBar: MatSnackBar, private userService: UserService, private orderService: OrderService) {}

  ngOnInit() {
    // this.openSnackBar(
    //   "יש לך הזמנה ממתינה, בעוד רבע שעה הלקוח מגיע תיזהר לא לפספס לקוחות זה הכסף שלך",
    //   "הבנתי"
    // );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }

}
