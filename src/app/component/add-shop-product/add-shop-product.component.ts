import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category,ShopProduct } from 'src/classes/category';
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
  productList: Array<Product> = [];
  constructor(public categoryService: CategoryService, public productS: ProductService) { }
  chosen: number;
  selectedNav: number;
  // parent_code:number;
  // showchilds :boolean = this.childCategories.some(function(obj){return obj.parentCode === child_code})
  // a.some(function(el){ return el.id === 2});
  child_code:number;
  product_new_name:string;
  product_code:number;
  ngOnInit() {
    this.categoryService.getAllCategories();
    this.parentCategories = this.categoryService.getAllParentCategory();
    this.childCategories = this.categoryService.getAllChildeCategory();
    this.productS.getProductsDB().subscribe(product=>{
      this.productList = product;
    })
  }
  // initiateProduct():any{
  //   this.productS.getAllProduct();
  //   this.productList = this.productS.productList1;
  //   // debugger
  //   console.log('product list', this.productList);
  // }
public addProduct(isnew: boolean):any{
  let p:Product;
  let sp:ShopProduct;
if (isnew){
  let current_length = this.parentCategories.length + this.childCategories.length;
  // need to check the correct category
  p = new Product({code:current_length + 1,name:this.product_new_name,parentCode:this.child_code});
  console.log(isnew,current_length,p);
}
}

}
