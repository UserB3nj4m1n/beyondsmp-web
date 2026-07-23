import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero container">
      <div class="mc-panel hero-panel">
        <div class="banner-container">
          <img src="/beyond_banner.jpg" alt="Beyond SMP Banner" class="hero-banner">
        </div>
        <h1>Vitajte na Beyond SMP</h1>
        <p>Zábavný Minecraft zážitok ako žiaden iný!</p>
        <div class="ip-container">
          <span class="ip-label">IP Servera:</span>
          <span class="ip-value">{{ ip }}</span>
          <button class="mc-button" (click)="copyIP()">{{ copyText }}</button>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      text-align: center;
      padding: 2rem 0;
    }
    .hero-panel {
      padding: 0;
      overflow: hidden;
    }
    .banner-container {
      width: 100%;
      border-bottom: var(--border-size) solid var(--mc-black);
    }
    .hero-banner {
      width: 100%;
      height: auto;
      display: block;
    }
    h1 {
      font-size: 3rem;
      margin: 1.5rem 0 1rem 0;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    .ip-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      flex-wrap: wrap;
    }
    .ip-label {
      color: var(--mc-gold);
    }
    .ip-value {
      background: var(--mc-black);
      padding: 5px 15px;
      border: 2px solid var(--mc-dark-gray);
      font-family: monospace;
      font-size: 1.2rem;
    }
  `
})
export class HeroComponent {
  ip = 'mc.beyondsmp.online';
  copyText = 'Kopírovať IP';

  copyIP() {
    navigator.clipboard.writeText(this.ip);
    this.copyText = 'Skopírované!';
    setTimeout(() => {
      this.copyText = 'Kopírovať IP';
    }, 2000);
  }
}
