// Overlays.js — componente (HTML preservado verbatim del legacy)
export function Overlays() {
  return `<div class="ve-overlay" id="veOverlay" role="dialog" aria-modal="true" aria-labelledby="veTitle" aria-hidden="true">
    <div class="ve-panel">
      <div class="ve-header">
        <h3 class="ve-title" id="veTitle"><span></span> Video evidencias de trading</h3>
      </div>
      <div class="ve-body">
        <div class="ve-video-wrap">
          <video id="veVideo" controls playsinline preload="none" poster="/assets/evidencia-poster.jpg">
            <source data-src="/assets/evidencia.mp4" type="video/mp4">
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
        <p class="ve-caption">Evidencia real de operación · @davidtrading2</p>
        <p class="ve-hint">Doble clic aquí para cerrar · <kbd>doble clic</kbd></p>
      </div>
    </div>

  <!-- Strategy focus panel -->
  <div class="focus-overlay" id="focusOverlay" aria-hidden="true">
    <div class="focus-panel" id="focusPanel" role="dialog" aria-modal="true"></div>
  </div>`;
}
