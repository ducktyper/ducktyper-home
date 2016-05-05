import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProjectList} from '../project-list/project-list';
import {ProjectDetail} from '../project-detail/project-detail';

@Component({
  selector: 'project-browser',
  template: require("./project-browser.html"),
  styles: [require("./project-browser.css")],
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/', component: ProjectList, name: 'ProjectList', useAsDefault: true },
  { path: '/:id', component: ProjectDetail, name: 'ProjectDetail'},
])
export class ProjectBrowser {
  constructor(private router:Router) {}
}
