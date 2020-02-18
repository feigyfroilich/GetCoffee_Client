import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import {
  Location,
  Appearance
} from "@angular-material-extensions/google-maps-autocomplete";
import {} from "googlemaps";
import PlaceResult = google.maps.places.PlaceResult;
import { ActivatedRoute, Router } from "@angular/router";
import { ShopService } from "src/app/services/shop.service";

@Component({
  selector: "app-maps-agm",
  templateUrl: "./maps-agm.component.html",
  styleUrls: ["./maps-agm.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class MapsAgmComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.setCurrentPosition();
  }
  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
  public origin;
  public destination;
  polyline = [
    {
      latitude: 39.8282,
      longitude: -98.5795,
      speed: 50
    },
    {
      latitude: 37.772,
      longitude: -122.214,
      speed: 20
    },
    {
      latitude: 21.291,
      longitude: -157.821,
      speed: 50
    },
    {
      latitude: -18.142,
      longitude: 178.431,
      speed: 20
    },
    {
      latitude: -27.467,
      longitude: 153.027,
      speed: 55
    }
  ];
  public sss = [
    {
      lat: 32.0918211,
      lng: 34.84113320000006
    }
  ];
  public shops = [
    // { lat: 32.0926219, lng: 34.82884719999993, name: "מנחם בגין" }
  ];
  shopsInCircle: { lat: number; lng: number; name: string }[] = [];
  country = "il";
  googleShops = [];
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private shopService: ShopService
  ) {}

  ngOnInit() {
    // this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');
    // this.shops.forEach((s, i) => {
    //   this.googleShops.push(new google.maps.LatLng(s.lat, s.lng));
    // })
    this.shopService.getAllShops().subscribe(shops => {
      this.shops = shops;
    });
    this.zoom = 10;
    this.latitude = 52.520008;
    this.longitude = 13.404954;
    this.getDirection();
    this.shopsInCircle = [];
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log("---******pos", position);

        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        // this.zoom = 30;
      });
    }
  }

  onAddressSelected(result: PlaceResult) {
    console.log("onAddressSelected: ", result);
  }

  onDestinationLocationSelected(location: Location) {
    console.log("onLocationSelected: ", location);
    const latitude = location.latitude;
    const longitude = location.longitude;
    this.latitude = latitude;
    this.longitude = longitude;
    this.destination = { lat: latitude, lng: longitude };
    if (this.origin) {
      this.getShopsInCircle();
    }
  }

  onOriginLocationSelected(location: Location) {
    console.log("onLocationSelected: ", location);
    const latitude = location.latitude;
    const longitude = location.longitude;
    this.latitude = latitude;
    this.longitude = longitude;
    this.origin = { lat: latitude, lng: longitude };
  }
  onAutocompleteSelected(result: PlaceResult) {
    console.log("onAutocompleteSelected: ", result);
  }
  selectItems(): any {
    this.shopService.saveLatLong(this.latitude, this.longitude);
    this.shopService.shopsinCircle = this.shopsInCircle;
    // navigate to ItemsComponent
    this.router.navigate(["/newOrder"]);
  }

  getDirection() {
    // this.origin = { lat: 24.799448, lng: 120.979021 };
    // this.destination = { lat: 24.799524, lng: 120.975017 };
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }

  getShopsInCircle() {
    let resShops = [];
    this.shopsInCircle = this.shops.filter(shop => {
      let distance = this.calculateDistance(this.destination, shop);
      console.log("distance", distance);

      if (distance <= 0.3) {
        return true;
      }
      return false;
    });
  }

  // calculate the distances from point1 to point2
  calculateDistance(point1, point2): any {
    const p1 = new google.maps.LatLng(point1.lat, point1.lng);
    const p2 = new google.maps.LatLng(point2.latitude, point2.longitude);
    return (
      google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000
    ).toFixed(2);
  }
}
