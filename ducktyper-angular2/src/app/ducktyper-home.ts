import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES, Router, Routes} from '@angular/router';

import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {ProjectBrowser} from './components/project-browser/project-browser';
import {ProjectDetail} from './components/project-detail/project-detail';
import {ProjectList} from './components/project-list/project-list';
import {AboutMe} from './components/about-me/about-me';

@Component({
  selector: 'ducktyper-home',
  templateUrl: "/app/ducktyper-home.html",
  styleUrls: ["app/ducktyper-home.css"],
  directives: [Header, Footer, AboutMe, ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None, 
})
@Routes([
  { path: '/', component: ProjectList },
  { path: '/Project/:id', component: ProjectDetail },
])
export class DucktyperHome {
  constructor(private _router:Router) { }
}
