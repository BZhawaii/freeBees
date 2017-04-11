import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/Rx';


@Injectable()
export class FreebeeService {
  http: any;
  baseUrl: String;

  constructor(http: Http) {
    this.http = http;
    this.baseUrl = 'https://freebees-backend.herokuapp.com';

  }  //closes constructor

  getPosts(table) {
    console.log("This is in get Posts", table);
    return this.http.get(this.baseUrl + '/' +'freebees')
      .map(res => res.json());
  }  //closes getPosts

}  //closes export
