// Comparativa.js — tabla 100% data-driven desde content.json
// Para actualizar cifras: edita src/data/content.json -> comparativa[]
import content from '../data/content.json';

export function Comparativa() {
  const rows = content.comparativa
    .map(
      (r) => `
            <tr>
              <td data-label="Estrategia">${r.estrategia}</td>
              <td data-label="Nivel">${r.nivel}</td>
              <td data-label="Horizonte">${r.horizonte}</td>
              <td data-label="Tiempo">${r.tiempo}</td>
              <td data-label="Riesgo">${r.riesgo}</td>
            </tr>`
    )
    .join('');

  return `
  <section id="comparativa">
    <div class="container">
      <div class="section-header fade-in">
        <span class="section-label">Visión general</span>
        <h2 class="section-title">Comparativa rápida de estrategias</h2>
        <p class="section-desc">
          Resumen orientativo para ayudarte a elegir según tu perfil y disponibilidad de tiempo.
        </p>
      </div>

      <div class="table-wrapper fade-in">
        <table data-editable="comparativa">
          <thead>
            <tr>
              <th>Estrategia</th>
              <th>Nivel</th>
              <th>Horizonte</th>
              <th>Tiempo requerido</th>
              <th>Riesgo típico</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
      <p style="margin-top: 12px; font-size: 0.84rem; color: var(--text-muted);">
        ${content.comparativaNota}
      </p>
    </div>
  </section>`;
}
