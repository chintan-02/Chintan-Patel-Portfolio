/* ================================================================
   CHINTAN PATEL PORTFOLIO — script.js
   ================================================================ */

/* ── FOOTER YEAR ────────────────────────────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── ACTIVE NAV ON SCROLL ───────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function setActiveLink() {
  if (!navLinks.length) return;
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

/* ── MOBILE MENU ────────────────────────────────────────────── */
const menuToggle = document.querySelector('.menu-toggle');
const headerMenu = document.getElementById('primary-navigation');

if (menuToggle && headerMenu) {
  const backdrop = document.createElement('div');
  backdrop.id = 'navBackdrop';
  backdrop.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.3);z-index:45;display:none';
  document.body.appendChild(backdrop);

  const closeMenu = () => {
    headerMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    backdrop.style.display = 'none';
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = headerMenu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    backdrop.style.display = isOpen ? 'block' : 'none';
  });

  backdrop.addEventListener('click', closeMenu);
  document.querySelectorAll('#primary-navigation a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

/* ── BLOG DATA + RENDER ─────────────────────────────────────── */
const blogPosts = [
  {
    id: 1,
    title: 'Trustworthy AI: Building Artificial Intelligence We Can Rely On',
    date: '2026-02-10',
    readTime: '8 min read',
    tags: ['Responsible AI', 'Machine Learning', 'Ethics'],
    excerpt: 'Key insights from Trustworthy AI and how I apply fairness, transparency, accountability, and human-centered design in my projects.',
    url: 'blog/trustworthy-ai.html'
  }
];

const allTags    = ['All', ...Array.from(new Set(blogPosts.flatMap(p => p.tags))).sort()];
const blogGrid   = document.getElementById('blogGrid');
const blogFilters= document.getElementById('blogFilters');
let   activeTag  = 'All';

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch { return iso; }
}

function renderFilters() {
  if (!blogFilters) return;
  blogFilters.innerHTML = '';
  allTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = `filter-btn${tag === activeTag ? ' active' : ''}`;
    btn.textContent = tag;
    btn.addEventListener('click', () => { activeTag = tag; renderFilters(); renderPosts(); });
    blogFilters.appendChild(btn);
  });
}

function renderPosts() {
  if (!blogGrid) return;
  const filtered = activeTag === 'All' ? blogPosts : blogPosts.filter(p => p.tags.includes(activeTag));
  blogGrid.innerHTML = '';
  filtered.forEach(post => {
    const card = document.createElement('article');
    card.className = 'blog-card';
    card.innerHTML = `
      <div class="blog-meta">
        <span><i class="fa-regular fa-calendar"></i> ${formatDate(post.date)}</span>
        <span>${post.readTime}</span>
      </div>
      <h3 class="blog-title">${post.title}</h3>
      <p class="blog-excerpt">${post.excerpt}</p>
      <div class="blog-footer">
        <a class="read-link" href="${post.url}">
          Read <i class="fa-solid fa-arrow-right"></i>
        </a>
        <div class="blog-badges">
          ${post.tags.slice(0, 2).map(t => `<span class="blog-badge">${t}</span>`).join('')}
        </div>
      </div>`;
    blogGrid.appendChild(card);
  });
}

renderFilters();
renderPosts();

/* ── TYPEWRITER ─────────────────────────────────────────────── */
(function () {
  const phrases = [
    'AI/ML systems.',
    'clinical triage tools.',
    'explainable models.',
    'production-ready ML.',
    'data-driven decisions.'
  ];
  const el = document.getElementById('hero-tw');
  if (!el) return;

  if (window.innerWidth < 768) {
    el.textContent = phrases[0];
    return;
  }

  let pi = 0, ci = 0, erasing = false;

  function step() {
    const text = phrases[pi];
    if (!erasing) {
      el.textContent = text.slice(0, ++ci);
      if (ci >= text.length) { erasing = true; return setTimeout(step, 2000); }
      setTimeout(step, 75);
    } else {
      el.textContent = text.slice(0, --ci);
      if (ci <= 0) { erasing = false; pi = (pi + 1) % phrases.length; return setTimeout(step, 400); }
      setTimeout(step, 40);
    }
  }
  step();
}());

