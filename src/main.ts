import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ClientDashboardTwoAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ClientDashboardTwoAppComponent);

