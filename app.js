// ══════════════════════════════════════════════════════════════════════════════
// SECTION 1 — NOTE DATA
// Semitones relative to A (A = 0). Fixed Do solfège only.
// ══════════════════════════════════════════════════════════════════════════════

const NOTE_INFO = {
  0:  { letter: 'A',      fixedDo: 'La', enharmonic: null  },
  1:  { letter: 'A♯/B♭', fixedDo: 'Li', enharmonic: 'B♭'  },
  2:  { letter: 'B',      fixedDo: 'Ti', enharmonic: null  },
  3:  { letter: 'C',      fixedDo: 'Do', enharmonic: null  },
  4:  { letter: 'C♯/D♭', fixedDo: 'Di', enharmonic: 'D♭'  },
  5:  { letter: 'D',      fixedDo: 'Re', enharmonic: null  },
  6:  { letter: 'D♯/E♭', fixedDo: 'Ri', enharmonic: 'E♭'  },
  7:  { letter: 'E',      fixedDo: 'Mi', enharmonic: null  },
  8:  { letter: 'F',      fixedDo: 'Fa', enharmonic: 'E♯'  },
  9:  { letter: 'F♯/G♭', fixedDo: 'Fi', enharmonic: 'G♭'  },
  10: { letter: 'G',      fixedDo: 'Sol',enharmonic: null  },
  11: { letter: 'G♯/A♭', fixedDo: 'Si', enharmonic: 'A♭'  },
};

function semitoneToFreq(s) { return 440 * Math.pow(2, s / 12); }

