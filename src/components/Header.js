// Header.js — componente (HTML preservado verbatim del legacy)
export function Header() {
  return `<!-- HEADER -->
  <header>
    <nav class="container">
      <div class="logo" role="img" aria-label="davidtrading.com">
        <span class="logo-icon">
          <picture>
            <source type="image/webp" srcset="/assets/logo-480.webp 480w, /assets/logo-768.webp 768w, /assets/logo.webp 1080w" sizes="44px">
            <img src="/assets/logo.jpg" alt="Logo davidtrading.com" width="44" height="44" decoding="async">
          </picture>
        </span>
        <span class="logo-text">davidtrading.com</span>
      </div>
      <div class="nav-right">
        <ul class="nav-links">
          <li><a href="#introduccion">Introducción</a></li>
          <li><a href="#estrategias">Estrategias</a></li>
          <li><a href="#comparativa">Comparativa</a></li>
          <li><a href="#gestion-riesgo">Gestión de Riesgo</a></li>
          <li><a href="#consejos">Consejos</a></li>
        </ul>
        <!-- Solo PC: Video evidencias de trading (al lado de Consejos) -->
        <div class="video-evidence-wrap">
          <button type="button" class="video-evidence-btn" id="videoEvidenceBtn" aria-haspopup="dialog" aria-controls="veOverlay" aria-label="Abrir video evidencias de trading">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="3" stroke="#22d3ee" stroke-width="1.6"/>
              <path d="M10 9.5v5l4.5-2.5L10 9.5z" fill="#22d3ee"/>
            </svg>
            <span class="ve-label">Video evidencias de trading</span>
          </button>
        </div>
        <button type="button" class="mobile-nav-btn" id="mobileNavBtn" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobileNav">☰</button>
      </div>
    </nav>
  </header>`;
}
