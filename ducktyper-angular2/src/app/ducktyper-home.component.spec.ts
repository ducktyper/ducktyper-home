import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DucktyperHomeAppComponent } from '../app/ducktyper-home.component';

beforeEachProviders(() => [DucktyperHomeAppComponent]);

describe('App: DucktyperHome', () => {
  it('should create the app',
      inject([DucktyperHomeAppComponent], (app: DucktyperHomeAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
