import { Component, OnInit } from '@angular/core';
import { concatMap, delay, repeat } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-get-coffee-info',
  templateUrl: './get-coffee-info.component.html',
  styleUrls: ['./get-coffee-info.component.scss']
})
export class GetCoffeeInfoComponent implements OnInit {
  src$: any;
  activeImage = 'assets/every.jpg';
  impageList = ['assets/every.jpg', 'assets/balck back.jpg'];
  constructor() { }


  ngOnInit() {
    this.setActiveImage(this.impageList);
  }

  setActiveImage(promotions) {
    for (let i = 0; i <= promotions.length - 1; i++) {
      setTimeout(() => {
        // SET SRC TO FILE FROM PROMOTIONS
        this.activeImage = promotions[i];
    }, 3000);

    }
  }

}
