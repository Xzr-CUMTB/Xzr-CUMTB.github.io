import type { CSSProperties } from "react";
import type { CharacterId } from "./characters.ts";

export type CollectionId =
  "papers" | "projects" | "honors" | "intellectual-property";
export type ArchiveEntry = {
  id: string;
  title: string;
  category: string;
  status?: string;
  date?: string;
  description: string;
  facts?: { label: string; value: string }[];
  tags?: string[];
  url?: string;
};
export type Collection = {
  id: CollectionId;
  number: string;
  title: string;
  english: string;
  coverLines: string[];
  character: CharacterId;
  color: string;
  paper: string;
  ink: string;
  description: string;
  intro: string;
  note: string;
  filters: string[];
};

export const collections: Collection[] = [
  {
    id: "papers",
    number: "01",
    title: "论文与研究",
    english: "RESEARCH RECORDS",
    coverLines: ["PAPERS", "& IDEAS."],
    character: "nijika",
    color: "#F5C542",
    paper: "#FBF3D8",
    ink: "#725516",
    description: "从工程问题到学术表达，记录每一次提问、推演与发现。",
    intro:
      "让好奇心，留下可以被讨论的证据。这里收录我的论文、研究方向与每一篇工作的进展。",
    note: "关于复杂问题，慢慢找到自己的节奏。",
    filters: ["第一作者", "合作论文"],
  },
  {
    id: "projects",
    number: "02",
    title: "参与项目",
    english: "PROJECT SESSIONS",
    coverLines: ["PROJECTS", "IN PLAY."],
    character: "kita",
    color: "#E86A5A",
    paper: "#FBECE5",
    ink: "#883C32",
    description: "走进真实场景，与团队一起把问题推进，把想法落地。",
    intro:
      "每一个现场，都有值得认真回应的问题。记录我参与的工程项目、团队协作，以及其中具体做过的工作。",
    note: "把想法带到现场，把工作做到具体。",
    filters: ["工程项目", "科技服务"],
  },
  {
    id: "honors",
    number: "03",
    title: "奖项与荣誉",
    english: "MILESTONES & HONORS",
    coverLines: ["SMALL WINS", "LONG WAY."],
    character: "ryo",
    color: "#6A9BD8",
    paper: "#EAF0F8",
    ink: "#345D8B",
    description: "学习路上的一些回声：奖项、荣誉，以及持续积累的能力。",
    intro:
      "不是每一步都有聚光灯，但每一步都算数。把获得的奖项与专业证书，收进这份成长记录。",
    note: "保持自己的频率，继续认真练习。",
    filters: ["奖学金", "专业证书"],
  },
  {
    id: "intellectual-property",
    number: "04",
    title: "专利与软著",
    english: "PATENTS & SOFTWARE",
    coverLines: ["IDEAS", "MADE REAL."],
    character: "bocchi",
    color: "#EFA8C0",
    paper: "#FAEAF0",
    ink: "#8B4F6C",
    description: "把研究中的方法和工具整理下来，让小小的想法留下自己的形状。",
    intro:
      "从一个方法，到可以复用的成果。这里持续整理专利与软件著作权，以及它们背后的工程问题。",
    note: "那些安静生长的想法，也值得被听见。",
    filters: ["专利", "软件著作权"],
  },
];

export function collectionStyle(c: Collection): CSSProperties {
  return {
    "--collection-color": c.color,
    "--collection-paper": c.paper,
    "--collection-ink": c.ink,
  } as CSSProperties;
}
