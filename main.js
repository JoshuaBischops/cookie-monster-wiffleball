// ═══════════════════════════════════════════════════════════
// PASSWORDS — change these to whatever you want
// ═══════════════════════════════════════════════════════════
const IMPORT_PASSWORD = 'cookiemonsters2026';
const ADMIN_PASSWORD  = 'cm-admin-2026';

// ═══════════════════════════════════════════════════════════
// PLAYER DATA — career splits per year
// Format: batting2025, batting2026, pitching2025, pitching2026, etc.
// ═══════════════════════════════════════════════════════════
const PLAYERS = {
  harrell: {
    number:'27', name:'Garret Harrell', year:'3rd Year', hand:'R/R',
    position:'Pitcher / Batter', debutYear:'2024', height:"6'0", weight:'180',
    // 2025 = tournament season
    batting2025:  { G:'—',PA:'—',AB:'—',R:'—',H:'—','1B':'—','2B':'—','3B':'—',HR:'—',RBI:'—',BB:'—',SO:'—',BA:'—',OBP:'—',SLG:'—',OPS:'—','OPS+':'—',WOBA:'—',TB:'—',WAR:'—' },
    pitching2025: { W:'—',L:'—','W-L%':'—',ERA:'—',G:'—',GS:'—',GF:'—',SV:'—',IP:'—',H:'—',R:'—',ER:'—',HR:'—',BB:'—',SO:'—',BF:'—',WHIP:'—','SO/BB':'—',WAR:'—' },
    fielding2025: { G:'—',GS:'—',Inn:'—',CH:'—',PO:'—',A:'—',E:'—',DP:'—','Fld%':'—','RF/4':'—','RF/G':'—',POS:'—',WAR:'—' },
    batting2026:  { G:'—',PA:'—',AB:'—',R:'—',H:'—','1B':'—','2B':'—','3B':'—',HR:'—',RBI:'—',BB:'—',SO:'—',BA:'—',OBP:'—',SLG:'—',OPS:'—','OPS+':'—',WOBA:'—',TB:'—',WAR:'—' },
    pitching2026: { W:'—',L:'—','W-L%':'—',ERA:'—',G:'—',GS:'—',GF:'—',SV:'—',IP:'—',H:'—',R:'—',ER:'—',HR:'—',BB:'—',SO:'—',BF:'—',WHIP:'—','SO/BB':'—',WAR:'—' },
    fielding2026: { G:'—',GS:'—',Inn:'—',CH:'—',PO:'—',A:'—',E:'—',DP:'—','Fld%':'—','RF/4':'—','RF/G':'—',POS:'—',WAR:'—' },
  },
  simpson: {
    number:'10', name:'Landon Simpson', year:'2nd Year', hand:'R/R',
    position:'Pitcher / Infield', debutYear:'2025', height:"6'2", weight:'215', photo:'assets/SimpsonProfilePC.jpg',
    batting2025:  { G:'4',PA:'16',AB:'10',R:'4',H:'4','1B':'3','2B':'0','3B':'0',HR:'1',RBI:'3',BB:'4',SO:'2',BA:'.400',OBP:'.571',SLG:'.700',OPS:'1.271','OPS+':'158.9',WOBA:'.488',TB:'7',WAR:'2.49' },
    pitching2025: { W:'3',L:'0','W-L%':'.357',ERA:'4.00',G:'4',GS:'3',GF:'0',SV:'0',IP:'11.2',H:'4',R:'1',ER:'1',HR:'0',BB:'11',SO:'0',BF:'50',WHIP:'1.34','SO/BB':'0',WAR:'1.48' },
    fielding2025: { G:'4',GS:'4',Inn:'14',CH:'6',PO:'5',A:'0',E:'1',DP:'0','Fld%':'.833','RF/4':'1.43','RF/G':'1.25',POS:'IF,P,OF',WAR:'0.35' },
    batting2026:  { G:'—',PA:'—',AB:'—',R:'—',H:'—','1B':'—','2B':'—','3B':'—',HR:'—',RBI:'—',BB:'—',SO:'—',BA:'—',OBP:'—',SLG:'—',OPS:'—','OPS+':'—',WOBA:'—',TB:'—',WAR:'—' },
    pitching2026: { W:'—',L:'—','W-L%':'—',ERA:'—',G:'—',GS:'—',GF:'—',SV:'—',IP:'—',H:'—',R:'—',ER:'—',HR:'—',BB:'—',SO:'—',BF:'—',WHIP:'—','SO/BB':'—',WAR:'—' },
    fielding2026: { G:'—',GS:'—',Inn:'—',CH:'—',PO:'—',A:'—',E:'—',DP:'—','Fld%':'—','RF/4':'—','RF/G':'—',POS:'—',WAR:'—' },
  },
  wurzbach: {
    number:'12', name:'Logan Wurzbach', year:'Rookie', hand:'R/R',
    position:'Pitcher / Infield / Outfield', debutYear:'2026', height:"5'10", weight:'165', photo:'assets/LoganProfilePic.jpg',
    batting2025:  { G:'4',PA:'17',AB:'11',R:'4',H:'2','1B':'0','2B':'2','3B':'0',HR:'0',RBI:'5',BB:'6',SO:'7',BA:'.182',OBP:'.471',SLG:'.364',OPS:'.834','OPS+':'104.3',WOBA:'.418',TB:'4',WAR:'0.44' },
    pitching2025: { W:'0',L:'0','W-L%':'—',ERA:'0.00',G:'1',GS:'0',GF:'0',SV:'0',IP:'1',H:'0',R:'0',ER:'0',HR:'0',BB:'2',SO:'2',BF:'5',WHIP:'2.00','SO/BB':'1.0',WAR:'0.15' },
    fielding2025: { G:'4',GS:'4',Inn:'12.2',CH:'5',PO:'5',A:'0',E:'0',DP:'0','Fld%':'1.000','RF/4':'1.64','RF/G':'1.25',POS:'IF,P,OF',WAR:'0.10' },
    batting2026:  { G:'—',PA:'—',AB:'—',R:'—',H:'—','1B':'—','2B':'—','3B':'—',HR:'—',RBI:'—',BB:'—',SO:'—',BA:'—',OBP:'—',SLG:'—',OPS:'—','OPS+':'—',WOBA:'—',TB:'—',WAR:'—' },
    pitching2026: { W:'—',L:'—','W-L%':'—',ERA:'—',G:'—',GS:'—',GF:'—',SV:'—',IP:'—',H:'—',R:'—',ER:'—',HR:'—',BB:'—',SO:'—',BF:'—',WHIP:'—','SO/BB':'—',WAR:'—' },
    fielding2026: { G:'—',GS:'—',Inn:'—',CH:'—',PO:'—',A:'—',E:'—',DP:'—','Fld%':'—','RF/4':'—','RF/G':'—',POS:'—',WAR:'—' },
  },
  hightower: {
    number:'14', name:'Dylan Hightower', year:'Rookie', hand:'L/L',
    position:'Pitcher / Batter', debutYear:'2026',
    batting2025:  { G:'—',PA:'—',AB:'—',R:'—',H:'—','1B':'—','2B':'—','3B':'—',HR:'—',RBI:'—',BB:'—',SO:'—',BA:'—',OBP:'—',SLG:'—',OPS:'—','OPS+':'—',WOBA:'—',TB:'—',WAR:'—' },
    pitching2025: { W:'—',L:'—','W-L%':'—',ERA:'—',G:'—',GS:'—',GF:'—',SV:'—',IP:'—',H:'—',R:'—',ER:'—',HR:'—',BB:'—',SO:'—',BF:'—',WHIP:'—','SO/BB':'—',WAR:'—' },
    fielding2025: { G:'—',GS:'—',Inn:'—',CH:'—',PO:'—',A:'—',E:'—',DP:'—','Fld%':'—','RF/4':'—','RF/G':'—',POS:'—',WAR:'—' },
    batting2026:  { G:'—',PA:'—',AB:'—',R:'—',H:'—','1B':'—','2B':'—','3B':'—',HR:'—',RBI:'—',BB:'—',SO:'—',BA:'—',OBP:'—',SLG:'—',OPS:'—','OPS+':'—',WOBA:'—',TB:'—',WAR:'—' },
    pitching2026: { W:'—',L:'—','W-L%':'—',ERA:'—',G:'—',GS:'—',GF:'—',SV:'—',IP:'—',H:'—',R:'—',ER:'—',HR:'—',BB:'—',SO:'—',BF:'—',WHIP:'—','SO/BB':'—',WAR:'—' },
    fielding2026: { G:'—',GS:'—',Inn:'—',CH:'—',PO:'—',A:'—',E:'—',DP:'—','Fld%':'—','RF/4':'—','RF/G':'—',POS:'—',WAR:'—' },
  },
  torres: {
    number:'19', name:'Zach Torres', year:'2nd Year', hand:'L/L',
    position:'Pitcher / Batter', debutYear:'2026', height:"5'10", weight:'185',
    batting2025:  { G:'—',PA:'—',AB:'—',R:'—',H:'—','1B':'—','2B':'—','3B':'—',HR:'—',RBI:'—',BB:'—',SO:'—',BA:'—',OBP:'—',SLG:'—',OPS:'—','OPS+':'—',WOBA:'—',TB:'—',WAR:'—' },
    pitching2025: { W:'—',L:'—','W-L%':'—',ERA:'—',G:'—',GS:'—',GF:'—',SV:'—',IP:'—',H:'—',R:'—',ER:'—',HR:'—',BB:'—',SO:'—',BF:'—',WHIP:'—','SO/BB':'—',WAR:'—' },
    fielding2025: { G:'—',GS:'—',Inn:'—',CH:'—',PO:'—',A:'—',E:'—',DP:'—','Fld%':'—','RF/4':'—','RF/G':'—',POS:'—',WAR:'—' },
    batting2026:  { G:'—',PA:'—',AB:'—',R:'—',H:'—','1B':'—','2B':'—','3B':'—',HR:'—',RBI:'—',BB:'—',SO:'—',BA:'—',OBP:'—',SLG:'—',OPS:'—','OPS+':'—',WOBA:'—',TB:'—',WAR:'—' },
    pitching2026: { W:'—',L:'—','W-L%':'—',ERA:'—',G:'—',GS:'—',GF:'—',SV:'—',IP:'—',H:'—',R:'—',ER:'—',HR:'—',BB:'—',SO:'—',BF:'—',WHIP:'—','SO/BB':'—',WAR:'—' },
    fielding2026: { G:'—',GS:'—',Inn:'—',CH:'—',PO:'—',A:'—',E:'—',DP:'—','Fld%':'—','RF/4':'—','RF/G':'—',POS:'—',WAR:'—' },
  },
  davidson: {
    number:'21', name:'Landon Davidson', year:'2nd Year', hand:'R/R',
    position:'Pitcher', debutYear:'2025', nickname:'Lando', height:"5'8", weight:'130', photo:'assets/DavidsonProfilePic.jpg',
    batting2025:  { G:'4',PA:'18',AB:'12',R:'3',H:'2','1B':'1','2B':'1','3B':'0',HR:'0',RBI:'3',BB:'4',SO:'7',BA:'.167',OBP:'.375',SLG:'.250',OPS:'.625','OPS+':'78.1',WOBA:'.289',TB:'3',WAR:'-0.32' },
    pitching2025: { W:'0',L:'0','W-L%':'—',ERA:'7.27',G:'2',GS:'0',GF:'0',SV:'1',IP:'1.1',H:'0',R:'0',ER:'2',HR:'0',BB:'7',SO:'2',BF:'11',WHIP:'6.36','SO/BB':'.29',WAR:'-0.24' },
    fielding2025: { G:'2',GS:'0',Inn:'1.1',CH:'0',PO:'0',A:'0',E:'0',DP:'0','Fld%':'—','RF/4':'0','RF/G':'0',POS:'P',WAR:'0' },
    batting2026:  { G:'—',PA:'—',AB:'—',R:'—',H:'—','1B':'—','2B':'—','3B':'—',HR:'—',RBI:'—',BB:'—',SO:'—',BA:'—',OBP:'—',SLG:'—',OPS:'—','OPS+':'—',WOBA:'—',TB:'—',WAR:'—' },
    pitching2026: { W:'—',L:'—','W-L%':'—',ERA:'—',G:'—',GS:'—',GF:'—',SV:'—',IP:'—',H:'—',R:'—',ER:'—',HR:'—',BB:'—',SO:'—',BF:'—',WHIP:'—','SO/BB':'—',WAR:'—' },
    fielding2026: { G:'—',GS:'—',Inn:'—',CH:'—',PO:'—',A:'—',E:'—',DP:'—','Fld%':'—','RF/4':'—','RF/G':'—',POS:'—',WAR:'—' },
  },
  bischops: {
    number:'55', name:'Joshua Bischops', year:'Rookie', hand:'R/R',
    position:'Pitcher / Infield / Outfield', debutYear:'2026', height:"5'10", weight:'150',
    batting2025:  { G:'4',PA:'16',AB:'10',R:'2',H:'0','1B':'0','2B':'0','3B':'0',HR:'0',RBI:'2',BB:'6',SO:'6',BA:'.000',OBP:'.375',SLG:'.000',OPS:'.375','OPS+':'46.9',WOBA:'.281',TB:'0',WAR:'-0.88' },
    pitching2025: { W:'0',L:'1','W-L%':'.000',ERA:'20.00',G:'2',GS:'1',GF:'0',SV:'1',IP:'1',H:'1',R:'5',ER:'5',HR:'1',BB:'4',SO:'3',BF:'8',WHIP:'5.00','SO/BB':'.75',WAR:'-0.85' },
    fielding2025: { G:'4',GS:'4',Inn:'14',CH:'6',PO:'5',A:'0',E:'1',DP:'0','Fld%':'.833','RF/4':'1.43','RF/G':'1.25',POS:'IF,OF,P',WAR:'0.35' },
    batting2026:  { G:'—',PA:'—',AB:'—',R:'—',H:'—','1B':'—','2B':'—','3B':'—',HR:'—',RBI:'—',BB:'—',SO:'—',BA:'—',OBP:'—',SLG:'—',OPS:'—','OPS+':'—',WOBA:'—',TB:'—',WAR:'—' },
    pitching2026: { W:'—',L:'—','W-L%':'—',ERA:'—',G:'—',GS:'—',GF:'—',SV:'—',IP:'—',H:'—',R:'—',ER:'—',HR:'—',BB:'—',SO:'—',BF:'—',WHIP:'—','SO/BB':'—',WAR:'—' },
    fielding2026: { G:'—',GS:'—',Inn:'—',CH:'—',PO:'—',A:'—',E:'—',DP:'—','Fld%':'—','RF/4':'—','RF/G':'—',POS:'—',WAR:'—' },
  },
};

