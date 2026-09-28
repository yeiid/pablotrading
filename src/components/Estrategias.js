// Estrategias.js — componente (HTML preservado verbatim del legacy)
export function Estrategias() {
  return `<!-- ESTRATEGIAS -->
  <section id="estrategias">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">Catálogo de estrategias</span>
        <h2 class="section-title">Principales estrategias de trading crypto</h2>
        <p class="section-desc">
          Desde las más simples y pasivas hasta las que requieren dedicación a tiempo completo. Elige según tu experiencia, tiempo disponible y tolerancia al riesgo.
        </p>
      </div>

      <div class="strategies-grid">

        <!-- 01 HODL -->
        <article class="strategy-card fade-in">
          <div class="strategy-visual">
            <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustración HODLing">
              <defs>
                <linearGradient id="hodlGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#22d3ee"/>
                  <stop offset="100%" stop-color="#34d399"/>
                </linearGradient>
              </defs>
              <!-- long rising line with hold -->
              <path d="M40 160 C120 150 180 140 240 100 C300 60 360 80 420 50 C500 20 580 40 680 30" stroke="url(#hodlGrad)" stroke-width="3" fill="none" stroke-linecap="round"/>
              <!-- hold zone -->
              <rect x="300" y="40" width="200" height="100" rx="8" fill="#22d3ee" fill-opacity="0.08" stroke="#22d3ee" stroke-opacity="0.3" stroke-dasharray="6 4"/>
              <text x="340" y="95" fill="#22d3ee" font-size="14" font-weight="600" font-family="Inter">HOLD</text>
              <circle cx="240" cy="100" r="6" fill="#22d3ee"/>
              <circle cx="680" cy="30" r="6" fill="#34d399"/>
              <text x="50" y="185" fill="#64748b" font-size="11" font-family="Inter">Comprar → Mantener a largo plazo</text>
            </svg>
          </div>
          <div class="strategy-content">
            <div class="strategy-top">
              <div class="strategy-number">01</div>
              <div class="strategy-meta">
                <h3>HODLing (Comprar y mantener)</h3>
                <div class="strategy-tags">
                  <span class="tag level-beginner">Principiante</span>
                  <span class="tag time">Meses – Años</span>
                  <span class="tag">Pasiva</span>
                </div>
              </div>
            </div>
            <p>Consiste en comprar criptomonedas con convicción a largo plazo y mantenerlas independientemente de las fluctuaciones de corto plazo. El término nace de un error de escritura de “hold” y se convirtió en un lema de la comunidad crypto.</p>
            <p>Ideal para quienes creen en el potencial a largo plazo de activos como Bitcoin o Ethereum y no desean operar activamente.</p>
            <div class="strategy-details">
              <div class="detail-box">
                <h4>Ventajas</h4>
                <ul>
                  <li>Muy simple de implementar</li>
                  <li>Bajo estrés operativo</li>
                  <li>Bajos costos de comisiones</li>
                  <li>Aprovecha ciclos alcistas largos</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Desventajas</h4>
                <ul>
                  <li>Requiere mucha paciencia</li>
                  <li>Exposición a caídas prolongadas</li>
                  <li>No genera liquidez a corto plazo</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Consejo clave</h4>
                <ul>
                  <li>Define una tesis de inversión</li>
                  <li>Establece reglas de salida</li>
                  <li>Diversifica entre pocos activos sólidos</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <!-- 02 DCA -->
        <article class="strategy-card fade-in">
          <div class="strategy-visual">
            <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustración DCA">
              <!-- price line wavy -->
              <path d="M50 80 Q120 40 180 90 T310 60 T440 100 T570 50 T680 70" stroke="#64748b" stroke-width="1.5" fill="none" opacity="0.5"/>
              <!-- DCA buys -->
              <g>
                <circle cx="100" cy="70" r="8" fill="#22d3ee"/>
                <text x="92" y="55" fill="#22d3ee" font-size="10" font-family="Inter">$</text>
                <circle cx="220" cy="95" r="8" fill="#22d3ee"/>
                <text x="212" y="80" fill="#22d3ee" font-size="10" font-family="Inter">$</text>
                <circle cx="340" cy="65" r="8" fill="#22d3ee"/>
                <text x="332" y="50" fill="#22d3ee" font-size="10" font-family="Inter">$</text>
                <circle cx="460" cy="85" r="8" fill="#22d3ee"/>
                <text x="452" y="70" fill="#22d3ee" font-size="10" font-family="Inter">$</text>
                <circle cx="580" cy="55" r="8" fill="#22d3ee"/>
                <text x="572" y="40" fill="#22d3ee" font-size="10" font-family="Inter">$</text>
              </g>
              <!-- average line -->
              <line x1="80" y1="140" x2="640" y2="140" stroke="#a78bfa" stroke-width="2" stroke-dasharray="8 5"/>
              <text x="50" y="165" fill="#a78bfa" font-size="12" font-weight="600" font-family="Inter">Precio promedio de entrada</text>
              <text x="50" y="185" fill="#64748b" font-size="11" font-family="Inter">Compras fijas periódicas → promedia el coste</text>
            </svg>
          </div>
          <div class="strategy-content">
            <div class="strategy-top">
              <div class="strategy-number">02</div>
              <div class="strategy-meta">
                <h3>Dollar Cost Averaging (DCA)</h3>
                <div class="strategy-tags">
                  <span class="tag level-beginner">Principiante</span>
                  <span class="tag time">Semanas – Años</span>
                  <span class="tag">Pasiva</span>
                </div>
              </div>
            </div>
            <p>Invertir una cantidad fija de dinero en una o varias criptomonedas a intervalos regulares (semanal, quincenal o mensual), sin importar el precio del momento. Elimina la necesidad de “timing” del mercado.</p>
            <p>Es una de las estrategias más recomendadas para principiantes y para quienes quieren acumular de forma disciplinada a lo largo del tiempo.</p>
            <div class="strategy-details">
              <div class="detail-box">
                <h4>Ventajas</h4>
                <ul>
                  <li>Reduce el impacto de la volatilidad</li>
                  <li>Fácil de automatizar</li>
                  <li>Disciplina sin emociones</li>
                  <li>Promedio de precio de entrada</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Desventajas</h4>
                <ul>
                  <li>Puede perder grandes subidas rápidas</li>
                  <li>En mercados bajistas acumula pérdidas latentes</li>
                  <li>Requiere constancia</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Consejo clave</h4>
                <ul>
                  <li>Define monto y frecuencia fijos</li>
                  <li>Elige activos líquidos y sólidos</li>
                  <li>Incluye un plan de toma de beneficios</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <!-- 03 Swing -->
        <article class="strategy-card fade-in">
          <div class="strategy-visual">
            <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustración Swing Trading">
              <path d="M40 140 C100 130 140 80 200 90 C260 100 280 50 340 60 C400 70 420 30 480 40 C540 50 560 90 620 70 C660 60 680 50 700 45" stroke="#22d3ee" stroke-width="2.5" fill="none"/>
              <!-- swing zones -->
              <rect x="160" y="70" width="90" height="50" rx="4" fill="#34d399" fill-opacity="0.15" stroke="#34d399" stroke-opacity="0.5"/>
              <text x="175" y="100" fill="#34d399" font-size="11" font-weight="600" font-family="Inter">Swing ↑</text>
              <rect x="400" y="25" width="90" height="50" rx="4" fill="#34d399" fill-opacity="0.15" stroke="#34d399" stroke-opacity="0.5"/>
              <text x="415" y="55" fill="#34d399" font-size="11" font-weight="600" font-family="Inter">Swing ↑</text>
              <circle cx="200" cy="90" r="5" fill="#22d3ee"/>
              <circle cx="340" cy="60" r="5" fill="#22d3ee"/>
              <circle cx="480" cy="40" r="5" fill="#22d3ee"/>
              <text x="50" y="180" fill="#64748b" font-size="11" font-family="Inter">Captura movimientos de varios días / semanas</text>
            </svg>
          </div>
          <div class="strategy-content">
            <div class="strategy-top">
              <div class="strategy-number">03</div>
              <div class="strategy-meta">
                <h3>Swing Trading</h3>
                <div class="strategy-tags">
                  <span class="tag level-intermediate">Intermedio</span>
                  <span class="tag time">Días – Semanas</span>
                  <span class="tag">Activa</span>
                </div>
              </div>
            </div>
            <p>Busca capturar movimientos de precio de varios días o semanas. El trader identifica una tendencia o un rango y mantiene la posición el tiempo necesario para que el movimiento se desarrolle, sin estar pendiente del mercado todo el día.</p>
            <p>Muy popular entre traders a tiempo parcial. Se apoya en análisis técnico (soportes, resistencias, medias móviles, RSI, patrones de velas).</p>
            <div class="strategy-details">
              <div class="detail-box">
                <h4>Ventajas</h4>
                <ul>
                  <li>No requiere dedicación full-time</li>
                  <li>Captura movimientos significativos</li>
                  <li>Menos comisiones que el day trading</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Desventajas</h4>
                <ul>
                  <li>Exposición overnight (gaps)</li>
                  <li>Requiere análisis técnico sólido</li>
                  <li>Puede haber periodos de lateralidad</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Consejo clave</h4>
                <ul>
                  <li>Define entrada, stop y objetivo</li>
                  <li>Usa timeframes 4H y diario</li>
                  <li>Respeta el ratio riesgo/beneficio ≥ 1:2</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <!-- 04 Day Trading -->
        <article class="strategy-card fade-in">
          <div class="strategy-visual">
            <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustración Day Trading">
              <!-- multiple short trades -->
              <path d="M40 100 L80 70 L120 90 L160 50 L200 80 L240 40 L280 75 L320 55 L360 90 L400 45 L440 80 L480 60 L520 95 L560 50 L600 70 L640 40 L680 65" stroke="#64748b" stroke-width="1.5" fill="none" opacity="0.4"/>
              <!-- trade markers -->
              <g>
                <line x1="80" y1="70" x2="80" y2="130" stroke="#34d399" stroke-width="2"/>
                <line x1="160" y1="50" x2="160" y2="130" stroke="#f87171" stroke-width="2"/>
                <line x1="240" y1="40" x2="240" y2="130" stroke="#34d399" stroke-width="2"/>
                <line x1="400" y1="45" x2="400" y2="130" stroke="#34d399" stroke-width="2"/>
                <line x1="560" y1="50" x2="560" y2="130" stroke="#f87171" stroke-width="2"/>
                <line x1="640" y1="40" x2="640" y2="130" stroke="#34d399" stroke-width="2"/>
              </g>
              <text x="50" y="155" fill="#34d399" font-size="11" font-family="Inter">▲ Win</text>
              <text x="120" y="155" fill="#f87171" font-size="11" font-family="Inter">▼ Loss</text>
              <text x="50" y="180" fill="#64748b" font-size="11" font-family="Inter">Múltiples operaciones intradía · Sin posición overnight</text>
            </svg>
          </div>
          <div class="strategy-content">
            <div class="strategy-top">
              <div class="strategy-number">04</div>
              <div class="strategy-meta">
                <h3>Day Trading</h3>
                <div class="strategy-tags">
                  <span class="tag level-advanced">Avanzado</span>
                  <span class="tag time">Minutos – Horas</span>
                  <span class="tag">Muy activa</span>
                </div>
              </div>
            </div>
            <p>Abrir y cerrar posiciones dentro del mismo día. El objetivo es aprovechar la volatilidad intradía sin mantener riesgo overnight. Requiere atención constante, disciplina y una gestión de riesgo muy estricta.</p>
            <p>En crypto, al operar 24/7, muchos day traders eligen sesiones de alta liquidez (apertura de EE.UU., Europa o Asia).</p>
            <div class="strategy-details">
              <div class="detail-box">
                <h4>Ventajas</h4>
                <ul>
                  <li>Sin riesgo overnight</li>
                  <li>Múltiples oportunidades diarias</li>
                  <li>Feedback rápido de resultados</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Desventajas</h4>
                <ul>
                  <li>Alto estrés y tiempo requerido</li>
                  <li>Comisiones y slippage relevantes</li>
                  <li>Fácil de sobreoperar</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Consejo clave</h4>
                <ul>
                  <li>Opera solo en pares líquidos</li>
                  <li>Limita el número de trades diarios</li>
                  <li>Usa stops siempre</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <!-- 05 Scalping -->
        <article class="strategy-card fade-in">
          <div class="strategy-visual">
            <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustración Scalping">
              <!-- tight price action -->
              <path d="M40 100 L60 95 L80 105 L100 92 L120 108 L140 90 L160 110 L180 88 L200 112 L220 85 L240 115 L260 82 L280 118 L300 80 L320 120 L340 78 L360 122 L380 75 L400 125 L420 72 L440 128 L460 70 L480 130 L500 68 L520 132 L540 65 L560 135 L580 62 L600 138 L620 60 L640 140 L660 58 L680 142" stroke="#22d3ee" stroke-width="1.5" fill="none"/>
              <!-- micro trades -->
              <g fill="#a78bfa" opacity="0.8">
                <rect x="95" y="88" width="12" height="20" rx="1"/>
                <rect x="175" y="85" width="12" height="25" rx="1"/>
                <rect x="255" y="80" width="12" height="30" rx="1"/>
                <rect x="335" y="75" width="12" height="35" rx="1"/>
                <rect x="415" y="70" width="12" height="40" rx="1"/>
                <rect x="495" y="65" width="12" height="45" rx="1"/>
                <rect x="575" y="60" width="12" height="50" rx="1"/>
              </g>
              <text x="50" y="175" fill="#64748b" font-size="11" font-family="Inter">Docenas de operaciones de segundos / minutos · Spreads críticos</text>
            </svg>
          </div>
          <div class="strategy-content">
            <div class="strategy-top">
              <div class="strategy-number">05</div>
              <div class="strategy-meta">
                <h3>Scalping</h3>
                <div class="strategy-tags">
                  <span class="tag level-advanced">Avanzado</span>
                  <span class="tag time">Segundos – Minutos</span>
                  <span class="tag">Muy activa</span>
                </div>
              </div>
            </div>
            <p>Estrategia de muy corto plazo que busca capturar movimientos mínimos de precio mediante muchas operaciones rápidas. El beneficio por trade es pequeño, por lo que el volumen de operaciones y las comisiones son críticos.</p>
            <p>Requiere plataformas de baja latencia, spreads estrechos y una ejecución casi perfecta. No es recomendable para principiantes.</p>
            <div class="strategy-details">
              <div class="detail-box">
                <h4>Ventajas</h4>
                <ul>
                  <li>Exposición al mercado muy corta</li>
                  <li>Muchas oportunidades diarias</li>
                  <li>Menor impacto de noticias grandes</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Desventajas</h4>
                <ul>
                  <li>Comisiones pueden erosionar ganancias</li>
                  <li>Exige concentración extrema</li>
                  <li>Alto riesgo de sobreoperación</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Consejo clave</h4>
                <ul>
                  <li>Elige exchanges con fees bajos</li>
                  <li>Opera solo en alta liquidez</li>
                  <li>Límite diario de pérdidas estricto</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <!-- 06 Trend Following -->
        <article class="strategy-card fade-in">
          <div class="strategy-visual">
            <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustración Trend Following">
              <!-- EMA lines -->
              <path d="M40 150 Q150 140 250 100 T450 60 T680 30" stroke="#22d3ee" stroke-width="2.5" fill="none"/>
              <path d="M40 160 Q150 155 250 130 T450 90 T680 55" stroke="#a78bfa" stroke-width="2" fill="none" stroke-dasharray="6 4"/>
              <!-- arrows showing direction -->
              <path d="M300 90 L340 70 L320 75" stroke="#34d399" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <path d="M480 55 L520 35 L500 40" stroke="#34d399" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <text x="100" y="175" fill="#22d3ee" font-size="11" font-family="Inter">EMA rápida</text>
              <text x="250" y="175" fill="#a78bfa" font-size="11" font-family="Inter">EMA lenta</text>
              <text x="50" y="195" fill="#64748b" font-size="11" font-family="Inter">La tendencia es tu amiga · Entrada en dirección del impulso</text>
            </svg>
          </div>
          <div class="strategy-content">
            <div class="strategy-top">
              <div class="strategy-number">06</div>
              <div class="strategy-meta">
                <h3>Trend Following (Seguimiento de tendencia)</h3>
                <div class="strategy-tags">
                  <span class="tag level-intermediate">Intermedio</span>
                  <span class="tag time">Días – Meses</span>
                  <span class="tag">Activa</span>
                </div>
              </div>
            </div>
            <p>Se basa en la idea de que “la tendencia es tu amiga”: cuando un activo está subiendo o bajando con fuerza, es más probable que continúe en esa dirección durante un tiempo. Se utilizan medias móviles, líneas de tendencia, ADX o breakouts para identificar la dirección.</p>
            <p>Funciona especialmente bien en mercados con tendencias claras (como los ciclos alcistas de Bitcoin). En rangos laterales suele generar falsas señales.</p>
            <div class="strategy-details">
              <div class="detail-box">
                <h4>Ventajas</h4>
                <ul>
                  <li>Captura movimientos grandes</li>
                  <li>Reglas relativamente claras</li>
                  <li>Buena relación riesgo/recompensa</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Desventajas</h4>
                <ul>
                  <li>Muchas señales falsas en lateralidad</li>
                  <li>Entradas tardías frecuentes</li>
                  <li>Requiere stops amplios en tendencia</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Consejo clave</h4>
                <ul>
                  <li>Usa filtro de tendencia (EMA 50/200)</li>
                  <li>Entra en pullbacks, no en rupturas extremas</li>
                  <li>Trailing stop para proteger ganancias</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <!-- 07 Breakout -->
        <article class="strategy-card fade-in">
          <div class="strategy-visual">
            <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustración Breakout">
              <!-- consolidation range -->
              <rect x="80" y="70" width="280" height="70" rx="4" fill="#1a2538" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 3"/>
              <text x="160" y="110" fill="#64748b" font-size="12" font-family="Inter">Consolidación</text>
              <!-- breakout candle -->
              <path d="M360 100 L400 40 L440 50 L500 20 L560 30 L620 15 L680 25" stroke="#22d3ee" stroke-width="2.5" fill="none"/>
              <circle cx="360" cy="100" r="7" fill="#34d399" stroke="#070b12" stroke-width="2"/>
              <text x="370" y="130" fill="#34d399" font-size="12" font-weight="600" font-family="Inter">BREAKOUT</text>
              <!-- resistance line -->
              <line x1="80" y1="70" x2="360" y2="70" stroke="#f87171" stroke-width="1.5" opacity="0.7"/>
              <text x="50" y="180" fill="#64748b" font-size="11" font-family="Inter">Ruptura de rango con volumen → inicio de movimiento fuerte</text>
            </svg>
          </div>
          <div class="strategy-content">
            <div class="strategy-top">
              <div class="strategy-number">07</div>
              <div class="strategy-meta">
                <h3>Breakout Trading</h3>
                <div class="strategy-tags">
                  <span class="tag level-intermediate">Intermedio</span>
                  <span class="tag time">Horas – Días</span>
                  <span class="tag">Activa</span>
                </div>
              </div>
            </div>
            <p>Consiste en identificar rangos de consolidación (soportes y resistencias claros) y entrar cuando el precio rompe esos niveles con volumen significativo. La idea es capturar el inicio de un movimiento direccional fuerte.</p>
            <p>En crypto, los breakouts suelen ser violentos. Confirmar con volumen y esperar un posible retest del nivel roto mejora la calidad de las entradas.</p>
            <div class="strategy-details">
              <div class="detail-box">
                <h4>Ventajas</h4>
                <ul>
                  <li>Entradas en el inicio del movimiento</li>
                  <li>Potencial de grandes impulsos</li>
                  <li>Stops relativamente claros</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Desventajas</h4>
                <ul>
                  <li>Falsos breakouts (fakeouts)</li>
                  <li>Puede haber mucho ruido</li>
                  <li>Requiere confirmación de volumen</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Consejo clave</h4>
                <ul>
                  <li>Espera cierre de vela por encima/debajo</li>
                  <li>Confirma con volumen alto</li>
                  <li>Define invalidación clara</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <!-- 08 Mean Reversion -->
        <article class="strategy-card fade-in">
          <div class="strategy-visual">
            <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustración Mean Reversion">
              <!-- range bounds -->
              <line x1="60" y1="50" x2="660" y2="50" stroke="#f87171" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.7"/>
              <line x1="60" y1="150" x2="660" y2="150" stroke="#34d399" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.7"/>
              <line x1="60" y1="100" x2="660" y2="100" stroke="#a78bfa" stroke-width="1.5" opacity="0.5"/>
              <!-- oscillating price -->
              <path d="M60 100 Q120 40 180 100 T300 100 T420 100 T540 100 T660 100" stroke="#22d3ee" stroke-width="2.5" fill="none"/>
              <text x="670" y="55" fill="#f87171" font-size="10" font-family="Inter">Resistencia</text>
              <text x="670" y="155" fill="#34d399" font-size="10" font-family="Inter">Soporte</text>
              <text x="670" y="105" fill="#a78bfa" font-size="10" font-family="Inter">Media</text>
              <text x="50" y="180" fill="#64748b" font-size="11" font-family="Inter">Compra en soporte · Vende en resistencia · Vuelta a la media</text>
            </svg>
          </div>
          <div class="strategy-content">
            <div class="strategy-top">
              <div class="strategy-number">08</div>
              <div class="strategy-meta">
                <h3>Mean Reversion y Trading en Rango</h3>
                <div class="strategy-tags">
                  <span class="tag level-intermediate">Intermedio</span>
                  <span class="tag time">Horas – Días</span>
                  <span class="tag">Activa</span>
                </div>
              </div>
            </div>
            <p>Apuesta a que los precios extremos tienden a volver hacia su media. En mercados laterales, se compra cerca del soporte y se vende cerca de la resistencia. Indicadores como RSI, Bandas de Bollinger o estocástico ayudan a identificar zonas de sobrecompra y sobreventa.</p>
            <p>Funciona bien cuando no hay una tendencia clara. Es peligrosa si se aplica dentro de una tendencia fuerte.</p>
            <div class="strategy-details">
              <div class="detail-box">
                <h4>Ventajas</h4>
                <ul>
                  <li>Buen rendimiento en lateralidad</li>
                  <li>Entradas y salidas definidas</li>
                  <li>Alta tasa de acierto posible</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Desventajas</h4>
                <ul>
                  <li>Falla en tendencias fuertes</li>
                  <li>Puede atrapar en rupturas</li>
                  <li>Requiere identificar bien el régimen</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Consejo clave</h4>
                <ul>
                  <li>Usa filtro de régimen (ADX bajo)</li>
                  <li>Stops más allá del extremo del rango</li>
                  <li>No pelees contra la tendencia</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <!-- 09 Grid -->
        <article class="strategy-card fade-in">
          <div class="strategy-visual">
            <picture><source type="image/webp" srcset="/assets/grid-eurusd-480.webp 480w, /assets/grid-eurusd-768.webp 768w, /assets/grid-eurusd.webp 1028w" sizes="(max-width: 768px) 100vw, 720px"><img src="/assets/grid-eurusd.jpg" alt="EURUSD Grid Trading Strategy" width="1028" height="564" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;" loading="lazy" decoding="async"></picture>
          </div>
          <div class="strategy-content">
            <div class="strategy-top">
              <div class="strategy-number">09</div>
              <div class="strategy-meta">
                <h3>Grid Trading</h3>
                <div class="strategy-tags">
                  <span class="tag level-intermediate">Intermedio</span>
                  <span class="tag time">Automático</span>
                  <span class="tag">Bot / Semi-pasiva</span>
                </div>
              </div>
            </div>
            <p>Se colocan órdenes de compra y venta a intervalos regulares por encima y por debajo del precio actual, formando una “rejilla”. Cuando el precio baja, se compra; cuando sube, se vende. Ideal para mercados laterales y suele ejecutarse con bots.</p>
            <p>Genera pequeños beneficios repetidos siempre que el precio oscile dentro del rango definido. Si el precio se va en una dirección fuerte, la estrategia puede acumular una posición en pérdida.</p>
            <div class="strategy-details">
              <div class="detail-box">
                <h4>Ventajas</h4>
                <ul>
                  <li>Automatizable</li>
                  <li>Buen rendimiento en rangos</li>
                  <li>No requiere timing perfecto</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Desventajas</h4>
                <ul>
                  <li>Pérdidas en tendencias fuertes</li>
                  <li>Capital inmovilizado</li>
                  <li>Requiere ajustes de parámetros</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Consejo clave</h4>
                <ul>
                  <li>Define rango realista</li>
                  <li>Usa stop de emergencia</li>
                  <li>Monitorea y ajusta el grid</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <!-- 10 Arbitraje -->
        <article class="strategy-card fade-in">
          <div class="strategy-visual">
            <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustración Arbitraje">
              <!-- two exchanges -->
              <rect x="80" y="40" width="180" height="100" rx="10" fill="#1a2538" stroke="#22d3ee" stroke-width="1.5"/>
              <text x="115" y="75" fill="#22d3ee" font-size="13" font-weight="600" font-family="Inter">Exchange A</text>
              <text x="125" y="105" fill="#f1f5f9" font-size="20" font-weight="700" font-family="JetBrains Mono">$64,200</text>

              <rect x="460" y="40" width="180" height="100" rx="10" fill="#1a2538" stroke="#a78bfa" stroke-width="1.5"/>
              <text x="495" y="75" fill="#a78bfa" font-size="13" font-weight="600" font-family="Inter">Exchange B</text>
              <text x="505" y="105" fill="#f1f5f9" font-size="20" font-weight="700" font-family="JetBrains Mono">$64,450</text>

              <!-- arrow -->
              <path d="M280 90 L420 90" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrow)"/>
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0 0 L6 3 L0 6 Z" fill="#34d399"/>
                </marker>
              </defs>
              <text x="310" y="75" fill="#34d399" font-size="12" font-weight="600" font-family="Inter">+ $250</text>
              <text x="50" y="175" fill="#64748b" font-size="11" font-family="Inter">Compra donde está barato · Vende donde está caro · Diferencial = beneficio</text>
            </svg>
          </div>
          <div class="strategy-content">
            <div class="strategy-top">
              <div class="strategy-number">10</div>
              <div class="strategy-meta">
                <h3>Arbitraje</h3>
                <div class="strategy-tags">
                  <span class="tag level-advanced">Avanzado</span>
                  <span class="tag time">Segundos – Minutos</span>
                  <span class="tag">Técnica</span>
                </div>
              </div>
            </div>
            <p>Consiste en aprovechar diferencias de precio del mismo activo en distintos exchanges o mercados. Se compra donde está más barato y se vende donde está más caro, casi de forma simultánea, para capturar el diferencial.</p>
            <p>En la práctica requiere capital en varias plataformas, velocidad de ejecución, y tener en cuenta comisiones, tiempos de retiro y riesgos de contraparte. Cada vez es más competitivo.</p>
            <div class="strategy-details">
              <div class="detail-box">
                <h4>Ventajas</h4>
                <ul>
                  <li>Riesgo de mercado bajo (en teoría)</li>
                  <li>Beneficios relativamente predecibles</li>
                  <li>No depende de dirección del precio</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Desventajas</h4>
                <ul>
                  <li>Spreads cada vez más pequeños</li>
                  <li>Riesgo operativo y de exchange</li>
                  <li>Requiere capital y velocidad</li>
                </ul>
              </div>
              <div class="detail-box">
                <h4>Consejo clave</h4>
                <ul>
                  <li>Calcula fees y transferencias</li>
                  <li>Diversifica exchanges confiables</li>
                  <li>Automatiza si es posible</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>`;
}
