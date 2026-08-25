/* App wiring: navigation, dashboard, foundations, units, glossary. */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initCPWheel();
  initMakingResponding();
  initLenses();
  renderUnit(UNIT1, 'unit1');
  renderUnit(UNIT2, 'unit2');
  initGlossary();
  initArtForms();
  initQuizButtons();
  renderDashboard();
  refreshHeaderProgress();
  window.addEventListener('progress-updated', () => {
    refreshHeaderProgress();
    renderDashboard();
  });
});

/* ---------- Navigation ---------- */
function initNav() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => goToTab(btn.dataset.tab));
  });
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => goToTab(btn.dataset.goto));
  });
}

function goToTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === `tab-${tab}`));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- Header progress ---------- */
function refreshHeaderProgress() {
  const lvl = currentLevel();
  const next = nextLevel();
  document.getElementById('level-chip').textContent = lvl.name;
  document.getElementById('xp-label').textContent = `${progress.xp} XP`;
  const pct = next ? Math.min(100, Math.round(((progress.xp - lvl.min) / (next.min - lvl.min)) * 100)) : 100;
  document.getElementById('xp-fill').style.width = pct + '%';
}

/* ---------- Dashboard ---------- */
function renderDashboard() {
  const pct = overallPercent();
  document.getElementById('ring-text').textContent = pct + '%';
  const ring = document.getElementById('ring-fg');
  const circumference = 2 * Math.PI * 52;
  ring.style.strokeDasharray = `${circumference}`;
  ring.style.strokeDashoffset = `${circumference * (1 - pct / 100)}`;

  const lvl = currentLevel();
  const next = nextLevel();
  document.getElementById('stat-level').textContent = lvl.name;
  document.getElementById('stat-xp').textContent = `${progress.xp} XP`;
  document.getElementById('stat-next').textContent = next ? `Next level (${next.name}) at ${next.min} XP` : 'Max level reached!';

  const badgeGrid = document.getElementById('badge-grid');
  badgeGrid.innerHTML = '';
  Object.keys(BADGE_DEFS).forEach(id => {
    const def = BADGE_DEFS[id];
    const earned = progress.badges.includes(id);
    const el = document.createElement('div');
    el.className = 'badge' + (earned ? ' earned' : '');
    el.innerHTML = `<div class="badge-icon">${earned ? '🏅' : '🔒'}</div><div><strong>${def.label}</strong><p class="muted">${def.desc}</p></div>`;
    badgeGrid.appendChild(el);
  });
}

/* ---------- Creative Practice wheel ---------- */
function initCPWheel() {
  const wheel = document.getElementById('cp-wheel');
  CREATIVE_PRACTICE.forEach((c, i) => {
    const seg = document.createElement('button');
    seg.className = 'cp-segment';
    seg.dataset.id = c.id;
    seg.innerHTML = `<span class="cp-num">${i + 1}</span><span>${c.title}</span>`;
    seg.addEventListener('click', () => showCPDetail(c.id));
    wheel.appendChild(seg);
  });
  showCPDetail(CREATIVE_PRACTICE[0].id);
}

function showCPDetail(id) {
  const c = CREATIVE_PRACTICE.find(x => x.id === id);
  document.querySelectorAll('.cp-segment').forEach(s => s.classList.toggle('active', s.dataset.id === id));
  markExploredCP(id);
  const detail = document.getElementById('cp-detail');
  const explored = Object.keys(progress.explored.cp).length;
  detail.innerHTML = `
    <h3>${c.title} <span class="muted">— ${c.tagline}</span></h3>
    <ul>${c.points.map(p => `<li>${p}</li>`).join('')}</ul>
    <div class="try-it"><strong>Try it now:</strong> ${c.tryIt}</div>
    <p class="muted">${explored} of ${CREATIVE_PRACTICE.length} components explored</p>
  `;
}

/* ---------- Making & Responding ---------- */
function initMakingResponding() {
  document.getElementById('making-text').textContent = MAKING_RESPONDING.making;
  document.getElementById('responding-text').textContent = MAKING_RESPONDING.responding;
}

/* ---------- Lenses ---------- */
function initLenses() {
  const wrap = document.getElementById('lens-cards');
  LENSES.forEach(l => {
    const card = document.createElement('div');
    card.className = 'lens-card';
    card.style.setProperty('--lens-colour', l.colour);
    card.innerHTML = `
      <h3>${l.name}</h3>
      <p class="lens-question">${l.keyQuestion}</p>
      <div class="lens-tabs">
        <button class="lens-tab-btn active" data-mode="def">Definition</button>
        <button class="lens-tab-btn" data-mode="making">Through Making</button>
        <button class="lens-tab-btn" data-mode="responding">Through Responding</button>
      </div>
      <p class="lens-body" data-def="${escapeAttr(l.definition)}" data-making="${escapeAttr(l.making)}" data-responding="${escapeAttr(l.responding)}">${l.definition}</p>
    `;
    wrap.appendChild(card);
    const body = card.querySelector('.lens-body');
    card.querySelectorAll('.lens-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        card.querySelectorAll('.lens-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.dataset.mode;
        body.textContent = body.dataset[mode];
        if (mode === 'making') markExploredLens(l.id, 'making');
        if (mode === 'responding') markExploredLens(l.id, 'responding');
      });
    });
  });
}