// Live stat data (updated by import)
let liveStats = { batting:null, pitching:null, fielding:null, advanced:null, team:null };
let importUnlocked = false;
let adminUnlocked  = false;

// Game log — admin can add games here; persists in localStorage
let gameLog = JSON.parse(localStorage.getItem('cm-game-log') || '[]');


// ═══════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link, .dropdown-item').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + id)?.classList.add('active');
  document.querySelector(`[data-page="${id}"]`)?.classList.add('active');
  history.pushState(null, '', '#' + id);
  window.scrollTo(0, 0);
  closeAllDropdowns();
  if (id === 'results') renderGameLog();
}

let currentStatTab = 'batting';

// Called by top-level nav click — stays on current tab if already on stats page
function showStatsNav() {
  showStats(document.getElementById('page-stats')?.classList.contains('active') ? currentStatTab : 'batting');
}

function showStats(tab) {
  if (tab === 'import' && !importUnlocked) { promptImportPassword(); return; }
  currentStatTab = tab;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link, .dropdown-item').forEach(l => l.classList.remove('active'));
  document.getElementById('page-stats')?.classList.add('active');
  document.querySelector('[data-page="stats"]')?.classList.add('active');
  document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');
  document.querySelectorAll('.stat-tab').forEach(t => t.style.display = 'none');
  document.getElementById('stat-' + tab)?.style.setProperty('display','block');
  const labels = {
    batting:  ['Batting Stats',      '2026 Season — Standard Batting'],
    pitching: ['Pitching Stats',     '2026 Season — Standard Pitching'],
    fielding: ['Fielding Stats',     '2026 Season — Standard Fielding'],
    advanced: ['Advanced Stats',     '2026 Season — Advanced Stats'],
    team:     ['Team Stats',         '2026 Season — Team Overview'],
    import:   ['Import Spreadsheet', 'Upload a CSV to update stats automatically'],
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
// DROPDOWN
// ═══════════════════════════════════════════════════════════
function closeAllDropdowns() {
  document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-dropdown > .nav-link').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const dd = btn.closest('.nav-dropdown');
      const open = dd.classList.contains('open');
      closeAllDropdowns();
      if (!open) dd.classList.add('open');
    });
  });
  document.addEventListener('click', e => { if (!e.target.closest('.nav-dropdown')) closeAllDropdowns(); });

  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });

  document.getElementById('import-lock-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter')  submitImportPassword();
    if (e.key === 'Escape') closeImportLock();
  });
  document.getElementById('admin-lock-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter')  submitAdminPassword();
    if (e.key === 'Escape') closeAdminLock();
  });

  // CSV drag/drop
  const dropZone  = document.getElementById('drop-zone');
  const fileInput = document.getElementById('csv-file-input');
  dropZone?.addEventListener('click', () => fileInput.click());
  fileInput?.addEventListener('change', () => handleFile(fileInput.files[0]));
  dropZone?.addEventListener('dragover', e => { e.preventDefault(); dropZone.style.borderColor='var(--cookie)'; });
  dropZone?.addEventListener('dragleave', () => { dropZone.style.borderColor=''; });
  dropZone?.addEventListener('drop', e => { e.preventDefault(); dropZone.style.borderColor=''; handleFile(e.dataTransfer.files[0]); });

  // Sortable table headers
  document.querySelectorAll('.stats-table th').forEach(th => {
    th.addEventListener('click', () => sortTable(th));
  });

  // Gallery
  initGallery();

  // Render game log on load
  renderGameLog();
  updateHomeRecord();

  routeFromHash();
});

