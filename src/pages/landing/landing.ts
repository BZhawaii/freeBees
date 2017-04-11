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
      console.log("Inside get posts", category, response.data[0]);
      if(category === "all") {
        this.items = response.data
      } else {
        this.items = response.data.filter(
          cat => category === cat.category.toLowerCase()
        );
      }
      console.log("This is this.items in getPosts", this.items)
    })

  }  //closes getPosts

  viewItem(item) {
    console.log("This is the view item in landing.ts",item);
    this.navCtrl.push(DetailsPage, {
      item: item
    })
  }  //closes viewItem

  changeCategory(category) {
    this.freebeeService.getPosts(category).subscribe(response => {
      console.log("Inside  changeCategory", category, response.data[0]);
      this.items = response.data.filter(
        cat => category === cat.category.toLowerCase()
      );
    })
  }  //closes changeCategory

}  //closes export class
