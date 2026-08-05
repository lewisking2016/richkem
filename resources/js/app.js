import '../css/app.css';
import Lenis from 'lenis';

const lenis = new Lenis({
  smoothWheel: true,
  lerp: 0.11,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const staggerGroups = [
  '.signals',
  '.grid-cards',
  '.category-grid',
  '.service-grid',
  '.market-stack',
  '.builder__steps',
  '.dashboard__rows',
  '.trust',
  '.stack',
  '.list',
  '.site-footer__links',
  '.tag-row',
  '.chip-row',
  '.profile-actions',
  '.row__actions',
  '.inline-actions',
  '.cta-actions',
];

staggerGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((group) => {
    Array.from(group.children).forEach((child, index) => {
      if (child instanceof HTMLElement) {
        child.style.setProperty('--stagger', String(index));
      }
    });
  });
});

const revealTargets = document.querySelectorAll('[data-reveal], .reveal-on-scroll');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
}

document.querySelectorAll('[data-mode-switch] button').forEach((button) => {
  button.addEventListener('click', () => {
    const group = button.closest('[data-mode-switch]');
    if (!group) return;
    const target = group.dataset.target;
    const value = button.dataset.value;
    group.querySelectorAll('button').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll(`[data-mode-group="${target}"]`).forEach((node) => {
      node.hidden = node.dataset.mode !== value;
    });
  });
});

document.querySelectorAll('[data-tab-group]').forEach((group) => {
  const buttons = group.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll(`[data-tab-panels="${group.dataset.tabGroup}"] [role="tabpanel"]`);

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('aria-controls');
      buttons.forEach((item) => item.setAttribute('aria-selected', String(item === button)));
      panels.forEach((panel) => {
        panel.hidden = panel.id !== target;
      });
    });
  });
});

document.querySelectorAll('[data-filter-group]').forEach((group) => {
  const buttons = group.querySelectorAll('button[data-filter]');
  const target = document.querySelector(`[data-filter-target="${group.dataset.filterGroup}"]`);
  if (!target) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      target.querySelectorAll('[data-filter-item]').forEach((item) => {
        const matches = filter === 'all' || item.dataset.filterItem === filter;
        item.hidden = !matches;
      });
    });
  });
});

function createFallbackSvg(label) {
  const safeLabel = (label || 'Richkem asset')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .slice(0, 42);

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${safeLabel}">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#0b1528"/>
          <stop offset="100%" stop-color="#12325f"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#g)"/>
      <circle cx="960" cy="140" r="140" fill="#70c9ff" fill-opacity="0.16"/>
      <circle cx="220" cy="120" r="96" fill="#ffffff" fill-opacity="0.08"/>
      <rect x="72" y="84" width="168" height="44" rx="22" fill="rgba(255,255,255,0.12)"/>
      <text x="72" y="232" fill="#ffffff" font-family="Arial, sans-serif" font-size="54" font-weight="700">${safeLabel}</text>
      <text x="72" y="304" fill="#d9e4f5" font-family="Arial, sans-serif" font-size="26">Image unavailable, showing fallback artwork.</text>
      <rect x="72" y="372" width="1056" height="280" rx="32" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-opacity="0.12"/>
      <path d="M148 560L292 444L436 522L584 382L750 492L872 420L1036 540" fill="none" stroke="#ffffff" stroke-opacity="0.35" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `)}`;
}

document.querySelectorAll('img').forEach((img) => {
  img.decoding = 'async';
  if (!img.hasAttribute('loading')) {
    img.loading = 'lazy';
  }

  const fallbackLabel = img.alt || 'Richkem asset';

  const applyFallback = () => {
    if (img.dataset.fallbackApplied === 'true') return;
    img.dataset.fallbackApplied = 'true';
    img.src = createFallbackSvg(fallbackLabel);
  };

  if (img.complete && img.naturalWidth === 0) {
    applyFallback();
  } else {
    img.addEventListener('error', applyFallback, { once: true });
  }
});
