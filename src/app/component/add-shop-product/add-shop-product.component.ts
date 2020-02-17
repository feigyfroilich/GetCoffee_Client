import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { Category } from "src/app/classes/category";
import { Product } from "src/app/classes/product";
import { ProductService } from "src/app/services/product.service";
import { ShopProduct } from "src/app/classes/shopProduct";
import { UserService } from "src/app/services/user.service";
import { ShopsProductService } from "src/app/services/shops-product.service";
// import { TimeSpan } from 'src/app/classes/time-span';

@Component({
  selector: "app-add-shop-product",
  templateUrl: "./add-shop-product.component.html",
  styleUrls: ["./add-shop-product.component.scss"]
})
export class AddShopProductComponent implements OnInit {
  parentCategories: Array<Category> = [];
  childCategories: Array<Category> = [];
  productList: Array<Product> = [];
  // tslint:disable-next-line: max-line-length
  constructor(
    public categoryService: CategoryService,
    public productS: ProductService,
    public userService: UserService,
    private shopProducrService: ShopsProductService
  ) {}
  chosen: number;
  selectedNav: number;
  prepareTime: number;
  // parent_code:number;
  // showchilds :boolean = this.childCategories.some(function(obj){return obj.parentCode === child_code})
  // a.some(function(el){ return el.id === 2});
  childCcodeP: number;
  productNewName: string;
  childCcodeC: number;
  save: any;
  productCcode: number;
  price: number;
  ngOnInit() {
    this.categoryService.getAllCategories();
    this.parentCategories = this.categoryService.categoryList;
    this.productS.getProductsDB().subscribe(product => {
      this.productList = product;
    });
  }
  public addProduct(isnew: boolean): any {
    let p: Product;
    let sh: ShopProduct;
    let prod: any;
    const ProductLength = this.productList.length;
    const ShopId = this.userService.getShopId();
    const ts = this.prepareTime;
    if (isnew) {
      // need to check the correct category
      p = new Product({
        code: 0,
        name: this.productNewName,
        CategoryCode: this.childCcodeC
      });

      this.productS.addNewProductDB(p).subscribe((proRes: any) => {
        // tslint:disable-next-line: max-line-length
        sh = new ShopProduct({
          productCode: proRes.code,
          shopCode: ShopId,
          status: true,
          name: proRes.name,
          categoryName: proRes.categoryCode,
          price: this.price,
          duration: this.prepareTime
        });
        this.shopProducrService.addSHopProduct(sh).subscribe(() => {});
      });
    } else {
      let prod = this.productList.find(x => x.code === this.productCcode);
      p = new Product({
        // code: prod.code,
        name: prod.name,
        CategoryCode: prod.categoryCode
      });
      // tslint:disable-next-line: max-line-length
      sh = new ShopProduct({
        productCode: prod.code,
        shopCode: ShopId,
        status: true,
        name: prod.name,
        categoryName: prod.categoryCode,
        price: this.price,
        duration: ts
      });
      this.shopProducrService.addSHopProduct(sh).subscribe(() => {});
    }

  }
}
