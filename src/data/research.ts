import { publications } from "./publications.ts";
export type ResearchProject = {
  id: string;
  title: string;
  english: string;
  summary: string;
  status: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  caption: string;
  video?: string;
  tags: string[];
  sections: { title: string; text: string }[];
  links: { label: string; href: string }[];
};
export const researchProjects: ResearchProject[] = [
  {
    id: "dustwise",
    title: "DustWise 尘策｜抑尘剂智能选配与实验工作台",
    english: "DustWise Research Workbench",
    summary: "把选药、补充检测、配液计算和验证记录连接成可操作的实验流程。",
    status: "研究原型",
    image: "/research/dustwise.png",
    imageWidth: 1920,
    imageHeight: 1080,
    caption:
      "真实软件界面。画面为历史回放任务，预测值与演示录入不代表新增实测结果。",
    video: "/research/dustwise-demo.mp4",
    tags: ["粉尘防控", "实验工作流", "研究软件"],
    sections: [
      {
        title: "研究问题",
        text: "面对不同煤样、抑尘目标和药剂浓度约束，如何有依据地比较候选配方，并安排必要的补充检测？",
      },
      {
        title: "方法与产品流程",
        text: "煤样与目标设置 → 候选配方比较 → 补充检测建议 → 配液称量计算 → 验证回填 → 报告与记录导出。组成初筛与选择性界面表征共同支持目标约束下的选配。",
      },
      {
        title: "代表性工作",
        text: "围绕大南湖11号煤层煤样与 AES/APG 体系，将研究中的候选比较、配液换算和逐次验证组织为统一任务档案，区分模型预测、历史实测和新录入结果。",
      },
      {
        title: "我的贡献",
        text: "需求设计、研究方法整理、实验组织与结果验证，以及 AI 辅助的软件实现。",
      },
      {
        title: "用途与当前阶段",
        text: "用于实验候选筛选、补测安排和记录复核。目前为研究原型；视频展示操作流程，实验结论须结合具体煤样、配方和试验条件解读。",
      },
    ],
    links: [],
  },
  {
    id: "gas-surrogate",
    title: "瓦斯抽采快速预测｜物理约束与机器学习",
    english: "Physics-informed Gas Drainage",
    summary: "学习数值模拟中的压力和抽采规律，加快孔距与渗透率条件的比较。",
    status: "数值验证",
    image: "/research/gas-pressure.png",
    imageWidth: 1122,
    imageHeight: 1229,
    caption:
      "二维均质双孔模型：P00 工况，孔距 3.15 m、渗透率比 0.60、30天压力场与中心线对比。原始数据配色与图例保留。",
    tags: ["COMSOL", "机器学习", "参数筛选"],
    sections: [
      {
        title: "研究问题",
        text: "多工况有限元计算耗时，孔距设计又需要同时考虑卸压程度、抽采量和达到目标采出量的时间。",
      },
      {
        title: "方法",
        text: "以二维均质煤段的 COMSOL 模拟为参照，结合边界嵌入压力网络与核岭回归流量分支，预测压力场、双孔流量和累计采出量。",
      },
      {
        title: "验证与结果",
        text: "研究使用 12 个未参与训练或选模的独立工况，联合验证压力、流量、边界条件和质量收支。图中对照有限元结果与代理模型预测，展示压力预测误差的空间分布。",
      },
      {
        title: "用途与当前阶段",
        text: "面向孔距预筛选和快速工程评价，关键方案仍需有限元复核。目前证据来自数值验证，未据此声称完成矿山现场验证。",
      },
    ],
    links: [],
  },
  {
    id: "pv-dispatch",
    title: "光伏预测与履约调度｜从功率预测到运行决策",
    english: "Forecast-to-Delivery Scheduling",
    summary: "把功率预测、交付缺口与资源需求连接起来，支持电量承诺和储能调度。",
    status: "数据回放与调度仿真",
    image: "/research/pv-dispatch.png",
    imageWidth: 8598,
    imageHeight: 5906,
    caption: "四站空间分布与评价日历：包含53个开发评价日及外部数据的研究范围。",
    tags: ["能源系统", "预测", "履约调度"],
    sections: [
      {
        title: "研究问题",
        text: "运营者在知道当天实际出力之前，需要决定承诺多少电量，以及如何安排备用与储能资源。预测精度本身不足以回答这些运行决策。",
      },
      {
        title: "方法",
        text: "预测 → 电量承诺 → 资源调度 → 履约评估。以四个电站的实测出力驱动回放，比较不同预测与计划选择策略，区分预测更换和整套方案调整的贡献。",
      },
      {
        title: "代表性结果",
        text: "在66.6 MW四站集群、同一组53个开发评价日中，完整策略累计履约率为95.18%，相对历史参考多交付2,597.16 MWh，备用减少81.99 MWh。整套策略的增交量不等同于单一预测模型的独立贡献。",
      },
      {
        title: "我的贡献",
        text: "研究构思、方法设计、软件实现、分析与可视化，以及论文初稿和修订。",
      },
      {
        title: "用途与当前阶段",
        text: "用于分析电量承诺、交付缺口与资源需求之间的取舍。结果属于实测出力驱动的调度仿真，不代表电站已实现的商业收益。",
      },
    ],
    links: [],
  },
  {
    id: "dust-to-power",
    title: "Dust-to-Power｜沙尘事件下的光伏监测优先级",
    english: "Event-specific Dust-to-Power",
    summary: "分别识别沙尘期间的辐照检查重点和事件后的表面积尘监测重点。",
    status: "已发表 · npj Clean Energy",
    image: "/research/dust-to-power-fig3.jpg",
    imageWidth: 2000,
    imageHeight: 1880,
    caption:
      "图 3 展示了 2023 年 3 月沙尘事件的颗粒物与气溶胶变化，对照了 ERA5 和 CERES 辐照数据，并比较了北京站点与再分析数据的气溶胶光学厚度。原图出自 Xu 等，npj Clean Energy 2, 33 (2026)，CC BY 4.0。",
    tags: ["环境数据", "光伏", "监测优先级"],
    sections: [
      {
        title: "研究问题",
        text: "沙尘期间的大气衰减和事件后的潜在积尘涉及不同过程，需要分别组织监测与检查。",
      },
      {
        title: "方法与结果",
        text: "结合环境数据与光伏设施分布，正式发表版包含916个分析网格和3,554个光伏多边形，分别形成事件期间辐照检查和事件后表面检查的优先级。",
      },
      {
        title: "我的贡献",
        text: "以正式发表论文的第一作者身份参与研究；完整作者与贡献说明见出版社版本。",
      },
      {
        title: "用途与边界",
        text: "支持安排辐照诊断和进一步表面检查。产品诊断不等同于实际电站发电损失，监测优先级也不直接给出积尘概率或清洗收益。",
      },
      {
        title: "当前阶段",
        text: "2026年10月31日发表于 npj Clean Energy，2, 33 (2026)。",
      },
    ],
    links: [
      {
        label: "正式论文",
        href: "https://www.nature.com/articles/s44406-026-00051-7",
      },
      {
        label: "图 3 使用许可 · CC BY 4.0",
        href: "https://creativecommons.org/licenses/by/4.0/",
      },
      {
        label: "公开代码",
        href: "https://github.com/Xzr-CUMTB/dust-pv-lightweight-real",
      },
      { label: "论文成果列表", href: "/#publications" },
    ],
  },
];
export const researchDirections = [
  {
    title: "粉尘防控与职业健康",
    description: "连接煤样、药剂和实验记录，支持有依据的防控决策。",
    project: "dustwise",
  },
  {
    title: "工程仿真与智能预测",
    description: "结合物理模型与机器学习，提高复杂条件下的评价效率。",
    project: "gas-surrogate",
  },
  {
    title: "环境数据与能源系统",
    description: "从沙尘监测到光伏运行，把环境数据连接到能源决策。",
    project: "pv-dispatch",
  },
];
const deliveryPaper = publications.find((p) => p.id === "delivery-promises")!;
export const recentUpdates = [
  {
    label: "2026.10.31 · 正式发表",
    text: "Dust-to-Power 发表于 npj Clean Energy",
    href: "/research/dust-to-power",
  },
  {
    label: "论文进展",
    text: `Sustainability · ${deliveryPaper.status}`,
    href: `/papers#${deliveryPaper.id}`,
  },
  {
    label: "软件演示",
    text: "DustWise：从选配到验证记录",
    href: "/research/dustwise",
  },
];
