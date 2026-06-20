/**
 * Skill Repository Implementation
 * Adaptador que implementa la interfaz de repositorio
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillRepository } from '../../domain/services';
import { Skill } from '../../domain/entities';

@Injectable({
  providedIn: 'root'
})
export class SkillRepositoryImpl extends SkillRepository {
  private apiUrl = '/api/skills';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAll(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.apiUrl);
  }

  getByCategory(category: string): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.apiUrl}?category=${category}`);
  }
}
