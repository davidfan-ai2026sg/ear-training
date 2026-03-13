// ══════════════════════════════════════════════════════════════════════════════
// SECTION 1 — NOTE DATA
// ══════════════════════════════════════════════════════════════════════════════

// All semitones are relative to A (A = 0). Movable Do is in the key of A major.
const NOTE_INFO = {
  0:  { letter: 'A',      fixedDo: 'La',    movableDo: 'Do',  enharmonic: null },
  1:  { letter: 'A♯/B♭', fixedDo: 'Li/Te', movableDo: null,  enharmonic: 'B♭' },
  2:  { letter: 'B',      fixedDo: 'Ti',    movableDo: 'Re',  enharmonic: null },
  3:  { letter: 'C',      fixedDo: 'Do',    movableDo: 'Me',  enharmonic: null },
  4:  { letter: 'C♯/D♭', fixedDo: 'Di',    movableDo: 'Mi',  enharmonic: 'D♭' },
  5:  { letter: 'D',      fixedDo: 'Re',    movableDo: 'Fa',  enharmonic: null },
  6:  { letter: 'D♯/E♭', fixedDo: 'Ri',    movableDo: null,  enharmonic: 'E♭' },
  7:  { letter: 'E',      fixedDo: 'Mi',    movableDo: 'Sol', enharmonic: null },
  8:  { letter: 'F',      fixedDo: 'Fa',    movableDo: 'Le',  enharmonic: 'E♯' },
  9:  { letter: 'F♯/G♭', fixedDo: 'Fi',    movableDo: 'La',  enharmonic: 'G♭' },
  10: { letter: 'G',      fixedDo: 'Sol',   movableDo: 'Ti',  enharmonic: null },
  11: { letter: 'G♯/A♭', fixedDo: 'Si',    movableDo: null,  enharmonic: 'A♭' },
};

// Returns frequency (Hz) for a given semitone offset from A4 (440 Hz)
function semitoneToFreq(semitoneFromA4) {
  return 440 * Math.pow(2, semitoneFromA4 / 12);
}

