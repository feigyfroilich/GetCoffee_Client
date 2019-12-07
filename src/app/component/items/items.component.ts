import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Shop } from 'src/classes/shop';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  shopListP: string;
  constructor(private route: ActivatedRoute, private router: Router) {
   }
  ngOnInit() {
    this.shopListP = this.route.snapshot.paramMap.get('chosenShop');
    console.log('shops: ', this.shopListP);
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
