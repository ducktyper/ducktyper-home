import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {enableProdMode} from 'angular2/core';

import {DucktyperHome} from './app/ducktyper-home';
import 'rxjs/Rx';

if (process.env.NODE_ENV == 'production') enableProdMode();
bootstrap(DucktyperHome, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'}),
])
.catch(err => console.error(err));