// Nice display of a note's solfège depending on settings
function solfegeDisplay(semitone) {
  const info = NOTE_INFO[semitone];
  const nd = settings.noteDisplay;
  if (nd === 'letter')  return info.letter;
  if (nd === 'solfege') return `${info.fixedDo}${info.movableDo ? ' / ' + info.movableDo : ''}`;
  // 'both'
  const sol = info.movableDo ? `${info.fixedDo} / ${info.movableDo}` : info.fixedDo;
  return `${info.letter}  ·  ${sol}`;
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 2 — LESSON DATA
// Each lesson: id, phase, type ('listen'|'sing'|'interval'),
//              icon, targets [{semitone, label}], adult{}, child{}, theory{}
// ══════════════════════════════════════════════════════════════════════════════

const PHASES = [
  { id: 1, label: 'Phase 1', name: 'The Anchor Note', sub: 'Getting to know A (440 Hz)' },
  { id: 2, label: 'Phase 2', name: 'The Perfect Fifth', sub: 'Meeting E — A\'s closest companion' },
];

const LESSONS = [
  // ─── PHASE 1 ──────────────────────────────────────────────────────────────
  {
    id: 'p1l1', phase: 1, type: 'listen', icon: '👂',
    targets: [{ semitone: 0 }],
    adult: {
      title: 'Meet Your Anchor',
      subtitle: 'A · 440 Hz — the universal reference pitch',
      desc: 'A4 (440 Hz) is the most widely agreed-upon pitch in Western music. Orchestras tune to it. Digital audio uses it as a reference. Close your eyes, press Play, and let this note sink in.',
    },
    child: {
      title: 'Say Hello to A!',
      subtitle: 'This is your special starting note',
      desc: 'This note is called A — and it\'s your musical home base! Close your eyes, press Play, and really listen. Can you hum along with it? It\'s like a friendly buzzing sound.',
    },
    theory: {
      interval: 'Unison (the note itself)',
      extra: 'A = 440 Hz is an international standard (ISO 16). Some orchestras tune slightly higher (441–444 Hz), but 440 is the agreed baseline.',
    },
  },
  {
    id: 'p1l2', phase: 1, type: 'sing', icon: '🎤',
    targets: [{ semitone: 0 }],
    adult: {
      title: 'Sing A',
      subtitle: 'Match the reference pitch with your voice',
      desc: 'Play the reference, then try to sing the same pitch. Watch the metre — green means you\'re in tune. Hold it steady for 2 seconds to pass. Don\'t worry about octave: sing A3, A4 or A5 — all count.',
    },
    child: {
      title: 'Sing Like A!',
      subtitle: 'Copy the note with your voice',
      desc: 'Listen to the note, then try to sing the same sound! Your voice is a musical instrument too. Don\'t worry if it takes a few tries — even professional singers warm up first!',
    },
    theory: {
      interval: 'Unison',
      extra: 'Singing in unison is the foundation of all ear training. The note A is called "La" in fixed solfège (used in France, Italy, and many conservatories), and "Do" in movable solfège (when A is the tonal centre).',
    },
  },
  {
    id: 'p1l3', phase: 1, type: 'sing', icon: '⬆️',
    targets: [{ semitone: 0 }],
    octaveHint: 'up',
    adult: {
      title: 'Octave Up',
      subtitle: 'A5 — doubling the frequency',
      desc: 'An octave up means doubling the frequency: A4 = 440 Hz → A5 = 880 Hz. The note name stays the same because both pitches share the same harmonic identity. Raise your voice to find it.',
    },
    child: {
      title: 'Jump Up High!',
      subtitle: 'Same name, but higher!',
      desc: 'An octave means the note jumps up to its "big sibling" — still called A, but way higher! Try to make your voice go up high, like a bird singing!',
    },
    theory: {
      interval: 'Octave (8va)',
      extra: 'The word "octave" comes from Latin octo (eight) — it\'s the 8th note of a scale. Frequency doubles: 110→220→440→880 Hz are all A, just in different octaves.',
    },
  },
  {
    id: 'p1l4', phase: 1, type: 'sing', icon: '⬇️',
    targets: [{ semitone: 0 }],
    octaveHint: 'down',
    adult: {
      title: 'Octave Down',
      subtitle: 'A3 — halving the frequency',
      desc: 'Going an octave down halves the frequency: A4 = 440 Hz → A3 = 220 Hz. Same pitch class, different register. Let your voice drop down low and find it.',
    },
    child: {
      title: 'Go Down Low!',
      subtitle: 'Same name, but lower!',
      desc: 'Now let\'s go the other way — low and rumbly! Still called A, but it sounds like a big bear instead of a bird. Make your voice go as low as it can!',
    },
    theory: {
      interval: 'Octave (8vb)',
      extra: 'A3 (220 Hz) is one octave below A4. The concept of octave equivalence — that notes an octave apart feel "the same" — is universal across all musical cultures.',
    },
  },

  // ─── PHASE 2 ──────────────────────────────────────────────────────────────
  {
    id: 'p2l1', phase: 2, type: 'listen', icon: '👂',
    targets: [{ semitone: 0 }, { semitone: 7 }],
    adult: {
      title: 'The Perfect Fifth',
      subtitle: 'A → E · the most stable interval',
      desc: 'After the octave, the perfect fifth is the most acoustically consonant interval. Hear A first, then E. Notice how they blend — almost like one unified sound. This interval forms the backbone of almost all Western harmony.',
    },
    child: {
      title: 'A\'s Best Friend — E!',
      subtitle: 'Two notes that love each other',
      desc: 'A has a best friend named E! When you play them together, they sound super happy and cosy. Listen to A first, then E. Can you hear how well they go together?',
    },
    theory: {
      interval: 'Perfect Fifth (P5) — 7 semitones',
      extra: 'The perfect fifth has a frequency ratio of 3:2. It appears in power chords (rock), open strings (violin/guitar), brass fanfares, and folk music worldwide.',
    },
  },
  {
    id: 'p2l2', phase: 2, type: 'sing', icon: '🎤',
    targets: [{ semitone: 7 }],
    adult: {
      title: 'Sing E',
      subtitle: 'The fifth above A',
      desc: 'First play A to fix it in your mind, then find E with your voice. It\'s 7 semitones above A. In movable solfège (key of A): Do → Sol. In fixed solfège: La → Mi.',
    },
    child: {
      title: 'Sing E!',
      subtitle: 'Sing A\'s best friend',
      desc: 'Now let\'s sing E — A\'s best friend! Hum A quietly first to remember where you are, then let your voice slide up to find E. You\'re going to be great at this!',
    },
    theory: {
      interval: 'Perfect Fifth (P5)',
      extra: 'E is called "Mi" in fixed solfège and "Sol" in movable solfège when A is the home note (tonic). Enharmonically, E has no common equivalent in standard notation.',
    },
  },
  {
    id: 'p2l3', phase: 2, type: 'interval', icon: '🎵',
    targets: [{ semitone: 0 }, { semitone: 7 }],
    adult: {
      title: 'A → E: The Journey',
      subtitle: 'Sing the perfect fifth interval',
      desc: 'Sing A, hold it, then move your voice up to E. This two-note movement — a perfect fifth — is one of the most recognisable sounds in music. You\'ll hear it in "Twinkle Twinkle", "Star Wars", and countless folk melodies.',
    },
    child: {
      title: 'Travel from A to E!',
      subtitle: 'Sing two notes in a row',
      desc: 'First sing A (your home base), hold it for a moment, then travel up to E (your best friend\'s house). A... then E! Hear how your voice jumps? That\'s a musical interval!',
    },
    theory: {
      interval: 'Perfect Fifth (P5) — melodic interval',
      extra: '"Twinkle Twinkle Little Star" opens with a perfect fifth (Do–Sol). So does the opening of "Star Wars". The interval is so stable it\'s been used as a tuning check for centuries.',
    },
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 3 — STATE
// ══════════════════════════════════════════════════════════════════════════════

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}
function saveJSON(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

const settings = loadJSON('pp_settings', {
  mode: 'adult',        // 'adult' | 'child'
  listenOnly: false,    // if true, skip mic for sing/interval
  noteDisplay: 'both',  // 'letter' | 'solfege' | 'both'
});

// progress[lessonId] = { stars: 0|1|2|3 }
let progress = loadJSON('pp_progress', {});

function saveSettings() { saveJSON('pp_settings', settings); }
function saveProgress()  { saveJSON('pp_progress', progress); }

// ephemeral app state
const state = {
  view: 'map',            // 'map' | 'lesson'
  lessonId: null,
  theoryOpen: false,
  // singing state
  mic: {
    active: false,
    stream: null,
    analyser: null,
    buf: null,
    rafId: null,
    holdStart: null,
    holdRequired: 2000,   // ms
    intervalStep: 0,      // for interval lessons: which target we're on
    stepDone: [],         // which steps have been completed
    lastCents: null,
  },
  // playback
  audioCtx: null,
};

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 4 — AUDIO ENGINE
// ══════════════════════════════════════════════════════════════════════════════

function getAudioCtx() {
  if (!state.audioCtx) {
    state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (state.audioCtx.state === 'suspended') state.audioCtx.resume();
  return state.audioCtx;
}

function playNote(semitoneFromA4, duration = 1.2) {
  const ctx = getAudioCtx();
  const freq = semitoneToFreq(semitoneFromA4);
  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain); gain.connect(ctx.destination);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(0.001, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.05);
  gain.gain.setValueAtTime(0.35, ctx.currentTime + duration - 0.15);
  gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration + 0.1);
}

// Play two notes sequentially (for interval listen lessons)
function playInterval(sem1, sem2) {
  const ctx = getAudioCtx();
  playNote(sem1, 1.2);
  setTimeout(() => playNote(sem2, 1.4), 1300);
}

// ── Pitch detection (autocorrelation) ────────────────────────────────────────
function autoCorrelate(buf, sampleRate) {
  const SIZE = buf.length;
  let rms = 0;
  for (let i = 0; i < SIZE; i++) rms += buf[i] * buf[i];
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.008) return -1; // too quiet

  // Clip buffer edges to reduce noise
  let r1 = 0, r2 = SIZE - 1;
  for (let i = 0; i < SIZE / 2; i++)  { if (Math.abs(buf[i]) > 0.2) { r1 = i; break; } }
  for (let i = 1; i < SIZE / 2; i++)  { if (Math.abs(buf[SIZE - i]) > 0.2) { r2 = SIZE - i; break; } }
  buf = buf.slice(r1, r2);
  const N = buf.length;

  const c = new Float32Array(N);
  for (let i = 0; i < N; i++) for (let j = 0; j < N - i; j++) c[i] += buf[j] * buf[j + i];

  let d = 0;
  while (c[d] > c[d + 1]) d++;
  let maxVal = -1, maxPos = -1;
  for (let i = d; i < N; i++) { if (c[i] > maxVal) { maxVal = c[i]; maxPos = i; } }
  if (maxPos < 1 || maxPos >= N - 1) return -1;

  // Parabolic interpolation
  const x1 = c[maxPos - 1], x2 = c[maxPos], x3 = c[maxPos + 1];
  const a = (x1 + x3 - 2 * x2) / 2;
  const b = (x3 - x1) / 2;
  const T0 = a !== 0 ? maxPos - b / (2 * a) : maxPos;
  return sampleRate / T0;
}

// Cents deviation from the nearest occurrence of targetSemitone (any octave)
function centsFromNoteClass(freq, targetSemitone) {
  if (freq <= 0) return null;
  const semitones = 12 * Math.log2(freq / 440);
  const dev = ((semitones - targetSemitone) % 12 + 12) % 12;
  return (dev > 6 ? dev - 12 : dev) * 100;
}

// Detected note class (0-11) + cents offset from nearest semitone
function detectNote(freq) {
  if (freq <= 0) return null;
  const semitones = 12 * Math.log2(freq / 440);
  const rounded   = Math.round(semitones);
  const noteClass = ((rounded % 12) + 12) % 12;
  const cents     = (semitones - rounded) * 100;
  return { noteClass, cents };
}

async function startMic() {
  if (state.mic.active) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ctx     = getAudioCtx();
    const src     = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 2048;
    src.connect(analyser);
    state.mic.stream   = stream;
    state.mic.analyser = analyser;
    state.mic.buf      = new Float32Array(analyser.fftSize);
    state.mic.active   = true;
    state.mic.holdStart = null;
    micLoop();
  } catch (e) {
    renderFeedback('Microphone access denied. Check browser permissions.', 'bad');
  }
}

