// videoModal.js — modal video SOLO PC, autoplay al abrir, cerrar con doble-clic (PRESERVADO)
export function initVideoModal() {
// Video evidencias — solo PC · cerrar con doble clic (sin X)
    (function () {
      if (!window.matchMedia('(min-width: 769px)').matches) return;

      const btn = document.getElementById('videoEvidenceBtn');
      const overlay = document.getElementById('veOverlay');
      const panel = overlay ? overlay.querySelector('.ve-panel') : null;
      const video = document.getElementById('veVideo');
      if (!btn || !overlay || !panel || !video) return;

      function ensureSrc() {
        const src = video.querySelector('source[data-src]');
        if (src && !src.getAttribute('src')) {
          src.setAttribute('src', src.getAttribute('data-src'));
          video.load();
        }
      }

      function openVe() {
        ensureSrc();
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('ve-open');
        try {
          video.currentTime = 0;
          video.muted = false;
          const p = video.play();
          if (p && typeof p.catch === 'function') p.catch(function () {});
        } catch (e) {}
      }

      function closeVe() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('ve-open');
        try {
          video.pause();
          video.currentTime = 0;
        } catch (e) {}
      }

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openVe();
      });

      // Cerrar solo con doble clic en el panel (como las explicaciones)
      panel.addEventListener('dblclick', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeVe();
      });

      // No cerrar con clic simple en el overlay
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
          e.stopPropagation();
        }
      });
    })();
}
