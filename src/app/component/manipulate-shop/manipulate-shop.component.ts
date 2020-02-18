import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-manipulate-shop",
  templateUrl: "./manipulate-shop.component.html",
  styleUrls: ["./manipulate-shop.component.scss"]
})
export class ManipulateshopComponent implements OnInit {
  showFiller = false;
  showMainButton = true;
  constructor(private route: Router) {}
  ngOnInit() {}
  print() {
    console.log("clicked");
  }
  print1() {
    console.log("clicked2");
  }
  navi(pageName: string) {
    this.route.navigate([pageName]);
  }
}