function routeFromHash() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const statTabs = ['batting','pitching','fielding','advanced','team','import'];
  if (statTabs.includes(hash)) {
    if (hash === 'import') showPage('home');
    else showStats(hash);
  } else {
    showPage(hash);
  }
}
window.addEventListener('popstate', routeFromHash);


// ═══════════════════════════════════════════════════════════
// SORTABLE STATS TABLES
// ═══════════════════════════════════════════════════════════
let sortState = {}; // { tableId: { col, dir } }

function sortTable(th) {
  const table = th.closest('table');
  if (!table) return;
  const tableId = table.id || 'table-' + Math.random();
  if (!table.id) table.id = tableId;

  const headers = Array.from(th.closest('thead').querySelectorAll('th'));
  const colIdx  = headers.indexOf(th);
  if (colIdx <= 1) return; // don't sort # or Player cols

  const prev = sortState[tableId] || {};
  const dir  = (prev.col === colIdx && prev.dir === 'desc') ? 'asc' : 'desc';
  sortState[tableId] = { col: colIdx, dir };

  // Visual indicator
  headers.forEach(h => h.classList.remove('sort-asc','sort-desc'));
  th.classList.add(dir === 'desc' ? 'sort-desc' : 'sort-asc');

  // Sort rows
  const tbody = table.querySelector('tbody');
  const rows  = Array.from(tbody.querySelectorAll('tr'));
  const lowBest = ['ERA','WHIP','E'].includes(th.textContent.trim());

  rows.sort((a, b) => {
    const av = parseFloat(a.cells[colIdx]?.textContent) || -Infinity;
    const bv = parseFloat(b.cells[colIdx]?.textContent) || -Infinity;
    if (lowBest) return dir === 'desc' ? av - bv : bv - av;
    return dir === 'desc' ? bv - av : av - bv;
  });

  rows.forEach(r => tbody.appendChild(r));
}


