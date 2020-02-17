import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Shop } from 'src/app/classes/shop';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ShopsProductService } from 'src/app/services/shops-product.service';
import { Product } from 'src/app/classes/product';
import { ShopProduct } from 'src/app/classes/shopProduct';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopService } from 'src/app/services/shop.service';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  shopCode: number;
  products: ShopProduct[];
  time: any;
  latlong: Array<number> = [];
  shops: Array<Shop> = [];
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  // tslint:disable-next-line: variable-name
  user_product: Array<ShopProduct> = [];
  product: ShopProduct;
  chosen: any;
  shopsInCircle: Array<any> = [];
  shopItemsNameDict: { [id: number]: Array<object> } = {};
  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private Shops_ProductService: ShopsProductService, private shopService: ShopService) {
  }
  ngOnInit() {
    this.shopsInCircle = this.shopService.getReadyShopFromCircle();
    console.log('shopsInCircle', this.shopsInCircle);
    this.shopCode = +this.route.snapshot.paramMap.get('chosenShop');
    if (this.shopCode != null) {
      console.log('shops_number: ', this.shopCode);
      this.Shops_ProductService.getAllShopProducts(this.shopCode).subscribe(res => {
        this.products = res;
      });
    } else {
      this.latlong = this.shopService.getLatLong();
      // this.shops =  get shop in the area of lat lang...
      // this.products = get item of fit shops...
    }
    // meantime:
    this.Shops_ProductService.getAllProducts().subscribe(res => {
      this.products = res;
      this.products.forEach(product => {
        if (! this.shopItemsNameDict[product.shopCode]) {
          this.shopItemsNameDict[product.shopCode] = [];
        }
        // console.log('this.shopsInCircle[0]', this.shopsInCircle[0]);
        this.chosen = this.shopsInCircle[0].code;
        this.shopItemsNameDict[product.shopCode].push(product);
        console.log('array of shop product');
      });
    });
    this.shopService.getAllShops().subscribe(res => {
      this.shops  = res;
    });
  }
  // tslint:disable-next-line: variable-name
  add_to_item(item_id: number) {

    this.products.forEach(element => {
      if (element.productCode === item_id) {
        this.product = element;
      }
    });
    this.Shops_ProductService.addRemoveProductToUser(this.product);
  }
  order(): any {
    this.router.navigate(['/order']);
  }
  click(): any {
    console.log(this.chosen);
  }
}
