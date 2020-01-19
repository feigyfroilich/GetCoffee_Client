import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
// import {Component} from '@angular/core';

// /**
//  * @title Autosize sidenav
//  */
// @Component({
//   selector: 'sidenav-autosize-example',
//   templateUrl: 'sidenav-autosize-example.html',
//   styleUrls: ['sidenav-autosize-example.css'],
// })
// export class SidenavAutosizeExample {
//   showFiller = false;
// }
@Component({
  selector: 'app-manipulate-shop',
  templateUrl: './manipulate-shop.component.html',
  styleUrls: ['./manipulate-shop.component.scss']
})
export class ManipulateshopComponent implements OnInit {
  showFiller = false;
  constructor(private route: Router) { }
  ngOnInit() {
  }
  print() {
    console.log('clicked');


  }
  print1() {
    console.log('clicked2');
  }
  navi(pageName: string) {
    this.route.navigate([pageName]);

  }
}
