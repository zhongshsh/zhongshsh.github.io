// Dark-mode toggle + footer "Last updated" stamp.
// The initial theme is applied by a tiny inline script in each page's <head>
// (prevents a flash of the wrong theme); this file wires the toggle button.
(function () {
    var root = document.documentElement;

    // ---- Theme toggle button (injected, so pages stay clean) ----
    var btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle dark mode');

    function syncIcon() {
        var dark = root.getAttribute('data-theme') === 'dark';
        btn.textContent = dark ? '☀️' : '🌙';
    }
    syncIcon();

    btn.addEventListener('click', function () {
        var dark = root.getAttribute('data-theme') === 'dark';
        if (dark) {
            root.removeAttribute('data-theme');
            try { localStorage.setItem('theme', 'light'); } catch (e) {}
        } else {
            root.setAttribute('data-theme', 'dark');
            try { localStorage.setItem('theme', 'dark'); } catch (e) {}
        }
        syncIcon();
    });

    document.body.appendChild(btn);

    // ---- Footer "Last updated" (auto — reflects the HTML file's mtime) ----
    var slot = document.querySelector('.last-updated');
    if (slot && document.lastModified) {
        var d = new Date(document.lastModified);
        if (!isNaN(d)) {
            slot.textContent = ' · Last updated ' +
                d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
        }
    }
})();
