import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/component/login/login.component';
import { ShowShopsComponent } from 'src/app/component/show-shops/show-shops.component';
import { UserComponent } from 'src/app/component/user/user.component';
import { MapsAgmComponent } from 'src/app/component/maps-agm/maps-agm.component';
import { ItemsComponent } from './component/items/items.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
{path: 'login', component: LoginComponent},
{ path: 'user', component: UserComponent },
{ path: 'maps', component: MapsAgmComponent },
{ path: 'shops', component: ShowShopsComponent},
{ path: 'items', component: ItemsComponent},
{ path: 'items/:chosenShop', component: ItemsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

