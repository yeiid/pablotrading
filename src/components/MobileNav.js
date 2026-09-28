// MobileNav.js — drawer de navegación solo móvil (desktop intacto: nav-links se mantiene)
import content from '../data/content.json';

export function MobileNav() {
  const tiktok = content.site?.tiktok ?? 'https://www.tiktok.com/';
  return `
  <div class="mobile-nav" id="mobileNav" aria-hidden="true">
    <div class="mobile-nav-backdrop" data-close-nav></div>
    <div class="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Navegación">
      <button type="button" class="mobile-nav-close" data-close-nav aria-label="Cerrar menú">✕</button>
      <a href="#introduccion" data-close-nav>Introducción</a>
      <a href="#estrategias" data-close-nav>Estrategias</a>
      <a href="#comparativa" data-close-nav>Comparativa</a>
      <a href="#gestion-riesgo" data-close-nav>Gestión de Riesgo</a>
      <a href="#consejos" data-close-nav>Consejos</a>
      <a class="mobile-nav-cta" href="${tiktok}" target="_blank" rel="noopener noreferrer">Ver evidencias en TikTok</a>
    </div>
  </div>
  <button type="button" class="back-to-top" id="backToTop" aria-label="Volver arriba">↑</button>`;
}
