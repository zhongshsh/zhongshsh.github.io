// Each entry: img, title, authors, venue, (optional) award, and links[].
// links: [{ label: "Homepage" | "arXiv" | "Code" | "Paper" | ..., url }]
// They render as small badges under each paper — add whichever you have.
// group: "measure" | "check" | "learn" — which research question the paper answers (see index.html).
const PUBLICATIONS_DATA = [
    {
        img: "assets/img/publication_preview/zhong2026ideataste.png",
        title: "IdeaTaste: Do LLMs Share the Research Taste of Human Researchers?",
        group: "measure",
        authors: "<em>Shanshan Zhong</em>, Chen Xu, Jingjie Ning, Zhengzhong Liu, Aviral Kumar, Chenyan Xiong",
        venue: "Preprint",
        links: [
            { label: "Homepage", url: "https://cxcscmu.github.io/IdeaTaste/" },
            { label: "Paper", url: "https://arxiv.org/pdf/2611.03424" },
            { label: "Code", url: "https://github.com/cxcscmu/IdeaTaste" },
        ],
    },
    {
        img: "assets/img/publication_preview/zhong2026skilllearnbench.png",
        title: "SkillLearnBench: Benchmarking Continual Learning Methods for Agent Skill Generation on Real-World Tasks",
        group: "learn",
        authors: "<em>Shanshan Zhong</em>, Yi Lu, Jingjie Ning, Yibing Wan, Lihan Feng, Yuyi Ao, Leonardo F. R. Ribeiro, Markus Dreyer, Sean Ammirati, Chenyan Xiong",
        venue: "COLM 2026",
        links: [
            { label: "Homepage", url: "https://cxcscmu.github.io/SkillLearnBench/" },
            { label: "arXiv", url: "https://arxiv.org/abs/2604.20087" },
            { label: "Code", url: "https://github.com/cxcscmu/SkillLearnBench" },
        ],
    },
    {
        img: "assets/img/publication_preview/zhong2026agentwebbench.png",
        title: "AgentWebBench: Benchmarking Multi-Agent Coordination in Agentic Web",
        group: "measure",
        authors: "<em>Shanshan Zhong</em>, Kate Shen, Chenyan Xiong",
        venue: "ICML 2026",
        links: [
            { label: "Homepage", url: "https://cxcscmu.github.io/AgentWebBench/" },
            { label: "arXiv", url: "https://arxiv.org/abs/2604.10938" },
            { label: "Code", url: "https://github.com/cxcscmu/AgentWebBench" },
        ],
    },
    {
        img: "assets/img/publication_preview/huang2026zipbench.png",
        title: "ZipBench: Low-Cost Framework for Compressing Comprehensive Benchmarks of Large Language Models",
        group: "check",
        authors: "Zhongzhan Huang, Junxin Li, Guoming Ling, Yupei Lin, <em>Shanshan Zhong</em>, Hefeng Wu",
        venue: "EMNLP 2026",
        award: "Oral",
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2609.12475" },
            { label: "Code", url: "https://github.com/MilkThink-Lab/ZipBench" },
        ],
    },
    {
        img: "assets/img/publication_preview/huang2025minilongbench.png",
        title: "MiniLongBench: The Low-cost Long Context Understanding Benchmark for Large Language Models",
        group: "check",
        authors: "Zhongzhan Huang, Guoming Ling, <em>Shanshan Zhong</em>, Hefeng Wu, Liang Lin",
        venue: "ACL 2025",
        award: "Outstanding Paper",
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2505.19959" },
            { label: "Code", url: "https://github.com/MilkThink-Lab/MiniLongBench" },
        ],
    },
    {
        img: "assets/img/publication_preview/zhong2026autogeo.png",
        title: "What Generative Search Engines Like and How to Optimize Web Content Cooperatively",
        group: "learn",
        authors: "Yujiang Wu*, <em>Shanshan Zhong</em>*, Yubin Kim, Chenyan Xiong",
        venue: "ICLR 2026",
        links: [
            { label: "Homepage", url: "https://zhongshsh.github.io/AutoGEO/" },
            { label: "arXiv", url: "https://arxiv.org/abs/2510.11438" },
            { label: "Code", url: "https://github.com/cxcscmu/AutoGEO" },
        ],
    },
    {
        img: "assets/img/publication_preview/huang2025causality.png",
        title: "A Causality-Aware Paradigm for Evaluating Creativity of Multimodal Large Language Models",
        group: "measure",
        authors: "Zhongzhan Huang*, <em>Shanshan Zhong</em>*, Pan Zhou, Shanghua Gao, Marinka Zitnik, Liang Lin",
        venue: "IEEE TPAMI 2025",
        links: [
            { label: "Homepage", url: "https://lotbench.github.io/" },
            { label: "arXiv", url: "https://arxiv.org/abs/2501.15147" },
        ],
    },
    {
        img: "assets/img/publication_preview/zhong2023let.png",
        title: "Let's Think Outside the Box: Exploring Leap-of-Thought in Large Language Models with Creative Humor Generation",
        group: "learn",
        authors: "<em>Shanshan Zhong</em>, Zhongzhan Huang, Shanghua Gao, Wushao Wen, Liang Lin, Marinka Zitnik, Pan Zhou",
        venue: "CVPR 2024",
        award: "Featured by MIT Technology Review China",
        awardUrl: "https://mittrchina.com/news/detail/13506",
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2312.02439" },
            { label: "Code", url: "https://github.com/sail-sg/CLoT" },
        ],
    },
];
