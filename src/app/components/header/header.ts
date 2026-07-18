import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="container header-content">
        <div class="logo-container">
          <img src="/logo.png" alt="Beyond SMP Logo" class="logo-img">
          <span class="logo-text">BEYOND SMP</span>
        </div>
        <nav>
          <a href="#tutorials">Návody</a>
          <a href="#community">Komunita</a>
        </nav>
      </div>
    </header>
  `,
  styles: `
    .header {
      background-color: var(--panel-bg);
      border-bottom: var(--border-size) solid var(--mc-black);
      padding: 0.5rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .logo-img {
      height: 40px;
      image-rendering: pixelated;
    }
    .logo-text {
      font-size: 1.5rem;
      color: var(--mc-gold);
      text-shadow: 2px 2px var(--mc-black);
    }
    nav a {
      margin-left: 20px;
      color: var(--mc-white);
    }
  `
})
export class HeaderComponent {}
