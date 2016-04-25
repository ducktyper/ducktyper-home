import {Component} from 'angular2/core';

import {Header} from './components/header/header';

@Component({
  selector: "ducktyper-home",
  templateUrl: "app/ducktyper-home.html",
  directives: [Header],
})
export class DucktyperHome {
}


