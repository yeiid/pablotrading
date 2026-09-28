import { readFileSync } from 'node:fs';

// Valida src/data/content.json: heroStats (3) + comparativa (10) con campos obligatorios.
const raw = readFileSync(new URL('../src/data/content.json', import.meta.url), 'utf-8');
const d = JSON.parse(raw);
const fail = (m) => {
  console.error('content.json inválido: ' + m);
  process.exit(1);
};
if (!Array.isArray(d.heroStats) || d.heroStats.length !== 3) fail('heroStats debe tener 3 entradas');
d.heroStats.forEach((s, i) => {
  if (!s.value || !s.label) fail('heroStats[' + i + '] sin value/label');
});
if (!Array.isArray(d.comparativa) || d.comparativa.length !== 10) fail('comparativa debe tener 10 filas');
d.comparativa.forEach((r, i) => {
  ['estrategia', 'nivel', 'horizonte', 'tiempo', 'riesgo'].forEach((k) => {
    if (!r[k]) fail('comparativa[' + i + '].' + k + ' vacío');
  });
});
console.log('content.json OK: heroStats=3, comparativa=10');
