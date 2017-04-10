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
    if(localStorage.getItem('category') != null) {
      this.category=localStorage.getItem('category');
    } else {
      this.category = 'sports';
    }  //closes if/else
    if(localStorage.getItem('limit') != null) {
      this.limit=localStorage.getItem('limit');
    } else {
      this.limit = 10;
    }  //closes if/else
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
