/**
 * Project Controller
 * Controlador de presentación para la lógica de proyectos
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectApplicationService } from '../../application/services';
import { Project } from '../../domain/entities';

@Injectable({
  providedIn: 'root'
})
export class ProjectController {
  private projectsSubject = new BehaviorSubject<Project[]>([]);
  projects$ = this.projectsSubject.asObservable();

  private selectedProjectSubject = new BehaviorSubject<Project | null>(null);
  selectedProject$ = this.selectedProjectSubject.asObservable();

  constructor(private projectApplicationService: ProjectApplicationService) {}

  /**
   * Carga todos los proyectos
   */
  loadProjects(): void {
    this.projectApplicationService.getAllProjects().subscribe(
      (projects: Project[]) => {
        this.projectsSubject.next(projects);
      },
      (error) => {
        console.error('Error loading projects:', error);
      }
    );
  }

  /**
   * Carga los proyectos destacados
   */
  loadFeaturedProjects(): void {
    this.projectApplicationService.getFeaturedProjects().subscribe(
      (projects: Project[]) => {
        this.projectsSubject.next(projects);
      },
      (error) => {
        console.error('Error loading featured projects:', error);
      }
    );
  }

  /**
   * Selecciona un proyecto específico
   */
  selectProject(id: string): void {
    this.projectApplicationService.getProjectById(id).subscribe(
      (project: Project) => {
        this.selectedProjectSubject.next(project);
      },
      (error) => {
        console.error('Error loading project:', error);
      }
    );
  }
}
