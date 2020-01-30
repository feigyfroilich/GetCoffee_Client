import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from 'src/classes/shop';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from 'src/classes/product';
import { ShopsProductService } from 'src/app/services/shops-product.service';
import { ShopProduct } from 'src/classes/shopProduct';

@Component({
  selector: 'app-shop-product-view',
  templateUrl: './shop-product-view.component.html',
  styleUrls: ['./shop-product-view.component.scss']
})
export class ShopProductViewComponent implements OnInit {
  products: Array<ShopProduct> = [];
  constructor(private shopsProductService: ShopsProductService) { }

  ngOnInit() {
    this.shopsProductService.getAllShopProducts(2).subscribe(res => {
      console.log('products ', res);
      this.products = res;
      this.shopsProductService.resetShopProductList();
    });
  }

  saveProducts() {
    this.shopsProductService.updateShopProducts(this.products).subscribe(res => {});
  }

}
