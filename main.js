// ═══════════════════════════════════════════════════════════
// PLAYER DATA — edit this to update all profile pages
// ═══════════════════════════════════════════════════════════
const PLAYERS = {
  simpson: {
    number: '10', name: 'Landon Simpson',
    year: '2nd Year', hand: 'R/R', role: 'Pitcher / Batter',
    batting:  { G:'—', AVG:'—', OBP:'—', HR:'—', RBI:'—', BB:'—', K:'—' },
    pitching: { G:'—', ERA:'—', K:'—', BB:'—', WHIP:'—', W:'—', L:'—' },
  },
  wurzbach: {
    number: '12', name: 'Logan Wurzbach',
    year: 'Rookie', hand: 'R/R', role: 'Pitcher / Batter',
    batting:  { G:'—', AVG:'—', OBP:'—', HR:'—', RBI:'—', BB:'—', K:'—' },
    pitching: { G:'—', ERA:'—', K:'—', BB:'—', WHIP:'—', W:'—', L:'—' },
  },
  hightower: {
    number: '14', name: 'Dylan Hightower',
    year: 'Rookie', hand: 'L/L', role: 'Pitcher / Batter',
    batting:  { G:'—', AVG:'—', OBP:'—', HR:'—', RBI:'—', BB:'—', K:'—' },
    pitching: { G:'—', ERA:'—', K:'—', BB:'—', WHIP:'—', W:'—', L:'—' },
  },
  torres: {
    number: '19', name: 'Zach Torres',
    year: '2nd Year', hand: 'L/L', role: 'Pitcher / Batter',
    batting:  { G:'—', AVG:'—', OBP:'—', HR:'—', RBI:'—', BB:'—', K:'—' },
    pitching: { G:'—', ERA:'—', K:'—', BB:'—', WHIP:'—', W:'—', L:'—' },
  },
  davidson: {
    number: '21', name: 'Landon Davidson',
    year: '2nd Year', hand: 'R/R', role: 'Pitcher / Batter',
    batting:  { G:'—', AVG:'—', OBP:'—', HR:'—', RBI:'—', BB:'—', K:'—' },
    pitching: { G:'—', ERA:'—', K:'—', BB:'—', WHIP:'—', W:'—', L:'—' },
  },
  bischops: {
    number: '55', name: 'Joshua Bischops',
    year: 'Rookie', hand: 'R/R', role: 'Pitcher / Batter',
    batting:  { G:'—', AVG:'—', OBP:'—', HR:'—', RBI:'—', BB:'—', K:'—' },
    pitching: { G:'—', ERA:'—', K:'—', BB:'—', WHIP:'—', W:'—', L:'—' },
  },
};

// Live stat data (updated by CSV import)
let liveStats = { batting: null, pitching: null };


// ═══════════════════════════════════════════════════════════
// NAVIGATION — page routing
// ═══════════════════════════════════════════════════════════
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link, .dropdown-item').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + id)?.classList.add('active');
  document.querySelector(`[data-page="${id}"]`)?.classList.add('active');
  history.pushState(null, '', '#' + id);
  window.scrollTo(0, 0);
  closeAllDropdowns();
}

function showStats(tab) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link, .dropdown-item').forEach(l => l.classList.remove('active'));
  document.getElementById('page-stats')?.classList.add('active');
  document.querySelector('[data-page="stats"]')?.classList.add('active');
  document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');

  document.querySelectorAll('.stat-tab').forEach(t => t.style.display = 'none');
  document.getElementById('stat-' + tab)?.style.setProperty('display', 'block');

  const labels = {
    batting:  ['Batting Stats',       '2026 Season — Individual Batting'],
    pitching: ['Pitching Stats',      '2026 Season — Individual Pitching'],
    team:     ['Team Stats',          '2026 Season — Team Overview'],
    import:   ['Import Spreadsheet',  'Upload a CSV to update stats automatically'],
  };
  if (labels[tab]) {
    document.getElementById('stats-title').textContent = labels[tab][0];
    document.getElementById('stats-sub').textContent   = labels[tab][1];
  }

  history.pushState(null, '', '#' + tab);
  window.scrollTo(0, 0);
  closeAllDropdowns();
}


// ═══════════════════════════════════════════════════════════
// DROPDOWN — click to open/close, stays open on desktop
// ═══════════════════════════════════════════════════════════
function closeAllDropdowns() {
  document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
}

