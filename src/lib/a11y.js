// a11y.js — ESC cierra modales (doble-clic se mantiene), sin cambiar comportamiento desktop
export function initA11y() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const ve = document.getElementById('veOverlay');
    if (ve && ve.classList.contains('is-open')) {
      const video = document.getElementById('veVideo');
      try {
        if (video) video.pause();
      } catch {}
      ve.classList.remove('is-open');
      ve.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('ve-open');
    }
    const focus = document.getElementById('focusOverlay');
    if (focus && focus.classList.contains('is-open')) {
      focus.classList.remove('is-open');
      focus.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('panel-open');
    }
  });
}
