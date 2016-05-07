import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {ProjectRepo} from '../services/project-repo';

@Component({
  selector: 'project-detail',
  templateUrl: "/app/project-detail/project-detail.component.html",
  styleUrls: ["app/project-detail/project-detail.component.css"],
  directives: [ROUTER_DIRECTIVES],
  providers: [Title, ProjectRepo],
})
export class ProjectDetailComponent {
  project: any;
  
  constructor(private title:Title, private projectRepo:ProjectRepo, private routeSegment: RouteSegment) {}

  ngOnInit() {
    this.title.setTitle("Ducktyper: Product Detail");
    let id = +this.routeSegment.getParam('id');
    this.project = {};
    this.getProject(id);
  }
    
  getProject(id:number) {
    this.projectRepo
        .getProjects()
        .subscribe(projects => this.project = projects.filter(project => project.ID === id)[0]);
  }
}
