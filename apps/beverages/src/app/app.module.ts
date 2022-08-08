import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeveragesComponent } from './beverages/beverages.component';
import { BeveragesListComponent } from './beverages/beverages-list/beverages-list.component';
import { BeverageDetailComponent } from './beverages/beverage-detail/beverage-detail.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@beverages/material';
import { HttpClientModule } from '@angular/common/http';
import { CoreDataModule } from '@beverages/core-data';
import { CoreStateModule } from '@beverages/core-state';
import { UiLoginModule } from '@beverages/ui-login';
import { EnvironmentModule } from '@beverages/environment';
import { RoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BeveragesComponent,
    BeveragesListComponent,
    BeverageDetailComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RoutingModule,
    CoreDataModule,
    CoreStateModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
