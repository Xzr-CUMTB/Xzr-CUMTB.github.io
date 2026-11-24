import { paperCount } from "./publications";
export const siteContent = {
  name: "Xu Zirui",
  nameZh: "徐梓睿",
  identity: "AI × Data × Safety Engineering",
  roles: ["Researcher", "Designer", "Builder"],
  introduction: "用 AI 与数据，连接安全、能源和真实工程问题。",
  about:
    "我是徐梓睿，中国矿业大学（北京）安全科学与工程研究生，硕博连读培养。我关注粉尘防控、工程仿真与环境能源系统，将实验数据、机器学习和交互工具连接起来，让研究结果更容易被理解和使用。",
  approach:
    "从提出问题到整理证据，从模型与代码到可视化表达——我希望让技术走进具体的场景，让研究多一点可理解、可使用的可能。",
  email: "cumtbxuzirui@163.com",
  github: "https://github.com/Xzr-CUMTB",
  portrait: null, // Add a new photo path here when ready; the current pass uses illustration.
  location: "Beijing, China",
  resumeUpdated: "2026.11",
  heroVideo: "/video/hero-bg.mp4",
};
export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Collections" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "strengths", label: "Strengths" },
  { id: "contact", label: "Contact" },
];
export const education = [
  {
    date: "2025.09 — NOW",
    title: "中国矿业大学（北京）",
    role: "安全科学与工程 · 全日制硕士研究生（硕博连读培养）",
    detail: "粉尘防控 / 工程仿真 / 环境能源",
  },
  {
    date: "2021.09 — 2025.07",
    title: "应急管理大学",
    role: "应急技术与管理 · 全日制本科",
    detail: "GPA 3.88 / 5.0 · 年级前 10%",
  },
];
export const stats = [
  { value: "03", label: "研究关注", note: "粉尘 / 仿真 / 能源" },
  { value: "04", label: "主题档案", note: "论文 / 项目 / 荣誉 / 专利" },
  {
    value: String(paperCount("all")).padStart(2, "0"),
    label: "论文档案",
    note: "已发表 / 已接收 / 在投",
  },
  { value: "08", label: "常用工具", note: "分析、编程与可视化" },
];
