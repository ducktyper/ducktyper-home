import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {provide} from '@angular/core';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import { ProjectRepoService } from './project-repo.service';

describe('ProjectRepo Service', () => {
  beforeEachProviders(() => [
    ProjectRepoService,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    }, deps: [MockBackend, BaseRequestOptions]}),
  ]);

  it('should ...',
      inject([ProjectRepoService], (service: ProjectRepoService) => {
    expect(service).toBeTruthy();
  }));
});
