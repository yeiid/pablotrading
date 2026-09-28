// Background.js — componente (HTML preservado verbatim del legacy)
export function Background() {
  return `<div class="bg-grid"></div>
  <div class="glow glow-1"></div>
  <div class="glow glow-2"></div>
<!-- Lluvia de billetes — solo visible en PC (min-width: 769px vía CSS) -->
  <div class="money-rain money-rain--left" aria-hidden="true">
    <span class="money-bill" style="left:8%;  --dur:8.2s; --delay:0s;    --drift:14px;  --rot:320deg;"></span>
    <span class="money-bill" style="left:28%; --dur:9.5s; --delay:1.1s;  --drift:-10px; --rot:-280deg;"></span>
    <span class="money-bill" style="left:48%; --dur:7.8s; --delay:2.4s;  --drift:18px;  --rot:400deg;"></span>
    <span class="money-bill" style="left:68%; --dur:10.1s;--delay:0.6s;  --drift:-8px;  --rot:-350deg;"></span>
    <span class="money-bill" style="left:18%; --dur:8.8s; --delay:3.2s;  --drift:12px;  --rot:290deg;"></span>
    <span class="money-bill" style="left:58%; --dur:9.2s; --delay:4.0s;  --drift:-15px; --rot:-310deg;"></span>
    <span class="money-bill" style="left:38%; --dur:7.5s; --delay:1.8s;  --drift:9px;   --rot:360deg;"></span>
    <span class="money-bill" style="left:78%; --dur:10.5s;--delay:2.9s;  --drift:-12px; --rot:-420deg;"></span>
    <span class="money-bill" style="left:12%; --dur:8.0s; --delay:5.1s;  --drift:16px;  --rot:340deg;"></span>
    <span class="money-bill" style="left:52%; --dur:9.8s; --delay:3.7s;  --drift:-6px;  --rot:-300deg;"></span>
    <span class="money-bill" style="left:72%; --dur:7.2s; --delay:4.5s;  --drift:11px;  --rot:380deg;"></span>
    <span class="money-bill" style="left:32%; --dur:10.8s;--delay:0.3s;  --drift:-14px; --rot:-270deg;"></span>
  </div>
  <div class="money-rain money-rain--right" aria-hidden="true">
    <span class="money-bill" style="left:12%; --dur:9.0s; --delay:0.4s;  --drift:-12px; --rot:-330deg;"></span>
    <span class="money-bill" style="left:32%; --dur:8.4s; --delay:1.6s;  --drift:10px;  --rot:310deg;"></span>
    <span class="money-bill" style="left:52%; --dur:10.2s;--delay:2.2s;  --drift:-16px; --rot:-390deg;"></span>
    <span class="money-bill" style="left:72%; --dur:7.6s; --delay:0.9s;  --drift:8px;   --rot:350deg;"></span>
    <span class="money-bill" style="left:22%; --dur:9.4s; --delay:3.5s;  --drift:-11px; --rot:-280deg;"></span>
    <span class="money-bill" style="left:62%; --dur:8.6s; --delay:4.2s;  --drift:15px;  --rot:420deg;"></span>
    <span class="money-bill" style="left:42%; --dur:7.9s; --delay:1.3s;  --drift:-9px;  --rot:-360deg;"></span>
    <span class="money-bill" style="left:82%; --dur:10.6s;--delay:2.7s;  --drift:13px;  --rot:300deg;"></span>
    <span class="money-bill" style="left:8%;  --dur:8.1s; --delay:5.0s;  --drift:-14px; --rot:-340deg;"></span>
    <span class="money-bill" style="left:48%; --dur:9.7s; --delay:3.9s;  --drift:7px;   --rot:370deg;"></span>
    <span class="money-bill" style="left:68%; --dur:7.3s; --delay:4.8s;  --drift:-10px; --rot:-400deg;"></span>
    <span class="money-bill" style="left:28%; --dur:10.9s;--delay:0.7s;  --drift:12px;  --rot:260deg;"></span>
  </div>

  <!-- Strategy focus panel -->
  <div class="focus-overlay" id="focusOverlay" aria-hidden="true">
    <div class="focus-panel" id="focusPanel" role="dialog" aria-modal="true"></div>
  </div>`;
}
