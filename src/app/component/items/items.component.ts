import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Shop } from 'src/classes/shop';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ShopsProductService } from 'src/app/services/shops-product.service';
import { Product } from 'src/classes/product';
import { ShopProduct } from 'src/classes/shopProduct';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  shopCode: number;
  products: ShopProduct[] ;
  user_product: Array< ShopProduct> = [];
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
    console.log('user_product',this.user_product)
    console.log('product',this.product)
    const index: number = this.user_product.indexOf(this.product);
    console.log('index',index)
    if (index !== -1) {
      this.user_product.splice(index, 1);
    } else {
      this.user_product.push(this.product);
    }
    console.log('item', this.user_product);
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
