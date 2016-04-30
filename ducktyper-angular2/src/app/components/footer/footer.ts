import {Component} from 'angular2/core'; 

var config = require('../../config/config');

@Component({
  selector: 'footer',
  templateUrl: `${config.assetHost}app/components/footer/footer.html`,
  styleUrls: [`${config.assetHost}app/components/footer/footer.css`],
})
export class Footer {
}
