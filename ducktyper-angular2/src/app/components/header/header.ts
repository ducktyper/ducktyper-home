import {Component} from 'angular2/core'; 

var config = require('../../config/config');

@Component({
  selector: 'header',
  templateUrl: `${config.assetHost}app/components/header/header.html`,
  styleUrls: [`${config.assetHost}app/components/header/header.css`],
})
export class Header {
}