function stopMic() {
  if (!state.mic.active) return;
  cancelAnimationFrame(state.mic.rafId);
  state.mic.stream?.getTracks().forEach(t => t.stop());
  state.mic.active   = false;
  state.mic.stream   = null;
  state.mic.analyser = null;
  state.mic.holdStart = null;
  state.mic.lastCents = null;
}

function micLoop() {
  if (!state.mic.active) return;
  state.mic.rafId = requestAnimationFrame(micLoop);

  const analyser = state.mic.analyser;
  analyser.getFloatTimeDomainData(state.mic.buf);
  const freq = autoCorrelate(state.mic.buf, getAudioCtx().sampleRate);

  const lesson = currentLesson();
  if (!lesson) return;

  const step = state.mic.intervalStep;
  const target = lesson.targets[step];

  const cents = freq > 0 ? centsFromNoteClass(freq, target.semitone) : null;
  state.mic.lastCents = cents;

  const detected = freq > 0 ? detectNote(freq) : null;
  const tolerance = settings.mode === 'child' ? 40 : 30;
  const inTune = cents !== null && Math.abs(cents) <= tolerance;

  // Hold timer
  const now = Date.now();
  if (inTune) {
    if (!state.mic.holdStart) state.mic.holdStart = now;
    const held = now - state.mic.holdStart;
    const pct  = Math.min(100, (held / state.mic.holdRequired) * 100);
    const holdFill = document.getElementById('holdFill');
    if (holdFill) holdFill.style.width = pct + '%';

    if (held >= state.mic.holdRequired) {
      // Step passed
      state.mic.holdStart = null;
      stepPassed(step, lesson);
    }
  } else {
    state.mic.holdStart = null;
    const holdFill = document.getElementById('holdFill');
    if (holdFill) holdFill.style.width = '0%';
  }

  // Update pitch canvas & keyboard
  drawPitchMeter(cents, freq, detected);
  drawKeyboard(target.semitone, detected ? detected.noteClass : null);
  renderFeedback(feedbackText(cents, inTune, lesson, step), inTune ? 'good' : cents !== null ? 'neutral' : 'neutral');
}

