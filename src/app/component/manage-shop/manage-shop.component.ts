import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { UserService } from 'src/app/services/user.service';
import { Shop } from 'src/classes/shop';

@Component({
  selector: 'app-manage-shop',
  templateUrl: './manage-shop.component.html',
  styleUrls: ['./manage-shop.component.scss']
})
export class ManageShopComponent implements OnInit {

  constructor(private shopService: ShopService, private userService: UserService) { }
  shopid: number;
  shop: Shop;
  ngOnInit() {
    this.shopid = this.userService.getShopId();
    this.shopService.getShopById(this.shopid).subscribe(shop => {
      this.shop = shop;
    });
    console.log(this.shop);
  }

}
