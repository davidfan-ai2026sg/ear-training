# Pitch Perfect — Project Notes for Claude

## What this project is
A browser-based ear training app (HTML + vanilla JS, no frameworks).
Live: https://davidfan-ai2026sg.github.io/ear-training/
Repo: https://github.com/davidfan-ai2026sg/ear-training

## Key decisions already made
- Fixed reference: A = 440 Hz as anchor for all exercises
- Fixed Do solfège only (no movable Do)
- Pitch class detection — any octave of the target note passes
- Forgiving hold bar: drains at 30%/s when out of tune (not instant reset)
- Pass at 50% fill (1 star), 75% (2 stars), 100% (3 stars)
- Hold times: 1200ms default, 1000ms for scale steps
- Tolerance: 50 cents (adult), 70 cents (child)
- Child / Adult mode with different themes and language
- Listen-only mode available (no mic required)
- Progress saved to localStorage

## Curriculum (7 phases, 25 lessons)
- Phase 1: A — octave up/down
- Phase 2: E — perfect fifth
- Phase 3: C♯ — major third, A major arpeggio
- Phase 4: A major chord — ascending/descending arpeggios
- Phase 5: C natural — minor third, A minor arpeggio
- Phase 6: A major scale (up and down)
- Phase 7: A natural minor scale (up and down)

## Possible future directions discussed
- More keys beyond A (B major, D major, etc.)
- Harmonic minor and melodic minor scales
- Interval identification (hear a note, tap which one it is)
- Chord quality identification (major vs minor played simultaneously)
- Rhythm / sight-singing exercises
- Mobile-optimised layout improvements

## File structure
- index.html  — HTML shell + all CSS
- app.js      — all game logic (~950 lines), 8 clearly labelled sections
- README.md   — user-facing documentation
- CLAUDE.md   — this file

## Git / deploy
- Branch: main
- GitHub Pages auto-deploys on push to main
- Use: git add -A && git commit -m "..." && git push
