// focusPanel.js — panel de estrategia SOLO PC (>=769px), abrir con click, cerrar con doble-clic (PRESERVADO)
export function initFocusPanel() {
// Strategy Focus Panel — SOLO PC/desktop (nunca en celulares)
    (function () {
      // Activar únicamente en pantallas de escritorio (>= 769px)
      if (!window.matchMedia('(min-width: 769px)').matches) return;

      const overlay = document.getElementById('focusOverlay');
      const panel = document.getElementById('focusPanel');
      if (!overlay || !panel) return;

      let open = false;

      function openPanel(card) {
        const clone = card.cloneNode(true);
        clone.classList.remove('fade-in', 'visible');
        clone.style.cursor = 'default';
        clone.removeAttribute('data-openable');

        panel.innerHTML = '';
        panel.appendChild(clone);

        const hint = document.createElement('div');
        hint.className = 'focus-hint';
        hint.innerHTML = 'Doble clic aquí para cerrar · <kbd>doble clic</kbd>';
        panel.appendChild(hint);

        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('panel-open');
        open = true;
      }

      function closePanel() {
        if (!open) return;
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('panel-open');
        open = false;
        setTimeout(function () {
          if (!open) panel.innerHTML = '';
        }, 380);
      }

      // Clic simple en tarjetas → abrir (solo escritorio)
      document.querySelectorAll('.strategy-card').forEach(function (card) {
        card.setAttribute('data-openable', '1');
        card.style.cursor = 'pointer';
        card.addEventListener('click', function (e) {
          if (card.closest('#focusPanel')) return;
          e.preventDefault();
          openPanel(card);
        });
      });

      // Doble clic en el panel → cerrar
      panel.addEventListener('dblclick', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closePanel();
      });

      // No cerrar al hacer clic en el overlay
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
          e.stopPropagation();
        }
      });
    })();
}
