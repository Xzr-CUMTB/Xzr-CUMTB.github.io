import { paperGroup, publications } from "./publications";
import { researchProjects } from "./research";
import type { ArchiveEntry, CollectionId } from "./collections";

// Publication records supply the status, dates and cross-links for both archives.
// A new entry here automatically updates the home record count, filters and detail page.
export const archiveEntries: Record<CollectionId, ArchiveEntry[]> = {
  papers: publications.map((p) => ({
    id: p.id,
    title: p.title,
    category: paperGroup(p.status),
    status: p.status,
    date: p.publishedDate ?? p.acceptedDate ?? p.submittedDate ?? p.year,
    description: p.titleZh ?? "",
    facts: [
      {
        label: "期刊",
        value: [p.journal, p.citation].filter(Boolean).join(" · "),
      },
      ...(p.statusDate ? [{ label: "状态更新", value: p.statusDate }] : []),
      ...(p.authorRole ? [{ label: "我的署名", value: p.authorRole }] : []),
      ...(p.authors ? [{ label: "作者", value: p.authors.join(", ") }] : []),
    ],
    tags: p.keywords,
    url: p.url,
    project: p.project,
    related: p.archiveProject
      ? { href: `/projects#${p.archiveProject.id}`, label: "研究项目" }
      : undefined,
  })),
  projects: [
    ...researchProjects.map((p) => ({
      id: p.id,
      title: p.title,
      category: "近期研究",
      status: p.status,
      description: p.summary,
      tags: p.tags,
      project: p.id,
    })),
    ...publications.flatMap((p) =>
      p.archiveProject
        ? [
            {
              id: p.archiveProject.id,
              title: p.titleZh || p.title,
              category: "其他研究",
              description: p.archiveProject.summary,
              tags: p.keywords,
              related: { href: `/papers#${p.id}`, label: "论文进展" },
            },
          ]
        : [],
    ),
    {
      id: "flood-review",
      title:
        "More accurate flood maps can leave more inundation undetected after limited review",
      category: "其他研究",
      description:
        "比较人工复核预算受限时，不同洪灾制图方法留下的漏检淹没区域。",
      tags: ["洪灾遥感", "人工复核"],
    },
    {
      id: "driver-warning",
      title: "驾驶员状态识别与事件级预警",
      category: "其他研究",
      description: "从视频片段识别延伸到事件级预警，检查评估中的数据泄漏。",
      tags: ["人因安全", "视频分析"],
    },
    {
      id: "ar-node",
      title: "基于 AR-NODE 模型的雾滴粒径预测及优化研究",
      category: "其他研究",
      description: "围绕雾滴粒径预测与优化，连接数据建模与矿井喷雾降尘问题。",
      tags: ["AR-NODE", "喷雾优化", "安全工程"],
    },
    {
      id: "riverine-parks",
      title:
        "Climate-triggered reactive safety margins for riverine chemical-industrial parks",
      category: "其他研究",
      description: "关注气候事件触发下，沿江化工园区的反应性安全裕度。",
      tags: ["气候风险", "化工园区", "安全裕度"],
    },
    {
      id: "dananhu-dust",
      title: "大南湖七号煤矿矿井智能防尘系统研究与应用项目",
      category: "工程项目",
      description:
        "围绕矿井智能防尘系统研究与应用，参与项目材料整理与成果归纳。",
      facts: [
        { label: "我的工作", value: "协助整理材料与撰写结项报告" },
        { label: "工作场景", value: "矿井智能防尘系统" },
      ],
      tags: ["智能防尘", "材料整理", "结项报告"],
    },
    {
      id: "occupational-health",
      title: "中国职业安全健康协会科技进步奖申报",
      category: "科技服务",
      description:
        "参与科技进步奖申报材料准备，让项目成果形成清晰、完整的表达。",
      facts: [
        { label: "我的工作", value: "协助整理、撰写报奖资料与 PPT 制作" },
        { label: "工作场景", value: "科技成果梳理与申报支持" },
      ],
      tags: ["科技服务", "成果表达", "PPT 设计"],
    },
  ],
  honors: [
    {
      id: "graduate-2026",
      title: "优秀研究生奖学金",
      category: "奖学金",
      date: "2025—2026 学年",
      status: "二等奖",
      description: "硕士阶段的学习积累与阶段性记录。",
    },
    {
      id: "student-2025",
      title: "优秀学生奖学金",
      category: "奖学金",
      date: "2024—2025 学年",
      status: "一等奖",
      description: "本科阶段的学习表现与成长记录。",
    },
    {
      id: "student-2024",
      title: "优秀学生奖学金",
      category: "奖学金",
      date: "2023—2024 学年",
      status: "二等奖",
      description: "在专业学习中持续积累、稳步前进。",
    },
    {
      id: "innovation-2024",
      title: "应急创新奖学金",
      category: "奖学金",
      date: "2023—2024 学年",
      status: "三等奖",
      description: "应急领域学习与创新实践的阶段性记录。",
    },
    {
      id: "student-2023",
      title: "优秀学生奖学金",
      category: "奖学金",
      date: "2022—2023 学年",
      status: "一等奖",
      description: "本科阶段的学习表现与成长记录。",
    },
    {
      id: "rescue",
      title: "应急救援员五级证书",
      category: "专业证书",
      description: "应急救援相关职业技能证书。",
    },
    {
      id: "cet6",
      title: "大学英语六级证书",
      category: "专业证书",
      description: "英语学习与学术阅读的能力积累。",
    },
    {
      id: "cet4",
      title: "大学英语四级证书",
      category: "专业证书",
      description: "英语语言能力学习记录。",
    },
    {
      id: "international-english",
      title: "国际人才英语初级证书",
      category: "专业证书",
      description: "英语综合应用能力学习记录。",
    },
  ],
  "intellectual-property": [
    {
      id: "dust-decision-tree",
      title: "基于物理约束可微分决策树的矿井喷雾降尘优化方法及系统",
      category: "专利",
      description:
        "将物理约束与可微分决策树结合，面向矿井喷雾降尘的优化方法及系统。",
      facts: [{ label: "研究方向", value: "矿井喷雾降尘优化" }],
      tags: ["物理约束", "可微分决策树", "矿井安全"],
    },
  ],
};
