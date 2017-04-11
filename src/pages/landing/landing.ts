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
    console.log("On init", this.category);
    this.getPosts(this.category);
  }  //closes ngOnInit

  getDefaults() {
    if(localStorage.getItem('category') != null) {
      this.category=localStorage.getItem('category');
    } else {
      this.category = 'drinks';
    }  //closes if/else
  }  //closes getDefaults

  getPosts(category) {
    this.freebeeService.getPosts(category).subscribe(response => {
      console.log("Inside get posts", response.data[0]);
      this.items = response.data;
      console.log(this.items);
    })
  }  //closes getPosts

  viewItem(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    })
  }  //closes viewItem

  changeCategory() {
    this.getPosts(this.category);
  }  //closes changeCategory

}  //closes export class
