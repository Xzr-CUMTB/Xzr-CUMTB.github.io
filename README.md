# Xu Zirui · Digital Livehouse

徐梓睿的个人主页。React + Vite + TypeScript + Framer Motion，五段式响应式主页与四个独立主题档案页面。以 Livehouse 的舞台、成员通行证、唱片、设备台与后台串联个人研究和作品。

## 启动

公开部署与后续更新见 [DEPLOYMENT.md](./DEPLOYMENT.md)。

需要 Node.js 20.19+ 或 22.12+；本机使用 Node 24。

```powershell
cd F:\个人主页
npm install
npm run dev
```

打开 http://localhost:3000/（或 http://127.0.0.1:3000/）。开发服务固定使用 3000，端口被占用时会明确报错。

```powershell
npm run typecheck # TypeScript 检查
npm run build     # 检查并构建到 dist/
npm run preview   # 预览生产构建，同样使用 3000；先关闭 dev
npm run format    # 格式化源码与配置
```

## 文件职责

| 位置                                                        | 用途                                     |
| ----------------------------------------------------------- | ---------------------------------------- |
| `index.html`, `src/main.tsx`, `src/App.tsx`                 | Vite 与 React 入口、页面组合             |
| `src/components/Navbar.tsx`                                 | 锚点导航、当前模块状态、手机菜单         |
| `src/components/HeroSection.tsx`                            | 首屏排版与轻微鼠标视差                   |
| `src/components/LiveHouseBackground.tsx`                    | 舞台灯光、纹理与可选视频                 |
| `src/components/MusicStage.tsx`, `CharacterPerformance.tsx` | 乐器舞台、四人立绘与音乐联动             |
| `src/components/PosterWall.tsx`                             | 舞台与后台的低透明度海报墙               |
| `src/components/CharacterLayer.tsx`, `AssetImage.tsx`       | 小型 PNG/GIF 贴纸、通用图片与路径报错    |
| `src/components/TicketBadge.tsx`, `FloatingSticker.tsx`     | 票根与轻微浮动装饰                       |
| `src/components/AboutSection.tsx`                           | 成员通行证、个人信息、教育与实习切换     |
| `src/components/ProjectsSection.tsx`, `AlbumCard.tsx`       | 四张主题唱片与独立页面入口               |
| `src/pages/CollectionPage.tsx`                              | 四类档案的主题页面、搜索、分类筛选       |
| `src/components/CollectionScene.tsx`, `ArchiveRecord.tsx`   | 对应角色场景与可扩展的记录条目           |
| `src/components/StrengthsSection.tsx`, `ContactSection.tsx` | 优势、联系方式、复制邮箱                 |
| `src/components/MusicPlayer.tsx`, `RoomRadioContext.tsx`    | 默认暂停的播放器、真实音频波形与全局状态 |
| `src/components/Icon.tsx`, `Reveal.tsx`, `SectionTitle.tsx` | 通用图标、进入动画、模块标题             |
| `src/data/siteContent.ts`                                   | 姓名、文案、真实联系方式、教育实习、统计 |
| `src/data/characters.ts`                                    | 角色路径、配色、对应模块、动作幅度       |
| `src/data/livehouse.ts`                                     | 立绘、海报、专辑、图标与设备列表         |
| `src/data/collections.ts`, `archiveEntries.ts`              | 四个页面的主题、路由、论文与成果记录     |
| `src/data/strengths.ts`                                     | 技能内容                                 |
| `src/styles/theme.css`, `globals.css`, `livehouse.css`      | 颜色、基础组件、Livehouse 场景与响应式   |
| `src/styles/collections.css`                                | 彩色唱片、档案页面与响应式样式           |

## 四张唱片与独立链接

| 地址                     | 主题              | 角色 | 初始记录             |
| ------------------------ | ----------------- | ---- | -------------------- |
| `/papers`                | 论文与研究 · 黄色 | 虹夏 | 9 篇论文             |
| `/projects`              | 参与项目 · 珊瑚红 | 喜多 | 2 项参与项目         |
| `/honors`                | 奖项与荣誉 · 蓝色 | 凉   | 5 项奖学金、4 项证书 |
| `/intellectual-property` | 专利与软著 · 粉色 | 波奇 | 1 项专利记录         |

