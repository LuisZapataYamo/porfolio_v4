/**
 * Project Application Service
 * Orquesta la lógica de negocio para proyectos
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectRepository } from '../../domain/services';
import { Project } from '../../domain/entities';

@Injectable({
  providedIn: 'root'
})
export class ProjectApplicationService {
  constructor(private projectRepository: ProjectRepository) {}

  /**
   * Obtiene todos los proyectos
   */
  getAllProjects(): Observable<Project[]> {
    return this.projectRepository.getAll();
  }

  /**
   * Obtiene un proyecto por su ID
   */
  getProjectById(id: string): Observable<Project> {
    return this.projectRepository.getById(id);
  }

  /**
   * Obtiene los proyectos destacados
   */
  getFeaturedProjects(): Observable<Project[]> {
    return this.projectRepository.getFeatured();
  }
}
