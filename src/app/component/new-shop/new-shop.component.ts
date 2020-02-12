import { Component, OnInit } from "@angular/core";
import { Shop } from "src/app/classes/shop";
import { UserService } from "src/app/services/user.service";
import { ShopService } from "src/app/services/shop.service";
import { User } from "src/app/classes/user";
import {
  Appearance,
  Location
} from "@angular-material-extensions/google-maps-autocomplete";
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: "app-new-shop",
  templateUrl: "./new-shop.component.html",
  styleUrls: ["./new-shop.component.scss"]
})
export class NewShopComponent implements OnInit {
  shopName;
  shipment = false;
  accountNumber: string;
  location: string;
  public appearance = Appearance;
  public zoom: number = 12;
  public latitude: number = 52.520008;
  public longitude: number = 13.404954;
  constructor(
    private userService: UserService,
    private shopService: ShopService
  ) {}

  ngOnInit() {
    this.shopName = "";
  }
  addShop(): any {
    let shop: Shop;
    // tslint:disable-next-line: max-line-length
    shop = new Shop({
      name: this.shopName,
      // code: this.userService.getShopId(),
      location: this.location,
      shipment: this.shipment,
      accountNumber: this.accountNumber,
      status: true,
      latitude: this.latitude,
      longitude: this.longitude,
      categoryCode: 4,
      loginCode: this.userService.getShopId()
    });
    console.log("shop name", this.shopName);
    this.shopService.addShopToDB(shop).subscribe(x => {
      let u: User;
      u = this.userService.getCurrentUser();
      u.shopId = x.code;
      console.log("user", u);
      this.userService.addNewUserDB(u).subscribe(res => {
        console.log("new shop user", res);
      });
    });
  }

  onOriginLocationSelected(location: Location) {
    console.log("onLocationSelected: ", location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log("onAutocompleteSelected: ", result);
    this.location = result.name;
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
