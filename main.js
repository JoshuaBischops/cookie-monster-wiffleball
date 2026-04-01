// ─── Navigation ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link, .dropdown-item').forEach(el => {
  el.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ─── Page Routing ─────────────────────────────────────────
function showPage(id) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Deactivate all nav links
  document.querySelectorAll('.nav-link, .dropdown-item').forEach(l => l.classList.remove('active'));

  // Show target page
  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');

  // Mark correct nav link active
  const navLink = document.querySelector(`[data-page="${id}"]`);
  if (navLink) navLink.classList.add('active');

  // Update URL hash without scrolling
  history.pushState(null, '', '#' + id);
  window.scrollTo(0, 0);
}

// ─── Stats sub-page routing ────────────────────────────────
function showStats(tab) {
  showPage('stats');

  // Switch stat tabs
  document.querySelectorAll('.stat-tab').forEach(t => t.style.display = 'none');
  document.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));

  const tabEl = document.getElementById('stat-' + tab);
  if (tabEl) tabEl.style.display = 'block';

  // Update header
  const titles = {
    batting:  ['Batting Stats',  '2026 Season — Individual Batting'],
    pitching: ['Pitching Stats', '2026 Season — Individual Pitching'],
    team:     ['Team Stats',     '2026 Season — Team Overview'],
  };
  document.getElementById('stats-title').textContent = titles[tab][0];
  document.getElementById('stats-sub').textContent   = titles[tab][1];

  // Mark dropdown item active
  const item = document.querySelector(`[data-tab="${tab}"]`);
  if (item) item.classList.add('active');

  // Mark stats nav button active
  const statsBtn = document.querySelector('[data-page="stats"]');
  if (statsBtn) statsBtn.classList.add('active');
}

// ─── Hash routing on load ─────────────────────────────────
function routeFromHash() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const statTabs = ['batting', 'pitching', 'team'];

  if (statTabs.includes(hash)) {
    showStats(hash);
  } else {
    showPage(hash);
  }
}

window.addEventListener('popstate', routeFromHash);
document.addEventListener('DOMContentLoaded', routeFromHash);
