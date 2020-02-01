import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/classes/shop';
import { UserService } from 'src/app/services/user.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.scss']
})
export class NewShopComponent implements OnInit {
  shopName;
  shipment = false;
  accountNumber: string;
  location: string;
  constructor(private userService: UserService, private shopService: ShopService) { }

  ngOnInit() {

    this.shopName = '';
  }
  addShop(): any {
    let shop: Shop;
    // tslint:disable-next-line: max-line-length
    shop = new Shop({ name: this.shopName, code: this.userService.getShopId(), location: this.location, shipment: this.shipment, accountNumber: this.accountNumber, status: true });
    console.log('shop name', this.shopName);
    this.shopService.addShopToDB(shop);
  }
  // public code: number;
  // public name: string;
  // public location: string;
  // public loginCode: string ;
  // public shipment: boolean;
  // public status: boolean = null ;
  // public ran: number = null ;
  // public numOfCustomer: number = null;
  // public accountNumber: number = null ;
}
