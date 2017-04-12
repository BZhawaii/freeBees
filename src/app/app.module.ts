import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { LandingPage } from '../pages/landing/landing';
import { SettingsPage } from '../pages/settings/settings';
import { DetailsPage } from '../pages/details/details'
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage} from '../pages/home/home';
import { WantPage } from '../pages/want/want';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    LandingPage,
    SettingsPage,
    DetailsPage,
    WantPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    LandingPage,
    SettingsPage,
    DetailsPage,
    WantPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
