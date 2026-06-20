/**
 * Project Repository Implementation
 * Adaptador que implementa la interfaz de repositorio
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectRepository } from '../../domain/services';
import { Project } from '../../domain/entities';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepositoryImpl extends ProjectRepository {
  private apiUrl = '/api/projects';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.apiUrl);
  }

  getById(id: string): Observable<Project> {
    return this.httpClient.get<Project>(`${this.apiUrl}/${id}`);
  }

  getFeatured(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.apiUrl}/featured`);
  }
}
