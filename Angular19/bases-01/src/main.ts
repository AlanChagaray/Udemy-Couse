import { bootstrapApplication } from '@angular/platform-browser'; //Aplicacion Web
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// bootstrapApplication es una función que arranca la aplicación Angular
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
