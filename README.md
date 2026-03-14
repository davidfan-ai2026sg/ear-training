# Pitch Perfect — Ear Training App

A browser-based ear training app designed to help students of all ages and backgrounds develop accurate pitch recognition and singing ability. No installation required — open `index.html` in any browser, or visit the live app:

**🎵 [https://davidfan-ai2026sg.github.io/ear-training/](https://davidfan-ai2026sg.github.io/ear-training/)**

---

## Goals

Many music students can spell out note names and identify key signatures on paper, but struggle to sing those notes in pitch. This app addresses that gap directly.

Specific aims:

- Cultivate **accurate pitch recognition** through repeated, guided listening and singing
- Build towards **perfect pitch** by anchoring all exercises to a fixed reference note (A = 440 Hz)
- Teach students to **sing in tune** across all major and minor chords
- Develop familiarity with **major and minor scales**, not just as written theory but as heard and sung sound
- Introduce **solfège** (fixed Do system) alongside letter names, so students connect the two naming conventions
- Introduce the concept of **enharmonic equivalents** (e.g. C♯ and D♭ as the same pitch)

The app is suitable for **all ages and all primary instruments** — the voice is treated as a universal instrument that everyone possesses.

---

## Pedagogical Approach

### Fixed Reference Point: A = 440 Hz

All exercises are anchored to A (440 Hz), the internationally agreed tuning standard. Starting from a single, stable reference point helps students build reliable pitch memory before moving to other notes.

### Progressive Unlocking

Lessons unlock sequentially — each lesson must be completed before the next opens. This ensures students build skills step by step rather than jumping ahead before fundamentals are secure.

### Pitch Class Detection

The app accepts **any octave** of the target note. If the target is A, singing A2, A3, A4 or A5 all count as correct. This removes the pressure of hitting a specific frequency and makes the app accessible to voices of all ranges.

### Forgiving Hold Mechanic

Rather than requiring a perfectly sustained note, the app uses a **slow-decay hold bar**:
- The bar fills while you are singing the correct pitch
- If you drift briefly, the bar drains slowly (at 30% per second) rather than resetting instantly
- This tolerates natural breath changes, slight vibrato, and nervousness

**Star ratings** reflect how steadily the note was held:
| Bar filled | Stars |
|---|---|
| ≥ 50% | ★☆☆ — you found the note |
| ≥ 75% | ★★☆ — good, solid hold |
| 100% | ★★★ — excellent, sustained cleanly |

Students always make progress — no one gets permanently stuck.

### Solfège: Fixed Do Only

The app uses the **fixed Do** system throughout, where C is always Do, D is always Re, A is always La, and so on — regardless of key. This is the system used in France, Italy, Spain, and most conservatoires worldwide. Each note card shows both the letter name and its fixed Do syllable.

---

## Curriculum: 7 Phases

### Phase 1 — The Anchor Note
*Getting to know A (440 Hz)*

| Lesson | Activity |
|---|---|
| 1.1 | Listen to A — let it sink in |
| 1.2 | Sing A — match the reference pitch |
| 1.3 | Octave up — sing a higher A |
| 1.4 | Octave down — sing a lower A |

### Phase 2 — The Perfect Fifth
*E — the most stable interval above A*

| Lesson | Activity |
|---|---|
| 2.1 | Listen to A → E |
| 2.2 | Sing E |
| 2.3 | Sing A → E as a melodic interval |

### Phase 3 — The Major Third
*C♯ — completing the A major triad*

| Lesson | Activity |
|---|---|
| 3.1 | Listen to A → C♯ |
| 3.2 | Sing C♯ |
| 3.3 | Sing A → C♯ as a melodic interval |
| 3.4 | Sing A → C♯ → E (A major arpeggio) |

### Phase 4 — The A Major Chord
*A, C♯ and E together*

| Lesson | Activity |
|---|---|
| 4.1 | Listen to A major chord (separately and as a chord) |
| 4.2 | Sing ascending arpeggio: A → C♯ → E |
| 4.3 | Sing descending arpeggio: E → C♯ → A |

### Phase 5 — The Minor Third
*C natural — discovering A minor*

| Lesson | Activity |
|---|---|
| 5.1 | Listen to A → C natural (compare to the major third) |
| 5.2 | Sing C natural |
| 5.3 | Sing A → C as a melodic interval |
| 5.4 | Sing A → C → E (A minor arpeggio) |

### Phase 6 — A Major Scale
*Seven notes, one key*

| Lesson | Activity |
|---|---|
| 6.1 | Listen to A major scale: A B C♯ D E F♯ G♯ A |
| 6.2 | Sing A major scale ascending |
| 6.3 | Sing A major scale descending |

### Phase 7 — A Natural Minor Scale
*The parallel minor*

| Lesson | Activity |
|---|---|
| 7.1 | Listen to A natural minor scale: A B C D E F G A |
| 7.2 | Sing A natural minor scale ascending |
| 7.3 | Sing A natural minor scale descending |

---

## Features

- **Real-time pitch detection** via microphone (Web Audio API autocorrelation)
- **Visual keyboard** highlights target notes and detected pitch simultaneously
- **Detected note display** — shows the note name being sung in real time; turns green when correct
- **Theory panel** on every lesson with interval names, solfège, frequencies, and enharmonic notes
- **Listen-only mode** for students who cannot or prefer not to use a microphone
- **Child / Adult mode** — different visual theme, language, and encouragement style
- **Note display options** — letter names only, solfège only, or both
- **Progress saved** to browser localStorage — picks up where you left off
- **High score / star tracking** per lesson
- No installation, no account, no server — runs entirely in the browser

---

## Controls

| Key / Button | Action |
|---|---|
| ▶ Play reference | Hear the target note(s) |
| ♩♩ Hear as chord | Hear all notes simultaneously (Phase 4) |
| 🎤 Start Singing | Activate microphone and begin detection |
| ⏹ Stop | Stop microphone |
| ✓ Got it | Complete a listen lesson |
| ⚙ Settings | Change mode, input, note display, reset progress |

---

## Technology

- Vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies
- Web Audio API for note playback and microphone pitch detection
- Pitch detection via autocorrelation (McLeod-style)
- All progress stored in `localStorage`
- Fully offline-capable once loaded

---

## Running Locally

No build step required. Simply open `index.html` in any modern browser.

For microphone access, the browser requires either:
- A **localhost** origin, or
- An **HTTPS** origin (such as the GitHub Pages link above)

Opening the file directly via `file://` will block microphone access in most browsers.

---

## License

MIT
