import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FreebeeService } from '../../app/services/freebees.service';
import { DetailsPage } from '../details/details'

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})  //closes component
export class LandingPage {
  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private freebeeService: FreebeeService) {
    this.getDefaults();
  }  //closes constructor

  ngOnInit() {
    this.getPosts(this.category, this.limit);
  }  //closes ngOnInit

  getDefaults() {
    this.category = 'sports';
    this.limit = 10;
  }  //closes getDefaults

  getPosts(category, limit) {
    this.freebeeService.getPosts(category, limit).subscribe(response => {
      this.items = response.data.children;
    })
  }  //closes getPosts

  viewItem(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    })
  }  //closes viewItem

  changeCategory() {
    this.getPosts(this.category, this.limit);
  }  //closes changeCategory

}  //closes export class
