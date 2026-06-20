/**
 * Project Entity
 * Representa un proyecto en el portafolio
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  createdAt: Date;
}

export class ProjectEntity implements Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  createdAt: Date;

  constructor(data: Project) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.technologies = data.technologies;
    this.imageUrl = data.imageUrl;
    this.projectUrl = data.projectUrl;
    this.repositoryUrl = data.repositoryUrl;
    this.featured = data.featured;
    this.createdAt = data.createdAt;
  }
}
