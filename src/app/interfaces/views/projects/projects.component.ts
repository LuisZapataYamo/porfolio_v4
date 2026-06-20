import { Component } from '@angular/core';
import projectsData from './projects.data.json';
import { WorkspaceProject } from './projects.types';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly projects: WorkspaceProject[] = projectsData as WorkspaceProject[];

  activeProjectId = this.projects[0].id;
  openTabIds: string[] = [this.projects[0].id, this.projects[1].id];
  explorerExpanded = true;
  animatePanel = true;

  get activeProject(): WorkspaceProject {
    return this.projects.find((p) => p.id === this.activeProjectId) ?? this.projects[0];
  }

  get openTabs(): WorkspaceProject[] {
    return this.openTabIds
      .map((id) => this.projects.find((p) => p.id === id))
      .filter((p): p is WorkspaceProject => !!p);
  }

  selectProject(id: string): void {
    if (!this.openTabIds.includes(id)) {
      this.openTabIds = [...this.openTabIds, id];
    }
    if (id !== this.activeProjectId) {
      this.activeProjectId = id;
      this.restartPanelAnimation();
    }
  }

  closeTab(id: string, event: MouseEvent): void {
    event.stopPropagation();
    const remaining = this.openTabIds.filter((tabId) => tabId !== id);
    if (remaining.length === 0) {
      return;
    }

    this.openTabIds = remaining;

    if (this.activeProjectId === id) {
      this.activeProjectId = remaining[remaining.length - 1];
      this.restartPanelAnimation();
    }
  }

  toggleExplorer(): void {
    this.explorerExpanded = !this.explorerExpanded;
  }

  private restartPanelAnimation(): void {
    this.animatePanel = false;
    setTimeout(() => {
      this.animatePanel = true;
    }, 0);
  }
}