function feedbackText(cents, inTune, lesson, step) {
  if (cents === null) {
    return settings.mode === 'child' ? 'Sing into the mic! 🎶' : 'Sing (or make a sound)…';
  }
  if (inTune) {
    return settings.mode === 'child' ? 'You\'re on it! Keep holding! 🌟' : 'In tune — hold it…';
  }
  const abs = Math.abs(cents);
  const dir = cents > 0 ? '↓ Too high' : '↑ Too low';
  const amt = abs < 20 ? 'slightly' : abs < 40 ? 'a bit' : 'quite a bit';
  const note = NOTE_INFO[lesson.targets[step].semitone].letter;
  return settings.mode === 'child'
    ? (cents > 0 ? `A little lower! Find ${note} 🎯` : `A little higher! Find ${note} 🎯`)
    : `${dir} (${Math.round(abs)} cents)`;
}

function stepPassed(step, lesson) {
  state.mic.stepDone.push(step);
  if (step < lesson.targets.length - 1) {
    // Move to next target in interval lesson
    state.mic.intervalStep++;
    state.mic.holdStart = null;
    updateIntervalSteps();
    updateNoteCards();
    const nextNote = NOTE_INFO[lesson.targets[step + 1].semitone].letter;
    renderFeedback(`✓ Now sing ${nextNote}!`, 'good');
  } else {
    // All steps done — lesson complete
    const avgAccuracy = 85; // TODO: track real accuracy
    const stars = computeStars(state.mic);
    stopMic();
    showResult(lesson, stars);
  }
}

