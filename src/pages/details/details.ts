import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WantPage } from '../want/want'

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  item: any;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.item = params.get('item');
  }

  wantFreeBee(item) {
    console.log("This is the wantFreeBee",item);
    this.navCtrl.push(WantPage, {
      item: item
    })
  }  //closes wantFreeBee

}
