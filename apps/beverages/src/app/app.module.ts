import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeveragesComponent } from './beverages/beverages.component';
import { BeveragesListComponent } from './beverages/beverages-list/beverages-list.component';
import { BeverageDetailComponent } from './beverages/beverage-detail/beverage-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    BeveragesComponent,
    BeveragesListComponent,
    BeverageDetailComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
