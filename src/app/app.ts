import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './interfaces/views';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  template: `
    <app-home></app-home>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.scss']
})
export class App {}
