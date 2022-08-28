import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// Models
import { ValorantModule } from "./components/valorant/valorant.module";
import { AdrenalineModule } from './components/adrenaline/adrenaline.module';
import { PelandoModule } from './components/pelando/pelando.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    // Models
    ValorantModule,
    AdrenalineModule,
    PelandoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
