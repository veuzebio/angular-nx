import { NgModule } from '@angular/core';
import { CacheService, LoggerService } from '..';

@NgModule({
  providers: [CacheService, LoggerService],
})
export class SharedServicesModule {}
