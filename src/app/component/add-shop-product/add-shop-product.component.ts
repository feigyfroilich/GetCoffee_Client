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
    const ProductLength = this.productList.length;
    const ShopId = this.userService.getShopId();
    const ts = this.prepareTime;
    if (isnew) {
      // need to check the correct category
      p = new Product({
        // code: ProductLength,
        name: this.productNewName,
        CategoryCode: this.childCcodeC
      });
      console.log(isnew, ProductLength, p);
      this.productS.addNewProductDB(p).subscribe(res => {
        this.productS.getProductsDB().subscribe(c => {
          prod = c.find(x => x.code === this.productCcode);
          console.log("fdg", c, prod);
          // tslint:disable-next-line: max-line-length
          sh = new ShopProduct({
            productCode: ProductLength + 1,
            shopCode: ShopId,
            status: true,
            name: prod.name,
            categoryName: prod.categoryCode,
            price: this.price,
            duration: this.prepareTime
          });
          this.shopProducrService.addSHopProduct(sh);
        });
      });
    } else {
      p = new Product({
        // code: ProductLength,
        name: prod.name,
        CategoryCode: prod.categoryCode
      });
      // tslint:disable-next-line: max-line-length
      sh = new ShopProduct({
        productCode: ProductLength,
        shopCode: ShopId,
        status: true,
        name: prod.name,
        categoryName: prod.categoryCode,
        price: this.price,
        duration: ts
      });
    }

    console.log(isnew, ProductLength, p, this.productList, sh);
  }
}
