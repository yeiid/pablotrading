// main.js — entry Vite: importa estilos + monta componentes en orden legacy
import './styles/global.css';
import './styles/tokens.css';
import './styles/responsive.css';
import './styles/seo-a11y.css';

import { Background } from './components/Background.js';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Intro } from './components/Intro.js';
import { Estrategias } from './components/Estrategias.js';
import { Comparativa } from './components/Comparativa.js';
import { Riesgo } from './components/Riesgo.js';
import { Consejos } from './components/Consejos.js';
import { Faq } from './components/Faq.js';
import { Calculadora } from './components/Calculadora.js';
import { Footer } from './components/Footer.js';
import { Overlays } from './components/Overlays.js';
import { MobileNav } from './components/MobileNav.js';

import { initReveal } from './lib/reveal.js';
import { initMobileNav } from './lib/mobileNav.js';
import { initA11y } from './lib/a11y.js';
import { initCalculadora } from './lib/calculadora.js';

// Orden idéntico al legacy + aditivos al final de su sección (FAQ/Calculadora antes del footer)
document.querySelector('#app').innerHTML = `
  ${Background()}
  ${Header()}
  ${Hero()}
  ${Intro()}
  ${Estrategias()}
  ${Comparativa()}
  ${Riesgo()}
  ${Consejos()}
  ${Faq()}
  ${Calculadora()}
  ${Footer()}
  ${Overlays()}
  ${MobileNav()}
`;

// Efectos base: siempre
initReveal();
initMobileNav();
initA11y();
initCalculadora();

// Efectos solo-PC: carga diferida para no penalizar móvil (mismo comportamiento en desktop)
if (window.matchMedia('(min-width: 769px)').matches) {
  Promise.all([import('./lib/focusPanel.js'), import('./lib/videoModal.js')]).then(
    ([focus, ve]) => {
      focus.initFocusPanel();
      ve.initVideoModal();
    }
  );
}
