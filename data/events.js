// ---- Upcoming events (chronological, soonest first) ----
const EVENTS_DATA = [
    { date: "Oct 2026", text: 'I will be at COLM 2026 in San Francisco presenting <a href="https://cxcscmu.github.io/SkillLearnBench/">SkillLearnBench</a>. Feel free to say hi!' },
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
        date: "Jul 2026",
        type: "attended",
        venue: "ACL 2026",
        location: "San Diego, USA",
        note: "Sea breeze, blue skies, and tacos worth coming back for.",
        links: [
            { label: "NCoTS", url: "https://arxiv.org/abs/2601.11340" },
        ],
    },
    {
        date: "Aug 2024",
        type: "attended",
        venue: "ACL 2024",
        location: "Bangkok, Thailand",
        note: "My lucky city, with warm nights, bright streets, and good things always happening here.",
        links: [
            { label: "MoExtend", url: "https://arxiv.org/abs/2408.03511" },
        ],
    },
    {
        date: "Jul 2024",
        type: "attended",
        venue: "ICML 2024",
        location: "Vienna, Austria",
        note: "Grand old streets, great beer, and a train ticket to Budapest and beyond.",
        links: [
            { label: "AttNS", url: "https://openreview.net/forum?id=7RHFdkAkVY" },
        ],
    },
    {
        date: "Jun 2024",
        type: "attended",
        venue: "CVPR 2024",
        location: "Seattle, USA",
        note: "Deep-green parks, the original Starbucks, and the delightfully weird Gum Wall.",
        links: [
            { label: "CLoT", url: "https://arxiv.org/abs/2312.02439" },
        ],
    },
    {
        date: "May 2024",
        type: "attended",
        venue: "WWW 2024",
        location: "Singapore",
        note: "Clean, calm, and lush, with mangosteen and durian for a midnight feast.",
        links: [
            { label: "Mirror Gradient", url: "https://arxiv.org/abs/2402.11262" },
        ],
    },
];