function computeStars(mic) {
  // Simple scoring: based on how long they held (placeholder — can expand)
  return 3; // will be refined with real accuracy tracking later
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 5 — CANVAS DRAWING
// ══════════════════════════════════════════════════════════════════════════════

function dpr() { return window.devicePixelRatio || 1; }

function setupCanvas(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  const r = dpr();
  el.width  = rect.width  * r;
  el.height = rect.height * r;
  const ctx = el.getContext('2d');
  ctx.scale(r, r);
  return { ctx, w: rect.width, h: rect.height };
}

function drawPitchMeter(cents, freq, detected) {
  const c = setupCanvas('pitchCanvas');
  if (!c) return;
  const { ctx, w, h } = c;
  const cx = w / 2;

  // Background
  ctx.clearRect(0, 0, w, h);

  // Colour zones
  const zones = [
    { from: -50, to: -30, color: '#c62828' },
    { from: -30, to: -15, color: '#e65100' },
    { from: -15, to:  15, color: '#2e7d32' },
    { from:  15, to:  30, color: '#e65100' },
    { from:  30, to:  50, color: '#c62828' },
  ];
  const meterH = 18, meterY = h / 2 - meterH / 2;
  const meterW = w - 60;
  const meterX = 30;

  zones.forEach(z => {
    const x1 = meterX + ((z.from + 50) / 100) * meterW;
    const x2 = meterX + ((z.to   + 50) / 100) * meterW;
    ctx.fillStyle = z.color + '55';
    ctx.fillRect(x1, meterY, x2 - x1, meterH);
  });

  // Meter outline
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border').trim() || '#444';
  ctx.lineWidth = 1;
  ctx.strokeRect(meterX, meterY, meterW, meterH);

  // Centre line (target)
  ctx.strokeStyle = '#ffffff33';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(cx, meterY - 5); ctx.lineTo(cx, meterY + meterH + 5); ctx.stroke();

  // Labels
  ctx.fillStyle = '#666688'; ctx.font = '10px monospace'; ctx.textAlign = 'center';
  [-40, -20, 0, 20, 40].forEach(v => {
    const x = meterX + ((v + 50) / 100) * meterW;
    ctx.fillText(v === 0 ? '♩' : `${v > 0 ? '+' : ''}${v}`, x, meterY - 6);
  });

  // Needle
  if (cents !== null) {
    const clamped = Math.max(-50, Math.min(50, cents));
    const nx = meterX + ((clamped + 50) / 100) * meterW;
    const abs = Math.abs(cents);
    const needleColor = abs < 15 ? '#69ff47' : abs < 30 ? '#ffcc02' : '#ff5252';
    ctx.fillStyle = needleColor;
    ctx.shadowColor = needleColor; ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(nx, meterY - 6);
    ctx.lineTo(nx - 5, meterY - 1);
    ctx.lineTo(nx + 5, meterY - 1);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(nx, meterY + meterH + 6);
    ctx.lineTo(nx - 5, meterY + meterH + 1);
    ctx.lineTo(nx + 5, meterY + meterH + 1);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Detected note label
    if (detected) {
      const info = NOTE_INFO[detected.noteClass];
      ctx.fillStyle = needleColor;
      ctx.font = 'bold 13px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(info.letter, nx, meterY + meterH + 24);
    }
  } else {
    // Idle indicator
    ctx.fillStyle = '#444466';
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('— waiting for signal —', cx, h / 2 + 30);
  }
}

// ── Keyboard ──────────────────────────────────────────────────────────────────
// Shows one octave A→G# with highlighted target and detected note
const KEY_LAYOUT = [
  { s: 0,  type: 'white', wi: 0 }, // A
  { s: 1,  type: 'black', wi: 0 }, // Bb
  { s: 2,  type: 'white', wi: 1 }, // B
  { s: 3,  type: 'white', wi: 2 }, // C
  { s: 4,  type: 'black', wi: 2 }, // Db
  { s: 5,  type: 'white', wi: 3 }, // D
  { s: 6,  type: 'black', wi: 3 }, // Eb
  { s: 7,  type: 'white', wi: 4 }, // E
  { s: 8,  type: 'white', wi: 5 }, // F
  { s: 9,  type: 'black', wi: 5 }, // Gb
  { s: 10, type: 'white', wi: 6 }, // G
  { s: 11, type: 'black', wi: 6 }, // Ab
];

function drawKeyboard(targetSemitone, detectedSemitone) {
  const c = setupCanvas('keyboardCanvas');
  if (!c) return;
  const { ctx, w, h } = c;

  const pad  = 16;
  const kw   = (w - pad * 2) / 7;   // white key width
  const kh   = h - 20;
  const bw   = kw * 0.58;
  const bh   = kh * 0.62;
  const boff = kw - bw / 2;

  ctx.clearRect(0, 0, w, h);

  function keyX(k) {
    return k.type === 'white'
      ? pad + k.wi * kw
      : pad + k.wi * kw + boff;
  }

  const isDark = true; // always dark theme

  // Draw white keys first
  KEY_LAYOUT.filter(k => k.type === 'white').forEach(k => {
    const x = keyX(k);
    const isTarget   = k.s === targetSemitone;
    const isDetected = k.s === detectedSemitone;
    ctx.fillStyle = isTarget   ? getAccentColor() + 'cc'
                  : isDetected ? '#69ff47cc'
                  :              '#ddd';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x + 1, 8, kw - 2, kh, [0, 0, 6, 6]);
    ctx.fill(); ctx.stroke();

    // Note name under key
    const info = NOTE_INFO[k.s];
    ctx.fillStyle = isTarget || isDetected ? '#000' : '#666';
    ctx.font = `bold ${Math.max(9, kw * 0.3)}px monospace`;
    ctx.textAlign = 'center';
    ctx.fillText(info.letter, x + kw / 2, kh + 4);
  });

  // Draw black keys on top
  KEY_LAYOUT.filter(k => k.type === 'black').forEach(k => {
    const x = keyX(k);
    const isTarget   = k.s === targetSemitone;
    const isDetected = k.s === detectedSemitone;
    ctx.fillStyle = isTarget   ? getAccentColor()
                  : isDetected ? '#69ff47'
                  :              '#222';
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x, 8, bw, bh, [0, 0, 4, 4]);
    ctx.fill(); ctx.stroke();
  });
}

