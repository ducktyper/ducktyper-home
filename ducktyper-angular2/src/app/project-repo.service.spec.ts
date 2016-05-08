import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ProjectRepoService } from './project-repo.service';

describe('ProjectRepo Service', () => {
  beforeEachProviders(() => [ProjectRepoService]);

  it('should ...',
      inject([ProjectRepoService], (service: ProjectRepoService) => {
    expect(service).toBeTruthy();
  }));
});
