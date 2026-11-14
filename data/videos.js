/* ═══════════════════════════════════════════════════════
   MATH MODULE 4 · THE LESSON VIDEOS (Marcos 11/13: "make videos and include them where you see it fits in the
   warm up and or practice section" · "they can be lesson reminders and or hints" · "tools that serve a real
   purpose" · "imbedded videos will keep interest levels more than just words read aloud").
   10 short animated videos in Ava's voice (videos/chNN/, made with Papermorph in math-module-4-videos/), one per
   kind of question. Each works the SAME KIND of problem with OTHER numbers (tools/check_videos.js: none is a
   question on this site, a real test item or a lesson-sheet problem), then shows the mistake kids make on it.
   Where they are (his picks 11/13):
     · Warm-Up: each 👀 Watch card IS the video (it replaced the read-aloud worked example); watched to the end
       before the steps.
     · Practice: 🎬 Show me beside every hint, and 🎬 Watch how after a wrong answer. Never on their own.
═══════════════════════════════════════════════════════ */
window.MM4_VIDEOS = {
  version: '3f08dec6',     // goes on every video address: a new number when a video changes (Cloudflare keeps files 4 h)
  titles: {
    1: 'Multiply with zeros', 2: 'Ten times as much', 3: 'Divide with zeros', 4: 'Division patterns',
    5: 'Two estimates', 6: 'Round, then multiply', 7: 'Estimate a quotient', 8: 'Break apart to multiply',
    9: 'Change the order', 10: 'Break apart to divide',
  },
  // the Warm-Up's 👀 Watch cards, by their title (the same in every version)
  watch: {
    'Multiply with zeros': 1, 'Divide with zeros': 3, 'Estimate a product': 5, 'Estimate a quotient': 7,
    'Mental math: break apart': 8, 'Mental math: change the order': 9,
  },
  // each of the 16 spots (the same kind of question at the same spot on every part) → its video
  spot: { 1: 2, 2: 3, 3: 3, 4: 5, 5: 7, 6: 8, 7: 9, 8: 3, 9: 10, 10: 4, 11: 1, 12: 10, 13: 9, 14: 3, 15: 8, 16: 6 },
};
