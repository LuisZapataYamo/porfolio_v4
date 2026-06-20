/**
 * Skill Controller
 * Controlador de presentación para la lógica de habilidades
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SkillApplicationService } from '../../application/services';
import { Skill } from '../../domain/entities';

@Injectable({
  providedIn: 'root'
})
export class SkillController {
  private skillsSubject = new BehaviorSubject<Skill[]>([]);
  skills$ = this.skillsSubject.asObservable();

  constructor(private skillApplicationService: SkillApplicationService) {}

  /**
   * Carga todas las habilidades
   */
  loadSkills(): void {
    this.skillApplicationService.getAllSkills().subscribe(
      (skills: Skill[]) => {
        this.skillsSubject.next(skills);
      },
      (error) => {
        console.error('Error loading skills:', error);
      }
    );
  }

  /**
   * Carga habilidades por categoría
   */
  loadSkillsByCategory(category: string): void {
    this.skillApplicationService.getSkillsByCategory(category).subscribe(
      (skills: Skill[]) => {
        this.skillsSubject.next(skills);
      },
      (error) => {
        console.error('Error loading skills:', error);
      }
    );
  }
}
