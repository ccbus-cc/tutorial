---
description: VitePress 站点开发与部署工作流（内部参考）
---

# VitePress 工作流指南

本文档为内部参考，介绍 CCBus 文档站点的开发、构建和部署流程。

## 项目结构

```
ccbus-lab.github.io/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # 主配置文件
│   │   ├── config/
│   │   │   ├── en.ts          # 英文locale配置（导航栏、侧边栏）
│   │   │   └── zh.ts          # 中文locale配置（导航栏、侧边栏）
│   │   └── theme/
│   │       ├── index.ts       # 自定义主题入口
│   │       └── custom.css     # 自定义样式
│   ├── en/                    # 英文文档目录
│   ├── zh/                    # 中文文档目录
│   └── index.md               # 根页面（语言选择/重定向）
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 自动部署
└── package.json
```

## 本地开发

### 环境要求

- Node.js 20+
- npm

### 常用命令

```bash
# 安装依赖
npm install

# 启动开发服务器（支持热更新）
npm run docs:dev

# 构建生产版本
npm run docs:build

# 本地预览生产构建结果
npm run docs:preview
```

开发服务器默认运行在 `http://localhost:5173`，修改 Markdown 文件后会自动热更新。

## 添加新页面

### 1. 创建 Markdown 文件

在对应语言目录下创建 `.md` 文件，例如：

```
docs/zh/guide/my-new-page.md
docs/en/guide/my-new-page.md
```

每个 Markdown 文件建议添加 frontmatter：

```yaml
---
description: 页面描述信息
---
```

### 2. 配置侧边栏（如需在导航中显示）

编辑对应语言的配置文件：

- 中文：`docs/.vitepress/config/zh.ts`
- 英文：`docs/.vitepress/config/en.ts`

在 `sidebar` 函数中添加对应的条目：

```typescript
{
  text: '分组名称',
  collapsed: false,  // 是否默认折叠
  items: [
    { text: '页面标题', link: '/zh/guide/my-new-page' },
  ],
},
```

### 3. 配置顶部导航栏（如需要）

在同一配置文件的 `nav` 数组中添加：

```typescript
{ text: '显示文本', link: '/zh/guide/my-new-page' },
```

## 国际化（i18n）

站点支持中文和英文两个语言版本：

| 语言 | 路径前缀 | 配置文件 |
|------|---------|---------|
| 英文 | `/en/` | `docs/.vitepress/config/en.ts` |
| 中文 | `/zh/` | `docs/.vitepress/config/zh.ts` |

- 两种语言的文档目录结构应保持一致
- 主配置 `docs/.vitepress/config.ts` 中定义了全局共享配置
- 每种语言有独立的 `nav`、`sidebar`、`footer` 等配置

## 部署流程

### 自动部署

站点使用 **GitHub Actions** 自动部署到 **GitHub Pages**：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动触发 `.github/workflows/deploy.yml`
3. 执行构建：`npm ci` → `npm run docs:build`
4. 构建产物位于 `docs/.vitepress/dist`
5. 自动部署到 GitHub Pages

也可以在 GitHub 仓库的 Actions 页面手动触发部署（`workflow_dispatch`）。

### 部署配置要点

- `base: '/'` — 站点部署在域名根路径（`ccbus-lab.github.io`）
- `cleanUrls: true` — URL 不带 `.html` 后缀
- `ignoreDeadLinks: true` — 构建时忽略死链（部分图片资源尚未迁移）

## 主要配置说明

### 主配置 (`docs/.vitepress/config.ts`)

| 配置项 | 说明 |
|-------|------|
| `base` | 站点基础路径 |
| `cleanUrls` | 是否使用简洁 URL |
| `lastUpdated` | 显示页面最后更新时间 |
| `markdown.lineNumbers` | 代码块显示行号 |
| `markdown.image.lazyLoading` | 图片懒加载 |
| `themeConfig.search` | 本地搜索配置 |
| `locales` | 多语言配置入口 |

### 语言配置 (`docs/.vitepress/config/zh.ts`)

- `nav` — 顶部导航栏
- `sidebar` — 侧边栏（通过 `sidebarZh()` 函数定义）
- `editLink` — "在 GitHub 上编辑此页面" 链接
- `footer` — 页脚信息
- `docFooter` — 文档底部上一页/下一页文字

## 自定义主题

- 主题入口：`docs/.vitepress/theme/index.ts`
- 自定义样式：`docs/.vitepress/theme/custom.css`
- 字体：通过 Google Fonts 加载 Inter（正文）、Noto Sans SC（中文）、Fira Code（代码）

## 自定义域名配置

站点通过自定义域名 `help.ccbus.cc` 访问，DNS 由 Vercel 管理（`ccbus.cc` 主站部署在 Vercel）。

### 配置步骤

**1. Vercel DNS 添加 CNAME 记录**

在 Vercel Dashboard → `ccbus.cc` 域名 → DNS Records 中添加：

| Type | Name | Value |
|------|------|-------|
| CNAME | `help` | `ccbus-lab.github.io` |

**2. GitHub Pages 配置自定义域名**

在 GitHub 仓库 `ccbus-lab/ccbus-lab.github.io` → Settings → Pages 中：
- 设置 **Custom domain** 为 `help.ccbus.cc`
- 启用 **Enforce HTTPS**（GitHub 会自动申请 Let's Encrypt 证书）

**3. 添加 CNAME 文件**

在 `docs/public/CNAME` 中写入：

```
help.ccbus.cc
```

放在 `docs/public/` 目录下确保 VitePress 构建时会将其复制到输出根目录。

**4. VitePress 配置**

保持 `base: '/'` 不变，站点将正确运行在 `https://help.ccbus.cc/`。

> **注意：** 添加 CNAME 记录后，GitHub 需要几分钟验证 DNS 并签发 SSL 证书，期间可能出现证书警告，会自动恢复。

## 常见操作速查

| 操作 | 步骤 |
|------|------|
| 添加新文档 | 创建 `.md` 文件 → 编辑 `config/zh.ts` 或 `config/en.ts` 添加侧边栏条目 |
| 修改导航栏 | 编辑对应语言配置文件的 `nav` 数组 |
| 修改侧边栏 | 编辑对应语言配置文件的 `sidebar` 函数 |
| 添加新分组 | 在 `sidebar` 函数返回的数组中添加新的 `{ text, items }` 对象 |
| 修改全局样式 | 编辑 `docs/.vitepress/theme/custom.css` |
| 本地调试 | `npm run docs:dev` |
| 触发部署 | 推送到 `main` 分支或手动触发 GitHub Actions |
