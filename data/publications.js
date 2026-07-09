// Each entry: img, title, authors, venue, (optional) award, and links[].
// links: [{ label: "Homepage" | "arXiv" | "Code" | "Paper" | ..., url }]
// They render as small badges under each paper — add whichever you have.
const PUBLICATIONS_DATA = [
    {
        img: "assets/img/publication_preview/zhong2026skilllearnbench.png",
        title: "SkillLearnBench: Benchmarking Continual Learning Methods for Agent Skill Generation on Real-World Tasks",
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
        authors: "<em>Shanshan Zhong</em>, Kate Shen, Chenyan Xiong",
        venue: "ICML 2026",
        links: [
            { label: "Homepage", url: "https://cxcscmu.github.io/AgentWebBench/" },
            { label: "arXiv", url: "https://arxiv.org/abs/2604.10938" },
            { label: "Code", url: "https://github.com/cxcscmu/AgentWebBench" },
        ],
    },
    {
        img: "assets/img/publication_preview/ling2026agent.png",
        title: "Agent Skills: A Data-Driven Analysis of Claude Skills for Extending Large Language Model Functionality",
        authors: "George Ling, <em>Shanshan Zhong</em>, Richard Huang",
        venue: "Preprint",
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2602.08004" },
        ],
    },
    {
        img: "assets/img/publication_preview/zhong2026autogeo.png",
        title: "What Generative Search Engines Like and How to Optimize Web Content Cooperatively",
        authors: "Yujiang Wu*, <em>Shanshan Zhong</em>*, Yubin Kim, Chenyan Xiong",
        venue: "ICLR 2026",
        links: [
            { label: "Homepage", url: "https://zhongshsh.github.io/AutoGEO/" },
            { label: "arXiv", url: "https://arxiv.org/abs/2510.11438" },
            { label: "Code", url: "https://github.com/cxcscmu/AutoGEO" },
        ],
    },
    {
        img: "assets/img/publication_preview/huang2025minilongbench.png",
        title: "MiniLongBench: The Low-cost Long Context Understanding Benchmark for Large Language Models",
        authors: "Zhongzhan Huang, Guoming Ling, <em>Shanshan Zhong</em>, Hefeng Wu, Liang Lin",
        venue: "ACL 2025",
        award: "Outstanding Paper",
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2505.19959" },
            { label: "Code", url: "https://github.com/MilkThink-Lab/MiniLongBench" },
        ],
    },
    {
        img: "assets/img/publication_preview/huang2025routereval.png",
        title: "RouterEval: A Comprehensive Benchmark for Routing LLMs to Explore Model-Level Scaling Up in LLMs",
        authors: "Zhongzhan Huang, Guoming Ling, Yupei Lin, Yandong Chen, <em>Shanshan Zhong</em>, Hefeng Wu, Liang Lin",
        venue: "EMNLP 2025 Findings",
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2503.10657" },
            { label: "Code", url: "https://github.com/MilkThink-Lab/RouterEval" },
        ],
    },
    {
        img: "assets/img/publication_preview/huang2025causality.png",
        title: "A Causality-Aware Paradigm for Evaluating Creativity of Multimodal Large Language Models",
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
        authors: "<em>Shanshan Zhong</em>, Zhongzhan Huang, Shanghua Gao, Wushao Wen, Liang Lin, Marinka Zitnik, Pan Zhou",
        venue: "CVPR 2024",
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2312.02439" },
            { label: "Code", url: "https://github.com/sail-sg/CLoT" },
        ],
    },
    {
        img: "assets/img/publication_preview/huang2025flat.png",
        title: "Flat Local Minima for Continual Learning on Semantic Segmentation",
        authors: "Zhongzhan Huang, Mingfu Liang, Senwei Liang, <em>Shanshan Zhong</em>",
        venue: "MMM 2025",
        award: "Best Paper Candidate",
        links: [
            { label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-981-96-2054-8_29" },
        ],
    },
];
