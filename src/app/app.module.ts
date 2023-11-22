import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { GlobalErrorHandler } from '../app/global-error-handler.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [ IonicStorageModule.forRoot(), BrowserModule, IonicModule.forRoot({ swipeBackEnabled: true }), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler },{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
