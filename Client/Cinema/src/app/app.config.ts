import { ApplicationConfig , InjectionToken} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const BASE_SERVER_URL = new InjectionToken<string>('base url of server');
export const appConfig: ApplicationConfig = {
  providers:
   [
    { provide: BASE_SERVER_URL, useValue: 'http://localhost:5216/api'},
    provideHttpClient(),
    provideRouter(routes)
  ]
};
