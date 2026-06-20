/**
 * Skill Repository - Puerto de Dominio
 * Define el contrato para acceder a datos de habilidades
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../entities';

@Injectable()
export abstract class SkillRepository {
  abstract getAll(): Observable<Skill[]>;
  abstract getByCategory(category: string): Observable<Skill[]>;
}
