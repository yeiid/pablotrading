// Faq.js — sección FAQ con <details> nativo (accesible, sin JS, SEO-friendly)
export function Faq() {
  const items = [
    ['¿Necesito mucho dinero para empezar?', 'No. Puedes empezar con capital pequeño o en demo. Lo importante es el plan y la gestión del riesgo, no el tamaño inicial.'],
    ['¿Qué estrategia es mejor para principiantes?', 'DCA o HODL con plan de salida: requieren poco tiempo y evitan el ruido intradía. Añade complejidad solo cuando domines riesgo y registro de trades.'],
    ['¿Cuánto arriesgar por operación?', 'La regla estándar es 1–2% del capital por trade. Usa la calculadora de abajo para obtener tu tamaño de posición exacto.'],
    ['¿El apalancamiento es recomendable?', 'No para empezar: amplifica ganancias y pérdidas. Muchos traders pierden por usarlo sin gestión muy estricta.'],
    ['¿Cada cuánto actualizan esta guía?', 'Revisamos cifras y contenidos periódicamente. Mira la fecha de actualización al pie de la página.'],
  ];
  const html = items
    .map(
      ([q, a]) => `<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <summary itemprop="name">${q}</summary>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">${a}</span></div>
      </details>`
    )
    .join('');
  return `
  <section id="faq">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">Dudas frecuentes</span>
        <h2 class="section-title">Preguntas frecuentes</h2>
        <p class="section-desc">Respuestas rápidas a lo que más nos preguntan en TikTok y en la comunidad.</p>
      </div>
      <div class="faq-list fade-in" itemscope itemtype="https://schema.org/FAQPage">${html}</div>
    </div>
  </section>`;
}