// ═══════════════════════════════════════════════════════════
// PLAYER PROFILES — career splits
// ═══════════════════════════════════════════════════════════
const BAT_COLS = ['G','PA','AB','R','H','1B','2B','3B','HR','RBI','BB','SO','BA','OBP','SLG','OPS','OPS+','WOBA','TB','WAR'];
const PIT_COLS = ['W','L','W-L%','ERA','G','GS','GF','SV','IP','H','R','ER','HR','BB','SO','BF','WHIP','SO/BB','WAR'];
const FLD_COLS = ['G','GS','Inn','CH','PO','A','E','DP','Fld%','RF/4','RF/G','POS','WAR'];

function showPlayer(id) {
  const p = PLAYERS[id];
  if (!p) return;

  // Merge live imported stats into 2026 row if available
  const b26  = getLiveStatForPlayer(p.name,'batting')  || p.batting2026;
  const pi26 = getLiveStatForPlayer(p.name,'pitching') || p.pitching2026;
  const f26  = getLiveStatForPlayer(p.name,'fielding') || p.fielding2026;

  // Profile photo
  const photoEl = document.getElementById('profile-photo');
  if (photoEl) {
    if (p.photo) {
      photoEl.innerHTML = `<img src="${p.photo}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;object-position:top center;border-radius:50%;"/>`;
    } else {
      photoEl.innerHTML = `<span style="font-family:var(--font-display);font-size:28px;color:var(--cookie-light);">#${p.number}</span>`;
    }
  }
  document.getElementById('profile-number').textContent = p.number;
  document.getElementById('profile-name').textContent   = p.name;

  const yearClass = p.year==='Rookie' ? 'pb-rook' : p.year==='3rd Year' ? 'pb-vet' : 'pb-year';
  const physique = [p.height, p.weight ? p.weight + ' lb' : null].filter(Boolean).join(' · ');
  document.getElementById('profile-badges').innerHTML = `
    <span class="player-badge ${yearClass}">${p.year}</span>
    <span class="player-badge pb-hand">${p.hand}</span>
    <span class="player-badge pb-hand">${p.position}</span>
    ${p.nickname ? `<span class="player-badge pb-hand">"${p.nickname}"</span>` : ''}
    ${physique ? `<span class="player-badge pb-physique">${physique}</span>` : ''}
  `;

  document.getElementById('profile-info-grid').innerHTML = `
    <div class="profile-info-card"><div class="profile-info-val">#${p.number}</div><div class="profile-info-label">Jersey</div></div>
    <div class="profile-info-card"><div class="profile-info-val">${p.hand}</div><div class="profile-info-label">Bats / Throws</div></div>
    <div class="profile-info-card"><div class="profile-info-val">${p.year}</div><div class="profile-info-label">Experience</div></div>
    <div class="profile-info-card"><div class="profile-info-val">${p.debutYear}</div><div class="profile-info-label">Debut Year</div></div>
  `;

  // Build career split tables (2025 + 2026 rows)
  function buildTable(headId, bodyId, cols, data25, data26, label25) {
    document.getElementById(headId).innerHTML =
      `<tr><th>Season</th>${cols.map(c=>`<th onclick="sortTable(this)">${c}</th>`).join('')}</tr>`;
    const has25 = data25 && Object.values(data25).some(v => v !== '—');
    let rows = '';
    if (has25) rows += `<tr class="split-row-2025"><td><span class="split-year-badge">${label25}</span></td>${cols.map(c=>`<td>${data25[c]??'—'}</td>`).join('')}</tr>`;
    rows += `<tr class="split-row-2026"><td><span class="split-year-badge twbl">2026 TWBL</span></td>${cols.map(c=>`<td>${data26[c]??'—'}</td>`).join('')}</tr>`;
    if (has25) {
      // Career totals row for counting stats (skip rate stats)
      const rateCols = ['BA','OBP','SLG','OPS','OPS+','WOBA','ERA','W-L%','WHIP','SO/BB','Fld%','RF/4','RF/G','POS'];
      const totals = cols.map(c => {
        if (rateCols.includes(c)) return '—';
        const v25 = parseFloat(data25[c]);
        const v26 = parseFloat(data26[c]);
        if (!isNaN(v25) && !isNaN(v26)) return (v25 + v26).toFixed(2).replace(/\.00$/,'');
        if (!isNaN(v25)) return data25[c];
        return '—';
      });
      rows += `<tr class="split-row-career"><td><span class="split-year-badge career">Career</span></td>${totals.map(v=>`<td>${v}</td>`).join('')}</tr>`;
    }
    document.getElementById(bodyId).innerHTML = rows;
    // Re-attach sort listeners
    document.querySelectorAll(`#${headId} th`).forEach(th => th.addEventListener('click', () => sortTable(th)));
  }

  buildTable('profile-bat-head','profile-bat-body', BAT_COLS, p.batting2025,  b26,  '2025 Tournaments');
  buildTable('profile-pit-head','profile-pit-body', PIT_COLS, p.pitching2025, pi26, '2025 Tournaments');
  buildTable('profile-fld-head','profile-fld-body', FLD_COLS, p.fielding2025, f26,  '2025 Tournaments');

  showPage('player');
}

function getLiveStatForPlayer(name, type) {
  if (!liveStats[type]) return null;
  return liveStats[type].find(r => r.Player && r.Player.toLowerCase() === name.toLowerCase()) || null;
}


// ═══════════════════════════════════════════════════════════
// GAME LOG / SCORE TRACKER
// ═══════════════════════════════════════════════════════════
function saveGameLog() {
  localStorage.setItem('cm-game-log', JSON.stringify(gameLog));
}

