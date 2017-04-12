import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'want-details',
  templateUrl: 'want.html'
})
export class WantPage {
  item: any;
  myVar: boolean;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.item = params.get('item');
    this.myVar = true;
  }

  changeButton(myVar) {
    return this.myVar = false;
  }

}
