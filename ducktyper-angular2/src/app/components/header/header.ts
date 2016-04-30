import {Component} from 'angular2/core'; 

var config = require('../../config/config');

@Component({
  selector: 'header',
  templateUrl: `${config.assetHost}app/components/header/header.html`,
  styles: [require("./header.css")],
})
export class Header {
}
