// Intro.js — componente (HTML preservado verbatim del legacy)
export function Intro() {
  return `<!-- INTRODUCCIÓN -->
  <section id="introduccion">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">Fundamentos</span>
        <h2 class="section-title">¿Por qué necesitas una estrategia?</h2>
        <p class="section-desc">
          El mercado de criptomonedas opera las 24 horas, es altamente volátil y puede generar tanto oportunidades como riesgos significativos. Operar sin un plan claro suele llevar a decisiones emocionales.
        </p>
      </div>

      <div class="intro-grid fade-in">
        <!-- Plan definido -->
        <div class="intro-card">
          <div class="intro-card-visual">
            <svg viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="40" y="30" width="100" height="80" rx="8" fill="#1a2538" stroke="#22d3ee" stroke-width="1.5"/>
              <rect x="55" y="45" width="70" height="8" rx="2" fill="#22d3ee" opacity="0.7"/>
              <rect x="55" y="60" width="50" height="6" rx="2" fill="#64748b"/>
              <rect x="55" y="72" width="60" height="6" rx="2" fill="#64748b"/>
              <rect x="55" y="84" width="40" height="6" rx="2" fill="#64748b"/>
              <path d="M160 70 L190 70" stroke="#a78bfa" stroke-width="2" stroke-dasharray="4 3"/>
              <circle cx="210" cy="70" r="28" fill="#1a2538" stroke="#a78bfa" stroke-width="1.5"/>
              <path d="M200 70 L208 78 L222 62" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </div>
          <div class="intro-card-body">
            <h3>Plan definido</h3>
            <p>Una estrategia establece reglas claras de entrada, salida y tamaño de posición. Reduce la improvisación y el estrés emocional.</p>
          </div>
        </div>

        <!-- Adaptación -->
        <div class="intro-card">
          <div class="intro-card-visual intro-card-visual--full">
            <picture>
              <source type="image/webp" srcset="/assets/adaptacion-mercado-480.webp 480w, /assets/adaptacion-mercado-768.webp 768w, /assets/adaptacion-mercado.webp 1200w" sizes="(max-width: 768px) 100vw, 400px">
              <img src="/assets/adaptacion-mercado.jpg" alt="Análisis de swings: Higher Highs & Higher Lows (alcista) y Lower Highs & Lower Lows (bajista)" width="1200" height="655" loading="lazy" decoding="async">
            </picture>
          </div>
          <div class="intro-card-body">
            <h3>Adaptación al mercado</h3>
            <p>Cada estrategia funciona mejor en condiciones específicas: tendencia fuerte, rango lateral o alta volatilidad.</p>
          </div>
        </div>

        <!-- Gestión riesgo -->
        <div class="intro-card">
          <div class="intro-card-visual">
            <svg viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M160 25 L260 115 H60 Z" fill="#1a2538" stroke="#22d3ee" stroke-width="1.5"/>
              <path d="M160 45 L230 100 H90 Z" fill="#0d1522" stroke="#a78bfa" stroke-width="1.2"/>
              <circle cx="160" cy="85" r="12" fill="#22d3ee" opacity="0.9"/>
              <text x="154" y="90" fill="#070b12" font-size="12" font-weight="700" font-family="Inter">%</text>
            </svg>
          </div>
          <div class="intro-card-body">
            <h3>Gestión del riesgo</h3>
            <p>Toda estrategia seria incluye límites de pérdida, tamaño de posición y reglas de invalidación del trade.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
