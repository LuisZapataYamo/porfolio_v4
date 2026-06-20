export type FileKind = 'go' | 'rust' | 'python';
export type BadgeState = 'stable' | 'active' | 'beta';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface WorkspaceProject {
  id: string;
  fileName: string;
  fileKind: FileKind;
  iconLabel: string;
  language: string;
  title: string;
  description: string;
  metrics: ProjectMetric[];
  codename: string;
  projectCode: string;
  badge: string;
  badgeState: BadgeState;
  repoUrl: string;
  docsUrl: string;
  cursorLine: number;
  cursorCol: number;
}
