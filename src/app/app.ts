import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { TutorialsComponent } from './components/tutorials/tutorials';
import { CommunityComponent } from './components/community/community';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    TutorialsComponent,
    CommunityComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-tutorials></app-tutorials>
      <app-community></app-community>
    </main>
    <app-footer></app-footer>
  `,
  styles: `
    main {
      min-height: 100vh;
    }
  `
})
export class AppComponent {}
