import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ProjectRepoService} from '../project-repo.service';

@Component({
  moduleId: module.id,
  selector: 'project-list',
  templateUrl: "project-list.component.html",
  styleUrls: ["project-list.component.css"],
  directives: [ROUTER_DIRECTIVES],
  providers: [Title, ProjectRepoService],
})
export class ProjectListComponent implements OnInit {
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
