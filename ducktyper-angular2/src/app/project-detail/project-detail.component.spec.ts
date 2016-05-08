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
import {
  Router,
  RouterOutletMap,
  RouterUrlSerializer,
  DefaultRouterUrlSerializer,
  RouteSegment,
} from '@angular/router';
import {Location} from '@angular/common';
import {SpyLocation} from '@angular/common/testing';
import {MockBackend} from '@angular/http/testing';
import {provide, ComponentResolver} from '@angular/core';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import {ProjectRepoService} from '../project-repo.service';
import { ProjectDetailComponent } from './project-detail.component';

describe('Component: ProjectDetail', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    ProjectDetailComponent,
    Title,
    RouterOutletMap,
    provide(Location, {useClass: SpyLocation}),
    provide(RouterUrlSerializer, {useClass: DefaultRouterUrlSerializer}),
    provide(Router,
      {
        useFactory: (resolver, urlParser, outletMap, location) => new Router(
          "RootComponent", ProjectDetailComponent, resolver, urlParser, outletMap, location),
        deps: [ComponentResolver, RouterUrlSerializer, RouterOutletMap, Location]
      }),
    provide(RouteSegment, {useFactory: (r) => r.routeTree.root, deps: [Router]}),
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

  it('should inject the component', inject([ProjectDetailComponent],
      (component: ProjectDetailComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ProjectDetailComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ProjectDetailComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <project-detail></project-detail>
  `,
  directives: [ProjectDetailComponent]
})
class ProjectDetailComponentTestController {
}
