# zhongshsh.github.io

Shanshan Zhong's academic homepage. Pure static HTML — no build tools, no Jekyll.

## Site Structure

```
index.html        → Home (bio, research interests, news, awards, upcoming events, get connected, academic service)
projects.html     → Publications list with thumbnails, PDF/code links
news.html         → Full news archive (table format)
data/news.js      → Shared news data (used by index.html and news.html)
data/awards.js    → Shared awards data (used by index.html)
data/events.js    → Shared events data (used by index.html)
assets/css/style.css → All styling
assets/img/avatar.jpg → Profile photo
assets/img/publication_preview/ → Paper thumbnail images
```

## How to Update

### Add a New Publication (projects.html)

Open `projects.html` and add a new `<div class="pub-item">` block inside `<div class="pub-container">`. Copy an existing entry and modify:

```html
<div class="pub-item">
    <img src="assets/img/publication_preview/YOUR_IMAGE.png" alt="Short Name" width="80px">
    <div class="pub-info">
        <p class="pub-title">Paper Title <a href="PAPER_URL" aria-label="Link to publication"><i class="fa-solid fa-paperclip"></i></a></p>
        <p class="pub-authors">Author1, <em>Shanshan Zhong</em>, Author2</p>
        <p class="pub-venue">Venue Year <span class="award">Award Name</span></p>
        <p class="pub-links"><a href="PDF_URL"><i class="fa-solid fa-file-pdf"></i> pdf</a> <a href="CODE_URL"><i class="fa-brands fa-github"></i> code</a></p>
    </div>
</div>
```

- Place the thumbnail image in `assets/img/publication_preview/`
- Use `<em>Shanshan Zhong</em>` to highlight your name (renders with underline)
- Add `<span class="award">Award Name</span>` after the venue if applicable
- The `pub-links` line is optional — include whichever links are available (pdf, code, project, etc.)

### Add a News Item

Edit `data/news.js` and add a new object at the **top** of the `NEWS_DATA` array:

```js
{ date: "Mon YYYY", text: 'Your news with <a href="URL">links</a>.' },
```

Both the home page (recent 5) and full news page are rendered automatically from this single file.

### Add an Award

Edit `data/awards.js` and add a new object to the `AWARDS_DATA` array:

```js
{ year: "YYYY", text: 'Award Name, Venue (<a href="PAPER_URL">Paper Name</a>)' },
```

The awards section on the home page is rendered automatically from this file.

### Add an Upcoming Event

Edit `data/events.js` and add a new object to the `EVENTS_DATA` array:

```js
{ date: "Mon YYYY", text: "Event description." },
```

The home page renders events automatically from this file. Remove past events periodically.

### Update Navigation

If you add a new page, update the `<nav class="navbar">` in **all** HTML files:

```html
<nav class="navbar">
    <a href="index.html" class="nav-link">Home</a>
    <a href="projects.html" class="nav-link">Projects</a>
    <a href="news.html" class="nav-link">News</a>
</nav>
```

### Style Notes

- Accent color: `#C44E52` (used for hover, venue text, time column, awards badge)
- Font: Poppins (Google Fonts)
- Base font size: 15.5px
- Max width: 900px centered

## Deployment

Push to the `main` branch on GitHub. The `.nojekyll` file tells GitHub Pages to serve static files directly without Jekyll processing.
