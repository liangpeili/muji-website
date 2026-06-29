# Muji Website

牧机私域 AI 系统官网，面向客户介绍微信私域运营、AI 分身、客户画像、自动回复、朋友圈触达、群聊线索和跟进任务。

## 本地开发

```bash
npm install
npm run dev
```

访问 `http://localhost:3000`。

## 构建

```bash
npm run build
```

项目使用 Next.js 静态导出，构建产物输出到 `out/`。

## Cloudflare Pages 部署

Cloudflare Pages 推荐配置：

| 配置项 | 值 |
|---|---|
| Repository | `liangpeili/muji-website` |
| Production branch | `main` |
| Framework preset | `Next.js (Static HTML Export)` |
| Build command | `npx next build` |
| Build output directory | `out` |

在 Cloudflare Dashboard 中进入 **Workers & Pages**，创建 Pages 项目并导入 GitHub 仓库即可。后续推送到 `main` 会自动触发重新构建和部署。

仓库已通过 `.node-version` 固定 Cloudflare 构建使用 Node.js `22.16.0`。如果 Pages 项目里已经设置过 `NODE_VERSION`，请确保它不是 `22` 或 `22.22.0` 这类会解析到 npm 11 的值，改为：

```text
NODE_VERSION=22.16.0
```
