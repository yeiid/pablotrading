// Riesgo.js — componente (HTML preservado verbatim del legacy)
export function Riesgo() {
  return `<!-- GESTIÓN DE RIESGO -->
  <section id="gestion-riesgo">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">Pilar fundamental</span>
        <h2 class="section-title">Gestión del riesgo</h2>
        <p class="section-desc">
          Ninguna estrategia funciona sin una gestión de riesgo sólida. Estos son los principios esenciales que todo trader debería aplicar.
        </p>
      </div>

      <div class="risk-grid fade-in">
        <div class="risk-card">
          <div class="risk-visual">
            <svg viewBox="0 0 120 70" fill="none" aria-hidden="true">
              <rect x="15" y="20" width="20" height="40" rx="3" fill="#22d3ee" opacity="0.3"/>
              <rect x="45" y="10" width="20" height="50" rx="3" fill="#22d3ee" opacity="0.5"/>
              <rect x="75" y="30" width="20" height="30" rx="3" fill="#22d3ee" opacity="0.8"/>
              <text x="20" y="15" fill="#64748b" font-size="8" font-family="Inter">1%</text>
            </svg>
          </div>
          <div class="risk-body">
            <h3>📐 Tamaño de posición</h3>
            <p>Nunca arriesgues más de un 1–2% de tu capital total en una sola operación. Así, una racha de pérdidas no destruye la cuenta.</p>
          </div>
        </div>

        <div class="risk-card">
          <div class="risk-visual">
            <svg viewBox="0 0 120 70" fill="none" aria-hidden="true">
              <path d="M20 50 L50 20 L80 45 L100 15" stroke="#64748b" stroke-width="2" fill="none"/>
              <line x1="50" y1="20" x2="50" y2="55" stroke="#f87171" stroke-width="2.5" stroke-dasharray="4 2"/>
              <circle cx="50" cy="20" r="4" fill="#f87171"/>
              <text x="55" y="35" fill="#f87171" font-size="9" font-family="Inter">SL</text>
            </svg>
          </div>
          <div class="risk-body">
            <h3>🛑 Stop Loss</h3>
            <p>Define siempre un nivel de invalidación del trade. El stop no es opcional: es la herramienta que limita el daño de los trades perdedores.</p>
          </div>
        </div>

        <div class="risk-card">
          <div class="risk-visual">
            <svg viewBox="0 0 120 70" fill="none" aria-hidden="true">
              <rect x="25" y="35" width="25" height="25" rx="3" fill="#f87171" opacity="0.7"/>
              <text x="30" y="52" fill="#fff" font-size="10" font-weight="700" font-family="Inter">1</text>
              <text x="55" y="50" fill="#64748b" font-size="14" font-family="Inter">:</text>
              <rect x="65" y="15" width="35" height="45" rx="3" fill="#34d399" opacity="0.7"/>
              <text x="75" y="42" fill="#fff" font-size="12" font-weight="700" font-family="Inter">2+</text>
            </svg>
          </div>
          <div class="risk-body">
            <h3>⚖️ Ratio Riesgo/Beneficio</h3>
            <p>Busca operaciones donde el beneficio potencial sea al menos el doble del riesgo asumido (1:2 o mejor). Así puedes ser rentable incluso con menos del 50% de aciertos.</p>
          </div>
        </div>

        <div class="risk-card">
          <div class="risk-visual">
            <svg viewBox="0 0 120 70" fill="none" aria-hidden="true">
              <circle cx="60" cy="35" r="25" stroke="#f87171" stroke-width="3" fill="none" stroke-dasharray="60 100"/>
              <text x="48" y="40" fill="#f87171" font-size="12" font-weight="700" font-family="Inter">MAX</text>
            </svg>
          </div>
          <div class="risk-body">
            <h3>📉 Límite de pérdidas diarias</h3>
            <p>Establece un máximo de pérdida diaria o semanal. Al alcanzarlo, deja de operar. Protege tu capital y tu estado mental.</p>
          </div>
        </div>

        <div class="risk-card">
          <div class="risk-visual">
            <svg viewBox="0 0 120 70" fill="none" aria-hidden="true">
              <circle cx="60" cy="32" r="18" fill="#1a2538" stroke="#a78bfa" stroke-width="2"/>
              <path d="M52 32 Q60 20 68 32" stroke="#a78bfa" stroke-width="2" fill="none"/>
              <circle cx="54" cy="28" r="2" fill="#a78bfa"/>
              <circle cx="66" cy="28" r="2" fill="#a78bfa"/>
              <path d="M40 55 Q60 45 80 55" stroke="#64748b" stroke-width="1.5" fill="none"/>
            </svg>
          </div>
          <div class="risk-body">
            <h3>🧠 Control emocional</h3>
            <p>El FOMO, la venganza y la euforia son enemigos del trader. Opera solo cuando el setup cumple tus reglas, no cuando sientes la necesidad de “hacer algo”.</p>
          </div>
        </div>

        <div class="risk-card">
          <div class="risk-visual">
            <svg viewBox="0 0 120 70" fill="none" aria-hidden="true">
              <rect x="25" y="15" width="70" height="45" rx="4" fill="#1a2538" stroke="#22d3ee" stroke-width="1.5"/>
              <line x1="35" y1="28" x2="85" y2="28" stroke="#64748b" stroke-width="1.5"/>
              <line x1="35" y1="38" x2="75" y2="38" stroke="#64748b" stroke-width="1.5"/>
              <line x1="35" y1="48" x2="65" y2="48" stroke="#64748b" stroke-width="1.5"/>
            </svg>
          </div>
          <div class="risk-body">
            <h3>📝 Registro de trades</h3>
            <p>Lleva un journal: anota por qué entraste, qué pasó y qué aprendiste. Es la mejor herramienta de mejora continua.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