/* ── ANIMATIONS ─────────────────────────────────────────────── */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const hasMotion = typeof Motion !== 'undefined' && Motion.animate && Motion.inView;
  if (hasMotion) { motionAnimate(); } else { cssRevealFallback(); }

  function motionAnimate() {
    const { animate, inView, stagger } = Motion;
    const ease = [0.25, 0.46, 0.45, 0.94];

    const heroItems = [...document.querySelectorAll(
      '.hero-content .badge, .hero-content .hero-title, ' +
      '.hero-content .hero-subtitle, .hero-content .hero-support, ' +
      '.hero-content .hero-actions, .hero-content .hero-socials, ' +
      '.hero-content .trust-strip'
    )];
    const radarWrap = document.querySelector('.hero-photo-wrap');

    heroItems.forEach(el => { el.style.opacity = '0'; });
    if (radarWrap) radarWrap.style.opacity = '0';

    if (heroItems.length) {
      animate(heroItems,
        { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0px)'] },
        { duration: 0.65, delay: stagger(0.11), easing: ease });
    }
    if (radarWrap) {
      animate(radarWrap,
        { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0px)'] },
        { duration: 0.70, delay: 0.20, easing: ease });
    }

    document.querySelectorAll(
      '.skills-grid, .projects-grid, .edu-grid, .experience-grid, .contact-grid'
    ).forEach(grid => {
      Array.from(grid.children).forEach((child, i) => {
        child.style.setProperty('--stagger-i', i);
      });
    });

    document.querySelectorAll('.section-head, .section-title').forEach(el => {
      if (el.closest('.hero')) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      inView(el, () => animate(el,
        { opacity: [0, 1], transform: ['translateY(16px)', 'translateY(0px)'] },
        { duration: 0.55, easing: ease }), { amount: 0.35 });
    });

    document.querySelectorAll(
      '.skills-grid, .projects-grid, .edu-grid, .experience-grid'
    ).forEach(grid => {
      const cards = Array.from(grid.children);
      cards.forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(22px)'; });
      inView(grid, () => animate(cards,
        { opacity: [0, 1], transform: ['translateY(22px)', 'translateY(0px)'] },
        { duration: 0.55, delay: stagger(0.07), easing: ease }), { amount: 0.08 });
    });

    document.querySelectorAll('.panel').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      inView(el, () => animate(el,
        { opacity: [0, 1], transform: ['translateY(18px)', 'translateY(0px)'] },
        { duration: 0.55, delay: i * 0.09, easing: ease }), { amount: 0.2 });
    });

    document.querySelectorAll('.opportunity-card, .contact-card').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      inView(el, () => animate(el,
        { opacity: [0, 1], transform: ['translateY(18px)', 'translateY(0px)'] },
        { duration: 0.55, delay: i * 0.10, easing: ease }), { amount: 0.2 });
    });

    const contactGrid = document.querySelector('.contact-grid');
    if (contactGrid) {
      const items = Array.from(contactGrid.children);
      items.forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(16px)'; });
      inView(contactGrid, () => animate(items,
        { opacity: [0, 1], transform: ['translateY(16px)', 'translateY(0px)'] },
        { duration: 0.50, delay: stagger(0.07), easing: ease }), { amount: 0.1 });
    }
  }

  function cssRevealFallback() {
    const targets = document.querySelectorAll(
      '.reveal-on-scroll, .panel, .skill-card, .experience-card, ' +
      '.project-card, .edu-card, .contact-card, .opportunity-card, .section-head'
    );
    targets.forEach(el => el.classList.add('reveal-item'));
    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => obs.observe(el));
  }
}());

/* ── FAB SCROLL BUTTON ───────────────────────────────────────── */
(function() {
  var fab = document.getElementById('scrollFab');
  if (!fab) return;

  var ids = ['home','about','skills','experience',
             'projects','education','contact'];
  var contactSec = document.getElementById('contact');
  if (!contactSec) return;

  function checkFab() {
    var rect = contactSec.getBoundingClientRect();
    var atBottom = rect.bottom < window.innerHeight * 0.95;
    if (atBottom) {
      fab.classList.add('show-home');
    } else {
      fab.classList.remove('show-home');
    }
  }

  window.addEventListener('scroll', checkFab, { passive: true });
  setTimeout(checkFab, 300);

  fab.addEventListener('click', function() {
    if (fab.classList.contains('show-home')) {
      document.getElementById('home')
        .scrollIntoView({ behavior: 'smooth' });
      return;
    }
    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      if (el && el.getBoundingClientRect().top > 80) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  });
})();

