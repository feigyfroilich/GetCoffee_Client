import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/component/login/login.component';
import { ShowShopsComponent } from 'src/app/component/show-shops/show-shops.component';
import { UserComponent } from 'src/app/component/user/user.component';
import { MapsAgmComponent } from 'src/app/component/maps-agm/maps-agm.component';
import { ItemsComponent } from './component/items/items.component';
import { ManipulateshopComponent } from './component/manipulate-shop/manipulate-shop.component';
import { ShopProductViewComponent } from './component/shop-product-view/shop-product-view.component';
import { GetCoffeeInfoComponent } from './component/get-coffee-info/get-coffee-info.component';
import { OrderComponent } from './component/order/order.component';
import { RegisterComponent } from './component/register/register.component';
import { NewShopComponent } from './component/new-shop/new-shop.component';
import { AddShopProductComponent } from './component/add-shop-product/add-shop-product.component';
import { ManageShopComponent } from './component/manage-shop/manage-shop.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: GetCoffeeInfoComponent },
  { path: 'user', component: UserComponent },
  { path: 'maps', component: MapsAgmComponent },
  { path: 'shops', component: ShowShopsComponent },
  { path: 'items', component: ShopProductViewComponent },
  { path: 'order', component: OrderComponent },
  { path: 'items/:chosenShop', component: ItemsComponent},
  { path: 'newOrder', component: ItemsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'NewShop', component: NewShopComponent},
  {
    path: 'addShop',
    component: ManipulateshopComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'products', component: ShopProductViewComponent },
      { path: 'addProducts', component: AddShopProductComponent },
      { path: 'manageShop', component: ManageShopComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

