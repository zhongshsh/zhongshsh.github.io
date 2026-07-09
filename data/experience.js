// Research experience (most recent first).
// Fields: date, org, role, detail (advisors), summary (one-line description),
//         outputs [{ label, url }] (papers / artifacts produced).
const EXPERIENCE_DATA = [
    {
        date: "Jun 2024 – Jun 2025",
        org: '<a href="http://ccvl.jhu.edu" target="_blank">CCVL, Johns Hopkins University</a>',
        role: "Research Intern",
        detail: 'Advisors: Prof. <a href="https://www.cs.jhu.edu/~ayuille/" target="_blank">Alan L. Yuille</a> &amp; Dr. <a href="https://scholar.google.com/citations?user=yLYj88sAAAAJ" target="_blank">Jieneng Chen</a>',
        summary: "Explored multimodal modeling for 2D-to-3D understanding, reconstructing animatable 3D animals from monocular videos.",
        outputs: [
            { label: "4D-Animal (WACV 2026)", url: "https://arxiv.org/abs/2507.10437" },
        ],
    },
    {
        date: "Jun 2023 – Mar 2024",
        org: '<a href="https://sail.sea.com/" target="_blank">Sea AI Lab</a>',
        role: "Research Intern",
        detail: 'Advisors: Prof. <a href="https://panzhous.github.io/" target="_blank">Pan Zhou</a> &amp; Dr. <a href="https://scholar.google.com/citations?user=zW32dXsAAAAJ" target="_blank">Shanghua Gao</a>',
        summary: "Worked on multimodal language models, enhancing their creativity and expanding their modalities.",
        outputs: [
            { label: "CLoT (CVPR 2024)", url: "https://arxiv.org/abs/2312.02439" },
            { label: "MoExtend (ACL 2024)", url: "https://arxiv.org/abs/2408.03511" },
        ],
    },
    {
        date: "Mar 2022 – Aug 2022",
        org: '<a href="https://github.com/Oneflow-Inc/oneflow" target="_blank">OneFlow</a>',
        role: "Research Intern",
        detail: 'Advisors: <a href="https://github.com/BBuf" target="_blank">Xiaoyu Zhang</a> &amp; Chi Yao',
        summary: 'Contributed 10,000+ lines of code (C++ &amp; CUDA) to a PyTorch-like deep learning framework, which sparked my passion for open source. You can find the fun things I jotted down back then in my <a href="https://zhongshsh.github.io/BlogInOF/" target="_blank">work log</a>.',
    },
];
