import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowShopsComponent } from 'src/components/show-shops/show-shops.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';


@NgModule({
  declarations: [
    AppComponent,
    ShowShopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    CdkAccordionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
