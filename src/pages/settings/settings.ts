import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FreebeeService } from '../../app/services/freebees.service';
import { LandingPage } from '../landing/landing'

@Component({
  selector: 'settings-landing',
  templateUrl: 'settings.html'
})  //closes component
export class SettingsPage {
  category: any;
  constructor(public navCtrl: NavController, private freebeeService: FreebeeService) {
    this.getDefaults();
  }  //closes constructor

  getDefaults() {
    if(localStorage.getItem('category') != null) {
      this.category=localStorage.getItem('category');
    } else {
      this.category = 'food';
    }  //closes if/else

  }  //closes getDefaults

  setDefaults() {
    localStorage.setItem('category', this.category);
    this.navCtrl.push(LandingPage);
  }


}  //closes export class
