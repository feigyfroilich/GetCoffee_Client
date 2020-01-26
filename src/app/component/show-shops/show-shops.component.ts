import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from 'src/classes/shop';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {MatChipsModule} from '@angular/material/chips';
import { ThemePalette } from '@angular/material';
import { ShopService } from 'src/app/services/shop.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-shops',
  templateUrl: './show-shops.component.html',
  styleUrls: ['./show-shops.component.scss']
})

export class ShowShopsComponent implements OnInit {
  panelOpenState = false;
  shopsList = null;
  chosenShop: Array<Shop> = [];
  buttonColor: ThemePalette = 'primary';
  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit() {
    this.shopService.getAllShops().subscribe(res => {
      console.log('shops', res);
      this.shopsList = res;

    });
  }

  // share(code: number): any {
  //   this.shopService.getShopById(code).subscribe(res => {
  //     console.log('res ', res);
  //     if (!this.chosenShop.some((item) => item.code === res.code)) {
  //       this.chosenShop.push(res);
  //       console.log('list', this.chosenShop.toString());
  //       this.chosenShop.forEach((item, index) => {
  //         console.log('item', item); // 9, 2, 5
  //         console.log('index', index); // 0, 1, 2
  //       });
  //     }
  //   });
  // }

  share_and_order(code: number): any {
      this.shopService.getShopById(code).subscribe(res => {
          this.router.navigate(['/items', res.code]);
      });
  }




}
