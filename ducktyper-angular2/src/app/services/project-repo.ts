import {Injectable} from 'angular2/core';

@Injectable()
export class ProjectRepo {
  constructor() {}

  getProjects() {
    return [
      {
        name:    "Let's Play",
        details: "Playground for javascript and c#",
        link: "https://github.com/ducktyper/letsplay"
      },
      {
        name:    "Teaching Ruby",
        details: "Learn ruby from building simple application",
        link: "https://github.com/ducktyper/countdown"
      }
    ]
  }
}
