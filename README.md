# Amir Skoric – portfolio

My portfolio as a web developer: **https://amir-skoric.github.io/portfolio/**

A one-page site built with **React + Vite**, in Danish and English, with an 8-bit look and a chiptune player that plays music I made myself.

## What's on the site

- **Sidebar** – photo, name, "About me" (opens with *Read more*), menu, CV download (DA/EN) and the chiptune player
- **Projects** – the featured case (Kold Festival) and my other projects, each with a short text, *Read more*, screenshots you can zoom in on, and a live demo
- **Skills & experience**, **Education** and **Contact**

### The live demos

Three of my school projects can be tried right on the site: **Webshop Builder** (bachelor project), a **Twitter clone** and a **Quiz app**.
The real apps need a backend (Express + MongoDB + Cloudinary, or Firebase), so the demos use a *mock backend* that runs in the browser instead – same routes, messages and behaviour, but the data is only saved on the visitor's own device.
Each demo is one HTML file in `src/demos/` and is only downloaded when someone presses *Open the app*.
The original code is in the projects' own repos: [webshop-bachelor](https://github.com/amir-skoric/webshop-bachelor), [twitter-clone](https://github.com/amir-skoric/twitter-clone), [quiz-app](https://github.com/amir-skoric/quiz-app).

## Run it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Where to change things

| What | File |
| --- | --- |
| All text (Danish + English) | `src/data/content.js` |
| The chiptune songs | `src/data/music.js` (mp3 files in `src/assets/music/`) |
| The CVs | `src/assets/cv/` |
| Skill logos | `src/data/logos.js` |
| Colors and fonts | `src/styles/theme.css` |
| Layout and look | `src/styles/layout.css` |
| Each part of the page | `src/components/` |

## Publish to GitHub Pages

The site uses relative paths (`base: './'` in `vite.config.js`), so the built files work in the `/portfolio/` folder.

```bash
npm run build
```

Then put the contents of `dist/` on the `gh-pages` branch (that branch is what GitHub Pages shows).

The old Vue version of this portfolio (2023) is kept on the `old-vue-portfolio` branch.