document.addEventListener('DOMContentLoaded', () => {
  // Toggle dropdown on click (fixes hover-only issue on desktop)
  document.querySelectorAll('.nav-dropdown > .nav-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdown = btn.closest('.nav-dropdown');
      const isOpen = dropdown.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) dropdown.classList.add('open');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) closeAllDropdowns();
  });

  // Mobile hamburger
  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });

  // CSV file drag-and-drop
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('csv-file-input');

  dropZone?.addEventListener('click', () => fileInput.click());
  fileInput?.addEventListener('change', () => handleFile(fileInput.files[0]));

  dropZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--cookie)';
  });
  dropZone?.addEventListener('dragleave', () => {
    dropZone.style.borderColor = '';
  });
  dropZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '';
    handleFile(e.dataTransfer.files[0]);
  });

  // Route from hash on load
  routeFromHash();
});

function routeFromHash() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const statTabs = ['batting', 'pitching', 'team', 'import'];
  if (statTabs.includes(hash)) showStats(hash);
  else showPage(hash);
}

window.addEventListener('popstate', routeFromHash);


// ═══════════════════════════════════════════════════════════
// PLAYER PROFILES
// ═══════════════════════════════════════════════════════════
function showPlayer(id) {
  const p = PLAYERS[id];
  if (!p) return;

  // Check if live stats have this player's data and merge in
  const b = getLiveStatForPlayer(p.name, 'batting')  || p.batting;
  const pi = getLiveStatForPlayer(p.name, 'pitching') || p.pitching;

  document.getElementById('profile-number').textContent = p.number;
  document.getElementById('profile-name').textContent   = p.name;

  // Badges
  const yearClass = p.year === 'Rookie' ? 'pb-rook' : 'pb-year';
  document.getElementById('profile-badges').innerHTML = `
    <span class="player-badge ${yearClass}">${p.year}</span>
    <span class="player-badge pb-hand">${p.hand}</span>
    <span class="player-badge pb-hand">${p.role}</span>
  `;

  // Info rows
  document.getElementById('profile-info-rows').innerHTML = `
    <div class="profile-stat-row"><span class="profile-stat-label">Jersey</span><span class="profile-stat-val">#${p.number}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">Bats / Throws</span><span class="profile-stat-val">${p.hand}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">Experience</span><span class="profile-stat-val">${p.year}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">TWBL Season</span><span class="profile-stat-val">2026</span></div>
  `;

  // Batting rows
  document.getElementById('profile-batting-rows').innerHTML = `
    <div class="profile-stat-row"><span class="profile-stat-label">Games</span><span class="profile-stat-val">${b.G}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">AVG</span><span class="profile-stat-val ${b.AVG !== '—' ? 'hi' : ''}">${b.AVG}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">OBP</span><span class="profile-stat-val">${b.OBP}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">Home Runs</span><span class="profile-stat-val">${b.HR}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">RBI</span><span class="profile-stat-val">${b.RBI}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">Walks</span><span class="profile-stat-val">${b.BB}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">Strikeouts</span><span class="profile-stat-val">${b.K}</span></div>
  `;

  // Pitching rows
  document.getElementById('profile-pitching-rows').innerHTML = `
    <div class="profile-stat-row"><span class="profile-stat-label">Games</span><span class="profile-stat-val">${pi.G}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">ERA</span><span class="profile-stat-val ${pi.ERA !== '—' ? 'hi' : ''}">${pi.ERA}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">Strikeouts</span><span class="profile-stat-val">${pi.K}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">Walks</span><span class="profile-stat-val">${pi.BB}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">WHIP</span><span class="profile-stat-val">${pi.WHIP}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">Wins</span><span class="profile-stat-val">${pi.W}</span></div>
    <div class="profile-stat-row"><span class="profile-stat-label">Losses</span><span class="profile-stat-val">${pi.L}</span></div>
  `;

  showPage('player');
}

function getLiveStatForPlayer(name, type) {
  if (!liveStats[type]) return null;
  return liveStats[type].find(r => r.Player && r.Player.toLowerCase() === name.toLowerCase()) || null;
}


// ═══════════════════════════════════════════════════════════
// CSV IMPORT
// ═══════════════════════════════════════════════════════════
let currentImportType = 'batting';
let parsedRows = [];

function setImportType(type, btn) {
  currentImportType = type;
  document.querySelectorAll('.import-type-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.import-format').forEach(f => f.style.display = 'none');
  document.getElementById('format-' + type).style.display = 'block';
  cancelImport();
}

