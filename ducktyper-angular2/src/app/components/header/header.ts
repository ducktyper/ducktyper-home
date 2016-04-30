import {Component} from 'angular2/core'; 

var config = require('../../config/config');

@Component({
  selector: 'header',
  template: require("./header.html"),
  styles: [require("./header.css")],
})
export class Header {
}
