import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { UserService } from 'src/app/services/user.service';
import { Shop } from 'src/app/classes/shop';

@Component({
  selector: 'app-manage-shop',
  templateUrl: './manage-shop.component.html',
  styleUrls: ['./manage-shop.component.scss']
})
export class ManageShopComponent implements OnInit {
  name: string;
  status: boolean;

  constructor(private shopService: ShopService, private userService: UserService) { }
  shopid: number;
  shop: Shop;

  ngOnInit() {
    this.shopid = this.userService.getShopId();
    this.shopService.getShopById(this.shopid).subscribe(shop => {
      this.shop = shop;
      this.name = this.shop.name;
      this.status = this.shop.status;
    });
    console.log(this.shop);
  }
  saveProducts() {
    this.shop.status = this.status;
    this.shopService.updateShopStatus(this.shop).subscribe(x => { });
  }
}