// Returns solfège label based on noteDisplay setting
function solfegeLabel(semitone) {
  const info = NOTE_INFO[semitone];
  if (settings.noteDisplay === 'letter')  return '';
  return info.fixedDo; // 'solfege' or 'both' — always fixed Do
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 2 — LESSON DATA
// lesson.type    : 'listen' | 'sing' | 'interval'
// lesson.layout  : 'cards' (default) | 'scale'  → for long multi-step lessons
// lesson.holdTime: ms to hold pitch (default 2000, use 1500 for scale steps)
// lesson.playSpeed:'normal'(default) | 'scale'  → controls playback tempo
// lesson.canPlayChord: true → show extra "Hear as chord" button
// ══════════════════════════════════════════════════════════════════════════════

const PHASES = [
  { id: 1, label: 'Phase 1', name: 'The Anchor Note',       sub: 'Getting to know A (440 Hz)' },
  { id: 2, label: 'Phase 2', name: 'The Perfect Fifth',     sub: 'E — the most stable interval above A' },
  { id: 3, label: 'Phase 3', name: 'The Major Third',       sub: 'C♯ — completing the A major triad' },
  { id: 4, label: 'Phase 4', name: 'The A Major Chord',     sub: 'A, C♯ and E together' },
  { id: 5, label: 'Phase 5', name: 'The Minor Third',       sub: 'C natural — discovering A minor' },
  { id: 6, label: 'Phase 6', name: 'A Major Scale',         sub: 'Seven notes, one key' },
  { id: 7, label: 'Phase 7', name: 'A Natural Minor Scale', sub: 'The parallel minor' },
];

const LESSONS = [

  // ─── PHASE 1 ───────────────────────────────────────────────────────────────
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
      desc: 'This note is called A — and it\'s your musical home base! Close your eyes, press Play, and really listen. Can you hum along? It\'s like a friendly, steady buzzing sound.',
    },
    theory: {
      interval: 'Unison (the note itself)',
      extra: 'A = 440 Hz is an international standard (ISO 16). Some orchestras tune slightly higher (441–444 Hz), but 440 is the agreed baseline. In fixed solfège, A is always called "La".',
    },
  },
  {
    id: 'p1l2', phase: 1, type: 'sing', icon: '🎤',
    targets: [{ semitone: 0 }],
    adult: {
      title: 'Sing A',
      subtitle: 'Find A with your voice',
      desc: 'Play the reference, then try to sing the same pitch. The display will show which note it hears you singing. Aim for A and hold it steady for 2 seconds. Any octave of A counts — don\'t worry about singing at exactly 440 Hz.',
    },
    child: {
      title: 'Sing A!',
      subtitle: 'Copy the note with your voice',
      desc: 'Listen to the note, then try to sing the same sound! Your voice is a musical instrument too. The big letter will show what note you\'re singing — try to get it to say A!',
    },
    theory: {
      interval: 'Unison',
      extra: 'You don\'t need to match A4 (440 Hz) exactly — singing A in any octave (A2, A3, A4, A5…) counts. The app recognises the pitch name, not the exact frequency.',
    },
  },
  {
    id: 'p1l3', phase: 1, type: 'sing', icon: '⬆️',
    targets: [{ semitone: 0 }],
    adult: {
      title: 'Octave Up',
      subtitle: 'A at a higher pitch — double the frequency',
      desc: 'An octave up means doubling the frequency. A4 = 440 Hz → A5 = 880 Hz. The note name stays the same because both pitches share the same harmonic identity. Try to raise your voice to a higher A.',
    },
    child: {
      title: 'Jump Up High!',
      subtitle: 'Same note A — but higher!',
      desc: 'An octave means the note jumps up to its "big sibling" — still called A, but way up high! Try to make your voice go up, like a bird. The display should still say A!',
    },
    theory: {
      interval: 'Octave (8va)',
      extra: 'The word "octave" comes from Latin octo (eight) — it\'s the 8th degree of a scale. Frequency doubles: 110 → 220 → 440 → 880 Hz are all A in different octaves.',
    },
  },
  {
    id: 'p1l4', phase: 1, type: 'sing', icon: '⬇️',
    targets: [{ semitone: 0 }],
    adult: {
      title: 'Octave Down',
      subtitle: 'A at a lower pitch — half the frequency',
      desc: 'Going an octave down halves the frequency: A4 = 440 Hz → A3 = 220 Hz. Same pitch class, different register. Let your voice drop down low and find a lower A.',
    },
    child: {
      title: 'Go Down Low!',
      subtitle: 'Same note A — but lower!',
      desc: 'Now let\'s go the other way — low and rumbly! Still called A, but it sounds like a big bear instead of a bird. Can you make your voice go really low and still hear A?',
    },
    theory: {
      interval: 'Octave (8vb)',
      extra: 'Octave equivalence — the idea that notes an octave apart feel "the same" — is universal across virtually all musical cultures and is built into the physics of sound.',
    },
  },

  // ─── PHASE 2 ───────────────────────────────────────────────────────────────
  {
    id: 'p2l1', phase: 2, type: 'listen', icon: '👂',
    targets: [{ semitone: 0 }, { semitone: 7 }],
    adult: {
      title: 'The Perfect Fifth',
      subtitle: 'A → E · the most stable interval in music',
      desc: 'After the octave, the perfect fifth is the most acoustically consonant interval. Hear A first, then E. Notice how naturally they belong together — almost like one sound.',
    },
    child: {
      title: 'A\'s Best Friend — E!',
      subtitle: 'Two notes that sound great together',
      desc: 'A has a best friend named E! When you play them together they sound super happy. Listen to A first, then E — can you hear how well they go together?',
    },
    theory: {
      interval: 'Perfect Fifth (P5) — 7 semitones',
      extra: 'The perfect fifth has a frequency ratio of 3:2 — the simplest ratio after the octave (2:1). It appears in power chords, open strings, brass calls, and folk music worldwide.',
    },
  },
  {
    id: 'p2l2', phase: 2, type: 'sing', icon: '🎤',
    targets: [{ semitone: 7 }],
    adult: {
      title: 'Sing E',
      subtitle: 'The fifth above A — "Mi" in solfège',
      desc: 'Play A first to fix the tonal centre, then find E. It sits 7 semitones above A. Think of the opening interval of "Twinkle Twinkle" — that first jump is a perfect fifth.',
    },
    child: {
      title: 'Sing E!',
      subtitle: 'Sing A\'s best friend',
      desc: 'Now sing E — A\'s best friend! Hum A quietly first to remember where home is, then let your voice travel up to find E. The display should say E when you\'ve found it!',
    },
    theory: {
      interval: 'Perfect Fifth (P5)',
      extra: 'E is "Mi" in fixed solfège. The fifth is so stable that medieval composers used it as the main consonance. In tonal music it defines the relationship between a key and its dominant.',
    },
  },
  {
    id: 'p2l3', phase: 2, type: 'interval', icon: '🎵',
    targets: [{ semitone: 0 }, { semitone: 7 }],
    adult: {
      title: 'A → E: Sing the Fifth',
      subtitle: 'Melodic perfect fifth',
      desc: 'Sing A, hold it for a moment, then move to E. This two-note gesture — a perfect fifth — is one of the most recognisable sounds in all of music.',
    },
    child: {
      title: 'Travel from A to E!',
      subtitle: 'Sing two notes in a row',
      desc: 'First sing A (your home base), hold it, then travel up to E (your best friend). A... then E! Hear how your voice leaps? That\'s a musical interval!',
    },
    theory: {
      interval: 'Perfect Fifth (P5) — melodic',
      extra: '"Twinkle Twinkle Little Star" opens with a perfect fifth (La–Mi). So does the main theme of "Star Wars". It is arguably the most universally recognised leap in melody.',
    },
  },

  // ─── PHASE 3 ───────────────────────────────────────────────────────────────
  {
    id: 'p3l1', phase: 3, type: 'listen', icon: '👂',
    targets: [{ semitone: 0 }, { semitone: 4 }],
    adult: {
      title: 'The Major Third',
      subtitle: 'A → C♯ · 4 semitones · "Di" in solfège',
      desc: 'The major third is the interval that gives a major chord its bright, happy quality. Listen to A, then C♯. Notice the brightness — this is the sound that distinguishes major from minor.',
    },
    child: {
      title: 'Meet C♯ — A\'s Bright Friend!',
      subtitle: 'A new note that sounds happy',
      desc: 'This note is C♯ (say: "C sharp"). When you play it with A it sounds bright and cheerful — like sunshine! Listen to A first, then C♯. Happy, isn\'t it?',
    },
    theory: {
      interval: 'Major Third (M3) — 4 semitones',
      extra: 'C♯ is enharmonically the same pitch as D♭ — two names for the same key on the piano. The choice of name depends on context. In the key of A major, we always call it C♯.',
    },
  },
  {
    id: 'p3l2', phase: 3, type: 'sing', icon: '🎤',
    targets: [{ semitone: 4 }],
    adult: {
      title: 'Sing C♯',
      subtitle: '"Di" in solfège · the major third above A',
      desc: 'Play A to orient yourself, then find C♯. It\'s 4 semitones above A — a major third. Think of the first two notes of "When the Saints Go Marching In": that upward leap is a major third.',
    },
    child: {
      title: 'Sing C♯!',
      subtitle: 'The bright, happy note',
      desc: 'Listen to C♯, then sing it! Play A first to remember where home is, then find C♯ — it\'s a bit higher. When the display says C♯ and goes green, you\'ve got it!',
    },
    theory: {
      interval: 'Major Third (M3)',
      extra: 'C♯ = "Di" in fixed solfège. Enharmonic equivalent: D♭ ("Ra"). On a piano they are the same black key. In the key of A major, this note is always written as C♯, not D♭.',
    },
  },
  {
    id: 'p3l3', phase: 3, type: 'interval', icon: '🎵',
    targets: [{ semitone: 0 }, { semitone: 4 }],
    adult: {
      title: 'A → C♯: Sing the Third',
      subtitle: 'Melodic major third',
      desc: 'Sing A, hold it, then rise to C♯. This major third is the interval that makes a chord feel major — bright and resolved. You are now singing the bottom two notes of the A major chord.',
    },
    child: {
      title: 'A to C♯ — Two Steps!',
      subtitle: 'Sing the happy jump',
      desc: 'Sing A first... then jump up to C♯! A... C♯! The display should show first A (green), then C♯ (green). Two notes sung perfectly — well done!',
    },
    theory: {
      interval: 'Major Third (M3) — melodic',
      extra: '"When the Saints Go Marching In" opens with Do–Mi, a major third. "Morning Has Broken" also begins with a major third. It is one of the most common melodic leaps.',
    },
  },
  {
    id: 'p3l4', phase: 3, type: 'interval', icon: '🎶',
    targets: [{ semitone: 0 }, { semitone: 4 }, { semitone: 7 }],
    adult: {
      title: 'A → C♯ → E: Major Arpeggio',
      subtitle: 'The A major triad in ascending order',
      desc: 'You now have all three notes of the A major chord. Sing them one by one: A… C♯… E. This is called an arpeggio — a chord\'s notes sung in sequence. Hear how complete it sounds.',
    },
    child: {
      title: 'The Three Amigos: A, C♯, E!',
      subtitle: 'Sing all three notes in order',
      desc: 'You know A, you know C♯, you know E. Now sing them all in a row: A… C♯… E! These three notes together make an A major chord. You\'re building music!',
    },
    theory: {
      interval: 'Major triad (root position): Root – Major Third – Perfect Fifth',
      extra: 'A major = A (La) + C♯ (Di) + E (Mi). The major third (A→C♯) gives the chord its bright quality; the perfect fifth (A→E) gives it stability. This is the most fundamental chord in Western music.',
    },
  },

  // ─── PHASE 4 ───────────────────────────────────────────────────────────────
  {
    id: 'p4l1', phase: 4, type: 'listen', icon: '👂',
    targets: [{ semitone: 0 }, { semitone: 4 }, { semitone: 7 }],
    canPlayChord: true,
    adult: {
      title: 'Hear A Major',
      subtitle: 'Three notes · one chord',
      desc: 'Listen to A, C♯ and E played separately, then together as a chord. This is the A major chord — the home chord of the A major key. Notice how the three notes fuse into a single, rich sound.',
    },
    child: {
      title: 'The A Major Chord!',
      subtitle: 'Three friends playing together',
      desc: 'A, C♯ and E are best friends — when they play together they make a chord! Listen to them one at a time, then hear them all at once. Can you hear all three inside the chord?',
    },
    theory: {
      interval: 'Major triad',
      extra: 'A chord is three or more notes sounded together. The major triad is built from a root, a major third above it, and a perfect fifth above it. In Roman numeral notation, A major is the "I chord" in the key of A major.',
    },
  },
  {
    id: 'p4l2', phase: 4, type: 'interval', icon: '⬆️',
    targets: [{ semitone: 0 }, { semitone: 4 }, { semitone: 7 }],
    adult: {
      title: 'Ascending Arpeggio',
      subtitle: 'A → C♯ → E — climbing the chord',
      desc: 'Sing the A major arpeggio going up: A, then C♯, then E. Each note should feel like a step up a staircase. Take your time between notes — accuracy matters more than speed.',
    },
    child: {
      title: 'Climb the Chord Ladder!',
      subtitle: 'Sing up: A, C♯, E',
      desc: 'Let\'s climb! First A (the ground floor), then C♯ (the first floor), then E (the top floor). Up, up, up! Each time the display shows green, you\'ve hit the note!',
    },
    theory: {
      interval: 'A major arpeggio (ascending)',
      extra: 'An arpeggio (Italian for "harp-like") is a chord whose notes are played in sequence. Arpeggios are one of the most important ear-training tools — they help you internalise the "shape" of a chord.',
    },
  },
  {
    id: 'p4l3', phase: 4, type: 'interval', icon: '⬇️',
    targets: [{ semitone: 7 }, { semitone: 4 }, { semitone: 0 }],
    adult: {
      title: 'Descending Arpeggio',
      subtitle: 'E → C♯ → A — back home',
      desc: 'Now reverse it: start on E, descend to C♯, then resolve down to A. The final A should feel like coming home. Many melodies use this descending shape to signal a phrase ending.',
    },
    child: {
      title: 'Come Back Down!',
      subtitle: 'Sing down: E, C♯, A',
      desc: 'Now let\'s come back down the ladder — E (top floor), C♯ (first floor), A (home)! Down, down, down — back where we started. That last A feels like a big hug!',
    },
    theory: {
      interval: 'A major arpeggio (descending)',
      extra: 'The descending arpeggio (Mi–Di–La) resolves naturally back to the root. Cadences (musical phrase endings) often feature descending motion towards the tonic — this exercise trains that sense of resolution.',
    },
  },

  // ─── PHASE 5 ───────────────────────────────────────────────────────────────
  {
    id: 'p5l1', phase: 5, type: 'listen', icon: '👂',
    targets: [{ semitone: 0 }, { semitone: 3 }],
    adult: {
      title: 'The Minor Third',
      subtitle: 'A → C natural · 3 semitones · a darker sound',
      desc: 'Compare carefully: the major third (A→C♯, 4 semitones) sounds bright. The minor third (A→C natural, 3 semitones) sounds darker — more introspective. Listen to A, then C natural.',
    },
    child: {
      title: 'Meet C — The Quiet Friend',
      subtitle: 'A note that sounds a little sad',
      desc: 'This is C natural — notice it sounds a bit different from C♯. A little lower, a little softer, like a cloudy day instead of sunshine. Listen to A, then C.',
    },
    theory: {
      interval: 'Minor Third (m3) — 3 semitones',
      extra: 'C natural vs C♯: the difference is just one semitone (one piano key), but it completely changes the mood. C natural with A gives us A minor; C♯ with A gives us A major.',
    },
  },
  {
    id: 'p5l2', phase: 5, type: 'sing', icon: '🎤',
    targets: [{ semitone: 3 }],
    adult: {
      title: 'Sing C',
      subtitle: '"Do" in solfège · the minor third above A',
      desc: 'Find C natural with your voice. It\'s 3 semitones above A — just one semitone lower than C♯. If you drift towards C♯, the display will show C♯/D♭ instead of C. Listen carefully.',
    },
    child: {
      title: 'Sing C!',
      subtitle: 'The quiet, cloudy note',
      desc: 'Listen to C, then try to sing it. Remember — it\'s a bit lower than C♯. When the display says C and turns green, you\'ve found it! Don\'t worry if you need a few goes.',
    },
    theory: {
      interval: 'Minor Third (m3)',
      extra: 'C is "Do" in fixed solfège (C is always Do). Notice: this is 3 semitones above A, not 4. That single semitone difference — between minor and major — is one of the most important distinctions in all of music.',
    },
  },
  {
    id: 'p5l3', phase: 5, type: 'interval', icon: '🎵',
    targets: [{ semitone: 0 }, { semitone: 3 }],
    adult: {
      title: 'A → C: Sing the Minor Third',
      subtitle: 'The interval that defines A minor',
      desc: 'Sing A, then move to C natural. Feel the slight "drop" in mood — that\'s the minor third. This interval is the signature sound of a minor key. Many folk songs and ballads begin with this leap.',
    },
    child: {
      title: 'A to C — A Gentle Step',
      subtitle: 'Sing the soft, cloudy jump',
      desc: 'Sing A… then C. It\'s a gentle jump — not as high as C♯. A… then C. Can you feel how it sounds a tiny bit different from A to C♯? That\'s the difference between happy and sad in music!',
    },
    theory: {
      interval: 'Minor Third (m3) — melodic',
      extra: '"Smoke on the Water" by Deep Purple opens with a minor third. So does the first leap of "Star Wars" (from a different starting point). The minor third is one of the most emotionally loaded intervals in Western music.',
    },
  },
  {
    id: 'p5l4', phase: 5, type: 'interval', icon: '🎶',
    targets: [{ semitone: 0 }, { semitone: 3 }, { semitone: 7 }],
    adult: {
      title: 'A → C → E: Minor Arpeggio',
      subtitle: 'The A minor triad',
      desc: 'Sing A… C natural… E. This is the A minor arpeggio. Compare it to the major arpeggio (A→C♯→E) — the only difference is C vs C♯, yet the mood is completely transformed.',
    },
    child: {
      title: 'The Cloudy Chord: A, C, E',
      subtitle: 'Sing the minor arpeggio',
      desc: 'Now sing A… C… E — but with C natural, not C♯! It sounds a bit different from before — a little more mysterious. A… C… E! Can you hear the difference from Phase 3?',
    },
    theory: {
      interval: 'Minor triad (root position): Root – Minor Third – Perfect Fifth',
      extra: 'A minor = A (La) + C (Do) + E (Mi). Replace C♯ with C natural and the major chord becomes minor. The fifth (A→E) remains the same — it\'s always perfect regardless of major or minor.',
    },
  },

  // ─── PHASE 6 ───────────────────────────────────────────────────────────────
  {
    id: 'p6l1', phase: 6, type: 'listen', icon: '👂',
    layout: 'scale', playSpeed: 'scale',
    targets: [0,2,4,5,7,9,11,0].map(s => ({ semitone: s })),
    adult: {
      title: 'Hear A Major Scale',
      subtitle: 'A B C♯ D E F♯ G♯ A — seven distinct pitches',
      desc: 'The A major scale has 7 notes before returning to A. Listen carefully to the pattern of steps and leaps. Every major scale follows the same pattern of whole and half steps: W W H W W W H.',
    },
    child: {
      title: 'The A Major Scale!',
      subtitle: 'Eight steps — a musical staircase!',
      desc: 'A major scale is like a musical staircase — eight steps up and back down. Listen to all the notes: A, B, C♯, D, E, F♯, G♯, A. Each one is a step higher!',
    },
    theory: {
      interval: 'Major scale: W–W–H–W–W–W–H (W = whole step, H = half step)',
      extra: 'A major has 3 sharps: C♯, F♯, G♯. This is its key signature. The major scale pattern is one of the most fundamental structures in Western music — every major key follows the same W–W–H–W–W–W–H pattern.',
    },
  },
  {
    id: 'p6l2', phase: 6, type: 'interval', icon: '⬆️',
    layout: 'scale', holdTime: 1500, playSpeed: 'scale',
    targets: [0,2,4,5,7,9,11,0].map(s => ({ semitone: s })),
    adult: {
      title: 'Sing A Major Scale (up)',
      subtitle: 'A B C♯ D E F♯ G♯ A',
      desc: 'Sing each note of the A major scale in turn. Hold each one until the display goes green, then move to the next. Take your time — accuracy over speed. The keyboard shows you which note you\'re aiming for.',
    },
    child: {
      title: 'Climb the Scale!',
      subtitle: 'Sing all eight notes going up',
      desc: 'Let\'s climb! Sing A, then B, then C♯, then D, then E, then F♯, then G♯, then A again! Eight steps up. Hold each note until it goes green, then climb to the next one!',
    },
    theory: {
      interval: 'A major scale (ascending)',
      extra: 'La–Ti–Di–Re–Mi–Fi–Si–La in fixed solfège. Practise slowly and deliberately — rushing causes notes to be out of tune. Slow, accurate singing builds stronger pitch memory than fast, approximate singing.',
    },
  },
  {
    id: 'p6l3', phase: 6, type: 'interval', icon: '⬇️',
    layout: 'scale', holdTime: 1500, playSpeed: 'scale',
    targets: [0,11,9,7,5,4,2,0].map(s => ({ semitone: s })),
    adult: {
      title: 'Sing A Major Scale (down)',
      subtitle: 'A G♯ F♯ E D C♯ B A',
      desc: 'Now descend: start on a high A and step down through G♯, F♯, E, D, C♯, B, back to A. Descending scales are often harder than ascending ones — take your time on each step.',
    },
    child: {
      title: 'Come Back Down the Scale!',
      subtitle: 'Sing all eight notes going down',
      desc: 'Now we come back down! Start on the high A and come down: A, G♯, F♯, E, D, C♯, B, A! Eight steps down. Take your time on each note — hold it until it goes green!',
    },
    theory: {
      interval: 'A major scale (descending)',
      extra: 'La–Si–Fi–Mi–Re–Di–Ti–La in fixed solfège. Notice that descending feels different from ascending even on the same notes — this is normal. Both directions need separate practice.',
    },
  },

  // ─── PHASE 7 ───────────────────────────────────────────────────────────────
  {
    id: 'p7l1', phase: 7, type: 'listen', icon: '👂',
    layout: 'scale', playSpeed: 'scale',
    targets: [0,2,3,5,7,8,10,0].map(s => ({ semitone: s })),
    adult: {
      title: 'Hear A Natural Minor Scale',
      subtitle: 'A B C D E F G A — the parallel minor',
      desc: 'The A natural minor scale uses the same notes as C major. Compare it to A major: three notes are different — C♯→C, F♯→F, G♯→G. That shift from sharp to natural gives the minor its characteristic darker colour.',
    },
    child: {
      title: 'The A Minor Scale!',
      subtitle: 'A sadder, mysterious staircase',
      desc: 'This scale sounds a bit more mysterious than A major. Listen: A, B, C, D, E, F, G, A. No sharps this time! Can you hear how it\'s different — a little darker, like a cloudy day?',
    },
    theory: {
      interval: 'Natural minor scale: W–H–W–W–H–W–W',
      extra: 'A natural minor shares its notes with C major — they are "relative" keys. The difference from A major: C♯→C, F♯→F, G♯→G. These three changes shift the scale\'s mood entirely.',
    },
  },
  {
    id: 'p7l2', phase: 7, type: 'interval', icon: '⬆️',
    layout: 'scale', holdTime: 1500, playSpeed: 'scale',
    targets: [0,2,3,5,7,8,10,0].map(s => ({ semitone: s })),
    adult: {
      title: 'Sing A Minor Scale (up)',
      subtitle: 'A B C D E F G A',
      desc: 'Sing the A natural minor scale ascending. Pay attention to the C natural (not C♯) and the F and G naturals — these are the notes that distinguish minor from major. Hold each note until the display confirms it.',
    },
    child: {
      title: 'Climb the Minor Scale!',
      subtitle: 'Sing the darker staircase going up',
      desc: 'Climb the minor scale: A, B, C, D, E, F, G, A! Remember — no sharps this time. It sounds a little different from the major scale. Hold each note until it turns green, then climb!',
    },
    theory: {
      interval: 'A natural minor scale (ascending)',
      extra: 'La–Ti–Do–Re–Mi–Fa–Sol–La in fixed solfège. Notice C, F, and G are all natural (no sharps). A natural minor is also called the Aeolian mode — the same pattern of steps, starting from A.',
    },
  },
  {
    id: 'p7l3', phase: 7, type: 'interval', icon: '⬇️',
    layout: 'scale', holdTime: 1500, playSpeed: 'scale',
    targets: [0,10,8,7,5,3,2,0].map(s => ({ semitone: s })),
    adult: {
      title: 'Sing A Minor Scale (down)',
      subtitle: 'A G F E D C B A',
      desc: 'Descend the A natural minor scale: A, G, F, E, D, C, B, A. The minor scale descends with a particular sense of resignation or sadness. Many laments and minor-key melodies use this descending line.',
    },
    child: {
      title: 'Come Down the Minor Scale!',
      subtitle: 'Sing the darker staircase going down',
      desc: 'Now come back down: A, G, F, E, D, C, B, A! It sounds a little quiet and mysterious coming down. Hold each note until it turns green. You\'re almost at the end — amazing work!',
    },
    theory: {
      interval: 'A natural minor scale (descending)',
      extra: 'La–Sol–Fa–Mi–Re–Do–Ti–La in fixed solfège. You have now sung two complete scales — a major and a natural minor both rooted on A. This is a significant milestone in ear training.',
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
  mode: 'adult',
  listenOnly: false,
  noteDisplay: 'both',
});

