import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import {provide, ComponentResolver} from '@angular/core';
import {
  Router,
  RouterOutletMap,
  RouterUrlSerializer,
  DefaultRouterUrlSerializer,
} from '@angular/router';
import {Location} from '@angular/common';
import {SpyLocation} from '@angular/common/testing';
import { DucktyperHomeAppComponent } from '../app/ducktyper-home.component';

beforeEachProviders(() => [
  DucktyperHomeAppComponent,
  RouterOutletMap,
  provide(Location, {useClass: SpyLocation}),
  provide(RouterUrlSerializer, {useClass: DefaultRouterUrlSerializer}),
  provide(Router,
    {
      useFactory: (resolver, urlParser, outletMap, location) => new Router(
        "RootComponent", DucktyperHomeAppComponent, resolver, urlParser, outletMap, location),
      deps: [ComponentResolver, RouterUrlSerializer, RouterOutletMap, Location]
    })
]);

describe('App: DucktyperHome', () => {
  it('should create the app',
      inject([DucktyperHomeAppComponent], (app: DucktyperHomeAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
