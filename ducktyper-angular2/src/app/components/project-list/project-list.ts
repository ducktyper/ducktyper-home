import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ProjectRepo} from '../../services/project-repo';

@Component({
  selector: 'project-list',
  templateUrl: "/app/components/project-list/project-list.html",
  styleUrls: ["app/components/project-list/project-list.css"],
  directives: [ROUTER_DIRECTIVES],
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
