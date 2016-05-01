import {Component, ViewEncapsulation} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {ProjectBrowser} from './components/project-browser/project-browser';

@Component({
  selector: 'ducktyper-home',
  template: require("./ducktyper-home.html"),
  styles: [require("./ducktyper-home.css")],
  directives: [Header, Footer, ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None, 
})
@RouteConfig([
  { path: '/project/...', component: ProjectBrowser, name: 'ProjectBrowser', useAsDefault: true },
])
export class DucktyperHome {
}
