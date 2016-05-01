import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';

import {ProjectRepo} from '../../services/project-repo';

@Component({
  selector: 'project',
  template: require("./project-list.html"),
  styles: [require("./project-list.css")],
  providers: [Title, ProjectRepo],
})
export class ProjectList {
  projects: Array<any>
  constructor(private title:Title, private projectRepo:ProjectRepo) {}

  ngOnInit() {
    this.title.setTitle("Ducktyper: Product List");
    this.getProjects();
  }
  
  getProjects() {
    this.projectRepo
        .getProjects()
        .subscribe(projects => this.projects = projects);
  }
}
