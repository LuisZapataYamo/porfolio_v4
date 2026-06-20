import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ProjectRepository, SkillRepository } from './domain/services';
import { ProjectRepositoryImpl, SkillRepositoryImpl } from './infrastructure/repositories';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),

    // Domain Services - Inyección de Dependencias
    {
      provide: ProjectRepository,
      useClass: ProjectRepositoryImpl,
    },
    {
      provide: SkillRepository,
      useClass: SkillRepositoryImpl,
    },
  ]
};
