/* XP / level / badge / checklist persistence, in the spirit of the Kickoff Club progress system. */

const STORAGE_KEY = 'acp_catchup_progress_v1';

const LEVELS = [
  { name: 'Apprentice', min: 0 },
  { name: 'Emerging Artist', min: 60 },
  { name: 'Practising Artist', min: 160 },
  { name: 'Studio Master', min: 320 }
];

const BADGE_DEFS = {
  foundations: { label: 'Foundations Explorer', desc: 'Explored all 4 parts of the Creative Practice and all 3 Interpretive Lenses.' },
  unit1: { label: 'Unit 1 Wrapped', desc: 'Completed every checklist item across Unit 1.' },
  unit2: { label: 'Unit 2 Wrapped', desc: 'Completed every checklist item across Unit 2.' },
  glossary: { label: 'Glossary Guru', desc: 'Flipped every flashcard in the glossary.' },
  quizWhiz: { label: 'Quiz Whiz', desc: 'Scored 80% or higher on a quiz.' },
  readySet: { label: 'Ready for Unit 3/4', desc: 'Completed Foundations, Unit 1 and Unit 2.' }
};

function defaultProgress() {
  return {
    xp: 0,
    checklist: {},
    explored: { cp: {}, lens: {} },
    flashcards: {},
    quizBest: {},
    badges: [],
    journal: '',
    artistGrids: { unit1: [{}, {}, {}], unit2: [{}, {}, {}] }
  };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultProgress(), parsed);
  } catch (e) {
    return defaultProgress();
  }
}

let progress = loadProgress();

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new CustomEvent('progress-updated'));
}

function addXP(amount) {
  progress.xp += amount;
  saveProgress();
  checkBadges();
}

function currentLevel() {
  let lvl = LEVELS[0];
  for (const l of LEVELS) {
    if (progress.xp >= l.min) lvl = l;
  }
  return lvl;
}

function nextLevel() {
  const idx = LEVELS.findIndex(l => l.name === currentLevel().name);
  return LEVELS[idx + 1] || null;
}

function toggleChecklistItem(id) {
  const wasChecked = !!progress.checklist[id];
  progress.checklist[id] = !wasChecked;
  addXP(wasChecked ? -5 : 5);
  checkUnitBadges();
}

function markExploredCP(id) {
  if (progress.explored.cp[id]) return;
  progress.explored.cp[id] = true;
  addXP(8);
  checkBadges();
}

function markExploredLens(id, mode) {
  if (!progress.explored.lens[id]) progress.explored.lens[id] = {};
  if (progress.explored.lens[id][mode]) return;
  progress.explored.lens[id][mode] = true;
  addXP(6);
  checkBadges();
}

function toggleFlashcard(id) {
  if (progress.flashcards[id]) return;
  progress.flashcards[id] = true;
  addXP(2);
  checkBadges();
}

function recordQuizScore(quizId, pct) {
  const prevBest = progress.quizBest[quizId] || 0;
  if (pct > prevBest) {
    progress.quizBest[quizId] = pct;
  }
  addXP(Math.round(pct / 5));
  if (pct >= 80) awardBadge('quizWhiz');
  saveProgress();
}

function awardBadge(id) {
  if (!progress.badges.includes(id)) {
    progress.badges.push(id);
    saveProgress();
  }
}

function checkBadges() {
  const cpDone = CREATIVE_PRACTICE.every(c => progress.explored.cp[c.id]);
  const lensDone = LENSES.every(l => progress.explored.lens[l.id] && progress.explored.lens[l.id].making && progress.explored.lens[l.id].responding);
  if (cpDone && lensDone) awardBadge('foundations');

  const glossaryTotal = ART_ELEMENTS.length + ART_PRINCIPLES.length + GLOSSARY.length;
  const glossaryDone = Object.keys(progress.flashcards).filter(k => progress.flashcards[k]).length >= glossaryTotal;
  if (glossaryDone) awardBadge('glossary');

  checkUnitBadges();

  if (progress.badges.includes('foundations') && progress.badges.includes('unit1') && progress.badges.includes('unit2')) {
    awardBadge('readySet');
  }
}

function checkUnitBadges() {
  const u1Items = UNIT1.areasOfStudy.flatMap(a => a.checklist.map((_, i) => `${a.id}-${i}`));
  const u1Done = u1Items.every(id => progress.checklist[id]);
  if (u1Done) awardBadge('unit1');

  const u2Items = UNIT2.areasOfStudy.flatMap(a => a.checklist.map((_, i) => `${a.id}-${i}`));
  const u2Done = u2Items.every(id => progress.checklist[id]);
  if (u2Done) awardBadge('unit2');

  if (progress.badges.includes('foundations') && progress.badges.includes('unit1') && progress.badges.includes('unit2')) {
    awardBadge('readySet');
  }
}

function overallPercent() {
  const cpTotal = CREATIVE_PRACTICE.length;
  const cpDone = Object.keys(progress.explored.cp).length;

  const lensTotal = LENSES.length * 2;
  let lensDone = 0;
  LENSES.forEach(l => {
    if (progress.explored.lens[l.id]) {
      if (progress.explored.lens[l.id].making) lensDone++;
      if (progress.explored.lens[l.id].responding) lensDone++;
    }
  });

  const u1Items = UNIT1.areasOfStudy.flatMap(a => a.checklist.map((_, i) => `${a.id}-${i}`));
  const u1Done = u1Items.filter(id => progress.checklist[id]).length;

  const u2Items = UNIT2.areasOfStudy.flatMap(a => a.checklist.map((_, i) => `${a.id}-${i}`));
  const u2Done = u2Items.filter(id => progress.checklist[id]).length;

  const totalItems = cpTotal + lensTotal + u1Items.length + u2Items.length;
  const doneItems = cpDone + lensDone + u1Done + u2Done;
  return totalItems === 0 ? 0 : Math.round((doneItems / totalItems) * 100);
}
