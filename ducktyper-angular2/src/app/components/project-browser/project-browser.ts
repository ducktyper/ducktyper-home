import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProjectList} from '../project-list/project-list';

var config = require('../../config/config');

@Component({
  selector: 'project-browser',
  template: require("./project-browser.html"),
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/', component: ProjectList, name: 'ProjectList', useAsDefault: true },
])
export class ProjectBrowser {
  constructor(private router:Router) {}
}
