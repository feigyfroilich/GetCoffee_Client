import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopProductViewComponent } from '../shop-product-view/shop-product-view.component';
import { ShopProduct } from 'src/app/classes/shopProduct';
import { ShopsProductService } from 'src/app/services/shops-product.service';
import { OrderService } from 'src/app/services/order.service';
import { FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
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
export class OrderComponent implements OnInit {
  now: Date;
  userProduct: Array<ShopProduct>;
  orderCode = 0;
  email: string;
  constructor(private route: ActivatedRoute, private shopsProductService: ShopsProductService) { }
  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    // o: number;
    // duration: number;
    this.now = new Date();
    this.userProduct = this.shopsProductService.userProducts;
    console.log('products in order', this.userProduct);
    this.now = new Date();
    const max = this.userProduct.reduce((prev, current) => (prev.duration > current.duration) ? prev : current);
    const maxMin = +max.duration.toLocaleString().split(':')[0];
    this.now.setMinutes(this.now.getMinutes() + maxMin);
    console.log('c', maxMin);
  }
  remove(product: any): any {
    this.shopsProductService.addRemoveProductToUser(product);
  }
  sendToShop(): any {
    this.orderCode = this.shopsProductService.sendOrtderToShop(this.shopsProductService.userProducts, this.email);
  }
}






