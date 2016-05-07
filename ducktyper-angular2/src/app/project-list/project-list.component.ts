import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ProjectRepoService} from '../project-repo.service';

@Component({
  selector: 'project-list',
  templateUrl: "/app/project-list/project-list.component.html",
  styleUrls: ["app/project-list/project-list.component.css"],
  directives: [ROUTER_DIRECTIVES],
  providers: [Title, ProjectRepoService],
})
export class ProjectListComponent {
  projects: Array<any>
  constructor(private title:Title, private projectRepoService:ProjectRepoService) {}

  ngOnInit() {
    this.title.setTitle("Ducktyper: Product List");
    this.getProjects();
  }

  getProjects() {
    this.projectRepoService
        .getProjects()
        .subscribe(projects => this.projects = projects);
  }
}