function getAccentColor() {
  return settings.mode === 'child' ? '#ff6eb4' : '#4fc3f7';
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 6 — LESSON LOGIC
// ══════════════════════════════════════════════════════════════════════════════

function currentLesson() {
  return LESSONS.find(l => l.id === state.lessonId) || null;
}

function lessonContent(lesson) {
  return settings.mode === 'child' ? lesson.child : lesson.adult;
}

function isUnlocked(lessonId) {
  const idx = LESSONS.findIndex(l => l.id === lessonId);
  if (idx === 0) return true;
  return !!(progress[LESSONS[idx - 1].id]?.stars);
}

function getStars(lessonId) { return progress[lessonId]?.stars || 0; }
function starsGlyph(n) { return '★'.repeat(n) + '☆'.repeat(3 - n); }

function showResult(lesson, stars) {
  progress[lesson.id] = { stars };
  saveProgress();

  const content = lessonContent(lesson);
  const emoji = stars === 3 ? (settings.mode === 'child' ? '🌟' : '✅')
              : stars >= 1 ? '🎵' : '😅';
  const title = stars === 3
    ? (settings.mode === 'child' ? 'Amazing!!! 🎉' : 'Excellent!')
    : stars >= 1 ? (settings.mode === 'child' ? 'Good job! 👍' : 'Well done!')
    : 'Keep practising!';

  const nextLesson = LESSONS[LESSONS.findIndex(l => l.id === lesson.id) + 1];

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.innerHTML = `
    <div class="result-card">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">${title}</div>
      <div class="result-sub">${content.title}</div>
      <div class="result-stars">${starsGlyph(stars)}</div>
      ${nextLesson ? `<button class="btn btn-success" id="nextBtn">Next lesson →</button>` : `<button class="btn btn-success" id="nextBtn">Back to map 🗺</button>`}
      <button class="btn btn-secondary" id="retryBtn">Try again</button>
    </div>`;
  document.body.appendChild(overlay);

  document.getElementById('retryBtn').onclick = () => { overlay.remove(); openLesson(lesson.id); };
  document.getElementById('nextBtn').onclick  = () => {
    overlay.remove();
    if (nextLesson) openLesson(nextLesson.id);
    else            goToMap();
  };

  render(); // refresh map stars
}

function openLesson(id) {
  stopMic();
  state.lessonId = id;
  state.view = 'lesson';
  state.theoryOpen = false;
  state.mic.intervalStep = 0;
  state.mic.stepDone = [];
  state.mic.holdStart = null;
  state.mic.lastCents = null;
  render();
}

function goToMap() {
  stopMic();
  state.view = 'map';
  state.lessonId = null;
  render();
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 7 — RENDERING
// ══════════════════════════════════════════════════════════════════════════════

function render() {
  document.body.className = settings.mode === 'child' ? 'child-mode' : '';
  const app = document.getElementById('app');
  app.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'app';
  wrapper.innerHTML = renderHeader();
  if (state.view === 'map')    wrapper.innerHTML += renderMap();
  if (state.view === 'lesson') wrapper.innerHTML += renderLesson();
  app.appendChild(wrapper);
  attachHandlers();

  // Draw canvases after DOM is painted
  if (state.view === 'lesson') {
    requestAnimationFrame(() => {
      const lesson = currentLesson();
      if (!lesson) return;
      const step = state.mic.intervalStep;
      const target = lesson.targets[step];
      drawKeyboard(target.semitone, null);
      if (!state.mic.active) drawPitchMeter(null, -1, null);
    });
  }
}

function renderHeader() {
  const title = settings.mode === 'child' ? '🎵 Pitch Perfect' : 'Pitch Perfect';
  return `
    <div class="header">
      <div class="header-logo">${title}</div>
      <button class="icon-btn" id="settingsBtn" title="Settings">⚙</button>
    </div>`;
}

// ── Map ───────────────────────────────────────────────────────────────────────
function renderMap() {
  return PHASES.map(phase => {
    const lessons = LESSONS.filter(l => l.phase === phase.id);
    return `
      <div class="phase-section">
        <div class="phase-header">
          <div>
            <div class="phase-badge">${phase.label}</div>
          </div>
          <div>
            <div class="phase-name">${phase.name}</div>
            <div class="phase-sub">${phase.sub}</div>
          </div>
        </div>
        <div class="lesson-list">
          ${lessons.map(l => renderLessonNode(l)).join('')}
        </div>
      </div>`;
  }).join('');
}

function renderLessonNode(lesson) {
  const unlocked = isUnlocked(lesson.id);
  const stars    = getStars(lesson.id);
  const content  = lessonContent(lesson);
  const cls      = !unlocked ? 'locked' : stars ? 'done' : 'active';
  const lockIcon = !unlocked ? '🔒' : lesson.icon;
  return `
    <div class="lesson-node ${cls}" data-lesson="${lesson.id}" role="button" tabindex="${unlocked ? 0 : -1}">
      <div class="node-icon">${lockIcon}</div>
      <div class="node-info">
        <div class="node-title">${content.title}</div>
        <div class="node-subtitle">${content.subtitle}</div>
      </div>
      ${stars ? `<div class="node-stars">${starsGlyph(stars)}</div>` : ''}
    </div>`;
}

// ── Lesson ────────────────────────────────────────────────────────────────────
function renderLesson() {
  const lesson  = currentLesson();
  if (!lesson) return '';
  const content = lessonContent(lesson);
  const phase   = PHASES.find(p => p.id === lesson.phase);
  const isListen = lesson.type === 'listen' || settings.listenOnly;
  const isInterval = lesson.type === 'interval' && !settings.listenOnly;
  const isSing   = (lesson.type === 'sing' || isInterval) && !settings.listenOnly;

  const noteCards = lesson.targets.map((t, i) => {
    const info  = NOTE_INFO[t.semitone];
    const freq  = semitoneToFreq(t.semitone).toFixed(2);
    const sol   = solfegeLabel(t.semitone);
    const step  = state.mic.intervalStep;
    const done  = state.mic.stepDone.includes(i);
    const isCur = (i === step) && state.mic.active;
    const cls   = done ? 'done' : isCur ? 'target' : (i === 0 ? 'target' : '');
    return `
      <div class="note-card ${cls}">
        <div class="note-letter">${info.letter}</div>
        <div class="note-sol">${sol}</div>
        <div class="note-freq">${freq} Hz</div>
      </div>`;
  }).join('');

  const stepDots = isInterval ? `
    <div class="step-row">
      ${lesson.targets.map((_, i) => {
        const cls = state.mic.stepDone.includes(i) ? 'done'
                  : i === state.mic.intervalStep ? 'active' : '';
        return `<div class="step-dot ${cls}"></div>`;
      }).join('')}
    </div>` : '';

  const playBtn = lesson.targets.length > 1
    ? `<button class="btn btn-secondary" id="playBtn">▶  Hear A → E</button>`
    : `<button class="btn btn-secondary" id="playBtn">▶  Play reference note</button>`;

  const micSection = isSing ? `
    <div class="pitch-section">
      <div class="pitch-label">Pitch metre — cents deviation</div>
      <canvas id="pitchCanvas" height="90"></canvas>
    </div>
    <div class="hold-track"><div class="hold-fill" id="holdFill"></div></div>
    <div class="feedback neutral" id="feedbackEl">Press "Start Singing" when ready</div>
    <button class="btn btn-primary" id="singBtn">🎤  Start Singing</button>
    <button class="btn btn-secondary" id="stopBtn" style="display:none">⏹  Stop</button>` : '';

  const listenBtn = isListen ? `
    <div class="feedback neutral" id="feedbackEl">Listen to the note, then click below when ready.</div>
    <button class="btn btn-success" id="listenDoneBtn">✓  Got it — continue</button>` : '';

  const theory = renderTheoryPanel(lesson);

  return `
    <div class="lesson-view">
      <div class="back-row">
        <button class="back-btn" id="backBtn">← Back</button>
        <span class="phase-crumb">${phase.label} · Lesson ${LESSONS.filter(l => l.phase === lesson.phase).findIndex(l => l.id === lesson.id) + 1}</span>
      </div>

      <div class="lesson-title">${content.title}</div>
      <div class="lesson-subtitle">${content.subtitle}</div>
      <div class="lesson-desc">${content.desc}</div>

      ${stepDots}
      <div class="note-cards">${noteCards}</div>

      ${playBtn}
      ${micSection}
      ${listenBtn}
      <canvas id="keyboardCanvas" height="120"></canvas>
      ${theory}
    </div>`;
}

function solfegeLabel(semitone) {
  const info = NOTE_INFO[semitone];
  const nd = settings.noteDisplay;
  if (nd === 'letter')  return '';
  if (nd === 'solfege') {
    const both = info.movableDo ? `${info.fixedDo} (fixed) · ${info.movableDo} (movable)` : info.fixedDo;
    return both;
  }
  const both = info.movableDo ? `${info.fixedDo} · ${info.movableDo}` : info.fixedDo;
  return both;
}

function renderTheoryPanel(lesson) {
  const info0   = NOTE_INFO[lesson.targets[0].semitone];
  const rows    = lesson.targets.map(t => {
    const info = NOTE_INFO[t.semitone];
    const freq = semitoneToFreq(t.semitone).toFixed(2);
    const enh  = info.enharmonic ? `(also: ${info.enharmonic})` : '';
    return `
      <div class="theory-row"><span class="th-key">Note</span><span class="th-val">${info.letter} ${enh}</span></div>
      <div class="theory-row"><span class="th-key">Fixed Do</span><span class="th-val">${info.fixedDo}</span></div>
      ${info.movableDo ? `<div class="theory-row"><span class="th-key">Movable Do (key of A)</span><span class="th-val">${info.movableDo}</span></div>` : ''}
      <div class="theory-row"><span class="th-key">Frequency</span><span class="th-val">${freq} Hz</span></div>`;
  }).join('<hr style="border-color:var(--border);margin:6px 0">');

  const interval = lesson.theory?.interval || '';
  const extra    = lesson.theory?.extra    || '';

  return `
    <button class="theory-toggle" id="theoryToggle">📖  Theory note ${state.theoryOpen ? '▲' : '▼'}</button>
    <div class="theory-panel ${state.theoryOpen ? 'open' : ''}" id="theoryPanel">
      ${rows}
      ${interval ? `<div class="theory-row"><span class="th-key">Interval</span><span class="th-val">${interval}</span></div>` : ''}
      ${extra ? `<div class="theory-note">${extra}</div>` : ''}
      <div class="theory-note" style="margin-top:10px;border-top:1px solid var(--border);padding-top:8px">
        <strong>Fixed Do vs Movable Do:</strong> In <em>fixed Do</em>, C is always Do, A is always La. Used in France, Italy, and many conservatories.
        In <em>movable Do</em>, Do is always the home note (tonic) of the current key — so in the key of A, A is Do. Both systems appear in this app.
      </div>
    </div>`;
}

function renderFeedback(text, type) {
  const el = document.getElementById('feedbackEl');
  if (el) { el.textContent = text; el.className = `feedback ${type}`; }
}

function updateIntervalSteps() {
  const lesson = currentLesson();
  if (!lesson) return;
  // Update step dots
  const dots = document.querySelectorAll('.step-dot');
  dots.forEach((d, i) => {
    d.className = 'step-dot' + (state.mic.stepDone.includes(i) ? ' done' : i === state.mic.intervalStep ? ' active' : '');
  });
}

function updateNoteCards() {
  const lesson = currentLesson();
  if (!lesson) return;
  const cards = document.querySelectorAll('.note-card');
  cards.forEach((card, i) => {
    const done  = state.mic.stepDone.includes(i);
    const isCur = i === state.mic.intervalStep;
    card.className = 'note-card ' + (done ? 'done' : isCur ? 'target' : '');
    const letter = card.querySelector('.note-letter');
    if (letter && done) letter.style.color = 'var(--accent2)';
  });
}

// ── Settings Sheet ────────────────────────────────────────────────────────────
function renderSettings() {
  const sheet = document.createElement('div');
  sheet.className = 'sheet-overlay';
  sheet.id = 'settingsOverlay';
  sheet.innerHTML = `
    <div class="sheet">
      <div class="sheet-title">
        Settings
        <button class="sheet-close" id="sheetClose">✕</button>
      </div>

      <div class="setting-row">
        <div class="setting-label">Learner mode</div>
        <div class="toggle-group">
          <button class="tog ${settings.mode === 'adult'  ? 'active' : ''}" data-mode="adult">🎓 Adult</button>
          <button class="tog ${settings.mode === 'child'  ? 'active' : ''}" data-mode="child">🌈 Child</button>
        </div>
      </div>

      <div class="setting-row">
        <div class="setting-label">Input mode</div>
        <div class="toggle-group">
          <button class="tog ${!settings.listenOnly ? 'active' : ''}" data-listen="false">🎤 Microphone</button>
          <button class="tog ${settings.listenOnly  ? 'active' : ''}" data-listen="true">👂 Listen only</button>
        </div>
      </div>

      <div class="setting-row">
        <div class="setting-label">Note display</div>
        <div class="toggle-group">
          <button class="tog ${settings.noteDisplay === 'letter'  ? 'active' : ''}" data-notes="letter">Letter</button>
          <button class="tog ${settings.noteDisplay === 'solfege' ? 'active' : ''}" data-notes="solfege">Solfège</button>
          <button class="tog ${settings.noteDisplay === 'both'    ? 'active' : ''}" data-notes="both">Both</button>
        </div>
      </div>

      <div class="danger-zone">
        <div class="setting-label">Danger zone</div>
        <button class="btn btn-danger" id="resetBtn" style="margin-top:8px">Reset all progress</button>
      </div>
    </div>`;
  document.body.appendChild(sheet);

  document.getElementById('sheetClose').onclick = () => sheet.remove();
  sheet.addEventListener('click', e => { if (e.target === sheet) sheet.remove(); });

  sheet.querySelectorAll('[data-mode]').forEach(btn => {
    btn.onclick = () => {
      settings.mode = btn.dataset.mode;
      saveSettings();
      sheet.remove();
      render();
    };
  });
  sheet.querySelectorAll('[data-listen]').forEach(btn => {
    btn.onclick = () => {
      settings.listenOnly = btn.dataset.listen === 'true';
      saveSettings();
      sheet.remove();
      render();
    };
  });
  sheet.querySelectorAll('[data-notes]').forEach(btn => {
    btn.onclick = () => {
      settings.noteDisplay = btn.dataset.notes;
      saveSettings();
      sheet.remove();
      render();
    };
  });
  document.getElementById('resetBtn').onclick = () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      progress = {};
      saveProgress();
      sheet.remove();
      goToMap();
    }
  };
}