let progress = loadJSON('pp_progress', {});

function saveSettings() { saveJSON('pp_settings', settings); }
function saveProgress()  { saveJSON('pp_progress', progress); }

const state = {
  view: 'map',
  lessonId: null,
  theoryOpen: false,
  mic: {
    active: false,
    stream: null,
    analyser: null,
    buf: null,
    rafId: null,
    holdStart: null,
    intervalStep: 0,
    stepDone: [],
  },
  audioCtx: null,
};

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 4 — AUDIO ENGINE
// ══════════════════════════════════════════════════════════════════════════════

function getAudioCtx() {
  if (!state.audioCtx) state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (state.audioCtx.state === 'suspended') state.audioCtx.resume();
  return state.audioCtx;
}

function playNote(semitone, duration = 1.2) {
  const ctx  = getAudioCtx();
  const freq = semitoneToFreq(semitone);
  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain); gain.connect(ctx.destination);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(0.001, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.05);
  gain.gain.setValueAtTime(0.35, ctx.currentTime + duration - 0.12);
  gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration + 0.05);
}

// Play N notes sequentially. speed: 'normal' (intervals) | 'scale'
function playSequence(semitones, speed = 'normal') {
  getAudioCtx();
  const dur = speed === 'scale' ? 0.55 : 1.2;
  const gap = speed === 'scale' ? 650  : 1300;
  semitones.forEach((s, i) => setTimeout(() => playNote(s, dur), i * gap));
}

