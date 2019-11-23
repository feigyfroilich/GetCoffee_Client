import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowShopsComponent } from 'src/components/show-shops/show-shops.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';

import {} from 'googlemaps';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';


import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';
import { UserComponent } from '../components/user/user.component';
import { LoginComponent } from '../components/login/login.component';
import { AgmCoreModule } from '@agm/core';
import { MapsAgmComponent } from 'src/components/maps-agm/maps-agm.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowShopsComponent,
    LoginComponent,
    UserComponent,
    MapsAgmComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    CustomMaterialModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'key',
      libraries: ['places']

    }),
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot()

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
