import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BEVERAGE_ENVIRONMENT } from './beverages.token';
import { BeverageEnvironment } from './beverages.model';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: BeverageEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: BEVERAGE_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