function renderGameLog() {
  const tbody = document.getElementById('game-log-tbody');
  if (!tbody) return;

  if (!gameLog.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--gray);padding:20px;font-style:italic;">No games played yet — season coming soon.</td></tr>`;
    return;
  }

  tbody.innerHTML = gameLog.slice().reverse().map((g, i) => {
    const win   = g.result === 'W';
    const loss  = g.result === 'L';
    const badge = win
      ? `<span class="result-badge win">W</span>`
      : loss
        ? `<span class="result-badge loss">L</span>`
        : `<span class="result-badge tie">T</span>`;
    return `<tr>
      <td>${g.date}</td>
      <td>${g.type || 'TWBL'}</td>
      <td>${g.opponent}</td>
      <td>${badge}</td>
      <td class="${win?'score-win':loss?'score-loss':''}">${g.score}</td>
      <td style="font-size:12px;color:var(--gray);">${g.notes || ''}</td>
    </tr>`;
  }).join('');

  updateHomeRecord();
}

function updateHomeRecord() {
  const wins   = gameLog.filter(g => g.result === 'W').length;
  const losses = gameLog.filter(g => g.result === 'L').length;
  const el = document.getElementById('home-record-display');
  if (el) el.innerHTML = `${wins}<span>-</span>${losses}`;
}


// ═══════════════════════════════════════════════════════════
// ADMIN PANEL
// ═══════════════════════════════════════════════════════════
function openAdminPanel() {
  if (!adminUnlocked) { promptAdminPassword(); return; }
  document.getElementById('admin-panel-overlay').style.display = 'flex';
  renderAdminGameLog();
}
function closeAdminPanel() {
  document.getElementById('admin-panel-overlay').style.display = 'none';
}

function promptAdminPassword() {
  document.getElementById('admin-lock-overlay').style.display = 'flex';
  document.getElementById('admin-lock-input').value = '';
  document.getElementById('admin-lock-error').style.display = 'none';
  setTimeout(() => document.getElementById('admin-lock-input').focus(), 50);
}
function submitAdminPassword() {
  const val = document.getElementById('admin-lock-input').value;
  if (val === ADMIN_PASSWORD) {
    adminUnlocked = true;
    document.getElementById('admin-lock-overlay').style.display = 'none';
    openAdminPanel();
  } else {
    document.getElementById('admin-lock-error').style.display = 'block';
    document.getElementById('admin-lock-input').value = '';
    document.getElementById('admin-lock-input').focus();
  }
}
function closeAdminLock() {
  document.getElementById('admin-lock-overlay').style.display = 'none';
}

function adminAddGame() {
  const date     = document.getElementById('admin-date').value;
  const opponent = document.getElementById('admin-opponent').value.trim();
  const result   = document.getElementById('admin-result').value;
  const score    = document.getElementById('admin-score').value.trim();
  const type     = document.getElementById('admin-type').value;
  const notes    = document.getElementById('admin-notes').value.trim();

  if (!date || !opponent || !score) {
    document.getElementById('admin-form-error').textContent = 'Date, opponent, and score are required.';
    document.getElementById('admin-form-error').style.display = 'block';
    return;
  }
  document.getElementById('admin-form-error').style.display = 'none';

  gameLog.push({ date, opponent, result, score, type, notes });
  saveGameLog();
  renderGameLog();
  renderAdminGameLog();

  // Reset form
  document.getElementById('admin-date').value     = '';
  document.getElementById('admin-opponent').value = '';
  document.getElementById('admin-score').value    = '';
  document.getElementById('admin-notes').value    = '';
}

function adminDeleteGame(idx) {
  const realIdx = gameLog.length - 1 - idx; // reversed display
  if (confirm(`Delete game vs ${gameLog[realIdx].opponent}?`)) {
    gameLog.splice(realIdx, 1);
    saveGameLog();
    renderGameLog();
    renderAdminGameLog();
  }
}

function adminAddNews() {
  const title    = document.getElementById('admin-news-title').value.trim();
  const category = document.getElementById('admin-news-cat').value;
  const body     = document.getElementById('admin-news-body').value.trim();
  const date     = document.getElementById('admin-news-date').value;

  if (!title || !body || !date) {
    document.getElementById('admin-news-error').textContent = 'All fields are required.';
    document.getElementById('admin-news-error').style.display = 'block';
    return;
  }
  document.getElementById('admin-news-error').style.display = 'none';

  // Inject new article into the news grid
  const grid = document.getElementById('news-grid');
  if (grid) {
    const article = document.createElement('article');
    article.className = 'news-card';
    article.dataset.category = category;
    const labelMap = { recap:'Game Recap', team:'Team News', media:'Media', spotlight:'Spotlight' };
    article.innerHTML = `
      <div class="news-img">${(labelMap[category]||'NEWS').toUpperCase()}</div>
      <div class="news-body">
        <div class="news-tag">${labelMap[category]||'News'}</div>
        <h3>${title}</h3>
        <p>${body}</p>
        <div class="news-date">${date}</div>
      </div>`;
    grid.insertBefore(article, grid.firstChild);
  }

  document.getElementById('admin-news-title').value = '';
  document.getElementById('admin-news-body').value  = '';
  document.getElementById('admin-news-date').value  = '';
  document.getElementById('admin-news-success').style.display = 'block';
  setTimeout(() => document.getElementById('admin-news-success').style.display = 'none', 3000);
}

function renderAdminGameLog() {
  const tbody = document.getElementById('admin-game-log-tbody');
  if (!tbody) return;
  if (!gameLog.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--gray);padding:12px;">No games logged yet.</td></tr>';
    return;
  }
  tbody.innerHTML = gameLog.slice().reverse().map((g, i) => `
    <tr>
      <td>${g.date}</td>
      <td>${g.opponent}</td>
      <td>${g.result} ${g.score}</td>
      <td>${g.type||'TWBL'}</td>
      <td><button onclick="adminDeleteGame(${i})" style="background:rgba(226,75,74,0.15);border:1px solid rgba(226,75,74,0.3);color:#f09595;padding:3px 10px;border-radius:4px;cursor:pointer;font-size:11px;">Delete</button></td>
    </tr>`
  ).join('');
}


// ═══════════════════════════════════════════════════════════
// IMPORT PASSWORD GATE
// ═══════════════════════════════════════════════════════════
function promptImportPassword() {
  document.getElementById('import-lock-overlay').style.display = 'flex';
  document.getElementById('import-lock-input').value = '';
  document.getElementById('import-lock-error').style.display = 'none';
  setTimeout(() => document.getElementById('import-lock-input').focus(), 50);
}
function submitImportPassword() {
  const val = document.getElementById('import-lock-input').value;
  if (val === IMPORT_PASSWORD) {
    importUnlocked = true;
    document.getElementById('import-lock-overlay').style.display = 'none';
    showStats('import');
  } else {
    document.getElementById('import-lock-error').style.display = 'block';
    document.getElementById('import-lock-input').value = '';
    document.getElementById('import-lock-input').focus();
  }
}
function closeImportLock() {
  document.getElementById('import-lock-overlay').style.display = 'none';
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
  document.getElementById('format-' + type)?.style.setProperty('display','block');
  cancelImport();
}