// Play all notes simultaneously as a chord
function playChord(semitones) {
  getAudioCtx();
  semitones.forEach(s => playNote(s, 2.2));
}

// ── Pitch detection ───────────────────────────────────────────────────────────

function autoCorrelate(buf, sampleRate) {
  const SIZE = buf.length;
  let rms = 0;
  for (let i = 0; i < SIZE; i++) rms += buf[i] * buf[i];
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.008) return -1;

  let r1 = 0, r2 = SIZE - 1;
  for (let i = 0; i < SIZE / 2; i++) { if (Math.abs(buf[i]) > 0.2) { r1 = i; break; } }
  for (let i = 1; i < SIZE / 2; i++) { if (Math.abs(buf[SIZE - i]) > 0.2) { r2 = SIZE - i; break; } }
  buf = buf.slice(r1, r2);
  const N = buf.length;

  const c = new Float32Array(N);
  for (let i = 0; i < N; i++) for (let j = 0; j < N - i; j++) c[i] += buf[j] * buf[j + i];

  let d = 0;
  while (c[d] > c[d + 1]) d++;
  let maxVal = -1, maxPos = -1;
  for (let i = d; i < N; i++) { if (c[i] > maxVal) { maxVal = c[i]; maxPos = i; } }
  if (maxPos < 1 || maxPos >= N - 1) return -1;

  const x1 = c[maxPos - 1], x2 = c[maxPos], x3 = c[maxPos + 1];
  const a  = (x1 + x3 - 2 * x2) / 2;
  const b  = (x3 - x1) / 2;
  const T0 = a !== 0 ? maxPos - b / (2 * a) : maxPos;
  return sampleRate / T0;
}

