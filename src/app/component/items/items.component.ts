import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Shop } from 'src/classes/shop';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ShopsProductService } from 'src/app/services/shops-product.service';
import { Product } from 'src/classes/product';
import { ShopProduct } from 'src/classes/shopProduct';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  shopCode: number;
  products: ShopProduct[];
  time: any;
  // tslint:disable-next-line: variable-name
  user_product: Array<ShopProduct> = [];
  product: ShopProduct;
  constructor(private route: ActivatedRoute, private router: Router, private ShopsProducttService: ShopsProductService) {
  }
  ngOnInit() {
    this.shopCode = +this.route.snapshot.paramMap.get('chosenShop');
    console.log('shops_number: ', this.shopCode);
    this.ShopsProducttService.getAllShopProducts(this.shopCode).subscribe(res => {
      this.products = res;
    });
  }
  // tslint:disable-next-line: variable-name
  add_to_item(item_id: number) {

    this.products.forEach(element => {
      if (element.productCode === item_id) {
        this.product = element;
      }
    });
    this.ShopsProducttService.addRemoveProductToUser(this.product);
  }
  order(): any {
    this.router.navigate(['/order']);
    // const params = {
    //   'products': JSON.stringify(this.user_product)
    // };

    // this.router.navigate(['/order', { queryParams: {'pro': JSON.stringify(this.user_product)}}]);
    // [routerLink]="['/order','user_product']"
  }
}


// tslint:disable-next-line: variable-name



// constructor(
//   private route: ActivatedRoute,
//   private router: Router
// ) {}
// ngOnInit() {

//   this.route.params
//     // (+) converts string 'id' to a number
//     .switchMap((params: Params) => this.yourProductService.getProductById(+params['id']))
//     .subscribe((product) => this.product = product);
// }
