/* ==========================================================
   Misplaced — copy library
   Voice: friendly, slightly self-deprecating, never preachy.
   Each scene has 6-10 rotating lines.
   ========================================================== */

window.COPY = {

  // —— Open-app greetings (all related to losing things) ——
  greetings: [
    "What slipped away today?",
    "Welcome back. Lose anything?",
    "I haven't logged a single loss yet today. Wanna break the streak?",
    "Which little thing wandered off?",
    "Hi — misplaced something?",
    "Lossy here, ready to take notes",
    "Something just floated past — was it yours?",
    "Anything still hanging in your head? Hand it over",
  ],

  // —— Input box placeholders (only show after 5s idle) ——
  inputPlaceholders: [
    "What's the little thing currently AWOL?",
    "Which thought is hovering in your head right now?",
    "Write it down and I'll catch it for you.",
    "Where did it go? Doesn't matter — just tell me about it.",
    "This is a quiet hollow, only for things you can't find right now.",
    "Anything goes. I'll keep it.",
  ],

  // —— Lossy mutters to itself (overheard occasionally) ——
  diuMutter: [
    "...did a star just blink?",
    "Dreamt of an umbrella walking. Weird.",
    "Hmm? I was chasing my own tail again.",
    "The universe is quiet tonight.",
    "Is that star new?",
  ],

  // —— Lossy lines per scene ——
  diuLines: {
    enter: [
      "What slipped away today?",
      "Back so soon — misplaced something?",
      "Something just floated by — yours?",
      "Tell me which little one wandered off.",
      "Haven't logged a loss yet today, want to start?",
      "Lossy on duty.",
      "Hmm? Something on your mind again?",
      "Hand it over, then go do something else.",
    ],
    light: [
      "Park it here, I'll watch it.",
      "Got it. It's mine now.",
      "This kind of thing — leave it to me.",
      "Noted. One brick at a time.",
      "Mm. Carrying it for you.",
    ],
    medium: [
      "Got you. I'm here.",
      "A little heavy. I've got it.",
      "Take your time. I'll wait.",
    ],
    heavy: [
      "It's gone. I'm still here.",
      "It walked off. I haven't.",
      "Right here. I'm not going anywhere.",
      "C'mere, let me hold this for a sec.",
      "Easy. We'll go slow.",
    ],
    flip: [
      "Bye. Off to its own adventure.",
      "Walk well. Don't look back.",
      "Goodbye, little thing.",
    ],
    incenseDone: [
      "Message delivered.",
      "It got it.",
      "Smoke arrived. So did your heart.",
    ],
    healed: [
      "It's home now. You can travel light.",
      "All good. All good.",
      "You did it. I saw.",
    ],
    starmap: [
      "All these were yours once. They're not going anywhere.",
      "Your map is filling up nicely.",
      "Which one was this again?",
    ],
    found: [
      "See — it didn't want to leave you either.",
      "It got tired of playing and remembered the way home.",
      "Found again. The universe's tiny gift.",
    ],
  },

  // —— Step 1 subtitle ——
  step1Subs: [
    "No right answer — just a feeling.",
    "First instinct is the right one.",
    "You decide how much it weighs.",
  ],

  // —— Release lines by weight ——
  releaseLight: [
    "Donated to the universe.",
    "Off to start over somewhere new.",
    "Logged. Now go feel the wind.",
    "Someone's looking after this one. You're free.",
    "It went where it wanted to go.",
    "The universe will handle the rest. You did your part.",
    "Logged. Take a breath. Look out a window.",
    "Don't worry — this one's no longer in your head.",
    "Like wind passing through. Done.",
  ],

  releaseMid: [
    "It may not be in your hands, but the warmth it left is.",
    "A chapter closed. You're still whole.",
    "A soft place for it to land. A hug for you.",
    "You cared. That's enough.",
    "You did your best — it didn't. Not your fault.",
  ],

  releaseHeavy: [
    "From now on, when you remember it: not 'I lost it' — 'I had it.'",
    "Let it become your shadow. Shadows don't get in the way; they just follow you.",
    "Come on. Let's give it a proper goodbye.",
    "It deserves a ritual.",
    "You loved it. That counts.",
  ],

  // —— Search reminders ——
  searchEncourage: [
    "Card is ready. I'll nudge you in 3 days.",
    "Stop spinning on it — let me watch for you.",
    "Go do something else. I'll keep an eye out.",
    "Card saved. Off you go.",
  ],

  // —— Found ——
  foundLines: [
    "See — it missed you too.",
    "It got tired of playing and remembered the way home.",
    "Found! The universe's little gift.",
    "Reunited. Show's over.",
    "You can sleep well tonight.",
  ],

  // —— Anti-self-blame copy ——
  noBlame: [
    "Your brain is busy protecting the bigger you. Small things slip — that's where I come in.",
    "You misplace things because your head holds so much love for the world.",
    "It's gone, but your worth hasn't changed by a millimeter.",
    "In a world obsessed with productivity, I give you permission to be a little 'off' today.",
    "You've been carrying enough. Let me carry this thought for once.",
    "Not because you're slow — because your mind is full of brighter things.",
    "Things leave. Your beauty stays.",
    "Misplacing stuff is the small, accidental gift you leave the world.",
  ],

  // —— Healing prompts ——
  letterHooks: [
    "If it could hear you...",
    "What would you tell it?",
    "There's something I want to say —",
    "If we met one more time, I'd say —",
    "I always wanted to tell it —",
  ],

  // —— Shadow poems (step 2) ——
  shadowPoems: [
    "It's not here,\nbut what it left in you still is.\nThat's enough.",
    "It walked away gently.\nYou don't need to see it off.",
    "It's gone to a place\nwhere no one will lose it again.",
    "You once had it —\nthat's something nobody can take.",
    "It just went a step ahead.\nTake your time.",
  ],

  // —— Journey (next chapter) keyword cards ——
  journeyKeywords: [
    "rainy day", "library", "the beach", "from mom", "wandering", "music festival",
    "deep mountains", "outer space", "another city", "forest", "rainbow", "snow",
    "flea market", "new owner", "convenience store", "nighttime", "high school", "graduation",
    "subway", "pocket", "drawer", "blue", "barely used", "long-time companion",
  ],

  // —— Journey hooks (when AI fallback is showing) ——
  journeyHooks: [
    "If it had legs, it'd be walking through a forest right now.",
    "Maybe it's just chosen another way to be near you.",
    "Guess what's the first thing it did after leaving?",
    "Write it a small voyage tale.",
    "Right now, it might be...",
  ],

  // —— Story templates (offline fallback) — vivid, personified ——
  storyTemplates: [
    "Your \"{name}\" is doing well these days.\nIt's got a new pair of little shoes,\nwalked past \"{a}\" without looking back,\nbut it still remembers your scent of \"{b}\".\nNow it's resting near \"{c}\",\nquiet, dreaming a small dream.",

    "Word is, \"{name}\" has a new name now.\nIt left without saying goodbye —\nmaybe it didn't want to make you sad.\nIt rolled around in \"{a}\" for a while,\nthen fell asleep clutching its memory of \"{b}\".\nIf you ever pass through \"{c}\",\nsay hi to the world for it.",

    "\"{name}\" walks on the moon's shadow now.\nWhen it passed \"{a}\" it stopped to listen,\npockets full of the scent of \"{b}\".\nIn the end, it chose to settle near \"{c}\".\nIt's living its tiny life there, day by day.\nDon't worry — it knows what it's doing.",

    "Truth is, \"{name}\" had been wanting to see \"{a}\" for ages.\nThis was its chance.\nIt packed up,\ntook the \"{b}\" you'd given it,\nand walked all the way to \"{c}\".\nIt'll think of you some night,\nbut it won't turn back.",

    "Your \"{name}\" has settled in \"{c}\" now.\nIt strolls through \"{a}\" in the daytime,\nstill carrying a touch of \"{b}\".\nIt's started its own story now,\nlearning to accept its new fate.\nSo are you.",
  ],

  // —— Sealing lines (step 5) ——
  sealLines: [
    "It's home now. You can travel light.",
    "A good goodbye starts here.",
    "It's in your map, not going anywhere.",
    "You said goodbye well. That's hard. You did it.",
    "Some encounters complete their mission. Bittersweet, but whole.",
    "It took a chapter of your time. Left you this story.",
    "We're not in a hurry. Goodbyes can be slow.",
    "It's not your weight anymore. It's a star in your map.",
    "It's home. You should rest too.",
    "The memory is on file. The regret has no weight.",
    "Safe travels to it. Sweet dreams to you.",
  ],

  // —— Lost-item reminders ——
  remindLost: [
    "Any news on that one?",
    "Still looking? Or want to let it go?",
    "Letting it go is also fine.",
    "Hey, don't forget {name} waiting in the corner.",
  ],

  // —— Notes ("keep in mind") ——
  remindMessages: [
    "Check the windowsill — there's a book waiting for you.",
    "That umbrella — glance at it before heading out.",
    "Hey, don't forget to grab it.",
    "It's right there, waiting for you to pick it up.",
  ],
  noteRetrieved: [
    "Got it back. Didn't get away this time.",
    "Picked up.",
    "Solid 👏",
    "Nice. Crossed off.",
  ],
  note24h: [
    "Is this still around?",
    "Logged a whole day ago — how's it going?",
    "Quick check: is that thing okay?",
  ],

  // —— Star map quotes ——
  starmapQuotes: [
    "All these were yours once. They're all okay.",
    "Your map is getting brighter.",
    "Look back: every star is a chapter of time.",
    "Quiet here. But full.",
  ],

  // —— Star map fixed tagline (under the field) ——
  starmapTagline: "Every misplaced thing becomes a star.",

  // —— Heavy-loss bridge text ——
  heavyBridge: [
    "This deserves time to say goodbye.\nIf you'd like, we'll go slow.",
    "I see it. This isn't 'page-turn and done'.\nWant to walk it out for a bit?",
    "Not the kind of thing you brush off in a sentence.\nWanna give it a real farewell?",
  ],

  // —— Cyber Incense ——
  incensePrompts: [
    "Wanna light a stick for it?\nFor your peace of mind.",
    "Some things deserve a small ritual.\nLight one for it?",
    "Digital incense is incense too.\nIt'll receive it.",
  ],
  incenseLighting: [
    "Hold steady... ember catching",
    "Deep breath. Press again.",
    "Three seconds. Let it light slowly.",
  ],
  incenseBlessings: {
    1: [
      "One stick.\nMay you sleep easy tonight.",
      "One is enough.\nIt knows you came.",
      "One stick — for those days.\nThe rest, let it rest.",
    ],
    3: [
      "One for it,\none for who you were then,\none for the days ahead.",
      "Three sticks rising.\nPast, present, future — all settled.",
      "To the sky, to the earth, to that careful but trying self.",
    ],
    5: [
      "Five sticks at once.\nFor it, for you, for time that passed,\nfor every word unsaid, for the lighter days ahead.",
      "Five — full ritual.\nIt definitely heard you.",
      "Five — paving a long road for its journey.\nWalk well. No need to wave back.",
    ],
  },
  incenseSmokeLines: [
    "Smoke rising.",
    "Heart, slowly emptying.",
    "Look — it's leaving.",
    "Some things words can't say. Smoke can.",
  ],
  incenseClose: [
    "Done.\nGo home and sleep well.",
    "After the incense, the matter passes.",
    "Heart at ease. That's enough.",
  ],

  // —— Data empathy ——
  dataEmpathy: [
    "Right now, 2,847 other people also left their keys at home. You're not alone.",
    "Every 11 seconds in this country, a power bank changes owners.",
    "Today, an estimated 7 million Bluetooth earbuds are 'living independently'.",
    "All the lost things in the universe — could fill a few moons.",
  ],

  // —— Monthly badges ——
  badges: {
    threeInARow: name => `${name} hat-trick! Are you serious 🏆`,
    firstHeal: 'Completed your first goodbye — Lossy got a new little star ✨',
    lateNight: 'Logging late again. Get some sleep.',
  },

  // —— About page ——
  about: {
    title: "Why I made Misplaced",
    body: `I'm someone who loses things constantly. Recently I lost a French textbook. Before that, a stuffed animal I really loved.

The worst part of losing things, for me, was never the thing itself — it was the string in my head, always tense. Every time I sat down to do something, it'd jump up and yell: "you still haven't found it."

And every time, I'd start scolding myself. "How can I be this careless?" "I could have just not lost it." That kind of self-blame hurts more than the loss itself.

One day I wondered: if I just *wrote down* what was hanging in my head, would my brain finally let it go?

Turns out there's a name for this: the **Zeigarnik Effect**. Unfinished tasks keep occupying our cognitive resources. But the moment you "write them down," your brain decides "someone's handling it" — and you're free to think about something else.

That's where Misplaced came from.

It doesn't help you find anything. It doesn't pretend nothing happened. It just takes the thing hanging in your head — and says:

"Logged. Go on."`,
    sign: "— A person who's always misplacing things, 2026",
  },

  // —— Helpers ——
  pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },
  pickN(arr, n) {
    const a = [...arr]; const r = [];
    while (r.length < n && a.length) {
      r.push(a.splice(Math.floor(Math.random() * a.length), 1)[0]);
    }
    return r;
  },
  releaseFor(weight) {
    if (weight === 1) return this.pick(this.releaseLight);
    if (weight === 2) return this.pick(this.releaseMid);
    return this.pick(this.releaseHeavy);
  },
};
