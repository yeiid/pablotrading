// calculadora.js — lógica de la calculadora de riesgo (separada para que funcione con innerHTML)
export function initCalculadora() {
  const cap = document.getElementById('calcCapital');
  const risk = document.getElementById('calcRisk');
  const stop = document.getElementById('calcStop');
  const out = document.getElementById('calcResult');
  if (!cap || !risk || !stop || !out) return;
  function update() {
    const c = parseFloat(cap.value);
    const r = parseFloat(risk.value);
    const s = parseFloat(stop.value);
    if (!c || !r || !s || c <= 0 || r <= 0 || s <= 0) {
      out.textContent = '—';
      return;
    }
    const riskAmt = c * (r / 100);
    const size = riskAmt / (s / 100);
    out.textContent =
      'Posición máx: ' + size.toFixed(2) + ' USDT · Riesgo: ' + riskAmt.toFixed(2) + ' USDT';
  }
  [cap, risk, stop].forEach((el) => el.addEventListener('input', update));
  update();
}