首页的 `/#projects` 是唱片架，`/projects` 是参与项目独立页面。支持直接访问、刷新、前进后退、返回唱片架与页面间导航；音乐状态在站内跳转时保持。使用 [React Router 声明式路由](https://reactrouter.com/start/declarative/routing)。

### 新增记录

编辑 `src/data/archiveEntries.ts` 对应分类数组即可。每条记录包含唯一 `id`、`title`、`category`、`description`，可选 `date`、`status`、`facts`、`tags`、`url`。首页数量、分类数量和搜索自动更新；正式论文链接、项目网站或成果查询链接填入 `url` 后才显示“查看原始记录”。未提供的链接不编造。

分类按钮来自 `src/data/collections.ts` 的 `filters`；新增荣誉称号等分类时在该数组增加对应名称。无需改动页面组件。所有数量表示收录条目数，不代表已发表或已授权数量。

### 部署路由

这是同一 Vite 项目内的多个页面。`scripts/static-pages.ts` 会在构建中为四个分类生成真实的 `index.html`，适配 GitHub Pages 的直接访问与刷新，并生成 `404.html`。部署流程在 `.github/workflows/deploy.yml` 中。

## 角色与配色

| 角色                | Hero 位置                  | 下方模块         |
| ------------------- | -------------------------- | ---------------- |
| Nijika / 伊地知虹夏 | 中央偏前，鼓组旁，浮动最大 | About，暖黄      |
| Bocchi / 后藤独     | 左侧音箱附近，动作克制     | Contact，浅粉    |
| Ryo / 山田凉        | 右后侧，微小呼吸           | Strengths，雾蓝  |
| Kita / 喜多郁代     | 右侧麦克风附近             | Projects，珊瑚红 |

Hero 使用素材目录中四位角色的独立透明立绘，与鼓组、音箱、麦克风组合。页面其他位置使用新的动作立绘和旧版像素 PNG/GIF。使用标准 `<img>` 适配 Vite，像素贴纸应用 `image-rendering: pixelated`；普通立绘保留原有画质。加载失败会输出带具体路径的 `console.error`，不显示文字卡片或替代色块。

- `public/characters/{nijika,bocchi,ryo,kita}-pixel.png`
- `public/gifs/{nijika,bocchi,ryo,kita}-idle.gif`
- `public/audio/room-loop.wav`
- `public/assets/characters/*`：Hero 和下方各模块的大型透明立绘
- `public/assets/posters/*`、`albums/*`、`sketches/*`：实际海报、专辑与线稿
- `public/assets/logos/*`、`icons/*`：乐队标记与乐器图标

新资源来自用户指定的 `F:\素材\孤独摇滚\孤独摇滚`。已筛选准备 38 份网页资源，页面实际使用其中 33 份；海报与专辑制成适当尺寸的 WebP，透明角色保留 PNG。源文件未修改，来源映射在 `artifacts/asset-review/used-assets.json`。所有可替换路径集中在 `src/data/livehouse.ts`。

音乐播放状态由 Context 共享，播放时显示很淡的节奏点并稍微增加人物漂浮。动画响应系统“减少动态效果”偏好；该偏好下不加载动态 GIF、播放背景视频或执行循环漂浮。

## 内容与后续替换

- 邮箱、GitHub、教育、实习与论文方向来自用户提供的简历；信息阶段为 2026-09-27。已停止在页面展示真实照片，改为 XZ 通行证与角色陪伴；原照片文件保存在本机 `private-assets/`，方便后续替换。
- 9 篇论文状态按简历保留为“终审 / 外审 / 拟接收 / WE / Online”；WE 未擅自扩写为其他状态。
- 四张唱片现为长期分类入口，封套和唱片本体使用对应主题色与角色素材。原有研究 SVG 图文件保留，但不再作为首页唱片封面。
- 科技进步奖申报放入“参与项目”，不计为本人获奖。专利未提供申请号与授权状态，已明确标注；软著记录和额外荣誉称号尚未提供，没有虚构条目。
- Hero 当前采用动态灯光、颗粒、网点、漂浮海报与鼠标视差，无 mp4。放入 `public/video/hero-bg.mp4` 后刷新即可启用静音循环视频；缺少视频时继续显示完整动态舞台。请使用浏览器可播放的 MP4。
- 没有公开简历中无关的电话、出生日期或完整 Word 文件。

## 迁移说明

本目录已从 Next.js 迁移为 Vite。旧源码及配置已保存在 `migration-backup/next-baseline.zip`，旧 Next 入口与依赖已移除。保留现有 PNG/GIF/音频，不另建网站，不创建 `preview.html`。`index.html` 是 Vite 必需的工程入口。

本轮升级前的 Vite 源码另存于 `migration-backup/digital-room-v1.zip`。新组件替代了旧版 `HeroDynamicBackground`、`RehearsalRoom` 和 `ProjectCard`，避免保留两套入口场景。

分类页面升级前的源码与资源存于 `migration-backup/livehouse-before-collections.zip`。
