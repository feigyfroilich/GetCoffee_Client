import { Component, OnInit } from "@angular/core";
import { MapsAPILoader } from "@agm/core";
import { MatSnackBar } from "@angular/material";

// import { } from 'googlemaps';
// import { } from '@types/googlemaps';
// import { google } from '@agm/core/services/google-maps-types';
// import { ViewChild, ElementRef, NgZone, } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import {} from 'googlemaps';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "getCoffeeClient";
  showReminder = false;
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.openSnackBar("יש לך הזמנה ממתינה", "הבנתי");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
}
