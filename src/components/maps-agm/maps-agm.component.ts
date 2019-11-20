import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';
import {} from 'googlemaps';
import { FormControl } from '@angular/forms';

import { NgZone, } from '@angular/core';

import {} from 'googlemaps';
@Component({
  selector: 'app-maps-agm',
  templateUrl: './maps-agm.component.html',
  styleUrls: ['./maps-agm.component.scss']
})
export class MapsAgmComponent implements OnInit, AfterViewInit {

  @ViewChild('search', {static: true}) searchElementRef: ElementRef;

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  public latitude: number = 51.678418;
  public longitude: number = 7.809007;
  public fillInAddress: '';
  public searchControl: FormControl;
  public zoom: number = 12;
  public f_addr: string;
  public city: string;
  public country: string;
  public scountry: string;
  public postCode: string;
  public estab: string;
  public state: string;


  ngAfterViewInit(): void {
    // this.findAdress()
  }


    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {  }
    ngOnInit() {
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

}
