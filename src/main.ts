/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

if (location.protocol === 'https:' && environment.production) {
  location.href = location.href.replace('https:', 'http:');
}



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
