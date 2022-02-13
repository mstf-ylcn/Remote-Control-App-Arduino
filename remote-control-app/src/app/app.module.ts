import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire/compat'
import {environment} from '../environments/environment';
import {HammerGestureConfig,HAMMER_GESTURE_CONFIG,} from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import {HammerModule} from '@angular/platform-browser'

declare var Hammer: any;
@Injectable({providedIn: 'root'})
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
      'pinch': { enable: true },
      'rotate': { enable: true },
      'pan':{ direction: Hammer.DIRECTION_ALL}
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig),
     HammerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{provide:HAMMER_GESTURE_CONFIG,useClass:MyHammerConfig}],
  bootstrap: [AppComponent],
})
export class AppModule {}
