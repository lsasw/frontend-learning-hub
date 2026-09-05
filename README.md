# Mycelium · 菌丝

> 个人知识花园 —— 60+ 张互联互通、持续打理的常青笔记库。

根在地下，看不见，互联万物。
**菌丝** 把零散的技术笔记结成网络：用反向链接找回来、用图谱看见整体、用私人笔记留住顿悟。

## 🏠 入口

| 入口 | 说明 |
|------|------|
| **[index.html](./index.html)** | 🍄 **花园主入口** — 三视图（卡片/图谱/时间线）+ 反向链接 + 私人笔记 |

> 单文件 SPA（≈92 KB），离线可全部启动（仅 D3.js 图谱视图需联网）。所有状态写入 `localStorage`。

## 🧬 数据模型

笔记元数据统一在 [`garden-manifest.json`](./garden-manifest.json)：

```jsonc
{
  "id": "rag-fundamental",
  "title": "RAG 检索增强生成 · 学习指南",
  "cat": "AI · RAG",
  "level": "入门",
  "status": "已完结",
  "maturity": 4,            // 0 待开荒 1-2 种子 3 抽芽 4-5 常青
  "evergreen": true,
  "created": "2026-07-10",
  "updated": "2026-08-12",
  "tended": "2026-08-12",    // 上次打理
  "url": "ai-agent/RAG-检索增强生成-学习指南.html",
  "desc": "RAG 原理与架构图解，嵌入模型…",
  "tags": ["RAG", "Embedding"],
  "related": ["transformer", "rag-advanced", "langchain-deep"]
}
```

`related[]` 是双向链接的核心字段。所有反向链接由 `index.html` 启动时一次性构建。

## 🌐 三视图

| 视图 | 怎么开 | 适合什么场景 |
|---|---|---|
| 📇 **卡片** | 顶栏 / 默认 | 浏览 / 找一篇笔记 |
| 🌐 **图谱** (D3.js) | 顶栏切换 | 看到整体结构、发现意外关联 |
| ⏳ **时间线** | 顶栏切换 | 看近期打理过什么、按月回顾 |

## ⌨️ 快捷键

| 键 | 触发 |
|---|---|
| ⌘ / Ctrl + K | 打开命令面板（支持 `tag:` `cat:` 前缀） |
| ↑ ↓ | 命令面板内导航 |
| Enter | 打开当前高亮笔记 |
| Esc | 关命令面板 / 返回 |
| 🎲 | 随机漫步到一张已打理笔记 |

## 🧱 架构

```
index.html               ← 单文件 SPA（约 92 KB）
├── <header> 顶栏        ← 品牌 + ⌘K 搜索 + 🎲 探索 + 视图切换 + 主题
├── <aside>  侧边栏      ← 分类（按成熟度上色）+ 收藏 + 最近浏览 + 我的笔记
├── <main>   主区        ← 卡片 / 图谱 (D3.js) / 时间线 / 详情页
├── <.cmd-overlay>       ← ⌘K 命令面板（tag: / cat: 前缀）
└── <script type="application/json"> 内嵌 manifest，避免 file:// fetch 受限
```

**无构建**、**无后端**、**单文件优先**。

### 新增一张笔记流程

1. 创建 HTML 笔记文件
2. 在 `garden-manifest.json` 的 `notes[]` 增加一项，含 `url`、`desc`、`tags`
3. 已打理笔记请填 `maturity > 0` + `related[]`，并保持关联双向（在另一张的 `related` 也加上你自己）

## 📝 更新日志

- **2026-09-05**：项目升级为 **Mycelium · 菌丝** 个人知识花园。
  - 数据模型抽到 `garden-manifest.json`（55 张笔记）。
  - `index.html` 重写为单文件 SPA：三视图（卡片 / D3 力导向图谱 / 时间线）、反向链接、个人笔记（localStorage）、连续访问 streak、⌘K 命令面板、🎲 随机漫步。
- 2026-07-09：旧版统一门户入口 `index.html`，支持侧边栏导航 + iframe 内容切换（已废弃）。
- 2026-07-08：新增 MetaGPT-CrewAI 分析报告、LangChain/LangGraph/Python 教程、Dify/n8n 实战教程。
- 2026-07-09：新增 Java JUC 并发工具包教程、Java JVM 虚拟机教程、Redis 交互式学习指南、消息队列系统综合演示平台。
