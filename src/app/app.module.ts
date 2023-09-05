import { CacheInterceptor } from 'modules/shared/services';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppEnvironment } from 'modules/shared/models';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { SharedServicesModule } from 'modules/shared/services';
import { CardComponent, TitleComponent } from 'modules/shared/ui';

@NgModule({
  declarations: [AppComponent, CharacterSheetComponent],
  imports: [
    TitleComponent,
    CardComponent,
    BrowserModule,
    HttpClientModule,
    SharedServicesModule.forRoot(),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    { provide: AppEnvironment, useValue: environment },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
