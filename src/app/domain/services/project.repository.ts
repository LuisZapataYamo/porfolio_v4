/**
 * Project Repository - Puerto de Dominio
 * Define el contrato para acceder a datos de proyectos
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../entities';

@Injectable()
export abstract class ProjectRepository {
  abstract getAll(): Observable<Project[]>;
  abstract getById(id: string): Observable<Project>;
  abstract getFeatured(): Observable<Project[]>;
}
