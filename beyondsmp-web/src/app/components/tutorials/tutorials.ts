import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  standalone: true,
  template: `
    <section id="tutorials" class="tutorials container">
      <h2>Ako sa pripojiť</h2>
      
      <div class="tutorial-grid">
        <div class="mc-panel">
          <h3>Inštalácia</h3>
          <ol>
            <li>Nainštalujte si <a href="https://download.oracle.com/java/21/archive/jdk-21.0.10_windows-x64_bin.exe" target="_blank">Java 21</a>.</li>
            <li>Stiahnite a spustite <a href="https://maven.neoforged.net/releases/net/neoforged/neoforge/21.1.231/neoforge-21.1.231-installer.jar" target="_blank">NeoForge inštalátor</a> (verzia 21.1.231).</li>
            <li>V inštalátore vyberte "Install client" a kliknite OK.</li>
            <li>Stiahnite si náš <a href="/mods.zip" target="_blank">Modpack ZIP</a>.</li>
            <li>Rozbaľte obsah ZIPu do priečinka <code>.minecraft/mods</code>.</li>
            <li>V Minecraft Launcheri vyberte profil NeoForge 1.21.1 a spustite hru.</li>
          </ol>
        </div>

        <div class="mc-panel">
          <h3>Módy v balíčku</h3>
          <p>Tieto módy nájdete v našom <code>mods.zip</code>:</p>
          <ul>
            <li><strong>Automodpack</strong> - Automatická správa a aktualizácia módov.</li>
            <li><strong>Iris</strong> - Podpora pre realistické shadery.</li>
            <li><strong>Sodium</strong> - Výrazné zvýšenie FPS a výkonu.</li>
            <li><strong>Watermedia</strong> - Prehrávanie multimédií priamo v hre.</li>
            <li><strong>KotlinForForge</strong> - Podporná knižnica pre moderné módy.</li>
          </ul>
        </div>

        <div class="mc-panel">
          <h3>Resource Packy</h3>
          <ol>
            <li>Stiahnite si <a href="https://bettervanillabuilding.com/download120/" target="_blank">Better Vanilla Building</a>.</li>
            <li>Stiahnite si serverový resource pack (ak je dostupný).</li>
            <li>Otvorte Minecraft a choďte do Options > Resource Packs.</li>
            <li>Kliknite na "Open Pack Folder".</li>
            <li>Presuňte ZIP súbory do priečinka.</li>
          </ol>
        </div>
      </div>
    </section>
  `,
  styles: `
    .tutorials {
      padding: 2rem 0;
    }
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }
    .tutorial-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    ol, ul {
      padding-left: 20px;
      line-height: 1.6;
    }
    code {
      background: var(--mc-dark-dirt);
      padding: 2px 5px;
      color: var(--mc-green);
      border: 1px solid var(--mc-black);
    }
    a {
      color: var(--mc-green);
      text-decoration: underline;
    }
    a:hover {
      color: var(--mc-gold);
    }
    strong {
      color: var(--mc-gold);
    }
  `
})
export class TutorialsComponent {}