// Returns the nearest note class (0-11) and cents from that class
function detectNote(freq) {
  if (freq <= 0) return null;
  const semitones = 12 * Math.log2(freq / 440);
  const rounded   = Math.round(semitones);
  return { noteClass: ((rounded % 12) + 12) % 12, cents: (semitones - rounded) * 100 };
}

// Cents from the nearest occurrence of targetSemitone (any octave)
function centsFromNoteClass(freq, targetSemitone) {
  if (freq <= 0) return null;
  const semitones = 12 * Math.log2(freq / 440);
  const dev = ((semitones - targetSemitone) % 12 + 12) % 12;
  return (dev > 6 ? dev - 12 : dev) * 100;
}

async function startMic() {
  if (state.mic.active) return;
  try {
    const stream   = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ctx      = getAudioCtx();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 2048;
    ctx.createMediaStreamSource(stream).connect(analyser);
    state.mic.stream   = stream;
    state.mic.analyser = analyser;
    state.mic.buf      = new Float32Array(analyser.fftSize);
    state.mic.active   = true;
    state.mic.holdStart = null;
    micLoop();
  } catch {
    updateDetectZone(null, false, '');
    const fb = document.getElementById('feedbackEl');
    if (fb) { fb.textContent = 'Microphone access denied — check browser permissions.'; fb.className = 'feedback bad'; }
  }
}

function stopMic() {
  if (!state.mic.active) return;
  cancelAnimationFrame(state.mic.rafId);
  state.mic.stream?.getTracks().forEach(t => t.stop());
  Object.assign(state.mic, { active: false, stream: null, analyser: null, holdStart: null });
}

function micLoop() {
  if (!state.mic.active) return;
  state.mic.rafId = requestAnimationFrame(micLoop);

  const lesson = currentLesson();
  if (!lesson) return;

  state.mic.analyser.getFloatTimeDomainData(state.mic.buf);
  const freq     = autoCorrelate(state.mic.buf, getAudioCtx().sampleRate);
  const detected = freq > 0 ? detectNote(freq) : null;
  const step     = state.mic.intervalStep;
  const target   = lesson.targets[step];

  // Generous tolerance: 50 cents (adult) or 70 cents (child) — half a semitone or more
  const tolerance = settings.mode === 'child' ? 70 : 50;
  const cents     = freq > 0 ? centsFromNoteClass(freq, target.semitone) : null;
  const inTune    = cents !== null && Math.abs(cents) <= tolerance;

  // Update the detect zone display
  updateDetectZone(detected, inTune, NOTE_INFO[target.semitone].letter);

  // Update keyboard
  const allTargets = lesson.targets.map(t => t.semitone);
  drawKeyboard(allTargets, target.semitone, detected?.noteClass ?? null, inTune);

  // Hold timer — fill the hold bar
  const now = Date.now();
  const holdRequired = lesson.holdTime ?? 2000;
  if (inTune) {
    if (!state.mic.holdStart) state.mic.holdStart = now;
    const held = now - state.mic.holdStart;
    const pct  = Math.min(100, (held / holdRequired) * 100);
    const hf   = document.getElementById('holdFill');
    if (hf) hf.style.width = pct + '%';
    if (held >= holdRequired) {
      state.mic.holdStart = null;
      stepPassed(step, lesson);
    }
  } else {
    state.mic.holdStart = null;
    const hf = document.getElementById('holdFill');
    if (hf) hf.style.width = '0%';
  }
}

function updateDetectZone(detected, inTune, targetLetter) {
  const zone  = document.getElementById('detZone');
  const note  = document.getElementById('detNoteEl');
  const label = document.getElementById('detLabelEl');
  if (!note) return;

  if (!detected) {
    note.textContent  = '—';
    note.className    = 'detect-note';
    if (zone)  zone.className  = 'detect-zone';
    if (label) label.textContent = settings.mode === 'child' ? 'Sing into the mic! 🎶' : 'Sing into the microphone…';
    return;
  }

  const detectedLetter = NOTE_INFO[detected.noteClass].letter;
  note.textContent = detectedLetter;

  if (inTune) {
    note.className    = 'detect-note correct';
    if (zone)  zone.className  = 'detect-zone correct';
    if (label) label.textContent = settings.mode === 'child' ? 'Yes! Keep going! 🌟' : 'Correct — hold it!';
  } else {
    note.className    = 'detect-note';
    if (zone)  zone.className  = 'detect-zone';
    if (label) label.textContent = settings.mode === 'child'
      ? `Try to find ${targetLetter}!`
      : `Hearing ${detectedLetter} — looking for ${targetLetter}`;
  }
}

