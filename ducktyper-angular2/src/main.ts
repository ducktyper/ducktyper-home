import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';

import { DucktyperHome, environment } from './app/';
import 'rxjs/Rx';

if (environment.production) {
  enableProdMode();
}

bootstrap(DucktyperHome, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
]);
