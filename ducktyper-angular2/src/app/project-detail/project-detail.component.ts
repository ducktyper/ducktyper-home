import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {ProjectRepoService} from '../project-repo.service';

@Component({
  moduleId: module.id,
  selector: 'project-detail',
  templateUrl: "project-detail.component.html",
  styleUrls: ["project-detail.component.css"],
  directives: [ROUTER_DIRECTIVES],
  providers: [Title, ProjectRepoService],
})
export class ProjectDetailComponent {
  project: any;
  
  constructor(private title:Title, private projectRepoService:ProjectRepoService, private routeSegment: RouteSegment) {}

  ngOnInit() {
    this.title.setTitle("Ducktyper: Product Detail");
    let id = +this.routeSegment.getParam('id');
    this.project = {};
    this.getProject(id);
  }
    
  getProject(id:number) {
    this.projectRepoService
        .getProjects()
        .subscribe(projects => this.project = projects.filter(project => project.ID === id)[0]);
  }
}
