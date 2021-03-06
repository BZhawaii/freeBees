import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { LandingPage } from '../landing/landing';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LandingPage;
  tab3Root = AboutPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
