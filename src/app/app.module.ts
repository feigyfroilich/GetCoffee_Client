import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowShopsComponent } from 'src/app/component/show-shops/show-shops.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule} from '@angular/material';

import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';
import { AgmCoreModule } from '@agm/core';
import { MapsAgmComponent } from 'src/app/component/maps-agm/maps-agm.component';
import { ItemsComponent } from './component/items/items.component';
import {MatChipsModule} from '@angular/material/chips';
import { ManipulateshopComponent } from './component/manipulate-shop/manipulate-shop.component';
import { ShopProductViewComponent } from './component/shop-product-view/shop-product-view.component';
import { GetCoffeeInfoComponent } from './component/get-coffee-info/get-coffee-info.component';
import { OrderComponent } from './component/order/order.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './component/register/register.component';
import { NewShopComponent } from './component/new-shop/new-shop.component';
import { AgmDirectionModule } from 'agm-direction';
import { MatRadioModule } from '@angular/material';

import { AddShopProductComponent } from './component/add-shop-product/add-shop-product.component';
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
    AddShopProductComponent
  ],
  imports: [
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
    FormsModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmKgf_V56xzc6UgWQWintoSLJjI7Zz27s',
      libraries: ['places'],
      language: 'ar'

    }),
    AgmDirectionModule
    // AgmCoreModule.forRoot()

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
