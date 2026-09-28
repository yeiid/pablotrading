# davidtrading.com — Vite

Migración del monolito `index.html` a Vite + Vanilla JS.
Cero cambios visuales en desktop: CSS y JS legacy preservados, solo reorganizados + capas aditivas.

## Estructura

```
index.html              # shell Vite (SEO: canonical, OG/Twitter, JSON-LD, preload hero)
public/assets/          # JPG + WebP responsive (-480/-768/full) + poster video + evidencia.mp4
public/robots.txt       # robots (bloquea /admin.html)
public/admin.html       # admin local solo-dev para editar cifras sin tocar JSON
src/main.js             # monta 12 componentes + inits (overlays PC en chunk diferido)
src/styles/global.css   # CSS legacy verbatim (bg ahora image-set webp+jpg)
src/styles/tokens.css   # variables fluidas del sistema responsive
src/styles/responsive.css # breakpoints 360/480/768/1024/1280, tabla-cards, drawer, back-to-top, reduced-motion
src/styles/seo-a11y.css # skip-link, FAQ, calculadora
src/components/         # Background, Header(+hamburguesa), Hero(picture), Intro(picture),
                        # Estrategias(picture grid), Comparativa(data-label), Riesgo, Consejos,
                        # Faq, Calculadora, Footer, Overlays(video lazy), MobileNav
src/data/content.json   # ★ ÚNICO sitio para actualizar cifras/textos (+ updatedAt, validado por script)
src/lib/                # reveal, focusPanel, videoModal (verbatim), mobileNav, a11y (ESC), calculadora
scripts/validate-content.mjs # valida content.json (lo corre `npm run build`)
legacy/                 # backup del estado anterior (no se despliega)
```

## Cómo actualizar cifras de la UI

Opción A — directa: edita **`src/data/content.json`** y guarda (Vite recarga solo).
- `heroStats[]` → 3 tarjetas del hero · `comparativa[]` → 10 filas · `comparativaNota`, `hero.*`, `site.*`, `updatedAt`

Opción B — visual (solo dev): abre `http://localhost:5173/admin.html`, edita, pulsa **Generar JSON** y pega el resultado en `content.json`.

```bash
npm run dev       # desarrollo con HMR en http://localhost:5173
npm run validate  # valida content.json (3 heroStats, 10 filas completas)
npm run build     # valida + genera dist/ listo para hosting estático
npm run preview   # sirve dist/ en http://localhost:4173
```

## Sistema responsive

- Breakpoints: 360 / 480 / 768 / 1024 / 1280 + `safe-area-inset` + tap targets ≥44px.
- Móvil: drawer hamburguesa (las 5 secciones + CTA TikTok, con focus + ESC), tabla comparativa → cards con `data-label`, hero-stats a 1 columna en ≤480px, sin scroll-X.
- Desktop intacto: `nav-links`, hovers, `money-rain`, modales con doble-clic.

## Rendimiento

- Imágenes `<picture>` WebP + `srcset/sizes`, hero con `fetchpriority=high` + preload, resto `lazy+async`.
- Video con `preload="none"` + poster, `src` inyectado solo al abrir el modal (PC); en móvil no se descarga.
- `content-visibility:auto` en cards, `pc-overlays` en chunk diferido solo ≥769px, CSS con `image-set`.

## Garantías de fidelidad

- Clases, keyframes (`money-fall`), `backdrop-filter`, `fade-in` + `IntersectionObserver(0.08)` intactos.
- `prefers-reduced-motion` apaga animaciones solo si el usuario lo pide.
- Para verificar: compara `legacy/index-actual.html` contra `npm run dev` en 1360px (debe ser idéntico) + 360/768px (mejoras solo móvil).
