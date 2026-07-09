# zhongshsh.github.io

Shanshan Zhong's academic homepage. Pure static HTML — no build tools, no Jekyll.

## Site Structure

```
index.html          → Home (bio, research interests, news, upcoming events, experience, awards, get connected, service)
publications.html   → Publications list (rendered from data/publications.js)
news.html           → Full news archive (rendered from data/news.js)
events.html         → Upcoming + past events / talks (rendered from data/events.js)
data/news.js        → News data (used by index.html and news.html)
data/awards.js      → Awards data (used by index.html)
data/events.js      → Upcoming (EVENTS_DATA) + past (PAST_EVENTS_DATA) events
data/publications.js → Publications data (used by publications.html)
data/experience.js  → Experience / affiliations (used by index.html)
data/theme.js       → Dark-mode toggle + footer "Last updated" stamp (all pages)
assets/css/style.css → All styling (themed via CSS variables, light + dark)
assets/img/avatar.jpg → Profile photo
assets/img/publication_preview/ → Paper thumbnail images
.nojekyll           → Disable Jekyll on GitHub Pages
```

## How to Update

### Add a New Publication

Edit `data/publications.js` and add a new object to the `PUBLICATIONS_DATA` array:

```js
{
    img: "assets/img/publication_preview/YOUR_IMAGE.png",
    title: "Paper Title",
    authors: "Author1, <em>Shanshan Zhong</em>, Author2",
    venue: "Venue Year",
    award: "Award Name",  // optional, omit if none
    links: [
        { label: "arXiv",   url: "https://arxiv.org/abs/XXXX.XXXXX" },
        { label: "Project", url: "https://..." },  // optional
        { label: "Code",    url: "https://github.com/..." },  // optional
        { label: "BibTeX",  url: "https://..." },  // optional
    ],
},
```

- Place the thumbnail image in `assets/img/publication_preview/`
- Use `<em>Shanshan Zhong</em>` to highlight your name
- Each entry in `links` renders as a small badge under the paper — add as many as you have
- `publications.html` also links to the full Google Scholar list at the bottom

### Add a News Item

Edit `data/news.js` and add a new object at the **top** of the `NEWS_DATA` array:

```js
{ date: "Mon YYYY", text: 'Your news with <a href="URL">links</a>.' },
```

Both the home page (recent 3) and full news page render automatically from this file.

### Add an Award

Edit `data/awards.js` and add a new object to the `AWARDS_DATA` array:

```js
{ year: "YYYY", text: 'Award Name, Venue (<a href="PAPER_URL">Paper Name</a>)' },
```

### Add an Event (upcoming or past)

Edit `data/events.js`:

```js
// Upcoming — free-text (supports inline <a> links)
EVENTS_DATA: { date: "Mon YYYY", text: "Event description with optional <a href=...>link</a>." }

// Past — structured; renders a type tag + optional paper/link badges
PAST_EVENTS_DATA: {
    date: "Mon YYYY",
    type: "attended",           // "talk" | "poster" | "attended"
    title: "Talk Title",        // optional (for talks/posters)
    venue: "ACL 2026",
    location: "San Diego, USA", // optional
    links: [{ label: "Slides", url: "..." }, { label: "PaperName", url: "..." }],  // optional
}
```

Past events list newest-first; the most recent 5 show, older ones fold into "Older".

### Add an Experience Entry

Edit `data/experience.js` and add to `EXPERIENCE_DATA`:

```js
{ org: '<a href="URL">Org Name</a>', role: "Role", detail: "with ...", date: "2023 – 2024" },
```

`date` is optional — with it, the left column shows the dates; without it, the org name.

### Google Scholar Citation Badge

The badge under the name on the home page is **manual** (Google Scholar has no public API / CORS blocks live fetch). In `index.html`, set:

```js
const SCHOLAR_CITATIONS = "120";  // your current count; leave "" to hide
```

### Update Navigation

If you add a new page, update `<nav class="navbar">` in **all** HTML files:

```html
<nav class="navbar">
    <a href="index.html" class="nav-link">Home</a>
    <a href="publications.html" class="nav-link">Publications</a>
    <a href="news.html" class="nav-link">News</a>
    <a href="events.html" class="nav-link">Events</a>
</nav>
```

## Style Notes

- Colors are defined as CSS variables in `:root` (light) and `:root[data-theme="dark"]` (dark) at the top of `style.css` — change them in one place.
- Accent color: `#8b0000` light / `#f28b82` dark
- Dark mode: toggled by the floating 🌙/☀️ button (injected by `data/theme.js`), remembered in `localStorage`, and defaults to the OS preference. A tiny inline script in each page's `<head>` applies the saved theme before paint to avoid a flash.
- Font: Poppins (Google Fonts); base size 15.5px; max width 900px centered
- Each page has `<meta name="description">` + Open Graph / Twitter card tags for rich link previews.

## Deployment

Push to the `main` branch on GitHub. The `.nojekyll` file tells GitHub Pages to serve static files directly without Jekyll processing.
