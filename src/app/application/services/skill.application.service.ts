/**
 * Skill Application Service
 * Orquesta la lógica de negocio para habilidades
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillRepository } from '../../domain/services';
import { Skill } from '../../domain/entities';

@Injectable({
  providedIn: 'root'
})
export class SkillApplicationService {
  constructor(private skillRepository: SkillRepository) {}

  /**
   * Obtiene todas las habilidades
   */
  getAllSkills(): Observable<Skill[]> {
    return this.skillRepository.getAll();
  }

  /**
   * Obtiene habilidades por categoría
   */
  getSkillsByCategory(category: string): Observable<Skill[]> {
    return this.skillRepository.getByCategory(category);
  }
}
