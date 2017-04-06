import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { LandingPage } from '../landing/landing';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LandingPage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
