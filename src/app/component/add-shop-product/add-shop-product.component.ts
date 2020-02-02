import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/classes/category';

@Component({
  selector: 'app-add-shop-product',
  templateUrl: './add-shop-product.component.html',
  styleUrls: ['./add-shop-product.component.scss']
})
export class AddShopProductComponent implements OnInit {
  parentCategories: Array<Category> = [];
  childCategories: Array<Category> = [];

  constructor(private categoryService: CategoryService) { }


  ngOnInit() {
    this.categoryService.getAllCategories();
    this.parentCategories = this.categoryService.getAllParentCategory();
    this.childCategories = this.categoryService.getAllChildeCategory();
  }


}
