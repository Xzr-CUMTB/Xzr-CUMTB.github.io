# 上线与日常维护

## 网站与仓库

- 公开网址：https://xzr-cumtb.github.io/
- 源码仓库：https://github.com/Xzr-CUMTB/Xzr-CUMTB.github.io
- 自动发布记录：https://github.com/Xzr-CUMTB/Xzr-CUMTB.github.io/actions
- 托管：GitHub Pages，使用仓库的 `main` 分支构建。

网站由 GitHub 托管，关闭本机电脑后仍可访问。不需要保持 `npm run dev` 运行，也不需要额外购买服务器。源码和网页素材位于公开仓库。

## 平时怎么更新

1. 在本机项目目录修改内容。可以继续让 Codex 修改，也可以自己编辑。
2. `npm run dev` 查看本地效果；`npm run build` 检查是否可以发布。
3. 提交并推送到 GitHub：

```powershell
git status
git add src public scripts .github vite.config.ts package.json package-lock.json README.md DEPLOYMENT.md
git commit -m "Update website content"
git push origin main
```

4. 打开仓库的 Actions，等待 `Deploy Digital Livehouse` 成功。成功后刷新公开网址即可看到更新。

本地修改并不会自动上传；`git push` 才会触发线上更新。使用本文命令前，若同时在 GitHub 网页或另一台电脑编辑过，请先运行 `git pull --ff-only` 同步。

## 常用内容位置

| 内容 | 编辑文件 |
| --- | --- |
| 论文、参与项目、奖项、专利与软著 | `src/data/archiveEntries.ts` |
| 四张唱片的名称、简介、配色与分类 | `src/data/collections.ts` |
| 自我介绍、邮箱、GitHub、经历 | `src/data/siteContent.ts` |
| 角色、专辑、海报路径 | `src/data/livehouse.ts` |
| 首页舞台与鼓组 | `src/components/MusicStage.tsx` |
| 新图片和音乐文件 | `public/` 对应目录 |

新增记录后，唱片数量会自动更新。给记录增加 `url` 可显示正式论文或成果链接。图片资源建议使用英文文件名。

## 为什么内页刷新也能访问

GitHub Pages 不提供服务端 SPA 重写规则。`scripts/static-pages.ts` 在构建后从统一分类配置生成四个目录的 `index.html`：

- `/papers/`
- `/projects/`
- `/honors/`
- `/intellectual-property/`

首页与内页仍属于同一 React 应用。GitHub 在直接访问无末尾斜杠的地址时可能自动补上 `/`，页面正常显示。未知地址显示项目的 404 页面。

## 发布失败或想撤回修改

- 发布失败：在 Actions 打开失败任务，查看红色步骤日志；先在本机运行 `npm ci`、`npm run build`，也可以把报错交给 Codex 修复。
- 撤回某次更新：用 `git log --oneline` 找到那次提交，执行 `git revert 提交编号`，再 `git push origin main`，会自动发布撤回后的版本。
- 更换电脑：克隆上述仓库，安装 Node.js 24，运行 `npm ci` 即可继续维护。
- 绑定自己的域名：购买域名后，在仓库 Settings → Pages → Custom domain 设置，再按 GitHub 官方说明配置 DNS。

## 本地保留的文件

`private-assets/` 保存暂时不用的旧照片和检查截图；`migration-backup/`、`artifacts/`、`output/` 保留本地历史与检查产物。它们已被 Git 忽略，不会推送或发布。网站只发布 `dist/`，该目录由 `src/` 与 `public/` 构建生成。

参考：[GitHub Pages 官方指南](https://docs.github.com/en/pages/quickstart)、[Vite 部署指南](https://vite.dev/guide/static-deploy#github-pages)。
