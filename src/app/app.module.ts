import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShowShopsComponent } from "src/app/component/show-shops/show-shops.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatGoogleMapsAutocompleteModule } from "@angular-material-extensions/google-maps-autocomplete";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTreeModule } from "@angular/material/tree";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from "@angular/material";

import { CustomMaterialModule } from "./core/material.module";
import { FormsModule } from "@angular/forms";
import { UserComponent } from "./component/user/user.component";
import { LoginComponent } from "./component/login/login.component";
import { AgmCoreModule } from "@agm/core";
import { MapsAgmComponent } from "src/app/component/maps-agm/maps-agm.component";
import { ItemsComponent } from "./component/items/items.component";
import { MatChipsModule } from "@angular/material/chips";
import { ManipulateshopComponent } from "./component/manipulate-shop/manipulate-shop.component";
import { ShopProductViewComponent } from "./component/shop-product-view/shop-product-view.component";
import { GetCoffeeInfoComponent } from "./component/get-coffee-info/get-coffee-info.component";
import { OrderComponent } from "./component/order/order.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RegisterComponent } from "./component/register/register.component";
import { NewShopComponent } from "./component/new-shop/new-shop.component";
import { AgmDirectionModule } from "agm-direction";
import { MatRadioModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { AddShopProductComponent } from "./component/add-shop-product/add-shop-product.component";
import { ManageShopComponent } from "./component/manage-shop/manage-shop.component";
import { OrderListComponent } from "./component/order-list/order-list.component";
import { AddCategoryComponent } from "./component/add-category/add-category.component";
import { AmazingTimePickerModule } from "amazing-time-picker";
@NgModule({
  declarations: [
    AppComponent,
    ShowShopsComponent,
    LoginComponent,
    UserComponent,
    MapsAgmComponent,
    ItemsComponent,
    ManipulateshopComponent,
    ShopProductViewComponent,
    GetCoffeeInfoComponent,
    OrderComponent,
    RegisterComponent,
    NewShopComponent,
    AddShopProductComponent,
    ManageShopComponent,
    OrderListComponent,
    AddCategoryComponent
  ],
  imports: [
    MatTreeModule,
    ReactiveFormsModule,
    NgbModule,
    MatRadioModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatChipsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    CustomMaterialModule,
    MatSnackBarModule,
    FormsModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBmKgf_V56xzc6UgWQWintoSLJjI7Zz27s",
      language: "ru-RU",
      libraries: ["places", "geometry"],
      region: "israel"
    }),
    AgmDirectionModule,
    AmazingTimePickerModule
    // AgmCoreModule.forRoot()
  ],
  exports: [
    MatTreeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
