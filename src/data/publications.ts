export type PublicationStatus =
  | "Published"
  | "Accepted"
  | "Submitted"
  | "Under Review"
  | "Required Reviews Completed"
  | "Under Revision"
  | "Final Review";
export const paperFilters = {
  all: "全部 All",
  published: "已发表 Published",
  accepted: "已接收 Accepted",
  submitted: "在投论文 Submitted & Under Review",
} as const;
export type PaperFilter = keyof typeof paperFilters;
export function paperGroup(
  status: PublicationStatus,
): Exclude<PaperFilter, "all"> {
  if (status === "Published") return "published";
  if (status === "Accepted") return "accepted";
  return "submitted";
}
export function paperFilterUrl(group: PaperFilter) {
  return `/papers?group=${group}#archive-records`;
}
export type Publication = {
  id: string;
  title: string;
  journal: string;
  status: PublicationStatus;
  titleZh?: string;
  authorRole?: string;
  keywords: string[];
  submittedDate?: string;
  statusDate?: string;
  acceptedDate?: string;
  publishedDate?: string;
  archiveProject?: { id: string; summary: string };
  lastVerifiedDate?: string;
  year?: string;
  authors?: string[];
  url?: string;
  project?: string;
  citation?: string;
};
export const publications: Publication[] = [
  {
    id: "dust-to-power",
    titleZh: "沙尘事件下的光伏监测优先级",
    authorRole: "第一作者",
    publishedDate: "2026-10-31",
    keywords: ["沙尘", "光伏", "环境数据", "辐照衰减", "积尘监测"],
    title:
      "Event-specific Dust-to-Power screening of aerosol dimming and potential soiling-monitoring priorities for northern China photovoltaics",
    authors: [
      "Zirui Xu",
      "Mengchen Sun",
      "Pengpeng Hao",
      "Peiyao Wu",
      "Chengru Han",
      "Bixing Zhang",
    ],
    journal: "npj Clean Energy",
    year: "2026",
    status: "Published",
    citation: "2, 33 (2026) · 31 October 2026",
    url: "https://doi.org/10.1038/s44406-026-00051-7",
    project: "dust-to-power",
  },
  {
    id: "cuo-wettability",
    titleZh: "CuO 纳米流体改善烟煤润湿性",
    authorRole: "合作作者",
    keywords: ["烟煤", "润湿性", "纳米流体", "粉尘防控"],
    title:
      "Enhancing the wettability of bituminous coal using CuO nanofluids: Experimental characterization and simulation analysis",
    journal: "Fuel",
    year: "2026",
    status: "Published",
    citation: "415, 138489 (2026)",
    url: "https://doi.org/10.1016/j.fuel.2026.138489",
  },
  {
    id: "coal-interface",
    titleZh: "含苯环表面活性剂调控煤界面润湿机制",
    authorRole: "合作作者",
    keywords: ["煤界面", "润湿机制", "表面活性剂", "粉尘防控"],
    title:
      "Interfacial wetting mechanisms of coal: Modulation by benzene ring containing surfactants",
    journal: "Chemical Engineering Science",
    year: "2026",
    status: "Published",
    url: "https://www.sciencedirect.com/science/article/pii/S0009250926005737",
  },
  {
    id: "eo-surfactants",
    authorRole: "合作作者",
    keywords: ["烟煤", "表面活性剂", "分子动力学", "润湿性"],
    title:
      "EO 非离子表面活性剂对烟煤表面的润湿性改性：实验和分子动力学模拟研究",
    journal: "材料导报",
    status: "Published",
  },
  {
    id: "delivery-promises",
    title:
      "Targeted Allocation of Food-Delivery Promise Extensions under Budget and Per-Order Limits",
    titleZh: "总预算与单笔上限约束下的外卖配送承诺延时分配",
    authors: [
      "Zirui Xu",
      "Mengchen Sun",
      "Yujia Zhang",
      "Peiyao Wu",
      "Pengpeng Hao",
    ],
    authorRole: "第一署名作者、共同通讯作者",
    journal: "Sustainability",
    status: "Accepted",
    keywords: ["外卖配送", "时间预算", "配送承诺", "运行约束"],
    archiveProject: {
      id: "delivery-promises",
      summary: "在总时间预算和单笔延时上限内，比较不同订单的配送承诺调整方案。",
    },
    lastVerifiedDate: "2026-11-24",
  },
  {
    id: "dust-recovery",
    title:
      "Asynchronous recovery of surface irradiance and particulate matter after dust events in northern China",
    titleZh: "中国北方沙尘事件后地表辐照与颗粒物的异步恢复",
    authors: [
      "Zirui Xu",
      "Mengchen Sun",
      "Peiyao Wu",
      "Bixing Zhang",
      "Pengpeng Hao",
    ],
    authorRole: "共同第一作者",
    journal: "Remote Sensing",
    status: "Submitted",
    submittedDate: "2026-11-18",
    year: "2026",
    keywords: ["沙尘", "遥感", "太阳辐照", "颗粒物", "多源环境数据"],
    archiveProject: {
      id: "dust-recovery",
      summary: "比较沙尘过后地表辐照与颗粒物浓度恢复的时间差异。",
    },
    lastVerifiedDate: "2026-11-24",
  },
  {
    id: "quantum-safety",
    title:
      "Evidence gated qualification of quantum methods in safety critical engineering",
    titleZh: "安全关键工程中量子方法的证据门控评估",
    journal: "Scientific Reports",
    status: "Under Review",
    authorRole: "共同第一作者",
    authors: [
      "Zirui Xu",
      "Mengchen Sun",
      "Pengpeng Hao",
      "Peiyao Wu",
      "Chengru Han",
    ],
    keywords: ["量子方法", "证据评估", "安全关键工程"],
    archiveProject: {
      id: "quantum-safety",
      summary: "研究需要哪些证据，才能评估量子方法在安全关键工程中的适用性。",
    },
    lastVerifiedDate: "2026-11-24",
  },
  {
    id: "outdoor-work-capacity",
    title:
      "Meteorological representation changes outdoor work capacity estimates under compound heat and air pollution",
    titleZh: "高温与空气污染复合暴露下，气象表征对户外作业能力估算的影响",
    journal: "International Journal of Biometeorology",
    status: "Under Review",
    authorRole: "通讯作者",
    authors: ["Mengchen Sun", "Zirui Xu", "Pengpeng Hao", "Peiyao Wu"],
    keywords: ["气象表征", "户外作业", "热暴露", "空气污染"],
    archiveProject: {
      id: "outdoor-work-capacity",
      summary:
        "比较不同气象输入下可用于户外作业的时间，关注高温和空气污染同时出现时的排班约束。",
    },
    lastVerifiedDate: "2026-11-24",
  },
  {
    id: "low-altitude",
    title: "First-passage safety margins for low-altitude urban missions",
    titleZh: "城市低空任务的首次越界安全裕度",
    journal: "Communications Engineering",
    status: "Under Review",
    keywords: ["低空安全", "First-passage", "风险边界"],
    archiveProject: {
      id: "low-altitude",
      summary:
        "研究城市低空任务中的首次越界安全裕度，探索动态任务中的风险边界。",
    },
    lastVerifiedDate: "2026-11-24",
  },
  {
    id: "two-nozzle-reconfiguration",
    title:
      "Two-nozzle reconfiguration for mine spray coverage recovery after conveyor displacement",
    titleZh: "输送机移位后通过双喷嘴重新配置恢复矿井喷雾覆盖",
    journal: "Powder Technology",
    status: "Submitted",
    submittedDate: "2026-11-09",
    authorRole: "第一作者",
    authors: [
      "Zirui Xu",
      "Jiangshi Zhang",
      "Lei Fang",
      "Yunfei Liang",
      "Pengcheng Liu",
      "Linquan Tong",
    ],
    keywords: ["矿井喷雾", "双喷嘴", "输送机", "喷雾覆盖"],
    archiveProject: {
      id: "two-nozzle-reconfiguration",
      summary:
        "研究输送机位置改变后，如何调整两个喷嘴以恢复目标区域的喷雾覆盖。",
    },
    lastVerifiedDate: "2026-11-24",
  },
  {
    id: "robotic-rewards",
    title:
      "From success scores to stopping reliability: False-completion assessment of robotic reward models",
    titleZh: "从成功评分到停止可靠性：评估机器人奖励模型对任务完成的误判",
    journal: "Measurement",
    status: "Required Reviews Completed",
    submittedDate: "2026-09-27",
    statusDate: "2026-11-19",
    authorRole: "第一作者",
    keywords: ["机器人", "奖励模型", "可靠性"],
    archiveProject: {
      id: "robotic-rewards",
      summary:
        "考察机器人奖励模型在任务尚未完成时给出成功评分的情形，以及由此引发的提前停止。",
    },
    lastVerifiedDate: "2026-11-24",
  },
];
export function paperCount(group: PaperFilter) {
  return publications.filter(
    (p) => group === "all" || paperGroup(p.status) === group,
  ).length;
}
