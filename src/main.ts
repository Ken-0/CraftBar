import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Importar el módulo raíz de la aplicación

// Habilitar el modo de producción si es necesario


// Iniciar la aplicación Angular
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