function stepPassed(step, lesson) {
  state.mic.stepDone.push(step);
  if (step < lesson.targets.length - 1) {
    state.mic.intervalStep++;
    updateStepUI();
    const nextLetter = NOTE_INFO[lesson.targets[step + 1].semitone].letter;
    const fb = document.getElementById('feedbackEl');
    if (fb) { fb.textContent = `✓ Now sing ${nextLetter}!`; fb.className = 'feedback good'; }
  } else {
    stopMic();
    showResult(lesson, 3);
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 5 — CANVAS DRAWING
// ══════════════════════════════════════════════════════════════════════════════

function setupCanvas(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  const r    = window.devicePixelRatio || 1;
  el.width   = rect.width  * r;
  el.height  = rect.height * r;
  const ctx  = el.getContext('2d');
  ctx.scale(r, r);
  return { ctx, w: rect.width, h: rect.height };
}

// One octave keyboard A→G♯, with:
//   allTargets   : all lesson note semitones (dimly tinted)
//   currentTarget: the note to sing now (bright accent)
//   detected     : what the mic hears (green if inTune, amber otherwise)
//   inTune       : whether detected matches currentTarget within tolerance
const KEY_LAYOUT = [
  { s: 0,  type: 'white', wi: 0 },
  { s: 1,  type: 'black', wi: 0 },
  { s: 2,  type: 'white', wi: 1 },
  { s: 3,  type: 'white', wi: 2 },
  { s: 4,  type: 'black', wi: 2 },
  { s: 5,  type: 'white', wi: 3 },
  { s: 6,  type: 'black', wi: 3 },
  { s: 7,  type: 'white', wi: 4 },
  { s: 8,  type: 'white', wi: 5 },
  { s: 9,  type: 'black', wi: 5 },
  { s: 10, type: 'white', wi: 6 },
  { s: 11, type: 'black', wi: 6 },
];

function drawKeyboard(allTargets, currentTarget, detected, inTune = false) {
  const c = setupCanvas('keyboardCanvas');
  if (!c) return;
  const { ctx, w, h } = c;
  const pad = 14, kw = (w - pad * 2) / 7, kh = h - 22;
  const bw  = kw * 0.6, bh = kh * 0.62, boff = kw - bw / 2;
  const accent = settings.mode === 'child' ? '#ff6eb4' : '#4fc3f7';

  ctx.clearRect(0, 0, w, h);

  function keyX(k) {
    return k.type === 'white' ? pad + k.wi * kw : pad + k.wi * kw + boff;
  }

  function keyFillWhite(s) {
    if (s === detected && inTune)    return '#69ff47';
    if (s === detected && !inTune)   return '#ff9933';
    if (s === currentTarget)         return accent + 'ee';
    if (allTargets.includes(s))      return accent + '44';
    return '#dddddd';
  }
  function keyFillBlack(s) {
    if (s === detected && inTune)    return '#69ff47';
    if (s === detected && !inTune)   return '#ff9933';
    if (s === currentTarget)         return accent;
    if (allTargets.includes(s))      return accent + '88';
    return '#222222';
  }

  // White keys
  KEY_LAYOUT.filter(k => k.type === 'white').forEach(k => {
    const x = keyX(k);
    ctx.fillStyle   = keyFillWhite(k.s);
    ctx.strokeStyle = '#444';
    ctx.lineWidth   = 1;
    ctx.beginPath(); ctx.roundRect(x + 1, 6, kw - 2, kh, [0, 0, 5, 5]); ctx.fill(); ctx.stroke();
    ctx.fillStyle  = (k.s === currentTarget || k.s === detected) ? '#111' : '#777';
    ctx.font       = `bold ${Math.max(8, kw * 0.28)}px monospace`;
    ctx.textAlign  = 'center';
    ctx.fillText(NOTE_INFO[k.s].letter.split('/')[0], x + kw / 2, kh + 4);
  });

  // Black keys (drawn on top)
  KEY_LAYOUT.filter(k => k.type === 'black').forEach(k => {
    const x = keyX(k);
    ctx.fillStyle   = keyFillBlack(k.s);
    ctx.strokeStyle = '#111';
    ctx.lineWidth   = 1;
    ctx.beginPath(); ctx.roundRect(x, 6, bw, bh, [0, 0, 4, 4]); ctx.fill(); ctx.stroke();
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 6 — LESSON LOGIC
// ══════════════════════════════════════════════════════════════════════════════

function currentLesson() { return LESSONS.find(l => l.id === state.lessonId) || null; }
function lessonContent(l){ return settings.mode === 'child' ? l.child : l.adult; }

function isUnlocked(id) {
  const idx = LESSONS.findIndex(l => l.id === id);
  if (idx === 0) return true;
  return !!(progress[LESSONS[idx - 1].id]?.stars);
}

function getStars(id) { return progress[id]?.stars || 0; }
function starsGlyph(n) { return '★'.repeat(n) + '☆'.repeat(3 - n); }

function showResult(lesson, stars) {
  progress[lesson.id] = { stars };
  saveProgress();
  const content    = lessonContent(lesson);
  const nextLesson = LESSONS[LESSONS.findIndex(l => l.id === lesson.id) + 1];
  const emoji = stars === 3 ? (settings.mode === 'child' ? '🌟' : '✅') : '🎵';
  const title = stars === 3
    ? (settings.mode === 'child' ? 'Amazing!!! 🎉' : 'Excellent!')
    : (settings.mode === 'child' ? 'Good job! 👍' : 'Well done!');

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.innerHTML = `
    <div class="result-card">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">${title}</div>
      <div class="result-sub">${content.title}</div>
      <div class="result-stars">${starsGlyph(stars)}</div>
      <button class="btn btn-success" id="nextBtn">${nextLesson ? 'Next lesson →' : 'Back to map 🗺'}</button>
      <button class="btn btn-secondary" id="retryBtn">Try again</button>
    </div>`;
  document.body.appendChild(overlay);
  document.getElementById('retryBtn').onclick = () => { overlay.remove(); openLesson(lesson.id); };
  document.getElementById('nextBtn').onclick  = () => { overlay.remove(); nextLesson ? openLesson(nextLesson.id) : goToMap(); };
  render();
}

function openLesson(id) {
  stopMic();
  state.lessonId = id;
  state.view = 'lesson';
  state.theoryOpen = false;
  Object.assign(state.mic, { intervalStep: 0, stepDone: [], holdStart: null });
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
  const app     = document.getElementById('app');
  const wrapper = document.createElement('div');
  wrapper.className = 'app';
  wrapper.innerHTML = renderHeader()
    + (state.view === 'map'    ? renderMap()    : '')
    + (state.view === 'lesson' ? renderLesson() : '');
  app.innerHTML = '';
  app.appendChild(wrapper);
  attachHandlers();

  if (state.view === 'lesson') {
    requestAnimationFrame(() => {
      const l = currentLesson();
      if (!l) return;
      const step = state.mic.intervalStep;
      drawKeyboard(l.targets.map(t => t.semitone), l.targets[step].semitone, null, false);
    });
  }
}

function renderHeader() {
  return `<div class="header">
    <div class="header-logo">${settings.mode === 'child' ? '🎵 Pitch Perfect' : 'Pitch Perfect'}</div>
    <button class="icon-btn" id="settingsBtn" title="Settings">⚙</button>
  </div>`;
}

// ── Map ────────────────────────────────────────────────────────────────────────
function renderMap() {
  return PHASES.map(phase => {
    const lessons = LESSONS.filter(l => l.phase === phase.id);
    return `<div class="phase-section">
      <div class="phase-header">
        <div><div class="phase-badge">${phase.label}</div></div>
        <div><div class="phase-name">${phase.name}</div><div class="phase-sub">${phase.sub}</div></div>
      </div>
      <div class="lesson-list">${lessons.map(renderLessonNode).join('')}</div>
    </div>`;
  }).join('');
}

function renderLessonNode(lesson) {
  const unlocked = isUnlocked(lesson.id);
  const stars    = getStars(lesson.id);
  const content  = lessonContent(lesson);
  const cls      = !unlocked ? 'locked' : stars ? 'done' : 'active';
  return `<div class="lesson-node ${cls}" data-lesson="${lesson.id}" role="button" tabindex="${unlocked ? 0 : -1}">
    <div class="node-icon">${unlocked ? lesson.icon : '🔒'}</div>
    <div class="node-info">
      <div class="node-title">${content.title}</div>
      <div class="node-subtitle">${content.subtitle}</div>
    </div>
    ${stars ? `<div class="node-stars">${starsGlyph(stars)}</div>` : ''}
  </div>`;
}

// ── Lesson ─────────────────────────────────────────────────────────────────────
function renderLesson() {
  const lesson  = currentLesson();
  if (!lesson) return '';
  const content   = lessonContent(lesson);
  const phase     = PHASES.find(p => p.id === lesson.phase);
  const isScale   = lesson.layout === 'scale';
  const isListen  = lesson.type === 'listen' || settings.listenOnly;
  const isSinging = !isListen;
  const lessonNum = LESSONS.filter(l => l.phase === lesson.phase).findIndex(l => l.id === lesson.id) + 1;

  // ── Note area ──────────────────────────────────────────────────────────────
  let noteArea = '';
  if (isScale) {
    const step = state.mic.intervalStep;
    const cur  = lesson.targets[step];
    const info = NOTE_INFO[cur.semitone];
    const chips = lesson.targets.map((t, i) => {
      const done = state.mic.stepDone.includes(i);
      const isCur = i === step;
      const cls = done ? 'scale-chip done' : isCur ? 'scale-chip cur' : 'scale-chip';
      return `<div class="${cls}">${NOTE_INFO[t.semitone].letter.split('/')[0]}</div>`;
    }).join('');
    noteArea = `
      <div class="scale-chips" id="scaleChips">${chips}</div>
      <div class="note-cards">
        <div class="note-card target" id="currentNoteCard">
          <div class="note-letter">${info.letter}</div>
          <div class="note-sol">${solfegeLabel(cur.semitone)}</div>
          <div class="note-freq">${semitoneToFreq(cur.semitone).toFixed(1)} Hz</div>
        </div>
      </div>`;
  } else {
    const stepDots = (lesson.type === 'interval' || lesson.type === 'interval') && lesson.targets.length > 1 && !isListen
      ? `<div class="step-row">${lesson.targets.map((_, i) => {
          const cls = state.mic.stepDone.includes(i) ? 'done' : i === state.mic.intervalStep ? 'active' : '';
          return `<div class="step-dot ${cls}"></div>`;
        }).join('')}</div>` : '';

    const cards = lesson.targets.map((t, i) => {
      const info  = NOTE_INFO[t.semitone];
      const done  = state.mic.stepDone.includes(i);
      const isCur = i === state.mic.intervalStep;
      const cls   = done ? 'done' : (isCur || lesson.targets.length === 1 ? 'target' : '');
      return `<div class="note-card ${cls}">
        <div class="note-letter">${info.letter}</div>
        <div class="note-sol">${solfegeLabel(t.semitone)}</div>
        <div class="note-freq">${semitoneToFreq(t.semitone).toFixed(1)} Hz</div>
      </div>`;
    }).join('');
    noteArea = stepDots + `<div class="note-cards">${cards}</div>`;
  }

  // ── Play button(s) ─────────────────────────────────────────────────────────
  const n = lesson.targets.length;
  let playBtns = '';
  if (isScale) {
    playBtns = `<button class="btn btn-secondary" id="playBtn">▶  Hear scale</button>`;
  } else if (n === 1) {
    playBtns = `<button class="btn btn-secondary" id="playBtn">▶  Play reference note</button>`;
  } else if (n === 2) {
    playBtns = `<button class="btn btn-secondary" id="playBtn">▶  Hear interval</button>`;
  } else if (lesson.canPlayChord) {
    playBtns = `<button class="btn btn-secondary" id="playBtn">▶  Hear notes separately</button>
                <button class="btn btn-secondary" id="chordBtn" style="margin-top:-4px">♩♩  Hear as chord</button>`;
  } else {
    playBtns = `<button class="btn btn-secondary" id="playBtn">▶  Hear arpeggio</button>`;
  }

  // ── Singing section ────────────────────────────────────────────────────────
  const singSection = isSinging ? `
    <div class="detect-zone" id="detZone">
      <div class="detect-note" id="detNoteEl">—</div>
      <div class="detect-label" id="detLabelEl">Press "Start Singing" when ready</div>
    </div>
    <div class="hold-track"><div class="hold-fill" id="holdFill"></div></div>
    <div class="feedback neutral" id="feedbackEl"></div>
    <button class="btn btn-primary" id="singBtn">🎤  Start Singing</button>
    <button class="btn btn-secondary" id="stopBtn" style="display:none">⏹  Stop</button>` : '';

  const listenSection = isListen ? `
    <div class="feedback neutral" id="feedbackEl">Listen carefully, then press continue when ready.</div>
    <button class="btn btn-success" id="listenDoneBtn">✓  Got it — continue</button>` : '';

  return `<div class="lesson-view">
    <div class="back-row">
      <button class="back-btn" id="backBtn">← Back</button>
      <span class="phase-crumb">${phase.label} · Lesson ${lessonNum}</span>
    </div>
    <div class="lesson-title">${content.title}</div>
    <div class="lesson-subtitle">${content.subtitle}</div>
    <div class="lesson-desc">${content.desc}</div>
    ${noteArea}
    ${playBtns}
    ${singSection}
    ${listenSection}
    <canvas id="keyboardCanvas" height="120"></canvas>
    ${renderTheoryPanel(lesson)}
  </div>`;
}

function renderTheoryPanel(lesson) {
  const rows = lesson.targets.map(t => {
    const info = NOTE_INFO[t.semitone];
    const enh  = info.enharmonic ? ` (also written: ${info.enharmonic})` : '';
    return `
      <div class="theory-row"><span class="th-key">Note</span><span class="th-val">${info.letter}${enh}</span></div>
      <div class="theory-row"><span class="th-key">Fixed Do (solfège)</span><span class="th-val">${info.fixedDo}</span></div>
      <div class="theory-row"><span class="th-key">Frequency (A4 ref.)</span><span class="th-val">${semitoneToFreq(t.semitone).toFixed(2)} Hz</span></div>`;
  }).join('<div style="height:8px"></div>');

  const interval = lesson.theory?.interval || '';
  const extra    = lesson.theory?.extra    || '';

  return `
    <button class="theory-toggle" id="theoryToggle">📖  Theory note ${state.theoryOpen ? '▲' : '▼'}</button>
    <div class="theory-panel ${state.theoryOpen ? 'open' : ''}" id="theoryPanel">
      ${rows}
      ${interval ? `<div class="theory-row" style="margin-top:8px"><span class="th-key">Interval</span><span class="th-val">${interval}</span></div>` : ''}
      ${extra    ? `<div class="theory-note">${extra}</div>` : ''}
      <div class="theory-note" style="margin-top:10px;border-top:1px solid var(--border);padding-top:8px">
        <strong>About solfège:</strong> This app uses <em>fixed Do</em>, where C is always Do, D is always Re, and A is always La — regardless of key. This system is used in France, Italy, Spain, and most conservatoires worldwide.
      </div>
    </div>`;
}

// ── Dynamic UI updates (without full re-render) ────────────────────────────────
function updateStepUI() {
  const lesson = currentLesson();
  if (!lesson) return;
  const step = state.mic.intervalStep;

  if (lesson.layout === 'scale') {
    // Update scale chips
    document.querySelectorAll('.scale-chip').forEach((chip, i) => {
      const done = state.mic.stepDone.includes(i);
      chip.className = 'scale-chip' + (done ? ' done' : i === step ? ' cur' : '');
    });
    // Update single current note card
    const t = lesson.targets[step];
    const info = NOTE_INFO[t.semitone];
    const card = document.getElementById('currentNoteCard');
    if (card) {
      card.querySelector('.note-letter').textContent = info.letter;
      card.querySelector('.note-sol').textContent    = solfegeLabel(t.semitone);
      card.querySelector('.note-freq').textContent   = semitoneToFreq(t.semitone).toFixed(1) + ' Hz';
    }
  } else {
    // Update step dots
    document.querySelectorAll('.step-dot').forEach((d, i) => {
      d.className = 'step-dot' + (state.mic.stepDone.includes(i) ? ' done' : i === step ? ' active' : '');
    });
    // Update note card highlight
    document.querySelectorAll('.note-card').forEach((card, i) => {
      const done  = state.mic.stepDone.includes(i);
      const isCur = i === step;
      card.className = 'note-card ' + (done ? 'done' : isCur ? 'target' : '');
    });
  }

  // Redraw keyboard to reflect new current target
  const allTargets = lesson.targets.map(t => t.semitone);
  drawKeyboard(allTargets, lesson.targets[step].semitone, null, false);
}

// ── Settings sheet ─────────────────────────────────────────────────────────────
function renderSettings() {
  const sheet = document.createElement('div');
  sheet.className = 'sheet-overlay';
  sheet.innerHTML = `<div class="sheet">
    <div class="sheet-title">Settings <button class="sheet-close" id="sheetClose">✕</button></div>

    <div class="setting-row">
      <div class="setting-label">Learner mode</div>
      <div class="toggle-group">
        <button class="tog ${settings.mode === 'adult' ? 'active' : ''}" data-mode="adult">🎓 Adult</button>
        <button class="tog ${settings.mode === 'child' ? 'active' : ''}" data-mode="child">🌈 Child</button>
      </div>
    </div>
    <div class="setting-row">
      <div class="setting-label">Input mode</div>
      <div class="toggle-group">
        <button class="tog ${!settings.listenOnly ? 'active' : ''}" data-listen="false">🎤 Microphone</button>
        <button class="tog ${ settings.listenOnly ? 'active' : ''}" data-listen="true">👂 Listen only</button>
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

  sheet.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => {
    settings.mode = b.dataset.mode; saveSettings(); sheet.remove(); render();
  });
  sheet.querySelectorAll('[data-listen]').forEach(b => b.onclick = () => {
    settings.listenOnly = b.dataset.listen === 'true'; saveSettings(); sheet.remove(); render();
  });
  sheet.querySelectorAll('[data-notes]').forEach(b => b.onclick = () => {
    settings.noteDisplay = b.dataset.notes; saveSettings(); sheet.remove(); render();
  });
  document.getElementById('resetBtn').onclick = () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      progress = {}; saveProgress(); sheet.remove(); goToMap();
    }
  };
}

// ── Event wiring ───────────────────────────────────────────────────────────────
function attachHandlers() {
  document.getElementById('settingsBtn')?.addEventListener('click', renderSettings);

  document.querySelectorAll('.lesson-node:not(.locked)').forEach(node => {
    node.addEventListener('click', () => openLesson(node.dataset.lesson));
    node.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLesson(node.dataset.lesson); });
  });

  document.getElementById('backBtn')?.addEventListener('click', goToMap);

  document.getElementById('playBtn')?.addEventListener('click', () => {
    const lesson = currentLesson();
    if (!lesson) return;
    getAudioCtx();
    playSequence(lesson.targets.map(t => t.semitone), lesson.playSpeed || 'normal');
  });

  document.getElementById('chordBtn')?.addEventListener('click', () => {
    const lesson = currentLesson();
    if (lesson) playChord(lesson.targets.map(t => t.semitone));
  });

  document.getElementById('singBtn')?.addEventListener('click', async () => {
    document.getElementById('singBtn').style.display = 'none';
    document.getElementById('stopBtn').style.display = '';
    await startMic();
  });

  document.getElementById('stopBtn')?.addEventListener('click', () => {
    stopMic();
    document.getElementById('singBtn').style.display = '';
    document.getElementById('stopBtn').style.display = 'none';
    updateDetectZone(null, false, '');
    const fb = document.getElementById('feedbackEl');
    if (fb) { fb.textContent = 'Stopped. Press Start Singing to try again.'; fb.className = 'feedback neutral'; }
    const hf = document.getElementById('holdFill');
    if (hf) hf.style.width = '0%';
    const lesson = currentLesson();
    if (lesson) {
      const step = state.mic.intervalStep;
      drawKeyboard(lesson.targets.map(t => t.semitone), lesson.targets[step].semitone, null, false);
    }
  });

  document.getElementById('listenDoneBtn')?.addEventListener('click', () => {
    const lesson = currentLesson();
    if (lesson) showResult(lesson, 3);
  });

  document.getElementById('theoryToggle')?.addEventListener('click', () => {
    state.theoryOpen = !state.theoryOpen;
    document.getElementById('theoryPanel').className  = 'theory-panel' + (state.theoryOpen ? ' open' : '');
    document.getElementById('theoryToggle').textContent = `📖  Theory note ${state.theoryOpen ? '▲' : '▼'}`;
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SECTION 8 — INIT
// ══════════════════════════════════════════════════════════════════════════════

window.addEventListener('resize', () => {
  if (state.view !== 'lesson') return;
  const l = currentLesson();
  if (!l) return;
  const step = state.mic.intervalStep;
  drawKeyboard(l.targets.map(t => t.semitone), l.targets[step].semitone,
    state.mic.active ? null : null, false);
});

render();
