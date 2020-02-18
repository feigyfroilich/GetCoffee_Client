import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShopProductViewComponent } from "../shop-product-view/shop-product-view.component";
import { ShopProduct } from "src/app/classes/shopProduct";
import { ShopsProductService } from "src/app/services/shops-product.service";
import { OrderService } from "src/app/services/order.service";
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material";
import { AmazingTimePickerService } from "amazing-time-picker";
import * as moment from "moment";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

// export class InputErrorStateMatcherExample {
//   emailFormControl = new FormControl('', [
//     Validators.required,
//     Validators.email,
//   ]);

//   matcher = new MyErrorStateMatcher();
// }
export class OrderComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.shopsProductService.orderCode = null;
  }
  now: Date;
  userProduct: Array<ShopProduct>;
  email: string;
  selectedTime = moment(new Date()).format("HH:mm");
  constructor(
    private route: ActivatedRoute,
    private atp: AmazingTimePickerService,
    public shopsProductService: ShopsProductService
  ) {}
  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    // o: number;
    // duration: number;
    this.userProduct = this.shopsProductService.userProducts;
    console.log("products in order", this.userProduct);
    const max = this.userProduct.reduce((prev, current) =>
      prev.duration > current.duration ? prev : current
    );
    console.log("max", max);

    const maxMin = +max.duration.toLocaleString().split(":")[0];
    // this.now.setMinutes(this.now.getMinutes() + maxMin);
    // console.log("c", maxMin);
  }
  remove(product: any): any {
    this.shopsProductService.addRemoveProductToUser(product);
  }
  sendToShop(): any {
    this.shopsProductService.sendOrtderToShop(
      this.shopsProductService.userProducts,
      this.email,
      this.selectedTime
    );
  }

  open() {
    const amazingTimePicker = this.atp.open({
      time: this.selectedTime,
      theme: "dark",
      arrowStyle: {
        background: "orange",
        color: "white"
      },
      locale: "he",
      preference: {
        labels: {
          ok: "בחר",
          cancel: "חזור"
        }
      }
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.selectedTime = time;
      console.log(time);
    });
  }
}
