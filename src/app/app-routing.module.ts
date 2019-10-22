import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/components/login/login.component';
import { ShowShopsComponent } from 'src/components/show-shops/show-shops.component';
import { UserComponent } from 'src/components/user/user.component';


const routes: Routes = [{
  path: '',
  component: ShowShopsComponent
},
{ path: 'user', component: UserComponent },
{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

