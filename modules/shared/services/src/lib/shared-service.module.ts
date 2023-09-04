import { NgModule, ModuleWithProviders } from '@angular/core';
import { CacheService, LoggerService } from '..';

@NgModule()
export class SharedServicesModule {
  static forRoot(): ModuleWithProviders<SharedServicesModule> {
    return {
      ngModule: SharedServicesModule,
      providers: [CacheService, LoggerService],
    };
  }
}
