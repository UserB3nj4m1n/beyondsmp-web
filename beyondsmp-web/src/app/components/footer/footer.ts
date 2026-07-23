import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-content">
        <p>&copy; 2026 BEYOND SMP. Toto nie je oficiálny produkt Minecraftu. Nie je schválený ani spojený so spoločnosťou Mojang alebo Microsoft.</p>
        <div class="footer-links">
          <a href="#">Pravidlá</a>
          <a href="#">Ochrana osobných údajov</a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      background-color: var(--mc-black);
      color: var(--mc-gray);
      padding: 2rem 0;
      margin-top: 4rem;
      border-top: var(--border-size) solid var(--mc-dark-gray);
      text-align: center;
      font-size: 0.8rem;
    }
    .footer-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .footer-links a {
      margin: 0 10px;
      color: var(--mc-gray);
    }
  `
})
export class FooterComponent {}
