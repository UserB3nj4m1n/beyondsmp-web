import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-community',
  standalone: true,
  template: `
    <section id="community" class="community container">
      <h2>Pridaj sa do komunity</h2>
      
      <div class="community-grid">
        <div class="mc-panel discord-card">
          <h3>Discord Server</h3>
          <p>Pokecaj si s ostatnými hráčmi a získaj novinky!</p>
          <div class="discord-preview">
            <div class="mc-button join-btn" (click)="joinDiscord()">PRIPOJIŤ SA NA DISCORD</div>
          </div>
        </div>

        <div class="mc-panel map-card">
          <h3>BlueMap</h3>
          <p>Preskúmaj svet priamo zo svojho prehliadača!</p>
          <div class="map-container">
            <iframe [src]="mapUrl" width="100%" height="300" frameborder="0"></iframe>
          </div>
          <p>Alebo si otvor mapu v novom okne: <a href="https://map.beyondsmp.online" target="_blank">Otvor mapu</a></p>
        </div>
      </div>
    </section>
  `,
  styles: `
    .community {
      padding: 4rem 0;
    }
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }
    .community-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    .discord-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .join-btn {
      margin-top: 2rem;
      display: inline-block;
    }
    .map-container {
      border: 4px solid var(--mc-stone);
      overflow: hidden;
      margin-top: 1rem;
    }
    iframe {
      display: block;
    }
  `
})
export class CommunityComponent {
  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://map.beyondsmp.online');
  }

  joinDiscord() {
    window.open('https://discord.gg/Eyv55udHh', '_blank');
  }
}
