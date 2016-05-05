import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {RouteParams, RouterLink} from 'angular2/router';

import {ProjectRepo} from '../../services/project-repo';

@Component({
  selector: 'project-detail',
  template: require("./project-detail.html"),
  styles: [require("./project-detail.css")],
  providers: [Title, ProjectRepo],
  directives: [RouterLink],
})
export class ProjectDetail {
  project: any;
  
  constructor(private title:Title, private projectRepo:ProjectRepo, private routeParams: RouteParams) {}

  ngOnInit() {
    this.title.setTitle("Ducktyper: Product Detail");
    let id = +this.routeParams.get('id');
    this.project = {};
    this.getProject(id);
  }
    
  getProject(id:number) {
    this.projectRepo
        .getProjects()
        .subscribe(projects => this.project = projects.filter(project => project.ID === id)[0]);
  }
}
