import {Injectable} from 'angular2/core';

@Injectable()
export class ProjectRepo {
  constructor() {}

  getProjects() {
    return [
      {
        name:    "Teaching Ruby",
        details: "Learn ruby from building simple application"
      }
    ]
  }
}
