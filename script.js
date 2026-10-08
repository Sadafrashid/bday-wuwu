/* =========================================================
   ✎  EVERYTHING PERSONAL LIVES RIGHT HERE  ✎
   Change the text below and the whole website updates.

   • {name} → WUWU      • {me} → CHOOZI
   • Anything in [square brackets] is a placeholder. While
     highlightPlaceholders is true, those show up with a gold
     dotted underline so you can spot what you haven't written yet.
     Set it to false before you send the link to him.
   • Use \n for a line break inside a message.
   ========================================================= */
const birthdayConfig = {
  boyfriendName: "WUWU",
  yourName: "CHOOZI",

  highlightPlaceholders: false,     // ← set to false when everything is filled in
  startMusicOnOpen: true,         // true = song starts when he taps "Fine, I'll open it"
  music: "assets/music/song.mp3",
  musicHint: "play our song",

  /* ---------- 0. The opening ---------- */
  intro: {
    lines: [
      "Okay... I made something😛.",
      "I tlied wuwu 👉👈...",
      "...just give me a few minutes."
    ],
    button: "Fine, I'll open it →"
  },

  /* ---------- 3. "You, in my words" cards (tap to reveal) ---------- */
  personality: [
    {
      title: "Your most dangerous quality",
      text: "You r sassy "
    },
    {
      title: "Something you do that secretly makes me smile",
      text: "I pretend I don't notice, but I do. Caring about me loving me unconditionally (but still I love more). Every. Single. Time."
    },
    {
      title: "Something I pretend to be annoyed by",
      text: "Your cute ziddi behavior, and u annoy me a lot thinking I'm a baby or something . I will deny this if you ever bring it up. But I would miss it terribly if it disappeared."
    },
    {
      title: "Something I would never admit...",
      text: "That you love me because Im scared what if u dont love me anymore or what if its less than before what if somethings changed. What if I get changed .. Am scared of leaving u wuwu"
    },
    {
      title: "The thing I love most about you",
      text: "Okay, there are a lot of answers. But if I'm being honest: A kind and gentle human guess what I want to keep all this for me m not gonna share it with anyone."
    }
  ],

  /* ---------- 6. Our story (timeline) ---------- */
  story: [
    {
      title: "The Beginning",
      Year: "2018",
      text: " I had no idea I was meeting watching someone who'd end up taking over half my brain."
    },
    {
      title: "Then somehow...",
      Year: "2018",
      text: "One minute I was thinking wuwu is something fishy (mujhe ni pta kya) and the next I was waiting for your messages."
    },
    {
      title: "The moment I knew",
      Year: "2018",
      text: "I remember thinking: oh no. It's you. It's actually you. And tried holding on you but Allah's will:)"
    },
    {
      title: "All the random days",
      Year: "2019-2023",
      text: "Weirdly, I had your random thoughts about there's deff something going on in your mind against me. Nothing's happening and somehow it's everything."
    },
    {
      title: "And now...",
      date: "2026",
      text: "HM SATH HAIN And it still feels like we're just getting started."
    }
  ],

  /* ---------- 5. Photo diary (photo1.jpg, photo2.jpg ... in assets/images/) ----------
     Add or delete rows freely. Missing photos show a dotted placeholder. */
  memories: [
    { image: "assets/images/photo1.jpg", caption: "This fit, this tree, and you pretending you're not posing. I see you." },
    { image: "assets/images/photo2.jpg", caption: "The gym is your second home, and your discipline is the reason I'm so proud of you." },
    { image: "assets/images/photo3.jpg", caption: "Lost in your phone at a cafe, and I'm wondering if you're texting me. (You better be.)" },
    { image: "assets/images/photo4.jpg", caption: "Little you at your birthday, surrounded by love. Some things never change, you're still everyone's favourite." },
    { image: "assets/images/photo5.jpg", caption: "I wish I could've known this baby version of you too." },
    { image: "assets/images/photo6.jpg", caption: "Those glasses, that hair, that look. Little you was already trouble." },
    { image: "assets/images/photo7.jpg", caption: "charm..." },
    { image: "assets/images/photo8.jpg", caption: "Dressed up and still checking the mirror like a king. Zero complaints." },
    { image: "assets/images/photo9.jpg", caption: "The day all your hard work got its crown. I was so proud of you, and I'm still proud of you." },
    { image: "assets/images/photo10.jpg", caption: "Just standing there looking effortlessly good. Distance is cruel, I want to be standing next to you." },
    { image: "assets/images/photo11.jpg", caption: "This little face has no idea how much trouble he'd be (and how much he'd be loved)." },
    { image: "assets/images/photo12.jpg", caption: "Sorry but.. cepies is all I want." },
    { image: "assets/images/photo13.jpg", caption: "The flex! Okay okay, I see you, Mr. Strong. Miles away and still impressing me." }
  ],

  /* ---------- 4. The reel ---------- */
  reel1: {
    video: "assets/videos/reel1.mp4",
    poster: "assets/images/reel1-cover.jpg",
    title: "The man you are",
    caption: "This video is all about you: the kind of person you are. Calm, caring, a little stubborn, and soft in all the right places. Even from miles away, this is the person I choose, every single day."
  },

  /* ---------- 7. The "I know you" game ----------
     answer = the option number YOU consider correct (0 = first, 1 = second, 2 = third).
     Each option has its own reaction. Add or remove questions freely. */
  quiz: {
    questions: [
      {
        q: "Who fell first?",
        answer: 1,
        options: [
          { t: "Me", r: "Bold of you. We'll see how long that confidence lasts." },
          { t: "You", r: "Correct. And I'm not keeping score. (I am.)" },
          { t: "We're still debating this", r: "Diplomatic. Suspicious. But fine." }
        ]
      },
      {
        q: "Who is more stubborn?",
        answer: 2,
        options: [
          { t: "Me", r: "Wow. Self-awareness. I'm almost proud." },
          { t: "You", r: "I'm going to pretend you didn't just say that about me." },
          { t: "Obviously both", r: "Finally, some honesty in this relationship." }
        ]
      },
      {
        q: "Who apologizes first?",
        answer: 2,
        options: [
          { t: "Me", r: "That's... not what I remember, but okay." },
          { t: "You", r: "Look at you, rewriting history." },
          { t: "Depends who is more hungry", r: "Scarily accurate." }
        ]
      },
      {
        q: "Who takes longer to reply to texts?",
        answer: 0,
        options: [
          { t: "Me", r: "Guilty. But my replies are very high quality." },
          { t: "You", r: "Excuse me?? I'm writing it down." },
          { t: "Define \"reply\"", r: "Hmm. Suspiciously well-prepared." }
        ]
      }
    ],
    results: [
      { min: 0.75, title: "Okay. I'll give you this one.", text: "You know us better than I expected. Don't let it go to your head." },
      { min: 0.4,  title: "Not bad.", text: "Some of that was right. We'll call it \"room to grow\"." },
      { min: 0,    title: "Hmm. We need to talk.", text: "We'll discuss this later. Over insta. Obviously." }
    ]
  },

  /* ---------- 8. Things I don't say enough ---------- */
  unsaid: [
    "Thank you for making ordinary days feel special.",
    "I love how safe I feel around you.",
    "I notice more than I tell you.",
    "I'm proud of the person you are.",
    "I hope you know how loved you are.",
    "I am the only person who deserves all your attention (except my in laws) Nobody else is!!!"
  ],

  /* ---------- 9. The letter ---------- */
  letter: {
    pre: "Okay. No jokes for this part.",
    button: "Open this.",
    greeting: "Dear WUWU jii,",
    body: [
      "I may not tell you but you dared to be my fav human and the only fav human you have performed and still performing every role in my life",
      "You might not believe but you have always raised my standards since class 8th My eyes were always on you thinking this man is quite diff I felt warmness really wanted to taste you love wuwu",
      "You have changed me a lot I dont get triggered now a days worked on my anger issues I've learned your calmness and emotional handling idk how but I know my true self now. May you win every single battle May the crown is always yours. My wuwu deserves it all",
      "And lastly I love how you define masculinity that have been mentioned in every Philosophy "
    ],
    closing: "Happy Birthday, my love.",
    signature: "— Choozi"
  },

  /* ---------- 10. The final build-up ---------- */
  buildup: {
    lines: [
      { text: "But...", pause: 2600 },
      { text: "I still haven't said the most important thing.", pause: 3200 },
      { text: "So...", pause: 2400 },
      { text: "one last thing.", pause: 2400 }
    ],
    button: "For you →"
  },

  /* ---------- 11. The big reveal ---------- */
  reveal: {
    top: "Happy Birthday",
    bottom: "My favorite person.",
    replay: "again ↻"
  },

  /* ---------- 12. Final message ---------- */
  closing: {
    lines: [
      { t: "If you remember anything from this...", c: "soft" },
      { t: "Remember that somewhere in this world, there is a girl who decided that you were worth turning an entire website into a birthday gift😛😛.", c: "big" },
      { t: "And yes...", c: "soft" },
      { t: "I would do it again.", c: "big" },
      { t: "Happy Birthday, Wuwu. ❤️", c: "final" },
      { t: "I love you.", c: "love" }
    ]
  },



  /* ---------- 14. Secret surprise (tap the P.S. at the very bottom) ---------- */
  secret: {
    teaser: "P.S. You didn't think that was everything, did you?",
    title: "Okay, fine. One more.",
    paragraphs: [
      "I'm not done saying it. I love you. On the easy days, and on the days you're being impossible too."
    ],
    link: { label: "", href: "" }     // optional button, e.g. { label: "Open your gift", href: "https://..." }
  },

  /* ---------- Little bits of copy around the page ---------- */
  copy: {
    hero: {
      title: "Happy Birthday,",
      line1: "Yes, this entire website is about you. Don't get too excited.",
      line2: "Although... you kind of deserve it.",
      cue: "keep scrolling"
    },
    message: {
      heading: "Okay, where do I even start?",
      paragraphs: [
        "There are probably a thousand things I could say about you, and somehow I still wouldn't know where to start. ",
        "Because apparently that's what happens when I love someone too much."
      ]
    },
    personality: {
      eyebrow: "the official file on you",
      heading: "You, in my words.",
      hint: "Tap them. I dare you.",
      done: "You opened every single one. Nosy. (I love it.)"
    },
    evidence: {
      eyebrow: "case file no. us",
      heading: "Evidence",
      lead: "I have proof of exactly who you are, and why you're my favorite person.",
      ps: "Yes, I watched this approximately 700 times while making this."
    },
    gallery: {
      eyebrow: "the photo diary",
      heading: "Some of my favorite versions of u.",
      hint: "I could probably scroll through these for hours. Tap any of them."
    },
    story: {
      eyebrow: "our story, loosely",
      heading: "Before you became my favorite person..."
    },
    quiz: {
      eyebrow: "a tiny test",
      heading: "Let's see if you actually know us.",
      sub: "No pressure. (There's a little pressure.)",
      qLabel: "question",
      retry: "Let me try again",
      next: "Next →",
      finish: "See how I did →",
      scoreLabel: "You got {x} out of {n}."
    },
    unsaid: {
      eyebrow: "quietly",
      heading: "Things I probably don't say enough."
    },
    toast: {
      noMusic: "Couldn't find your song. Put it at assets/music/song.mp3 and refresh.",
    },
    footer: "Made for you, by {me}."
  }
};


