import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ProjectRepo} from '../services/project-repo';

@Component({
  selector: 'project-list',
  templateUrl: "/app/project-list/project-list.component.html",
  styleUrls: ["app/project-list/project-list.component.css"],
  directives: [ROUTER_DIRECTIVES],
  providers: [Title, ProjectRepo],
})
export class ProjectListComponent {
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