function escapeAttr(str) {
  return str.replace(/"/g, '&quot;');
}

/* ---------- Units ---------- */
function renderUnit(unitData, key) {
  document.getElementById(`${key}-title`).textContent = `${unitData.code}: ${unitData.title}`;
  document.getElementById(`${key}-intro`).textContent = unitData.intro;

  const container = document.getElementById(`${key}-content`);
  container.innerHTML = '';

  unitData.areasOfStudy.forEach(aos => {
    const card = document.createElement('div');
    card.className = 'card aos-card';
    card.innerHTML = `
      <h3>${aos.title}</h3>
      <p>${aos.description}</p>
      <div class="req-box">
        <strong>Requirements:</strong>
        <ul>${aos.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
      </div>
      <details>
        <summary>Outcome, key knowledge &amp; key skills</summary>
        <p class="outcome-text"><strong>Outcome:</strong> ${aos.outcome}</p>
        <div class="grid-2">
          <div>
            <strong>Key knowledge</strong>
            <ul>${aos.keyKnowledge.map(k => `<li>${k}</li>`).join('')}</ul>
          </div>
          <div>
            <strong>Key skills</strong>
            <ul>${aos.keySkills.map(k => `<li>${k}</li>`).join('')}</ul>
          </div>
        </div>
        <p><strong>Assessment ideas your teacher might use:</strong></p>
        <ul>${aos.assessmentIdeas.map(a => `<li>${a}</li>`).join('')}</ul>
      </details>
      <div class="checklist" data-aos="${aos.id}">
        <strong>Catch-up checklist</strong>
        <div class="checklist-items"></div>
      </div>
      <div class="aos-extra" data-aos-extra="${aos.id}"></div>
    `;
    container.appendChild(card);

    const itemsWrap = card.querySelector('.checklist-items');
    aos.checklist.forEach((text, i) => {
      const id = `${aos.id}-${i}`;
      const row = document.createElement('label');
      row.className = 'check-row';
      const checked = !!progress.checklist[id];
      row.innerHTML = `<input type="checkbox" ${checked ? 'checked' : ''}> <span>${text}</span>`;
      row.querySelector('input').addEventListener('change', () => {
        toggleChecklistItem(id);
        row.classList.toggle('done', progress.checklist[id]);
      });
      if (checked) row.classList.add('done');
      itemsWrap.appendChild(row);
    });

    const extra = card.querySelector('.aos-extra');
    if (aos.id === 'u1aos1') buildArtistGrid(extra, 'unit1', ['Structural Lens notes', 'Personal Lens notes'], ['Contemporary artist (since 2001)', 'Australian artist']);
    if (aos.id === 'u2aos1') buildArtistGrid(extra, 'unit2', ['Cultural Lens notes', 'Other lens notes (optional)'], ['Aboriginal or Torres Strait Islander artist', 'Collaborative artist', 'Historical artist (traditional form)', 'Contemporary artist']);
    if (aos.id === 'u1aos2' || aos.id === 'u2aos2') buildPromptBox(extra);
    if (aos.id === 'u1aos3') buildJournalBox(extra);
  });
}

/* ---------- Artist research toolkit ---------- */
function buildArtistGrid(container, unitKey, noteLabels, conditionLabels) {
  const wrap = document.createElement('div');
  wrap.className = 'artist-tool';
  wrap.innerHTML = `<h4>🖼️ Artist research toolkit</h4><p class="muted">Fill this in as you research — it autosaves in your browser. Use "Print this page" when you're ready to hand in or paste into your visual diary.</p>`;

  const rows = progress.artistGrids[unitKey];
  rows.forEach((rowData, idx) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'artist-row';
    const conditions = rowData.conditions || [];
    rowEl.innerHTML = `
      <h5>Artist ${idx + 1}</h5>
      <div class="artist-fields">
        <label>Artist name <input type="text" data-field="name" value="${escapeAttr(rowData.name || '')}"></label>
        <label>Period / culture <input type="text" data-field="period" value="${escapeAttr(rowData.period || '')}"></label>
        <label>Artwork studied <input type="text" data-field="artwork" value="${escapeAttr(rowData.artwork || '')}"></label>
      </div>
      <label class="area-label">${noteLabels[0]} <textarea data-field="noteA" rows="2">${rowData.noteA || ''}</textarea></label>
      <label class="area-label">${noteLabels[1]} <textarea data-field="noteB" rows="2">${rowData.noteB || ''}</textarea></label>
      <div class="condition-checks">
        ${conditionLabels.map((c, ci) => `<label class="cond-check"><input type="checkbox" data-cond="${ci}" ${conditions.includes(ci) ? 'checked' : ''}> ${c}</label>`).join('')}
      </div>
    `;
    rowEl.querySelectorAll('input[data-field], textarea[data-field]').forEach(input => {
      input.addEventListener('input', () => {
        rowData[input.dataset.field] = input.value;
        saveProgress();
      });
    });
    rowEl.querySelectorAll('input[data-cond]').forEach(cb => {
      cb.addEventListener('change', () => {
        const ci = Number(cb.dataset.cond);
        rowData.conditions = rowData.conditions || [];
        if (cb.checked) {
          if (!rowData.conditions.includes(ci)) rowData.conditions.push(ci);
        } else {
          rowData.conditions = rowData.conditions.filter(x => x !== ci);
        }
        saveProgress();
        updateConditionValidator(wrap, rows, conditionLabels);
      });
    });
    wrap.appendChild(rowEl);
  });

  const validator = document.createElement('div');
  validator.className = 'condition-validator';
  wrap.appendChild(validator);
  updateConditionValidator(wrap, rows, conditionLabels);

  const printBtn = document.createElement('button');
  printBtn.className = 'btn-secondary';
  printBtn.textContent = '🖨️ Print this page';
  printBtn.addEventListener('click', () => window.print());
  wrap.appendChild(printBtn);

  container.appendChild(wrap);
}

