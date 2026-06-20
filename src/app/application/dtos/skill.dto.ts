/**
 * Skill DTO
 * Objeto de transferencia de datos para habilidades
 */
export interface CreateSkillDTO {
  name: string;
  description: string;
  category: 'frontend' | 'backend' | 'devops' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface UpdateSkillDTO extends Partial<CreateSkillDTO> {
  id: string;
}

export interface SkillResponseDTO {
  id: string;
  name: string;
  description: string;
  category: 'frontend' | 'backend' | 'devops' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}
