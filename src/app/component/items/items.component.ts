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
  products: ShopProduct[];
  constructor(private route: ActivatedRoute, private router: Router, private ShopsProducttService: ShopsProductService) {
   }
  ngOnInit() {
    this.shopCode = +this.route.snapshot.paramMap.get('chosenShop');
    console.log('shops_number: ', this.shopCode);
    this.ShopsProducttService.getAllShopProducts(this.shopCode).subscribe(res => {
        this.products = res;
    });
    }

  }



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
