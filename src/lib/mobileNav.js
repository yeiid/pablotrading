// mobileNav.js — hamburguesa + drawer + back-to-top (solo mejora móvil; desktop no cambia)
export function initMobileNav() {
  const btn = document.getElementById('mobileNavBtn');
  const nav = document.getElementById('mobileNav');
  const panel = nav ? nav.querySelector('.mobile-nav-panel') : null;
  const top = document.getElementById('backToTop');
  if (!nav || !panel) return;
  let open = false;
  let lastFocus = null;

  function setOpen(v) {
    open = v;
    nav.classList.toggle('is-open', v);
    nav.setAttribute('aria-hidden', v ? 'false' : 'true');
    document.body.classList.toggle('nav-open', v);
    if (btn) btn.setAttribute('aria-expanded', v ? 'true' : 'false');
    if (v) {
      lastFocus = document.activeElement;
      const first = panel.querySelector('a, button');
      if (first) first.focus();
    } else if (lastFocus && lastFocus.focus) {
      lastFocus.focus();
    }
  }

  if (btn) btn.addEventListener('click', () => setOpen(!open));
  nav.querySelectorAll('[data-close-nav]').forEach((el) =>
    el.addEventListener('click', () => setOpen(false))
  );
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) setOpen(false);
  });

  // Back-to-top
  if (top) {
    const onScroll = () => top.classList.toggle('is-visible', window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}
