import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about'

@Component({
  selector: 'home-details',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAbout() {
    this.navCtrl.push(AboutPage, {
    })
  }  //closes viewItem

}
