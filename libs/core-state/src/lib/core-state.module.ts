import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { CoreDataModule } from '@beverages/core-data';
import { BeverageEffects } from './beverages/beverages.effects';
import { reducers } from '.';

const store_name = 'Beverage Store';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([BeverageEffects]),
    StoreDevtoolsModule.instrument({ name: store_name }),
  ],
  providers: [],
})
export class CoreStateModule {}
