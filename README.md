# Birthday website: how to make it yours

## Folder structure

```text
birthday-website/
├── index.html
├── style.css
├── script.js          ← ALL your words live at the top of this file
└── assets/
    ├── images/        photo1.jpg, photo2.jpg, ...
    ├── videos/        reel1.mp4, reel2.mp4
    └── music/         song.mp3
```

## Run it locally

Double-click `index.html`. That's it. No install, no server.

(If a video won't seek properly when opened as a file, run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`. Everything else works either way.)

## Change his name and your name

At the top of `script.js`:

```js
boyfriendName: "HIS NAME",
yourName: "YOUR NAME",
```

Anywhere in the copy, `{name}` becomes his name and `{me}` becomes yours.

## Change every personal message

Everything is in `birthdayConfig` at the top of `script.js`:

| What | Where |
|---|---|
| Opening lines + button | `intro` |
| Hero lines, "where do I start" paragraph, section headings | `copy` |
| "You, in my words" cards | `personality` |
| Video title + caption | `reel1` |
| Photo captions | `memories` |
| Timeline | `story` |
| "Do you know us" game (questions, answers, reactions, results) | `quiz` |
| "Things I don't say enough" | `unsaid` |
| The letter | `letter` |
| The "But... one last thing" build-up | `buildup` |
| Reveal + final message | `reveal`, `closing` |
| Secret P.S. | `secret` |

- Anything in `[square brackets]` is a placeholder. While `highlightPlaceholders: true`, they glow gold with a dotted underline so you can see what's left to write.
- When you're done, set `highlightPlaceholders: false` and make sure no `[brackets]` remain.
- Use `\n` for a line break inside a message.
- Add or delete items in any list (cards, story steps, photos, quiz questions, letter paragraphs) and the page adapts.
- Quiz: `answer` is the option YOU consider right (0 = first, 1 = second, 2 = third). Each option has its own reaction.

## Add your photos

1. Put them in `assets/images/` named `photo1.jpg`, `photo2.jpg`, and so on.
2. In `memories`, one row per photo: `{ image: "assets/images/photo9.jpg", caption: "..." }`.
3. Missing photos show a dotted "Your photo goes here" placeholder, so you can see the layout before you add them.
4. Keep each photo under about 400 KB (resize to ~1400px wide) so it loads fast on a phone.

## Add the two reels

1. Save them as `assets/videos/reel1.mp4` and `assets/videos/reel2.mp4`.
2. Vertical, square or landscape all work. The frame adapts to the video's real shape, and nothing gets cropped.
3. Browsers only reliably play H.264 + AAC .mp4 files. iPhone `.mov` files should be converted. With [ffmpeg](https://ffmpeg.org):

```bash
ffmpeg -i input.mov -vf "scale=-2:1280" -c:v libx264 -crf 26 -preset slow \
       -c:a aac -b:a 128k -movflags +faststart reel1.mp4
```

   (`+faststart` lets it start playing before it finishes downloading. Aim for under ~15 MB each.)
4. Optional cover image: set `poster: "assets/images/reel1-cover.jpg"` in `reel1` / `reel2`.
5. Reel captions: edit `title` and `caption` in `reel1` / `reel2`. The "700 times" line is in `copy.evidence.ps`.
6. Only one reel plays at a time. Playing a reel gently pauses the background song and resumes it after.

## Add the music

1. Save your song as `assets/music/song.mp3`.
2. Music never autoplays. He taps the little speaker button (bottom-right).
3. Want it to start when he taps "Fine, I'll open it"? Set `startMusicOnOpen: true`.
4. A different filename? Change `music: "assets/music/song.mp3"`.

## Secret surprise

Edit `secret` in `script.js`. To add a button to it (a gift link, a video, a booking), fill in `link: { label: "Open your gift", href: "https://..." }`.

## Before you send it: checklist

- [ ] Both names set
- [ ] `highlightPlaceholders: false` and no `[brackets]` left anywhere
- [ ] Open it on your own phone and tap through everything (reels, letter, "For you →")
- [ ] Videos play with sound on iPhone and Android
- [ ] The page title and tab show his name after opening

## Deploy

The link is unlisted (the page tells search engines not to index it), but anyone with the link can open it, so only send it to him.

### Netlify (easiest, about 1 minute)

1. Go to <https://app.netlify.com/drop>.
2. Drag the whole `birthday-website` folder onto the page.
3. You get a link like `random-name.netlify.app`. In **Site settings → Change site name**, make it something personal.

### GitHub Pages

1. Create a new repository. If the repo is private, Pages needs a paid plan, so a public repo with a hard-to-guess name is the usual route.
2. Upload the contents of `birthday-website` (so `index.html` is at the top level). Put the **videos** in too. Files must be under 100 MB each.
3. **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save.**
4. After a minute your site is live at `https://YOURUSERNAME.github.io/REPO-NAME/`.

## Troubleshooting

- **No sound?** The song file is missing or isn't a real mp3. A toast tells you if it can't be found.
- **Reel shows "Your video goes here"?** The path or filename doesn't match, or the format isn't H.264 mp4.
- **Fonts look different offline?** The page uses Google Fonts when online and falls back to elegant system fonts offline. Both look good.
- **Reduced motion:** if his device asks for less motion, the site automatically tones down animations and skips the fireworks.
