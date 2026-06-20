/**
 * Project DTO
 * Objeto de transferencia de datos para proyectos
 */
export interface CreateProjectDTO {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
}

export interface UpdateProjectDTO extends Partial<CreateProjectDTO> {
  id: string;
}

export interface ProjectResponseDTO {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  createdAt: string;
}
