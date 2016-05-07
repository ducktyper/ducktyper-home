import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';

import { DucktyperHomeComponent, environment } from './app/';
import 'rxjs/Rx';

if (environment.production) {
  enableProdMode();
}

bootstrap(DucktyperHomeComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
]);