function updateConditionValidator(wrap, rows, conditionLabels) {
  const validator = wrap.querySelector('.condition-validator');
  const covered = new Set();
  rows.forEach(r => (r.conditions || []).forEach(c => covered.add(c)));
  const missing = conditionLabels.filter((_, i) => !covered.has(i));
  validator.innerHTML = missing.length === 0
    ? `<p class="feedback-correct">✅ All requirements covered across your 3 artists.</p>`
    : `<p class="muted">Still needed: ${missing.join(', ')}</p>`;
}

/* ---------- Studio prompt generator ---------- */
function buildPromptBox(container) {
  const wrap = document.createElement('div');
  wrap.className = 'prompt-box';
  wrap.innerHTML = `
    <h4>🎲 Stuck on what to make? Get a studio prompt</h4>
    <p class="prompt-text" id="prompt-text-${container.dataset.aosExtra}">Click the button for a random exercise.</p>
    <button class="btn-secondary">Give me a prompt</button>
  `;
  const textEl = wrap.querySelector('.prompt-text');
  wrap.querySelector('button').addEventListener('click', () => {
    const p = STUDIO_PROMPTS[Math.floor(Math.random() * STUDIO_PROMPTS.length)];
    textEl.textContent = p;
  });
  container.appendChild(wrap);
}

/* ---------- Reflection journal ---------- */
function buildJournalBox(container) {
  const wrap = document.createElement('div');
  wrap.className = 'journal-box';
  wrap.innerHTML = `
    <h4>📝 Reflection journal</h4>
    <p class="muted">Use Structural Lens / Personal Lens language. This autosaves.</p>
    <textarea rows="5" id="journal-textarea" placeholder="What were you trying to communicate? What worked? What would you change?">${progress.journal || ''}</textarea>
  `;
  container.appendChild(wrap);
  wrap.querySelector('textarea').addEventListener('input', (e) => {
    progress.journal = e.target.value;
    saveProgress();
  });
}

/* ---------- Glossary ---------- */
function initGlossary() {
  buildFlipGrid('elements-grid', ART_ELEMENTS, 'el');
  buildFlipGrid('principles-grid', ART_PRINCIPLES, 'pr');
  buildFlipGrid('terms-grid', GLOSSARY, 'gl');
}

function buildFlipGrid(containerId, items, prefix) {
  const grid = document.getElementById(containerId);
  items.forEach((item, i) => {
    const id = `${prefix}-${i}`;
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front"><span>${item.term}</span></div>
        <div class="flip-back"><span>${item.def}</span></div>
      </div>
    `;
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      toggleFlashcard(id);
    });
    grid.appendChild(card);
  });
}

/* ---------- Art forms ---------- */
function initArtForms() {
  const wrap = document.getElementById('art-forms-list');
  ART_FORMS.forEach(f => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = f;
    wrap.appendChild(chip);
  });
}

/* ---------- Quiz buttons ---------- */
function initQuizButtons() {
  document.querySelectorAll('[data-quiz]').forEach(btn => {
    btn.addEventListener('click', () => {
      goToTab('quiz');
      startQuiz(btn.dataset.quiz);
    });
  });
}
