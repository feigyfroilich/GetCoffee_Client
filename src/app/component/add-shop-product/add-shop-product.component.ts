import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/classes/category';
import { Product } from 'src/classes/product';
import { ProductService } from 'src/app/services/product.service';
import { ShopProduct } from 'src/classes/shopProduct';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-shop-product',
  templateUrl: './add-shop-product.component.html',
  styleUrls: ['./add-shop-product.component.scss']
})
export class AddShopProductComponent implements OnInit {
  parentCategories: Array<Category> = [];
  childCategories: Array<Category> = [];
  productList: Array<Product> = [];
  constructor(public categoryService: CategoryService, public productS: ProductService, public userService: UserService) { }
  chosen: number;
  selectedNav: number;
  prepareTime: number;
  // parent_code:number;
  // showchilds :boolean = this.childCategories.some(function(obj){return obj.parentCode === child_code})
  // a.some(function(el){ return el.id === 2});
  childCcodeP: number;
  productNewName: string;
  childCcodeC: number;

  productCcode: number;
  price: number;
  ngOnInit() {
    this.categoryService.getAllCategories();
    this.parentCategories = this.categoryService.getAllParentCategory();
    this.childCategories = this.categoryService.getAllChildeCategory();
    this.productS.getProductsDB().subscribe(product => {
      this.productList = product;
    });
  }
  public addProduct(isnew: boolean): any {
    let p: Product;
    let sh: ShopProduct;
    let prod = this.productList.find(x => x.code === this.productCcode);
    const currentProductLength = this.productList.length + 1
    if (isnew) {

      // need to check the correct category
      p = new Product({ code: currentProductLength, name: this.productNewName, CategoryCode: this.childCcodeC });
      console.log(isnew, currentProductLength, p);
      this.productS.addNewProductDB(p);
      this.productS.getProductsDB().subscribe(c => {
        prod = c.find(x => x.code === this.productCcode);
        console.log('fdg', c, prod)
        let shopId = 3
        // tslint:disable-next-line: max-line-length
        sh = new ShopProduct({ productCode: currentProductLength + 1, shopCode: shopId, status: true, name: prod.name, categoryName: prod.categoryCode, price: this.price, duration: this.prepareTime });
        console.log(isnew, currentProductLength, p, this.productList, sh);
      });
    } else {
      p = new Product({ code: currentProductLength, name: prod.name, CategoryCode: prod.categoryCode });
      let shopId = 3
      // tslint:disable-next-line: max-line-length
      sh = new ShopProduct({ productCode: currentProductLength + 1, shopCode: shopId, status: true, name: prod.name, categoryName: prod.categoryCode, price: this.price, duration: this.prepareTime });
      console.log(isnew, currentProductLength, p, this.productList, sh);
    }

    // const shopId = this.userService.getShopId();
    const shopId = 3
    // tslint:disable-next-line: max-line-length
    sh = new ShopProduct({ productCode: currentProductLength + 1, shopCode: shopId, status: true, name: prod.name, categoryName: prod.categoryCode, price: this.price, duration: this.prepareTime });
    console.log(isnew, currentProductLength, p, this.productList, sh);


  }


}
