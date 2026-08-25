/* Quiz engine: renders a question set into #quiz-area with instant feedback. */

let activeQuiz = null;

function buildQuizQuestions(category) {
  if (category === 'mixed') {
    const all = [...QUIZ_BANK.foundations, ...QUIZ_BANK.unit1, ...QUIZ_BANK.unit2, ...QUIZ_BANK.examSkills];
    return shuffleArray(all).slice(0, 10);
  }
  return shuffleArray(QUIZ_BANK[category].slice());
}

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz(category) {
  const area = document.getElementById('quiz-area');
  area.style.display = 'block';
  area.scrollIntoView({ behavior: 'smooth', block: 'start' });

  activeQuiz = {
    category,
    questions: buildQuizQuestions(category),
    index: 0,
    correct: 0,
    answered: false
  };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const area = document.getElementById('quiz-area');
  const q = activeQuiz.questions[activeQuiz.index];
  const total = activeQuiz.questions.length;

  area.innerHTML = `
    <div class="quiz-progress">Question ${activeQuiz.index + 1} of ${total}</div>
    <h3 class="quiz-question">${q.q}</h3>
    <div class="quiz-options" id="quiz-options"></div>
    <div class="quiz-feedback" id="quiz-feedback"></div>
    <div class="quiz-actions" id="quiz-actions"></div>
  `;

  const optionsWrap = document.getElementById('quiz-options');
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectQuizAnswer(i));
    optionsWrap.appendChild(btn);
  });
}

function selectQuizAnswer(i) {
  if (activeQuiz.answered) return;
  activeQuiz.answered = true;
  const q = activeQuiz.questions[activeQuiz.index];
  const options = document.querySelectorAll('.quiz-option');
  options.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add('correct');
    else if (idx === i) btn.classList.add('incorrect');
  });

  const feedback = document.getElementById('quiz-feedback');
  if (i === q.answer) {
    activeQuiz.correct++;
    feedback.innerHTML = `<span class="feedback-correct">✅ Correct!</span> ${q.explain}`;
  } else {
    feedback.innerHTML = `<span class="feedback-incorrect">❌ Not quite.</span> ${q.explain}`;
  }

  const actions = document.getElementById('quiz-actions');
  const isLast = activeQuiz.index === activeQuiz.questions.length - 1;
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn-primary';
  nextBtn.textContent = isLast ? 'See results' : 'Next question';
  nextBtn.addEventListener('click', () => {
    if (isLast) {
      finishQuiz();
    } else {
      activeQuiz.index++;
      activeQuiz.answered = false;
      renderQuizQuestion();
    }
  });
  actions.appendChild(nextBtn);
}

function finishQuiz() {
  const total = activeQuiz.questions.length;
  const pct = Math.round((activeQuiz.correct / total) * 100);
  recordQuizScore(activeQuiz.category, pct);

  const area = document.getElementById('quiz-area');
  const badgeMsg = pct >= 80 ? '<p class="feedback-correct">🏅 80%+ — Quiz Whiz badge earned!</p>' : '<p class="muted">Score 80%+ to earn the Quiz Whiz badge. Try again!</p>';
  area.innerHTML = `
    <h3>Quiz complete!</h3>
    <p class="quiz-score">${activeQuiz.correct} / ${total} correct — ${pct}%</p>
    ${badgeMsg}
    <div class="quicklinks">
      <button class="btn-primary" id="quiz-retry">Try again</button>
      <button class="btn-secondary" id="quiz-close">Close</button>
    </div>
  `;
  document.getElementById('quiz-retry').addEventListener('click', () => startQuiz(activeQuiz.category));
  document.getElementById('quiz-close').addEventListener('click', () => {
    area.style.display = 'none';
    area.innerHTML = '';
  });
  refreshHeaderProgress();
  renderDashboard();
}