// ── Event wiring ──────────────────────────────────────────────────────────────
function attachHandlers() {
  document.getElementById('settingsBtn')?.addEventListener('click', renderSettings);

  // Map nodes
  document.querySelectorAll('.lesson-node:not(.locked)').forEach(node => {
    node.addEventListener('click', () => openLesson(node.dataset.lesson));
    node.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLesson(node.dataset.lesson); });
  });

  // Lesson view
  document.getElementById('backBtn')?.addEventListener('click', goToMap);

  document.getElementById('playBtn')?.addEventListener('click', () => {
    getAudioCtx(); // ensure context exists
    const lesson = currentLesson();
    if (!lesson) return;
    if (lesson.targets.length > 1) playInterval(lesson.targets[0].semitone, lesson.targets[1].semitone);
    else playNote(lesson.targets[0].semitone);
  });

  document.getElementById('singBtn')?.addEventListener('click', async () => {
    const singBtn = document.getElementById('singBtn');
    const stopBtn = document.getElementById('stopBtn');
    if (singBtn) singBtn.style.display = 'none';
    if (stopBtn) stopBtn.style.display = '';
    await startMic();
  });

  document.getElementById('stopBtn')?.addEventListener('click', () => {
    stopMic();
    const singBtn = document.getElementById('singBtn');
    const stopBtn = document.getElementById('stopBtn');
    if (singBtn) singBtn.style.display = '';
    if (stopBtn) stopBtn.style.display = 'none';
    renderFeedback('Stopped. Press Start Singing to try again.', 'neutral');
    drawPitchMeter(null, -1, null);
  });

  document.getElementById('listenDoneBtn')?.addEventListener('click', () => {
    const lesson = currentLesson();
    if (!lesson) return;
    showResult(lesson, 3);
  });

  document.getElementById('theoryToggle')?.addEventListener('click', () => {
    state.theoryOpen = !state.theoryOpen;
    const panel  = document.getElementById('theoryPanel');
    const toggle = document.getElementById('theoryToggle');
    if (panel)  panel.className  = 'theory-panel' + (state.theoryOpen ? ' open' : '');
    if (toggle) toggle.textContent = `📖  Theory note ${state.theoryOpen ? '▲' : '▼'}`;
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 8 — INIT
// ══════════════════════════════════════════════════════════════════════════════

// Redraw keyboard/pitch canvases on resize
window.addEventListener('resize', () => {
  if (state.view === 'lesson') {
    const lesson = currentLesson();
    if (!lesson) return;
    const step = state.mic.intervalStep;
    drawKeyboard(lesson.targets[step].semitone, null);
    if (!state.mic.active) drawPitchMeter(null, -1, null);
  }
});

render();