function handleFile(file) {
  if (!file) return;
  if (!file.name.endsWith('.csv')) { showImportError('Please upload a .csv file.'); return; }
  const reader = new FileReader();
  reader.onload = e => parseCSV(e.target.result);
  reader.readAsText(file);
}

function parseCSV(text) {
  hideImportMessages();
  const lines = text.trim().split('\n').filter(l => l.trim());
  if (lines.length < 2) { showImportError('CSV must have a header row and at least one data row.'); return; }
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g,''));
  parsedRows = lines.slice(1).map(line => {
    const vals = line.split(',').map(v => v.trim().replace(/"/g,''));
    const row = {};
    headers.forEach((h, i) => { row[h] = vals[i] ?? '—'; });
    return row;
  });
  const pt = document.getElementById('import-preview-table');
  pt.innerHTML = `<thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${parsedRows.map(row=>`<tr>${headers.map(h=>`<td>${row[h]??'—'}</td>`).join('')}</tr>`).join('')}</tbody>`;
  document.getElementById('preview-count').textContent = `${parsedRows.length} row${parsedRows.length!==1?'s':''} found`;
  document.getElementById('import-preview-section').style.display = 'block';
}

const STAT_COLS = {
  batting:  ['#','Player','G','PA','AB','R','H','1B','2B','3B','HR','RBI','BB','SO','BA','OBP','SLG','OPS','OPS+','WOBA','TB','WAR'],
  pitching: ['#','Player','W','L','W-L%','ERA','G','GS','GF','SV','IP','H','R','ER','HR','BB','SO','BF','WHIP','SO/BB','WAR'],
  fielding: ['#','Player','G','GS','Inn','CH','PO','A','E','DP','Fld%','RF/4','RF/G','POS','WAR'],
  'advanced-bat': ['#','Player','BAbip','ISO','HR%','SO%','BB%','RS%','SOS%','SOL%'],
  'advanced-pit': ['#','Player','BA','OBP','SLG','OPS','BAbip'],
  team: ['Category','Value','TWBL Rank'],
};

function applyImport() {
  if (!parsedRows.length) return;
  liveStats[currentImportType] = parsedRows;
  const colKey = currentImportType === 'advanced' ? 'advanced-bat' : currentImportType;
  const tbodyId = currentImportType === 'advanced' ? 'tbody-advanced-bat' : 'tbody-' + currentImportType;
  const tbody = document.getElementById(tbodyId);
  const cols  = STAT_COLS[colKey];
  if (tbody && cols) {
    tbody.innerHTML = parsedRows.map(row =>
      `<tr>${cols.map((c,i) => `<td class="${i===0?'num':i===1?'name':''}">${row[c]??'—'}</td>`).join('')}</tr>`
    ).join('');
    tbody.closest('.stat-tab')?.querySelectorAll('.stats-empty').forEach(el => el.style.display='none');
  }
  hideImportMessages();
  document.getElementById('import-preview-section').style.display = 'none';
  document.getElementById('import-success').style.display = 'block';
  if (document.getElementById('csv-file-input')) document.getElementById('csv-file-input').value = '';
  parsedRows = [];
  updateLeaderboard();
}

function cancelImport() {
  parsedRows = [];
  const ps = document.getElementById('import-preview-section');
  if (ps) ps.style.display = 'none';
  const fi = document.getElementById('csv-file-input');
  if (fi) fi.value = '';
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
// LEADERBOARD
// ═══════════════════════════════════════════════════════════
function updateLeaderboard() {
  const batData = liveStats.batting;
  const pitData = liveStats.pitching;
  function leader(data, col, lowBest=false) {
    if (!data||!data.length) return {name:'—',val:'—'};
    const valid = data.filter(r => r[col] && r[col]!=='—' && !isNaN(parseFloat(r[col])));
    if (!valid.length) return {name:'—',val:'—'};
    const best = valid.reduce((a,b) => {
      const av=parseFloat(a[col]), bv=parseFloat(b[col]);
      return lowBest ? (bv<av?b:a) : (bv>av?b:a);
    });
    return {name:best.Player||'—', val:best[col]};
  }
  const leaders = {
    ba:  leader(batData,'BA'),    hr:   leader(batData,'HR'),
    rbi: leader(batData,'RBI'),   ops:  leader(batData,'OPS'),
    era: leader(pitData,'ERA',true), so: leader(pitData,'SO'),
    whip:leader(pitData,'WHIP',true), war: leader(batData,'WAR'),
  };
  Object.entries(leaders).forEach(([key,{name,val}]) => {
    document.getElementById(`leader-${key}-name`)?.textContent && (document.getElementById(`leader-${key}-name`).textContent = name);
    document.getElementById(`leader-${key}-val`)?.textContent  && (document.getElementById(`leader-${key}-val`).textContent  = val);
  });
}


// ═══════════════════════════════════════════════════════════
// NEWS FILTER
// ═══════════════════════════════════════════════════════════
function filterNews(category, btn) {
  document.querySelectorAll('.news-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#news-grid .news-card').forEach(card => {
    card.style.display = (category==='all' || card.dataset.category===category) ? 'block' : 'none';
  });
}


// ═══════════════════════════════════════════════════════════
// GALLERY LIGHTBOX
// ═══════════════════════════════════════════════════════════
let galleryImages = [];
let lightboxIndex = 0;

function initGallery() {
  const items = document.querySelectorAll('.gallery-item:not(.placeholder)');
  galleryImages = Array.from(items).map(item => item.querySelector('img')?.src).filter(Boolean);
  items.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));
}
function openLightbox(index) {
  if (!galleryImages.length) return;
  lightboxIndex = index;
  document.getElementById('lightbox-img').src = galleryImages[lightboxIndex];
  document.getElementById('gallery-lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('gallery-lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + galleryImages.length) % galleryImages.length;
  document.getElementById('lightbox-img').src = galleryImages[lightboxIndex];
}
document.getElementById('gallery-lightbox')?.addEventListener('click', e => { if (e.target.id==='gallery-lightbox') closeLightbox(); });
document.addEventListener('keydown', e => {
  if (e.key==='Escape') { closeLightbox(); closeAdminPanel(); }
  if (e.key==='ArrowLeft')  lightboxNav(-1);
  if (e.key==='ArrowRight') lightboxNav(1);
});


