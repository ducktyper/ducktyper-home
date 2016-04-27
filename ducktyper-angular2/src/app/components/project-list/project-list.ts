import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';

@Component({
  selector: 'project',
  templateUrl: "app/components/project-list/project-list.html",
  providers: [Title],
})
export class ProjectList {
  constructor(public title:Title) {}

  ngOnInit() {
    this.title.setTitle("Ducktyper: Product List");
  }
}
