// Hero.js — ÚNICO componente con cifras dinámicas (heroStats desde content.json)
// Estructura/clases/efectos preservados 1:1. Para cambiar cifras: edita src/data/content.json
import content from '../data/content.json';

export function Hero() {
  const stats = content.heroStats
    .map(
      (s) => `
        <div class="stat">
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>`
    )
    .join('');

  return `
  <!-- HERO -->
  <section class="hero">
    <div class="container">
      <h1>${content.hero.titleHtml}</h1>
      <p class="hero-desc">${content.hero.desc}</p>

      <div class="hero-visual fade-in">
        <picture>
          <source type="image/webp" srcset="/assets/hero-chart-480.webp 480w, /assets/hero-chart-768.webp 768w, /assets/hero-chart.webp 1200w" sizes="(max-width: 768px) 100vw, 1100px">
          <img src="${content.hero.visual}" alt="Gráfico histórico de Bitcoin: ciclos de bull market, bear market y halvings desde 2014" width="1200" height="744" style="width:100%;height:auto;display:block;" loading="eager" fetchpriority="high" decoding="async">
        </picture>
      </div>

      <div class="hero-stats" data-editable="heroStats">
        ${stats}
      </div>
    </div>
  </section>`;
}
