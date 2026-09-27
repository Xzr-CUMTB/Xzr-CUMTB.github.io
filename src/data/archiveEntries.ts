import type { ArchiveEntry, CollectionId } from "./collections";

// Facts transcribed from the user's 2026-09-27 resume. Add links only when supplied.
// A new entry here automatically updates the home record count, filters and detail page.
export const archiveEntries: Record<CollectionId, ArchiveEntry[]> = {
  papers: [
    {
      id: "ar-node",
      title: "基于 AR-NODE 模型的雾滴粒径预测及优化研究",
      category: "合作论文",
      status: "终审",
      description: "围绕雾滴粒径预测与优化，连接数据建模与矿井喷雾降尘问题。",
      facts: [
        { label: "期刊", value: "煤炭学报" },
        { label: "作者信息", value: "导师第一作者" },
      ],
      tags: ["AR-NODE", "喷雾优化", "安全工程"],
    },
    {
      id: "low-altitude",
      title: "First-passage safety margins for low-altitude urban missions",
      category: "第一作者",
      status: "外审",
      description:
        "研究城市低空任务中的首次越界安全裕度，探索动态任务中的风险边界。",
      facts: [
        { label: "期刊", value: "Communications Engineering" },
        { label: "作者信息", value: "第一作者" },
      ],
      tags: ["低空安全", "First-passage", "风险边界"],
    },
    {
      id: "riverine-parks",
      title:
        "Climate-triggered reactive safety margins for riverine chemical-industrial parks",
      category: "第一作者",
      status: "外审",
      description: "关注气候事件触发下，沿江化工园区的反应性安全裕度。",
      facts: [
        { label: "期刊", value: "Communications Engineering" },
        { label: "作者信息", value: "第一作者" },
      ],
      tags: ["气候风险", "化工园区", "安全裕度"],
    },
    {
      id: "dust-to-power",
      title:
        "Event-scale dust-to-power continuity risk for photovoltaic infrastructure in northern China",
      category: "第一作者",
      status: "拟接收",
      description:
        "连接环境事件与光伏发电连续性，关注中国北方光伏基础设施的事件尺度风险。",
      facts: [
        { label: "期刊", value: "npj Clean Energy" },
        { label: "作者信息", value: "第一作者" },
      ],
      tags: ["光伏", "沙尘事件", "Continuity"],
    },
    {
      id: "quantum-safety",
      title:
        "Evidence gated qualification of quantum methods in safety critical engineering",
      category: "第一作者",
      status: "WE",
      description: "关注安全关键工程中，量子方法的证据门控资格评估。",
      facts: [
        {
          label: "期刊",
          value: "Engineering Applications of Artificial Intelligence",
        },
        { label: "作者信息", value: "第一作者" },
      ],
      tags: ["量子方法", "证据评估", "安全关键工程"],
    },
    {
      id: "robotic-rewards",
      title:
        "From success scores to stopping reliability: False-completion assessment of robotic reward models",
      category: "第一作者",
      status: "WE",
      description:
        "从成功评分走向停止可靠性，研究机器人奖励模型的错误完成评估。",
      facts: [
        { label: "期刊", value: "Reliability Engineering & System Safety" },
        { label: "作者信息", value: "第一作者" },
      ],
      tags: ["机器人", "奖励模型", "可靠性"],
    },
    {
      id: "cuo-wettability",
      title:
        "Enhancing the wettability of bituminous coal using CuO nanofluids: Experimental characterization and simulation analysis",
      category: "合作论文",
      status: "Online",
      description:
        "通过实验表征与模拟分析，研究 CuO 纳米流体对烟煤润湿性的改善。",
      facts: [
        { label: "期刊", value: "Fuel" },
        { label: "作者信息", value: "非第一作者" },
      ],
      tags: ["CuO 纳米流体", "润湿性", "实验与模拟"],
    },
    {
      id: "coal-interface",
      title:
        "Interfacial wetting mechanisms of coal: Modulation by benzene ring containing surfactants",
      category: "合作论文",
      status: "Online",
      description: "研究含苯环表面活性剂对煤表面界面润湿机制的调控。",
      facts: [
        { label: "期刊", value: "Chemical Engineering Science" },
        { label: "作者信息", value: "非第一作者" },
      ],
      tags: ["界面润湿", "表面活性剂", "煤"],
    },
    {
      id: "eo-surfactants",
      title:
        "EO 非离子表面活性剂对烟煤表面的润湿性改性：实验和分子动力学模拟研究",
      category: "合作论文",
      status: "Online",
      description:
        "结合实验与分子动力学模拟，研究非离子表面活性剂的润湿性改性。",
      facts: [
        { label: "期刊", value: "材料导报" },
        { label: "作者信息", value: "企业人员第一作者" },
      ],
      tags: ["非离子表面活性剂", "分子动力学", "烟煤"],
    },
  ],
  projects: [
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
      status: "状态待补充",
      description:
        "将物理约束与可微分决策树结合，面向矿井喷雾降尘的优化方法及系统。",
      facts: [
        { label: "研究方向", value: "矿井喷雾降尘优化" },
        { label: "登记信息", value: "申请号、授权状态及日期待补充" },
      ],
      tags: ["物理约束", "可微分决策树", "矿井安全"],
    },
  ],
};
