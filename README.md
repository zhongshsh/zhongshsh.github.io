# zhongshsh.github.io

Shanshan Zhong's academic homepage. Pure static HTML — no build tools, no Jekyll.
Content lives in `data/*.js` arrays and is rendered by small inline scripts, so most
updates are just editing a data file.

## Site Structure

```
index.html          → Home: bio + research interests, event banner, News,
                       Selected Publications, Experience, Awards, Academic Service,
                       Get Connected, Community
news.html           → Full news archive
events.html         → Upcoming + Past events
data/news.js        → NEWS_DATA        (Home shows the latest 3; news.html shows all)
data/publications.js→ PUBLICATIONS_DATA (Selected Publications on Home)
data/events.js      → EVENTS_DATA (upcoming) + PAST_EVENTS_DATA (past)
data/awards.js      → AWARDS_DATA
data/experience.js  → EXPERIENCE_DATA
data/theme.js       → dark-mode toggle + footer "Last updated" (loaded on every page)
assets/css/style.css→ all styling (CSS variables → light + dark theme)
assets/img/         → avatar + publication_preview/ thumbnails
.nojekyll           → serve files as-is on GitHub Pages
```

## How to Update

### Add / edit a publication
Edit `data/publications.js`, add an object to `PUBLICATIONS_DATA` (top = shown first):

```js
{
    img: "assets/img/publication_preview/YOUR_IMAGE.png",
    title: "Paper Title",
    authors: "Author One, <em>Shanshan Zhong</em>, Author Two",  // <em> = your name (underlined)
    venue: "Venue Year",
    award: "Outstanding Paper",   // optional — omit if none
    links: [                      // each renders as a badge; add what you have
        { label: "Homepage", url: "https://..." },
        { label: "arXiv",    url: "https://arxiv.org/abs/XXXX.XXXXX" },
        { label: "Code",     url: "https://github.com/..." },
    ],
}
```
- Put the thumbnail in `assets/img/publication_preview/`.
- The full list link (Google Scholar) sits at the bottom of the section in `index.html`.

### Add a news item
Edit `data/news.js`, add to the **top** of `NEWS_DATA`:

```js
{ date: "Mon YYYY", text: 'Your update with an <a href="URL">optional link</a>.' },
```
Home shows the newest 3; the rest fold into "Older News" and `news.html` shows all.

### Add / edit events
Edit `data/events.js`.

Upcoming (`EVENTS_DATA`) — the **first entry also drives the 📍 banner** under the bio on Home:
```js
{ date: "Mon YYYY", text: 'I will be at <b>Venue</b> in City. Feel free to say hi!' }
```
Past (`PAST_EVENTS_DATA`, newest first — Home is unaffected, shows on `events.html`):
```js
{
    date: "Mon YYYY",
    type: "attended",            // "talk" | "poster" | "attended"
    title: "Talk Title",         // optional (for talks/posters)
    venue: "ACL 2026",
    location: "San Diego, USA",  // optional
    links: [{ label: "Slides", url: "..." }],  // optional
}
```
The 5 most recent past events show; older ones fold into "Older".

### Add an award
Edit `data/awards.js`, add to `AWARDS_DATA`:
```js
{ year: "YYYY", text: 'Award Name, Venue (<a href="URL">Paper</a>)' },
```

### Add an experience entry
Edit `data/experience.js`, add to `EXPERIENCE_DATA` (newest first):
```js
{
    date: "Mon YYYY – Mon YYYY",
    org: '<a href="URL">Org Name</a>',
    role: "Research Intern",
    detail: 'Advisors: Prof. <a href="URL">Name</a>',   // optional
    summary: "One line on what you worked on.",         // optional
    outputs: [{ label: "Paper (Venue)", url: "..." }],  // optional badges
}
```

### Edit prose (bio, research interests, Get Connected, Community)
These are written directly in `index.html`, not in a data file:
- **Bio + research interests**: the first `<section>` (research interests are `<details open>` blocks — keep `open` so they show expanded).
- **Get Connected / Community**: the last two `<section>`s.

### Reorder Home sections
Move the whole `<section>…</section>` block to a new position in `index.html`.

### Update navigation
Nav is copied in `index.html`, `news.html`, `events.html`. To change it, edit all three:
```html
<nav class="navbar">
    <a href="index.html" class="nav-link">Home</a>
    <a href="news.html" class="nav-link">News</a>
    <a href="events.html" class="nav-link">Events</a>
</nav>
```

## Styling

- Colors are CSS variables at the top of `style.css`: `:root` (light) and
  `:root[data-theme="dark"]` (dark). Change a color once, both themes follow.
- Dark mode: floating 🌙/☀️ button (injected by `data/theme.js`), remembered in
  `localStorage`, defaults to the OS preference.
- Each page's `<head>` has `<meta name="description">` + Open Graph / Twitter tags
  for link previews — update these if the summary changes.
- Font: Poppins; base size 15.5px; content max-width 900px.

## Local Preview

From the repo root:
```
python -m http.server 8000
```
Then open `http://127.0.0.1:8000/`. Refresh to see edits (hard-refresh, Ctrl+F5,
if CSS looks stale).

## Deployment

Push to `main` on GitHub. `.nojekyll` tells GitHub Pages to serve the files directly.