/* =========================================================
   Below this line is the machinery. You shouldn't need to
   touch it unless you want to tweak how things behave.
   ========================================================= */
(function () {
  'use strict';

  const cfg = birthdayConfig;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sleep = (ms) => new Promise((res) => setTimeout(res, reduced() ? Math.min(ms, 40) : ms));
  const nextFrame = () => new Promise((res) => requestAnimationFrame(() => res()));
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const isSmall = () => window.innerWidth < 640;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const subst = (t) => String(t == null ? '' : t).replace(/\{name\}/g, cfg.boyfriendName).replace(/\{me\}/g, cfg.yourName);
  const plain = (t) => subst(t).replace(/[\[\]]/g, '');
  function fmt(text) {
    let t = esc(subst(text)).replace(/\\n|\n/g, '<br>');
    if (cfg.highlightPlaceholders) t = t.replace(/\[([^\]]+)\]/g, '<span class="todo">[$1]</span>');
    return t;
  }
  const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 4200);
  }

  /* ---------- Bind simple text ---------- */
  function bindText() {
    $$('[data-cfg]').forEach((n) => {
      const v = get(cfg, n.dataset.cfg);
      if (typeof v === 'string') n.innerHTML = fmt(v);
    });
    $('#heroName').innerHTML = fmt('{name}.');
  }

  /* =========================================================
     MUSIC
     ========================================================= */
  const Music = (() => {
    const audio = $('#song');
    const btn = $('#musicBtn');
    const hint = $('#musicHint');
    audio.src = cfg.music;
    audio.loop = true;
    audio.volume = 0;
    hint.textContent = cfg.musicHint || '';

    const TARGET = 0.55;
    let state = 'idle', ducked = false, fadeId = null;

    function setState(s) {
      state = s;
      btn.dataset.state = s;
      btn.setAttribute('aria-pressed', String(s === 'playing'));
      btn.setAttribute('aria-label', s === 'playing' ? 'Pause music' : s === 'paused' ? 'Resume music' : 'Play music');
    }
    function fade(to, ms, done) {
      clearInterval(fadeId);
      const from = audio.volume, steps = Math.max(1, Math.round(ms / 40));
      let i = 0;
      fadeId = setInterval(() => {
        i++;
        audio.volume = clamp(from + (to - from) * (i / steps), 0, 1);
        if (i >= steps) { clearInterval(fadeId); if (done) done(); }
      }, 40);
    }
    function hideHint() { hint.classList.remove('show'); }
    async function play() {
      try {
        audio.volume = 0;
        await audio.play();
        fade(TARGET, 1600);
        setState('playing');
        hideHint();
        return true;
      } catch (e) {
        toast(cfg.copy.toast.noMusic);
        setState('idle');
        return false;
      }
    }
    function pause() {
      fade(0, 500, () => audio.pause());
      setState('paused');
    }
    btn.addEventListener('click', () => {
      ducked = false;
      hideHint();
      if (state === 'playing') pause(); else play();
    });
    return {
      play,
      showHint() { if (state === 'idle') { hint.classList.add('show'); setTimeout(hideHint, 9000); } },
      duck() { if (state === 'playing') { ducked = true; fade(0, 400, () => audio.pause()); setState('paused'); } },
      unduck() { if (ducked) { ducked = false; play(); } }
    };
  })();

  /* =========================================================
     INTRO → OPEN
     ========================================================= */
  const intro = $('#intro'), site = $('#site');
  let opened = false;

  async function runIntro() {
    const lines = $$('.intro__line');
    await sleep(1100);
    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.add('show');
      if (i > 0) lines[i - 1].classList.add('dim');
      await sleep(i === lines.length - 1 ? 2400 : 2800);
    }
    $('#openBtn').classList.add('show');
  }

  function openSite() {
    if (opened) return;
    opened = true;
    window.scrollTo(0, 0);
    intro.classList.add('is-leaving');
    document.body.classList.remove('is-locked');
    document.body.classList.add('is-open');
    site.removeAttribute('inert');
    document.title = 'Happy Birthday, ' + plain(cfg.boyfriendName);
    startReveals();
    initDust();
    update();
    setTimeout(() => { intro.hidden = true; }, 1500);
    if (cfg.startMusicOnOpen) Music.play(); else setTimeout(() => Music.showHint(), 3200);
  }
  $('#openBtn').addEventListener('click', openSite);

  /* =========================================================
     REVEAL-ON-SCROLL
     ========================================================= */
  let io;
  function startReveals() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach((n) => n.classList.add('in')); return; }
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach((n) => io.observe(n));
  }

  /* =========================================================
     SCROLL EFFECTS: progress bar, parallax, timeline line
     ========================================================= */
  let ticking = false;
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  function update() {
    ticking = false;
    const vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    $('#scrollFill').style.transform = 'scaleX(' + (max > 0 ? clamp(window.scrollY / max, 0, 1) : 0) + ')';
    if (!opened) return;

    if (!reduced()) {
      $$('[data-parallax]').forEach((n) => {
        const r = n.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const f = parseFloat(n.dataset.parallax) || 0;
        const m = parseFloat(n.dataset.parallaxMax) || 60;
        const off = (r.top + r.height / 2) - vh / 2;
        n.style.setProperty('--py', clamp(off * f, -m, m).toFixed(1) + 'px');
      });
    }

    const tl = $('#timeline');
    const r = tl.getBoundingClientRect();
    const p = clamp((vh * 0.55 - r.top) / r.height, 0, 1);
    tl.style.setProperty('--p', p.toFixed(3));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* =========================================================
     HERO DUST
     ========================================================= */
  function initDust() {
    const c = $('#dust'); if (!c) return;
    const ctx = c.getContext('2d');
    let w, h, parts = [], run = false;

    function size() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth; h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = isSmall() ? 34 : 64;
      parts = Array.from({ length: n }, () => ({
        x: rand(0, w), y: rand(0, h), r: rand(.5, 1.9), vx: rand(-.08, .08), vy: rand(-.24, -.04),
        ph: rand(0, 6.28), sp: rand(.4, 1.2), c: Math.random() < .62 ? '244,234,221' : '202,164,104'
      }));
    }
    function draw(t, move) {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        if (move) {
          p.x += p.vx; p.y += p.vy;
          if (p.y < -5) { p.y = h + 5; p.x = rand(0, w); }
          if (p.x < -5) p.x = w + 5; if (p.x > w + 5) p.x = -5;
        }
        const a = .12 + .5 * (.5 + .5 * Math.sin(t / 1000 * p.sp + p.ph));
        ctx.beginPath(); ctx.fillStyle = 'rgba(' + p.c + ',' + a.toFixed(3) + ')';
        ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      }
    }
    function tick(t) { if (!run) return; draw(t, true); requestAnimationFrame(tick); }
    size();
    window.addEventListener('resize', () => { size(); if (reduced()) draw(0, false); });
    if (reduced()) { draw(0, false); return; }
    new IntersectionObserver(([e]) => {
      const should = e.isIntersecting;
      if (should && !run) { run = true; requestAnimationFrame(tick); } else if (!should) run = false;
    }).observe($('#hero'));
  }

  /* =========================================================
     MESSAGE
     ========================================================= */
  function renderMessage() {
    const box = $('#messageBody');
    const ps = cfg.copy.message.paragraphs;
    ps.forEach((t, i) => {
      const p = el('p', 'reveal' + (i === ps.length - 1 ? ' prose__kicker' : ''), fmt(t));
      p.style.setProperty('--d', (i * 0.15) + 's');
      box.appendChild(p);
    });
  }

  /* =========================================================
     PERSONALITY CARDS
     ========================================================= */
  function renderPersonality() {
    const grid = $('#pgrid');
    const total = cfg.personality.length;
    let seen = 0;
    cfg.personality.forEach((c, i) => {
      const b = el('button', 'pcard reveal');
      b.type = 'button';
      b.setAttribute('aria-expanded', 'false');
      b.style.setProperty('--d', (i % 3) * 0.1 + 's');
      b.innerHTML =
        '<span class="pcard__title">' + fmt(c.title) + '</span>' +
        '<span class="pcard__icon" aria-hidden="true"></span>' +
        '<span class="pcard__body"><span class="pcard__inner"><span class="pcard__text">' + fmt(c.text) + '</span></span></span>';
      let counted = false;
      b.addEventListener('click', () => {
        const open = b.classList.toggle('is-open');
        b.setAttribute('aria-expanded', String(open));
        if (open && !counted) {
          counted = true; seen++;
          if (seen === total) {
            const d = $('#pdone');
            d.innerHTML = fmt(cfg.copy.personality.done);
            d.classList.add('show');
          }
        }
      });
      grid.appendChild(b);
    });
  }

  /* =========================================================
     REELS
     ========================================================= */
  const reels = [];
  const fmtTime = (s) => { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  const ICON = {
    play: '<svg viewBox="0 0 24 24"><path d="M6 3.8v16.4a1 1 0 0 0 1.5.86l13.6-8.2a1 1 0 0 0 0-1.72L7.5 2.94A1 1 0 0 0 6 3.8z"/></svg>',
    sound: '<svg class="reel__ico-sound" viewBox="0 0 24 24"><path d="M4 9.5v5h3.6L12.5 19V5L7.6 9.5H4z"/><path d="M16 9a4.2 4.2 0 0 1 0 6M18.6 6.4a8 8 0 0 1 0 11.2"/></svg>',
    mute: '<svg class="reel__ico-mute" viewBox="0 0 24 24"><path d="M4 9.5v5h3.6L12.5 19V5L7.6 9.5H4z"/><path d="M16.5 9.5l4 5M20.5 9.5l-4 5"/></svg>',
    enter: '<svg class="reel__ico-enter" viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
    exit: '<svg class="reel__ico-exit" viewBox="0 0 24 24"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>'
  };

  function buildReel(conf, variant, mount) {
    const art = el('article', 'reel reel--' + variant);
    art.innerHTML =
      '<div class="reel__stage reveal">' +
        '<div class="reel__frame" data-state="paused" data-muted="false" data-fs="false">' +
          '<video class="reel__video" playsinline webkit-playsinline preload="metadata"></video>' +
          '<div class="reel__vignette"></div>' +
          '<div class="reel__missing" hidden><p>Your video goes here<code></code></p></div>' +
          '<button class="reel__big" type="button" aria-label="Play video">' + ICON.play + '</button>' +
          '<div class="reel__ui">' +
            '<div class="reel__track" role="slider" tabindex="0" aria-label="Seek" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="reel__fill"></span></div>' +
            '<div class="reel__row">' +
              '<span class="reel__time">0:00</span><span class="reel__spacer"></span>' +
              '<button class="reel__btn reel__mute" type="button" aria-label="Mute">' + ICON.sound + ICON.mute + '</button>' +
              '<button class="reel__btn reel__fs" type="button" aria-label="Fullscreen">' + ICON.enter + ICON.exit + '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="reel__copy reveal" style="--d:.15s">' +
        '<p class="reel__label">' + fmt(conf.title) + '</p>' +
        '<p class="reel__caption">' + fmt(conf.caption) + '</p>' +
      '</div>';
    mount.appendChild(art);

    const frame = $('.reel__frame', art), video = $('video', art);
    const big = $('.reel__big', art), track = $('.reel__track', art), fill = $('.reel__fill', art);
    const timeEl = $('.reel__time', art), muteBtn = $('.reel__mute', art), fsBtn = $('.reel__fs', art);
    const missing = $('.reel__missing', art);
    let hideTimer, scrubbing = false;

    video.src = conf.video + '#t=0.001';          // #t shows the first frame on iPhones
    if (conf.poster) video.poster = conf.poster;

    video.addEventListener('loadedmetadata', () => {
      if (video.videoWidth && video.videoHeight) {
        const ar = video.videoWidth / video.videoHeight;
        frame.style.setProperty('--ar', ar.toFixed(4));
        art.classList.toggle('is-landscape', ar > 1.1);
      }
      timeEl.textContent = fmtTime(video.duration);
    });
    video.addEventListener('error', () => {
      missing.hidden = false;
      $('code', missing).textContent = conf.video;
    });

    const api = { video, pause: () => video.pause(), get paused() { return video.paused; } };
    reels.push(api);

    const toggle = () => { if (video.paused) { video.play().catch(() => toast('Could not play: ' + conf.video)); } else video.pause(); };
    big.addEventListener('click', toggle);
    video.addEventListener('click', toggle);

    const poke = () => {
      frame.classList.add('ui-on');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => frame.classList.remove('ui-on'), 2600);
    };
    frame.addEventListener('pointermove', poke);
    frame.addEventListener('pointerdown', poke);

    video.addEventListener('play', () => {
      frame.dataset.state = 'playing';
      reels.forEach((r) => { if (r !== api) r.pause(); });
      Music.duck(); poke();
    });
    video.addEventListener('pause', () => {
      if (!video.ended) frame.dataset.state = 'paused';
      setTimeout(() => { if (reels.every((r) => r.paused)) Music.unduck(); }, 250);
    });
    video.addEventListener('ended', () => { frame.dataset.state = 'ended'; });
    video.addEventListener('timeupdate', () => {
      if (scrubbing || !video.duration) return;
      const p = video.currentTime / video.duration;
      fill.style.transform = 'scaleX(' + p + ')';
      track.setAttribute('aria-valuenow', String(Math.round(p * 100)));
      timeEl.textContent = fmtTime(video.currentTime) + ' / ' + fmtTime(video.duration);
    });

    // Scrubbing
    const seekTo = (clientX) => {
      const r = track.getBoundingClientRect();
      const p = clamp((clientX - r.left) / r.width, 0, 1);
      if (video.duration) { video.currentTime = p * video.duration; fill.style.transform = 'scaleX(' + p + ')'; }
    };
    track.addEventListener('pointerdown', (e) => { scrubbing = true; track.setPointerCapture(e.pointerId); seekTo(e.clientX); });
    track.addEventListener('pointermove', (e) => { if (scrubbing) seekTo(e.clientX); });
    const endScrub = () => { scrubbing = false; };
    track.addEventListener('pointerup', endScrub);
    track.addEventListener('pointercancel', endScrub);
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { video.currentTime = Math.min(video.duration || 0, video.currentTime + 5); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { video.currentTime = Math.max(0, video.currentTime - 5); e.preventDefault(); }
    });

    // Mute
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      frame.dataset.muted = String(video.muted);
      muteBtn.setAttribute('aria-label', video.muted ? 'Unmute' : 'Mute');
    });

    // Fullscreen (with iPhone fallback)
    const fsElement = () => document.fullscreenElement || document.webkitFullscreenElement;
    fsBtn.addEventListener('click', () => {
      if (fsElement() === frame) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
      if (frame.requestFullscreen) frame.requestFullscreen().catch(() => {});
      else if (frame.webkitRequestFullscreen) frame.webkitRequestFullscreen();
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
    });
    const fsChange = () => { frame.dataset.fs = String(fsElement() === frame); };
    document.addEventListener('fullscreenchange', fsChange);
    document.addEventListener('webkitfullscreenchange', fsChange);

    // Pause when scrolled away
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => {
        if (!e.isIntersecting && !video.paused && !fsElement()) video.pause();
      }, { threshold: 0.1 }).observe(frame);
    }
  }
  function renderReels() {
    buildReel(cfg.reel1, 'a', $('#reel1Mount'));
  }

  /* =========================================================
     PHOTO DIARY + LIGHTBOX
     ========================================================= */
  const goodImages = [];
  function placeholder(src) {
    const d = el('span', 'ph');
    d.innerHTML = '<span>Your photo goes here<b>' + esc(src.split('/').pop()) + '</b></span>';
    return d;
  }
  function renderGallery() {
    const diary = $('#diary');
    cfg.memories.forEach((m, i) => {
      const fig = el('figure', 'memory reveal');
      fig.style.setProperty('--d', (i % 3) * 0.12 + 's');
      const btn = el('button', 'memory__card');
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Open photo: ' + plain(m.caption));
      const holder = el('span', 'memory__img');
      const img = new Image();
      img.alt = plain(m.caption);
      img.loading = 'lazy'; img.decoding = 'async';
      img.dataset.parallax = '.035'; img.dataset.parallaxMax = '12';
      img.onerror = () => { holder.replaceChildren(placeholder(m.image)); };
      img.src = m.image;
      holder.appendChild(img);
      const cap = el('span', 'memory__cap', fmt(m.caption));
      btn.append(holder, cap);
      btn.addEventListener('click', () => openLightbox(i, btn));
      fig.appendChild(btn);
      diary.appendChild(fig);
    });
  }

  const lb = $('#lightbox'), lbMedia = $('#lbMedia'), lbCap = $('#lbCap');
  let lbIndex = 0, lbOpener = null;
  function showLb() {
    const m = cfg.memories[lbIndex];
    lbMedia.replaceChildren();
    const img = new Image();
    img.alt = plain(m.caption);
    img.onerror = () => lbMedia.replaceChildren(placeholder(m.image));
    img.src = m.image;
    lbMedia.appendChild(img);
    lbCap.innerHTML = fmt(m.caption);
    const multi = cfg.memories.length > 1;
    $('#lbPrev').hidden = $('#lbNext').hidden = !multi;
  }
  function openLightbox(i, opener) {
    lbIndex = i; lbOpener = opener;
    showLb();
    lb.hidden = false;
    document.body.classList.add('is-lb');
    $('#lbClose').focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    document.body.classList.remove('is-lb');
    if (lbOpener) lbOpener.focus({ preventScroll: true });
  }
  const stepLb = (d) => { lbIndex = (lbIndex + d + cfg.memories.length) % cfg.memories.length; showLb(); };
  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', () => stepLb(-1));
  $('#lbNext').addEventListener('click', () => stepLb(1));
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lb__fig')) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLb(-1);
    if (e.key === 'ArrowRight') stepLb(1);
  });
  let sx = null;
  lb.addEventListener('pointerdown', (e) => { sx = e.clientX; });
  lb.addEventListener('pointerup', (e) => {
    if (sx == null) return;
    const dx = e.clientX - sx; sx = null;
    if (Math.abs(dx) > 55) stepLb(dx < 0 ? 1 : -1);
  });

  /* =========================================================
     STORY TIMELINE
     ========================================================= */
  function renderStory() {
    const tl = $('#timelineList');
    cfg.story.forEach((s, i) => {
      const li = el('li', 'tl reveal');
      li.style.setProperty('--d', '.05s');
      li.innerHTML =
        '<span class="tl__dot" aria-hidden="true"></span>' +
        '<p class="tl__date">' + fmt(s.date || s.Year || s.year || '') + '</p>' +
        '<h3 class="tl__title">' + fmt(s.title) + '</h3>' +
        '<p class="tl__text">' + fmt(s.text) + '</p>';
      tl.appendChild(li);
    });
  }

  /* =========================================================
     QUIZ
     ========================================================= */
  function renderQuiz() {
    const Q = cfg.quiz, C = cfg.copy.quiz, mount = $('#quizMount');
    let i = 0, score = 0;
    const n = Q.questions.length;

    function dots() {
      return Array.from({ length: n }, (_, k) => '<i class="' + (k < i ? 'done' : k === i ? 'now' : '') + '"></i>').join('');
    }
    function showQuestion() {
      if (i >= n) return showResult();
      const q = Q.questions[i];
      mount.innerHTML =
        '<div class="quiz__card">' +
          '<div class="quiz__top"><span class="quiz__count">' + esc(C.qLabel) + ' ' + (i + 1) + ' of ' + n + '</span><span class="quiz__dots" aria-hidden="true">' + dots() + '</span></div>' +
          '<h3 class="quiz__q">' + fmt(q.q) + '</h3>' +
          '<div class="quiz__opts"></div>' +
          '<p class="quiz__react" aria-live="polite"></p>' +
          '<button class="btn quiz__next" type="button">' + esc(i === n - 1 ? C.finish : C.next) + '</button>' +
        '</div>';
      const card = $('.quiz__card', mount), opts = $('.quiz__opts', mount), react = $('.quiz__react', mount), next = $('.quiz__next', mount);
      q.options.forEach((o, k) => {
        const b = el('button', 'qopt', '<b>' + 'ABCDEF'[k] + '</b><span>' + fmt(o.t) + '</span>');
        b.type = 'button';
        b.addEventListener('click', () => {
          if (card.classList.contains('is-answered')) return;
          card.classList.add('is-answered');
          b.classList.add('is-picked');
          if (k === q.answer) score++;
          react.innerHTML = fmt(o.r || '');
          react.classList.add('show');
          next.classList.add('show');
          next.focus({ preventScroll: true });
        });
        opts.appendChild(b);
      });
      next.addEventListener('click', () => { i++; showQuestion(); });
    }
    function showResult() {
      const frac = score / n;
      const tier = Q.results.slice().sort((a, b) => b.min - a.min).find((t) => frac >= t.min) || Q.results[Q.results.length - 1];
      mount.innerHTML =
        '<div class="quiz__card quiz__result">' +
          '<h3>' + fmt(tier.title) + '</h3>' +
          '<p>' + fmt(tier.text) + '</p>' +
          '<p class="quiz__score">' + esc(C.scoreLabel.replace('{x}', score).replace('{n}', n)) + '</p>' +
          '<button class="btn" type="button">' + esc(C.retry) + '</button>' +
        '</div>';
      $('.btn', mount).addEventListener('click', () => { i = 0; score = 0; showQuestion(); });
    }
    showQuestion();
  }

  /* =========================================================
     THINGS I DON'T SAY ENOUGH
     ========================================================= */
  function renderUnsaid() {
    const list = $('#unsaidList');
    cfg.unsaid.forEach((t, i) => {
      const c = el('div', 'ucard reveal', '<p>' + fmt(t) + '</p>');
      c.style.setProperty('--d', '.05s');
      list.appendChild(c);
    });
  }

  /* =========================================================
     THE LETTER
     ========================================================= */
  function renderLetter() {
    const L = cfg.letter;
    $('#sealLetter').textContent = (plain(cfg.boyfriendName).trim()[0] || '♡').toUpperCase();
    $('#paperGreet').innerHTML = fmt(L.greeting);
    $('#paperClose').innerHTML = fmt(L.closing);
    $('#paperSig').innerHTML = fmt(L.signature);
    const body = $('#paperBody');
    L.body.forEach((p, i) => {
      const n = el('p', 'paper__p reveal', fmt(p));
      n.style.setProperty('--d', Math.min(0.5 + i * 0.45, 3) + 's');
      body.appendChild(n);
    });
    $('#paperGreet').style.setProperty('--d', '.2s');

    const btn = $('#letterBtn'), env = $('#env'), wrap = $('#envWrap'), paper = $('#paper');
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      env.classList.add('open');
      await sleep(1900);
      wrap.classList.add('is-gone');
      await sleep(500);
      paper.hidden = false;
      $$('.reveal', paper).forEach((n) => { if (io) { io.unobserve(n); io.observe(n); } else n.classList.add('in'); });
      await sleep(900);
      paper.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
    });
  }

  /* =========================================================
     BUILD-UP
     ========================================================= */
  function renderBuildup() {
    const box = $('#buLines');
    cfg.buildup.lines.forEach((l) => box.appendChild(el('p', 'bu__line', fmt(l.text))));
    const lines = $$('.bu__line', box);
    let started = false;
    async function run() {
      if (started) return; started = true;
      await sleep(600);
      for (let i = 0; i < lines.length; i++) {
        lines[i].classList.add('show');
        await sleep(cfg.buildup.lines[i].pause || 2400);
      }
      $('#forYou').classList.add('show');
    }
    $('#forYou').addEventListener('click', startFinale);
    if (!('IntersectionObserver' in window)) { run(); return; }
    new IntersectionObserver((entries, ob) => {
      if (entries[0].isIntersecting) { ob.disconnect(); run(); }
    }, { threshold: 0.6 }).observe($('#buildup'));
  }

  /* =========================================================
     CELEBRATION (canvas: lights, confetti, fireworks)
     ========================================================= */
  const PALETTE = ['#caa468', '#e6cfa0', '#f4eadd', '#c58f98', '#a8566a'];

  class Celebration {
    constructor(canvas) {
      this.c = canvas; this.ctx = canvas.getContext('2d');
      this.run = false; this.last = 0;
      this.lights = []; this.confetti = []; this.rockets = []; this.sparks = [];
      this.sprites = ['255,236,200', '230,170,180', '202,164,104'].map((rgb) => {
        const s = document.createElement('canvas'); s.width = s.height = 64;
        const g = s.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
        gr.addColorStop(0, 'rgba(' + rgb + ',1)'); gr.addColorStop(.25, 'rgba(' + rgb + ',.45)'); gr.addColorStop(1, 'rgba(' + rgb + ',0)');
        g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return s;
      });
      this.resize = this.resize.bind(this);
      window.addEventListener('resize', this.resize);
      this.resize();
    }
    resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.w = this.c.clientWidth; this.h = this.c.clientHeight;
      if (!this.w || !this.h) return;
      this.c.width = Math.round(this.w * dpr); this.c.height = Math.round(this.h * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!this.lights.length) {
        const n = this.w < 640 ? 20 : 36;
        for (let i = 0; i < n; i++) this.lights.push({
          x: rand(0, this.w), y: rand(0, this.h), s: rand(10, 34), vy: -rand(.12, .45),
          ph: rand(0, 6.28), sp: rand(.5, 1.4), a: rand(.25, .7), k: Math.floor(rand(0, 3))
        });
      }
    }
    start() { if (this.run) return; this.run = true; this.last = performance.now(); requestAnimationFrame((t) => this.tick(t)); }
    stop() { this.run = false; }

    rain(n) {
      for (let i = 0; i < n; i++) this.confetti.push(this.piece(rand(0, this.w), rand(-this.h * .5, -10), rand(-.6, .6), rand(.5, 1.8)));
    }
    cannon(side) {
      const n = isSmall() ? 34 : 56, left = side === 'l';
      const power = clamp(this.h / 800, .75, 1.25);
      for (let i = 0; i < n; i++) {
        const ang = left ? rand(-1.4, -.95) : rand(-2.2, -1.75), sp = rand(9, 17) * power;
        this.confetti.push(this.piece(left ? this.w * .03 : this.w * .97, this.h * 1.02, Math.cos(ang) * sp, Math.sin(ang) * sp));
      }
    }
    piece(x, y, vx, vy) {
      return { x, y, vx, vy, s: rand(6, 11), rot: rand(0, 6.28), vr: rand(-.12, .12), ph: rand(0, 6.28), tilt: rand(0, 6.28), col: pick(PALETTE), shape: Math.random() < .75 ? 0 : 1 };
    }
    firework() {
      const tx = rand(this.w * .15, this.w * .85), ty = rand(this.h * .15, this.h * .42);
      this.rockets.push({ x: tx + rand(-30, 30), y: this.h + 10, ty, vy: -Math.sqrt(2 * .06 * (this.h - ty)) });
    }
    explode(x, y) {
      const n = isSmall() ? 30 : 46, base = pick(PALETTE), alt = pick(PALETTE), power = rand(2.6, 4);
      for (let i = 0; i < n; i++) {
        const a = rand(0, 6.283), s = rand(.5, 1) * power;
        this.sparks.push({ x, y, px: x, py: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: rand(55, 90), max: 90, col: Math.random() < .7 ? base : alt });
      }
    }
    tick(t) {
      if (!this.run) return;
      const dt = Math.min(2.2, (t - this.last) / 16.667); this.last = t;
      const { ctx, w, h } = this;
      ctx.clearRect(0, 0, w, h);

      // floating lights
      ctx.globalCompositeOperation = 'lighter';
      for (const L of this.lights) {
        L.y += L.vy * dt; L.ph += .02 * dt * L.sp; L.x += Math.sin(L.ph) * .18 * dt;
        if (L.y < -40) { L.y = h + 40; L.x = rand(0, w); }
        ctx.globalAlpha = L.a * (.55 + .45 * Math.sin(L.ph * 2.3));
        ctx.drawImage(this.sprites[L.k], L.x - L.s / 2, L.y - L.s / 2, L.s, L.s);
      }
      // rockets
      for (let i = this.rockets.length - 1; i >= 0; i--) {
        const r = this.rockets[i];
        r.y += r.vy * dt; r.vy += .06 * dt;
        ctx.globalAlpha = .9; ctx.drawImage(this.sprites[0], r.x - 6, r.y - 6, 12, 12);
        if (r.y <= r.ty || r.vy > -.6) { this.explode(r.x, r.y); this.rockets.splice(i, 1); }
      }
      // sparks
      ctx.lineCap = 'round';
      for (let i = this.sparks.length - 1; i >= 0; i--) {
        const p = this.sparks[i];
        p.px = p.x; p.py = p.y;
        p.vx *= Math.pow(.985, dt); p.vy = p.vy * Math.pow(.985, dt) + .035 * dt;
        p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt;
        if (p.life <= 0) { this.sparks.splice(i, 1); continue; }
        ctx.globalAlpha = clamp(p.life / p.max, 0, 1);
        ctx.strokeStyle = p.col; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(p.x, p.y); ctx.stroke();
      }
      // confetti
      ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = .95;
      for (let i = this.confetti.length - 1; i >= 0; i--) {
        const c = this.confetti[i];
        c.vx *= Math.pow(.985, dt); c.vy = c.vy * Math.pow(.985, dt) + .16 * dt; if (c.vy > 3) c.vy = 3;
        c.x += c.vx * dt + Math.sin(c.ph) * .5; c.y += c.vy * dt;
        c.rot += c.vr * dt; c.ph += .06 * dt; c.tilt += .12 * dt;
        if (c.y > h + 30) { this.confetti.splice(i, 1); continue; }
        ctx.save(); ctx.translate(c.x, c.y); ctx.rotate(c.rot); ctx.scale(1, Math.cos(c.tilt));
        ctx.fillStyle = c.col;
        if (c.shape === 0) ctx.fillRect(-c.s / 2, -c.s / 3, c.s, c.s * .62);
        else { ctx.beginPath(); ctx.arc(0, 0, c.s / 3, 0, 6.283); ctx.fill(); }
        ctx.restore();
      }
      requestAnimationFrame((tt) => this.tick(tt));
    }
  }

  /* =========================================================
     THE FINALE
     ========================================================= */
  let stage = null, revealRun = 0;

  function preloadImages() {
    cfg.memories.forEach((m) => {
      const im = new Image();
      im.onload = () => { if (!goodImages.includes(m.image)) goodImages.push(m.image); };
      im.src = m.image;
    });
  }
  function spawnFragments(token) {
    if (reduced() || !goodImages.length) return;
    const box = $('#frags'), count = isSmall() ? 7 : 12;
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        if (token !== revealRun) return;
        const d = el('div', 'frag');
        d.style.cssText =
          'background-image:url("' + pick(goodImages) + '");' +
          '--x:' + rand(3, 86).toFixed(1) + '%;--s:' + Math.round(rand(64, 112)) + 'px;--t:' + rand(11, 17).toFixed(1) + 's;' +
          '--r0:' + rand(-18, 18).toFixed(1) + 'deg;--r1:' + rand(-40, 40).toFixed(1) + 'deg;' +
          '--bs:' + Math.round(rand(240, 340)) + '%;--bp:' + Math.round(rand(10, 90)) + '% ' + Math.round(rand(10, 90)) + '%;';
        d.addEventListener('animationend', () => d.remove());
        box.appendChild(d);
      }, i * 950 + rand(0, 400));
    }
  }

  async function runReveal() {
    const my = ++revealRun, ok = () => my === revealRun;
    const rv = $('#reveal'), A = $('#rvA'), N = $('#rvName'), B = $('#rvB'), cue = $('#rvCue'), rep = $('#replay');
    [A, N, B, cue, rep].forEach((n) => n.classList.remove('show'));
    $('#frags').replaceChildren();
    rv.classList.add('is-lit');
    if (stage) stage.start();

    await sleep(1000); if (!ok()) return;
    A.classList.add('show');
    await sleep(2100); if (!ok()) return;
    N.classList.add('show');
    if (stage && !reduced()) {
      stage.cannon('l'); stage.cannon('r'); stage.rain(isSmall() ? 30 : 55);
      setTimeout(() => ok() && stage.firework(), 500);
      [1800, 3400, 5200, 7600, 10500].forEach((d) => setTimeout(() => { if (ok()) stage.firework(); }, d));
    }
    // floating photo fragments removed
    await sleep(2800); if (!ok()) return;
    B.classList.add('show');
    await sleep(4200); if (!ok()) return;
    cue.classList.add('show');
    if (stage) rep.classList.add('show');
  }

  async function startFinale() {
    const f = $('#finale');
    if (f.hidden) {
      f.hidden = false;
      $('#rvA').innerHTML = fmt(cfg.reveal.top);
      $('#rvName').innerHTML = fmt('{name}');
      $('#rvB').innerHTML = fmt(cfg.reveal.bottom);
      if (!reduced()) {
        stage = new Celebration($('#celebrate'));
        new IntersectionObserver(([e]) => { if (!stage) return; if (e.isIntersecting) stage.start(); else stage.stop(); }).observe($('#reveal'));
      }
      preloadImages();
      if (io) $$('.reveal', f).forEach((n) => io.observe(n));
    }
    await nextFrame();
    $('#reveal').scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
    await sleep(1100);
    runReveal();
  }
  $('#replay').addEventListener('click', runReveal);

  /* =========================================================
     CLOSING + SECRET
     ========================================================= */
  function renderClosing() {
    const box = $('#closingInner');
    cfg.closing.lines.forEach((l) => {
      const p = el('p', 'cl cl--' + (l.c || 'soft') + ' reveal slow', fmt(l.t));
      box.appendChild(p);
    });
  }
  function renderSecret() {
    const S = cfg.secret, btn = $('#secretBtn'), sec = $('#secret');
    if (!S || !Array.isArray(S.paragraphs)) { sec.hidden = true; return; }
    btn.innerHTML = fmt(S.teaser);
    let html = '<div class="secret__card"><h3>' + fmt(S.title) + '</h3>' + S.paragraphs.map((p) => '<p>' + fmt(p) + '</p>').join('');
    if (S.link && S.link.href) html += '<a class="btn" href="' + esc(S.link.href) + '" target="_blank" rel="noopener">' + fmt(S.link.label || 'Open') + '</a>';
    html += '</div>';
    $('#secretInner').innerHTML = html;
    btn.addEventListener('click', () => {
      const open = sec.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      if (open) setTimeout(() => $('#secretBody').scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'center' }), 500);
    });
  }

  /* =========================================================
     BOOT
     ========================================================= */
  [bindText, renderMessage, renderPersonality, renderReels, renderGallery, renderStory,
   renderQuiz, renderUnsaid, renderLetter, renderBuildup, renderClosing, renderSecret
  ].forEach((step) => {
    try { step(); } catch (err) { console.error('[birthday site] "' + step.name + '" failed. Check that section of birthdayConfig:', err); }
  });
  runIntro();
  update();
})();


/* ---------- Music dock extras: mute button ---------- */
(function () {
  var audio = document.getElementById('song'), mute = document.getElementById('musicMute'), main = document.getElementById('musicBtn');
  if (!audio || !mute || !main) return;
  mute.addEventListener('click', function () {
    audio.muted = !audio.muted;
    mute.setAttribute('aria-pressed', String(audio.muted));
    mute.setAttribute('aria-label', audio.muted ? 'Unmute music' : 'Mute music');
    mute.classList.toggle('is-off', audio.muted);
  });
})();
