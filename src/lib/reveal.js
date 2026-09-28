// reveal.js — fade-in con IntersectionObserver (PRESERVADO verbatim, threshold 0.08)
export function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
