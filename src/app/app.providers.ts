/**
 * PROVIDERS CONFIGURATION
 * Configuración de inyección de dependencias
 */
import { Provider } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  ProjectRepository,
  SkillRepository,
} from './domain/services';
import {
  ProjectRepositoryImpl,
  SkillRepositoryImpl,
} from './infrastructure/repositories';

/**
 * Proveedores de la aplicación
 * Configura la inyección de dependencias
 */
export const appProviders: Provider[] = [
  // HTTP Module
  HttpClientModule,

  // Inyección de repositorios (Inyección de dependencias)
  {
    provide: ProjectRepository,
    useClass: ProjectRepositoryImpl,
  },
  {
    provide: SkillRepository,
    useClass: SkillRepositoryImpl,
  },
];
