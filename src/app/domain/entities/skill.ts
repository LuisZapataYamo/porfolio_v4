/**
 * Skill Entity
 * Representa una habilidad o módulo técnico
 */
export interface Skill {
  id: string;
  name: string;
  description: string;
  category: 'frontend' | 'backend' | 'devops' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export class SkillEntity implements Skill {
  id: string;
  name: string;
  description: string;
  category: 'frontend' | 'backend' | 'devops' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;

  constructor(data: Skill) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.category = data.category;
    this.level = data.level;
    this.icon = data.icon;
  }
}
