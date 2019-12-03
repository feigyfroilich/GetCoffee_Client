import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  shopListP: any;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.shopListP = params['shopsList'];
    });
  }
}


// constructor(
//   private route: ActivatedRoute,
//   private router: Router
// ) {}
// ngOnInit() {

//   this.route.params
//     // (+) converts string 'id' to a number
//     .switchMap((params: Params) => this.yourProductService.getProductById(+params['id']))
//     .subscribe((product) => this.product = product);
// }