function handleFile(file) {
  if (!file) return;
  if (!file.name.endsWith('.csv')) {
    showImportError('Please upload a .csv file.');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => parseCSV(e.target.result);
  reader.readAsText(file);
}

function parseCSV(text) {
  hideImportMessages();
  const lines = text.trim().split('\n').filter(l => l.trim());
  if (lines.length < 2) { showImportError('CSV must have a header row and at least one data row.'); return; }

  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  parsedRows = lines.slice(1).map(line => {
    const vals = line.split(',').map(v => v.trim().replace(/"/g, ''));
    const row = {};
    headers.forEach((h, i) => { row[h] = vals[i] ?? '—'; });
    return row;
  });

  // Show preview table
  const previewTable = document.getElementById('import-preview-table');
  previewTable.innerHTML = `
    <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
    <tbody>${parsedRows.map(row => `<tr>${headers.map(h => `<td>${row[h] ?? '—'}</td>`).join('')}</tr>`).join('')}</tbody>
  `;

  document.getElementById('preview-count').textContent = `${parsedRows.length} player${parsedRows.length !== 1 ? 's' : ''} found`;
  document.getElementById('import-preview-section').style.display = 'block';
}

function applyImport() {
  if (!parsedRows.length) return;

  liveStats[currentImportType] = parsedRows;

  const tbodyId = 'tbody-' + currentImportType;
  const tbody   = document.getElementById(tbodyId);
  if (!tbody) return;

  const colMaps = {
    batting:  ['#', 'Player', 'G', 'AVG', 'OBP', 'HR', 'RBI', 'BB', 'K'],
    pitching: ['#', 'Player', 'G', 'ERA', 'K', 'BB', 'WHIP', 'W', 'L'],
    team:     ['Category', 'Value', 'TWBL Rank'],
  };
  const cols = colMaps[currentImportType];

  tbody.innerHTML = parsedRows.map(row =>
    `<tr>${cols.map((c, i) => `<td class="${i === 0 ? 'num' : i === 1 ? 'name' : ''}">${row[c] ?? '—'}</td>`).join('')}</tr>`
  ).join('');

  // Hide empty message
  const emptyMsg = tbody.closest('.stat-tab')?.querySelector('.stats-empty');
  if (emptyMsg) emptyMsg.style.display = 'none';

  // Show success
  hideImportMessages();
  document.getElementById('import-preview-section').style.display = 'none';
  document.getElementById('import-success').style.display = 'block';
  document.getElementById('csv-file-input').value = '';
  parsedRows = [];
}

function cancelImport() {
  parsedRows = [];
  document.getElementById('import-preview-section').style.display = 'none';
  document.getElementById('csv-file-input').value = '';
  hideImportMessages();
}

function hideImportMessages() {
  document.getElementById('import-success').style.display = 'none';
  document.getElementById('import-error').style.display   = 'none';
}

function showImportError(msg) {
  const el = document.getElementById('import-error');
  el.textContent = '✕ ' + msg;
  el.style.display = 'block';
}


// ═══════════════════════════════════════════════════════════
// TEMPLATE DOWNLOADS
// ═══════════════════════════════════════════════════════════
function downloadTemplate(type) {
  const templates = {
    batting: [
      '#,Player,G,AVG,OBP,HR,RBI,BB,K',
      '10,Landon Simpson,0,.000,.000,0,0,0,0',
      '12,Logan Wurzbach,0,.000,.000,0,0,0,0',
      '14,Dylan Hightower,0,.000,.000,0,0,0,0',
      '19,Zach Torres,0,.000,.000,0,0,0,0',
      '21,Landon Davidson,0,.000,.000,0,0,0,0',
      '55,Joshua Bischops,0,.000,.000,0,0,0,0',
    ],
    pitching: [
      '#,Player,G,ERA,K,BB,WHIP,W,L',
      '10,Landon Simpson,0,0.00,0,0,0.00,0,0',
      '12,Logan Wurzbach,0,0.00,0,0,0.00,0,0',
      '14,Dylan Hightower,0,0.00,0,0,0.00,0,0',
      '19,Zach Torres,0,0.00,0,0,0.00,0,0',
      '21,Landon Davidson,0,0.00,0,0,0.00,0,0',
      '55,Joshua Bischops,0,0.00,0,0,0.00,0,0',
    ],
    team: [
      'Category,Value,TWBL Rank',
      'Record,0-0,—',
      'Runs / Game,0,—',
      'Runs Allowed / Game,0,—',
      'Team AVG,.000,—',
      'Team ERA,0.00,—',
      'Team HR,0,—',
    ],
  };

  const csv  = templates[type].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `cookie-monster-${type}-template.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
