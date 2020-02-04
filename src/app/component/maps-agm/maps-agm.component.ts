
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location, Appearance } from '@angular-material-extensions/google-maps-autocomplete';
import { } from 'googlemaps';
import PlaceResult = google.maps.places.PlaceResult;
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-maps-agm',
  templateUrl: './maps-agm.component.html',
  styleUrls: ['./maps-agm.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MapsAgmComponent implements OnInit {

  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
  public origin;
  public destination;


  constructor(public route: ActivatedRoute, private router: Router, private shopService: ShopService) {
  }

  ngOnInit() {
    // this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');

    this.zoom = 10;
    this.latitude = 52.520008;
    this.longitude = 13.404954;
    this.getDirection();
    this.setCurrentPosition();

  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onAddressSelected(result: PlaceResult) {
    console.log('onAddressSelected: ', result);
  }

  onLocationSelected(location: Location, isTarget) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
    if (isTarget && this.origin) {
      this.destination = { lat: this.latitude, lng: this.longitude };
    } else {
      this.origin = { lat: this.latitude, lng: this.longitude };
    }
  }
  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }
  selectItems(): any {
    this.shopService.saveLatLong(this.latitude, this.longitude);
    // navigate to ItemsComponent
    this.router.navigate(['/newOrder']);
  }

  getDirection() {
    // this.origin = { lat: 24.799448, lng: 120.979021 };
    // this.destination = { lat: 24.799524, lng: 120.975017 };
   
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }
}
