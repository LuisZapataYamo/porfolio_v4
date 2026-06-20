import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavComponent } from '../home-nav/home-nav.component';
import { HeroTerminalComponent } from '../hero-terminal/hero-terminal.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeNavComponent, HeroTerminalComponent, ProjectsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
