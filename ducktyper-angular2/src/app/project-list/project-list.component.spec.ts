import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import {Title} from '@angular/platform-browser';
import {MockBackend} from '@angular/http/testing';
import {provide} from '@angular/core';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import {ProjectRepoService} from '../project-repo.service';
import { ProjectListComponent } from './project-list.component';


describe('Component: ProjectList', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    ProjectListComponent,
    Title,
    ProjectRepoService,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    }, deps: [MockBackend, BaseRequestOptions]}),
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ProjectListComponent, Title],
      (component: ProjectListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ProjectListComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ProjectListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <project-list></project-list>
  `,
  directives: [ProjectListComponent]
})
class ProjectListComponentTestController {
}