// ═══════════════════════════════════════════════════════════
// TEMPLATE DOWNLOADS
// ═══════════════════════════════════════════════════════════
const ROSTER_NUMS  = ['27','10','12','14','19','21','55'];
const ROSTER_NAMES = ['Garret Harrell','Landon Simpson','Logan Wurzbach','Dylan Hightower','Zach Torres','Landon Davidson','Joshua Bischops'];

function downloadTemplate(type) {
  const headers = {
    batting:  '#,Player,G,PA,AB,R,H,1B,2B,3B,HR,RBI,BB,SO,BA,OBP,SLG,OPS,OPS+,WOBA,TB,WAR',
    pitching: '#,Player,W,L,W-L%,ERA,G,GS,GF,SV,IP,H,R,ER,HR,BB,SO,BF,WHIP,SO/BB,WAR',
    fielding: '#,Player,G,GS,Inn,CH,PO,A,E,DP,Fld%,RF/4,RF/G,POS,WAR',
    team:     'Category,Value,TWBL Rank',
  };
  const hdr = headers[type];
  if (!hdr) return;
  let lines = [hdr];
  if (type === 'team') {
    lines = [hdr,'Record,0-0,—','Runs / Game,—,—','Runs Allowed / Game,—,—','Team BA,—,—','Team OBP,—,—','Team SLG,—,—','Team OPS,—,—','Team ERA,—,—','Team WHIP,—,—','Team HR,—,—'];
  } else {
    const cols = hdr.split(',').length - 2;
    ROSTER_NUMS.forEach((num, i) => { lines.push(`${num},${ROSTER_NAMES[i]},${Array(cols).fill('0').join(',')}`); });
  }
  const blob = new Blob([lines.join('\n')], {type:'text/csv'});
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), {href:url, download:`cookie-monsters-${type}-template.csv`});
  a.click();
  URL.revokeObjectURL(url);
}


// ═══════════════════════════════════════════════════════════
// RESULTS PAGE — summary stats
// ═══════════════════════════════════════════════════════════
const _origRenderGameLog = renderGameLog;
renderGameLog = function() {
  _origRenderGameLog();
  updateResultsSummary();
};

function updateResultsSummary() {
  const wins   = gameLog.filter(g => g.result === 'W').length;
  const losses = gameLog.filter(g => g.result === 'L').length;
  const total  = gameLog.length;
  const pct    = total ? (wins / total).toFixed(3).replace(/^0/,'') : '—';

  let rs = 0, ra = 0;
  gameLog.forEach(g => {
    const parts = (g.score || '').split('-');
    if (parts.length === 2) {
      const a = parseInt(parts[0]), b = parseInt(parts[1]);
      if (!isNaN(a) && !isNaN(b)) {
        if (g.result === 'W') { rs += a; ra += b; }
        else                  { rs += b; ra += a; }
      }
    }
  });

  // Streak
  let streak = '—';
  if (gameLog.length) {
    const last = gameLog[gameLog.length - 1].result;
    let count = 0;
    for (let i = gameLog.length - 1; i >= 0; i--) {
      if (gameLog[i].result === last) count++;
      else break;
    }
    streak = `${last}${count}`;
  }

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('res-wins',   wins);
  set('res-losses', losses);
  set('res-pct',    pct);
  set('res-rs',     rs || 0);
  set('res-ra',     ra || 0);
  set('res-streak', streak);
}


// ═══════════════════════════════════════════════════════════
// HOME SLIDESHOW
// ═══════════════════════════════════════════════════════════
let slideIndex   = 0;
let slideTotal   = 0;
let slideTimer   = null;

function initSlideshow() {
  const track  = document.getElementById('slideshow-track');
  const dots   = document.getElementById('slideshow-dots');
  if (!track) return;

  const slides = track.querySelectorAll('.slide');
  slideTotal   = slides.length;
  if (slideTotal <= 1) return; // nothing to cycle if 0 or 1 slide

  // Build dots
  dots.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slideshow-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dots.appendChild(dot);
  });

  startSlideTimer();
}

function goToSlide(idx) {
  slideIndex = (idx + slideTotal) % slideTotal;
  const track = document.getElementById('slideshow-track');
  if (track) track.style.transform = `translateX(-${slideIndex * 100}%)`;
  document.querySelectorAll('.slideshow-dot').forEach((d, i) => {
    d.classList.toggle('active', i === slideIndex);
  });
}

function slideshowNav(dir) {
  clearTimeout(slideTimer);
  goToSlide(slideIndex + dir);
  startSlideTimer();
}

function startSlideTimer() {
  clearTimeout(slideTimer);
  if (slideTotal > 1) {
    slideTimer = setTimeout(() => { goToSlide(slideIndex + 1); startSlideTimer(); }, 4000);
  }
}

document.addEventListener('DOMContentLoaded', initSlideshow);


// ═══════════════════════════════════════════════════════════
// DARK / LIGHT MODE
// ═══════════════════════════════════════════════════════════
function toggleTheme() {
  const isLight = document.body.classList.toggle('light');
  localStorage.setItem('cm-theme', isLight ? 'light' : 'dark');
  document.getElementById('theme-toggle').textContent = isLight ? '🌙' : '☀';
}

function initTheme() {
  const saved = localStorage.getItem('cm-theme');
  if (saved === 'light') {
    document.body.classList.add('light');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = '🌙';
  }
}


