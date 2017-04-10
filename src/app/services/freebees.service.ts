import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/Rx';


@Injectable()
export class FreebeeService {
  http: any;
  baseUrl: String;

  constructor(http: Http) {
    this.http = http;
    this.baseUrl = 'https://www.reddit.com/r';

  }  //closes constructor

  getPosts(table, limit) {
    return this.http.get(this.baseUrl + '/' +table + '/top.json?limit=' + limit)
      .map(res => res.json());
  }  //closes getPosts



}  //closes export
