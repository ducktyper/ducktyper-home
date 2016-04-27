import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';

import {ProjectRepo} from '../../services/project-repo';

@Component({
  selector: 'project',
  templateUrl: "app/components/project-list/project-list.html",
  providers: [Title, ProjectRepo],
})
export class ProjectList {
  projects: Array<any>
  constructor(private title:Title, private projectRepo:ProjectRepo) {}

  ngOnInit() {
    this.title.setTitle("Ducktyper: Product List");
    this.projects = this.projectRepo.getProjects();
  }
}
