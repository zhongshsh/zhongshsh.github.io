// ---- Upcoming events (chronological, soonest first) ----
const EVENTS_DATA = [
    { date: "Oct 2026", text: "I will be at COLM 2026 in San Francisco. Feel free to say hi!" },
];

// ---- Past events (reverse-chronological, most recent first) ----
// type:     "talk" | "poster" | "attended"
// title:    (optional) talk / poster title
// venue:    event name, e.g. "ACL 2025"
// location: (optional) city / country
// links:    (optional) [{ label: "Slides", url: "..." }, { label: "Video", url: "..." }]
//
// NOTE: the entries below are EXAMPLES — please verify and edit with your real events.
const PAST_EVENTS_DATA = [
    {
        date: "Nov 2025",
        type: "attended",
        venue: "EMNLP 2025",
        location: "Suzhou, China",
    },
    {
        date: "Jul 2025",
        type: "talk",
        title: "MiniLongBench",
        venue: "ACL 2025",
        location: "Vienna, Austria",
        links: [
            // { label: "Slides", url: "" },
            // { label: "Video",  url: "" },
        ],
    },
];
