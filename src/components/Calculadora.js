// Calculadora.js — riesgo 1-2% por operación (aislada, no toca estrategias)
export function Calculadora() {
  return `
  <section id="calculadora">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">Herramienta</span>
        <h2 class="section-title">Calculadora de riesgo</h2>
        <p class="section-desc">Nunca arriesgues más del 1–2% por operación. Introduce tu capital y tu stop para ver tu tamaño de posición.</p>
      </div>
      <div class="calc-grid fade-in">
        <div class="calc-card">
          <label for="calcCapital">Capital total (USDT)</label>
          <input id="calcCapital" type="number" min="0" step="any" value="1000" inputmode="decimal">
          <label for="calcRisk">Riesgo por operación (%)</label>
          <input id="calcRisk" type="number" min="0.1" max="100" step="0.1" value="1">
          <label for="calcStop">Stop-loss (% distancia a entrada)</label>
          <input id="calcStop" type="number" min="0.1" step="0.1" value="5">
          <div class="calc-result" id="calcResult" aria-live="polite">—</div>
          <p class="disclaimer">Contenido educativo. No es asesoría financiera. El trading con criptomonedas conlleva riesgo de pérdida total.</p>
        </div>
        <div class="calc-card">
          <h3 style="font-size:1.05rem;margin-bottom:8px;">¿Cómo leer el resultado?</h3>
          <p style="color:var(--text-secondary);font-size:0.92rem;">Si tu capital es 1000 USDT, arriesgas 1% (10 USDT) y tu stop está a 5%, tu posición máxima es 200 USDT. Así, si salta el stop, pierdes 10 USDT y proteges la cuenta de rachas perdedoras.</p>
          <p style="color:var(--text-secondary);font-size:0.92rem;margin-top:10px;">Combínalo con stop-loss siempre definido y límite de pérdidas diarias (ver Gestión del riesgo).</p>
        </div>
      </div>
    </div>
  </section>`;
}
