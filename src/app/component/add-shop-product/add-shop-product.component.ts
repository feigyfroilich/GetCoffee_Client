import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/classes/category';
import { Product } from 'src/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-shop-product',
  templateUrl: './add-shop-product.component.html',
  styleUrls: ['./add-shop-product.component.scss']
})
export class AddShopProductComponent implements OnInit {
  parentCategories: Array<Category> = [];
  childCategories: Array<Category> = [];
  productList: Array<Product> =[];
  constructor(private categoryService: CategoryService, private productService: ProductService) { }
  chosen: number;
  selectedNav: number;
  ngOnInit() {
    this.categoryService.getAllCategories();
    this.parentCategories = this.categoryService.getAllParentCategory();
    this.childCategories = this.categoryService.getAllChildeCategory();
    this.productService.getAllProduct();
    this.productList = this.productService.productList1;
    console.log('product list', this.productList);
  }


}
