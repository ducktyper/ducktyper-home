import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES, Router, Routes} from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {AboutMeComponent} from './about-me/about-me.component';

@Component({
  selector: 'ducktyper-home',
  templateUrl: "/app/ducktyper-home.component.html",
  styleUrls: ["app/ducktyper-home.component.css"],
  directives: [HeaderComponent, FooterComponent, AboutMeComponent, ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None, 
})
@Routes([
  { path: '/', component: ProjectListComponent },
  { path: '/Project/:id', component: ProjectDetailComponent },
])
export class DucktyperHomeComponent {
  constructor(private _router:Router) { }
}
