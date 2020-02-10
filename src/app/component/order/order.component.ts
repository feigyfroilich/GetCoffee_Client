import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopProductViewComponent } from '../shop-product-view/shop-product-view.component';
import { ShopProduct } from 'src/app/classes/shopProduct';
import { ShopsProductService } from 'src/app/services/shops-product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  userProduct: Array<ShopProduct>;
  o:number;
  duration:number;
  public now: Date = new Date();
  constructor(private route: ActivatedRoute, private shopsProductService: ShopsProductService) {
    this.userProduct = this.shopsProductService.user_products;
    console.log('products in order', this.userProduct);
    this.now = new Date();
    // this.now.setMinutes(this.now.getMinutes() + 10);
    // this.now.setMinutes(this.now.getMinutes()+10)
    const max = this.userProduct.reduce((prev, current) => (prev.duration > current.duration) ? prev : current)
    const max_min = +max.duration.toLocaleString().split(':')[0]
    this.now.setMinutes(this.now.getMinutes() + max_min);
    console.log('c', max_min);
  }

  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions

  }
  remove(productCode: any): any {
    console.log('from remove', productCode);
  }
  sendToShop():any{
    this.shopsProductService.sendOrtderToShop();
  }
}