// ═══════════════════════════════════════════════════════════
// LAST GAME SPOTLIGHT
// ═══════════════════════════════════════════════════════════
function updateLastGame() {
  const section = document.getElementById('last-game-section');
  if (!section || !gameLog.length) return;

  const g    = gameLog[gameLog.length - 1];
  const win  = g.result === 'W';
  const loss = g.result === 'L';

  section.style.display = 'block';

  const badge = document.getElementById('lg-result-badge');
  badge.innerHTML = `<span class="result-badge ${win?'win':loss?'loss':'tie'}" style="width:48px;height:48px;font-size:18px;line-height:48px;">${g.result}</span>`;

  document.getElementById('lg-score').textContent = g.score || '—';
  document.getElementById('lg-opp').textContent   = `vs. ${g.opponent}`;

  const dateStr = g.date ? new Date(g.date + 'T00:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : '—';
  document.getElementById('lg-meta').textContent  = `${dateStr} · ${g.type || 'TWBL'}`;

  const notesEl = document.getElementById('lg-notes');
  notesEl.textContent = g.notes || '';
  notesEl.style.display = g.notes ? 'block' : 'none';
}


// ═══════════════════════════════════════════════════════════
// PLAYER SHARE CARD
// ═══════════════════════════════════════════════════════════
let currentPlayerKey = null;

// Override showPlayer to track current player
const _origShowPlayer = showPlayer;
showPlayer = function(id) {
  currentPlayerKey = id;
  _origShowPlayer(id);
};

function openShareCard() {
  const id = currentPlayerKey;
  if (!id) return;
  const p = PLAYERS[id];
  if (!p) return;

  // Get live or fallback stats
  const b  = getLiveStatForPlayer(p.name, 'batting')  || p.batting2026  || p.batting2025;
  const pi = getLiveStatForPlayer(p.name, 'pitching') || p.pitching2026 || p.pitching2025;

  document.getElementById('sc-number').textContent  = `#${p.number}`;
  document.getElementById('sc-name').textContent    = p.name;
  document.getElementById('sc-pos').textContent     = p.position;

  const physical = [p.height, p.weight ? p.weight + ' lb' : null].filter(Boolean).join(' · ');
  document.getElementById('sc-physical').textContent = physical || '';

  const yearClass = p.year==='Rookie' ? 'pb-rook' : p.year==='3rd Year' ? 'pb-vet' : 'pb-year';
  document.getElementById('sc-badges').innerHTML = `
    <span class="player-badge ${yearClass}" style="font-size:10px;">${p.year}</span>
    <span class="player-badge pb-hand" style="font-size:10px;">${p.hand}</span>
  `;

  // Pick best available stats to show on card
  const batStats = [
    { label:'BA',   val: b?.BA   || '—' },
    { label:'OPS',  val: b?.OPS  || '—' },
    { label:'HR',   val: b?.HR   || '—' },
    { label:'RBI',  val: b?.RBI  || '—' },
  ];
  const pitStats = [
    { label:'ERA',  val: pi?.ERA  || '—' },
    { label:'WHIP', val: pi?.WHIP || '—' },
    { label:'SO',   val: pi?.SO   || '—' },
    { label:'W',    val: pi?.W    || '—' },
  ];

  // Use batting if available, pitching if pitcher-only
  const statsToShow = (b?.AB && b.AB !== '—') ? batStats : pitStats;
  document.getElementById('sc-stats').innerHTML = statsToShow.map(s => `
    <div class="sc-stat">
      <div class="sc-stat-val">${s.val}</div>
      <div class="sc-stat-label">${s.label}</div>
    </div>`).join('');

  const overlay = document.getElementById('share-overlay');
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeShareOverlay() {
  document.getElementById('share-overlay').style.display = 'none';
  document.body.style.overflow = '';
}

function printPlayerCard() {
  const card = document.getElementById('share-card');
  const win  = window.open('', '_blank', 'width=480,height=620');
  win.document.write(`
    <!DOCTYPE html><html><head>
    <title>Player Card</title>
    <link rel="stylesheet" href="${window.location.origin}${window.location.pathname.replace('index.html','')}style.css"/>
    <style>
      body { margin:0; background:#0a1628; display:flex; align-items:center; justify-content:center; min-height:100vh; }
      @media print { body { background:#0a1628 !important; } }
    </style>
    </head><body>
    ${card.outerHTML}
    <script>window.onload=()=>{ setTimeout(()=>window.print(),400); }<\/script>
    </body></html>`);
  win.document.close();
}

// Close share overlay on backdrop click or Escape
document.getElementById('share-overlay')?.addEventListener('click', e => {
  if (e.target.id === 'share-overlay') closeShareOverlay();
});


// ═══════════════════════════════════════════════════════════
// HOOK INTO GAME LOG — update last game + home record
// ═══════════════════════════════════════════════════════════
const _origRenderGL = renderGameLog;
renderGameLog = function() {
  _origRenderGL();
  updateLastGame();
};


// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateLastGame();
});


// ═══════════════════════════════════════════════════════════
// COUNT-UP ANIMATION
// ═══════════════════════════════════════════════════════════
function countUp(el, target, duration = 800, isDecimal = false) {
  if (!el || target === '—' || isNaN(parseFloat(target))) {
    if (el) el.textContent = target;
    return;
  }
  const end      = parseFloat(target);
  const start    = 0;
  const steps    = 40;
  const stepTime = duration / steps;
  let current    = start;
  let step       = 0;

  const timer = setInterval(() => {
    step++;
    current = start + (end - start) * (step / steps);
    if (step >= steps) {
      clearInterval(timer);
      el.textContent = target; // use original string to preserve formatting
    } else {
      el.textContent = isDecimal
        ? current.toFixed(3).replace(/^0/, '')
        : Math.round(current).toString();
    }
  }, stepTime);
}

// Hook into updateResultsSummary to add count-up
const _origUpdateSummary = updateResultsSummary;
updateResultsSummary = function() {
  _origUpdateSummary();
  // Re-animate after values are set
  setTimeout(() => {
    const fields = [
      ['res-wins',   false],
      ['res-losses', false],
      ['res-rs',     false],
      ['res-ra',     false],
    ];
    fields.forEach(([id, dec]) => {
      const el = document.getElementById(id);
      if (el) countUp(el, el.textContent, 600, dec);
    });
  }, 50);
};

// Hook into updateLeaderboard to add count-up on values
const _origUpdateLeader = updateLeaderboard;
updateLeaderboard = function() {
  _origUpdateLeader();
  setTimeout(() => {
    const keys = ['ba','hr','rbi','ops','era','so','whip','war'];
    keys.forEach(key => {
      const el = document.getElementById(`leader-${key}-val`);
      if (el && el.textContent !== '—') {
        const isDecimal = ['ba','ops','era','whip'].includes(key);
        countUp(el, el.textContent, 700, isDecimal);
      }
    });
  }, 50);
};

// Season dropdown — same logic as stats dropdown
document.addEventListener('DOMContentLoaded', () => {
  const seasonDd = document.getElementById('season-dropdown');
  if (seasonDd) {
    seasonDd.querySelector('.nav-link')?.addEventListener('click', e => {
      e.preventDefault();
      const open = seasonDd.classList.contains('open');
      closeAllDropdowns();
      if (!open) seasonDd.classList.add('open');
    });
  }
});

// Gold leader val color — update dynamically after leaderboard populates
function applyGoldToLeaderVals() {
  document.querySelectorAll('.leader-val').forEach(el => {
    if (el.textContent && el.textContent !== '—') {
      el.style.color = 'var(--gold)';
    } else {
      el.style.color = '';
    }
  });
}
const _origLeaderFinal = updateLeaderboard;
updateLeaderboard = function() {
  _origLeaderFinal();
  setTimeout(applyGoldToLeaderVals, 900);
};
