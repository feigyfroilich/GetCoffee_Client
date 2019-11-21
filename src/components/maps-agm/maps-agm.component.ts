import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';
import {} from 'googlemaps';
import PlaceResult = google.maps.places.PlaceResult;

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

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');

    this.zoom = 10;
    this.latitude = 52.520008;
    this.longitude = 13.404954;

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

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }
}

