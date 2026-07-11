# Frontend Learning Hub · 项目记忆

> 最后更新：2026-07-11 | 版本：v2.0

---

## 1. 项目简介

**项目名称：** Frontend Learning Hub（前端学习中心）

**项目定位：** 一个面向后端/全栈开发者的交互式技术教程合集，所有内容以单文件 HTML 形式交付，打开即用，覆盖 AI 智能体、Java 进阶、Python 后端、分布式基础设施等领域。

**GitHub Pages：** [https://lsasw.github.io/frontend-learning-hub/](https://lsasw.github.io/frontend-learning-hub/)

**目标用户：** 有一定后端基础的开发者，希望通过结构化教程快速建立跨领域技术认知。

---

## 2. 技术栈

| 层面 | 技术选型 | 说明 |
|------|---------|------|
| 前端框架 | 原生 HTML/CSS/JS | 无框架依赖，所有页面单文件自包含 |
| 门户架构 | SPA (hash 路由 + iframe) | `index.html` 为统一入口，iframe 加载子页面 |
| 部署平台 | GitHub Pages | 通过 GitHub Actions 自动构建部署 |
| CI/CD | GitHub Actions (`deploy.yml`) | push main 触发，上传静态文件到 Pages |
| 字体 | 系统字体栈 | 正文 `PingFang SC / Microsoft YaHei`，代码 `Cascadia Code / Fira Code` |
| 图表 | 内联 SVG | 架构图、流程图、动画均用纯 SVG |
| 代码高亮 | 手动 CSS 类着色 | `.kw` `.str` `.fn` `.num` `.cmt` `.typ` |

---

## 3. 核心功能模块

### 3.1 统一门户 (`index.html`)

- **顶部导航栏** (54px)：Logo + 当前页面标题 + 移动端汉堡菜单
- **左侧分类侧边栏** (250px)：按领域分类的教程导航，支持 `data-nav` + `data-title` 属性
- **内容区**：iframe 加载子页面，CSS/JS 天然隔离
- **首页**：welcome-hero 统计区 + 卡片网格，每个教程对应一张卡片
- **页脚** (48px)：版权信息

### 3.2 路由系统

- URL hash 驱动：`#redis` → 自动匹配 `data-nav="redis"` → 加载对应 iframe
- 页面刷新保持当前状态
- 首页卡片和侧边栏导航共享同一套路由逻辑

### 3.3 教程内容体系（36 篇）

| 分类 | 教程 | 文件名 |
|------|------|--------|
| 🧠 AI 智能体 & 工作流 | MetaGPT vs CrewAI | `MetaGPT-CrewAI-分析报告.html` |
| | LangChain + LangGraph | `LangChain-LangGraph-Python-教程.html` |
| | Dify × n8n | `Dify-n8n-实战教程.html` |
| | RAG 检索增强生成 | `RAG-检索增强生成-学习指南.html` |
| | RAG 进阶全攻略 | `RAG-检索增强生成-进阶全攻略.html` |
| | LangChain 深入学习 | `LangChain-深入学习教程.html` |
| | LangGraph 状态图编排 | `LangGraph-状态图编排教程.html` |
| | LlamaIndex 数据框架 | `LlamaIndex-数据框架教程.html` |
| | Transformer 架构解析 | `Transformer-架构解析.html` |
| | 大模型微调技术 | `大模型微调技术解析.html` |
| | ML & DL 理论基础 | `机器学习与深度学习-理论基础全指南.html` |
| | AI Agent 开发概念全指南 | `AI-Agent-开发概念全指南.html` |
| 🛠️ AI 开发工具 | AI 编程 Token 节省 | `AI编码Token节省工具.html` |
| | AI 前端工程生态 | `AI前端工程生态.html` |
| 🐍 Python 后端 | Python 后端技术栈全景图 | `Python-后端技术栈全景图.html` |
| | Python3 语法讲解与语法糖 | `Python3-语法讲解与语法糖.html` |
| | Pandas 数据处理 | `Pandas-数据处理全指南.html` |
| | NumPy 科学计算 | `NumPy-科学计算全指南.html` |
| 📊 大数据处理 | Spark & Flink | `Spark-Flink-大数据处理教程.html` |
| ☕ Java 进阶 | JUC 并发工具包 | `Java-JUC-并发工具包教程.html` |
| | JVM 虚拟机 | `Java-JVM-虚拟机教程.html` |
| | Spring 全家桶 | `Spring-全家桶-核心组件详解.html` |
| | Java vs Python 异步 | `Java-vs-Python-异步编程对比.html` |
| | Java 核心问题深度分析 | `Java-核心问题深度分析.html` |
| | 分布式锁 Redisson | `Java-分布式锁-Redisson深度解析.html` |
| | 集合 & JUC & Python 关键字 | `Java集合-JUC-Python关键字-综合教程.html` |
| 🗄️ 基础设施 | 分布式系统 | `分布式系统-交互式学习平台.html` |
| | Redis | `Redis-交互式学习指南.html` |
| | 消息队列（3 篇） | `消息队列系统-综合演示平台.html` / `消息队列-核心概念入门.html` / `消息队列-防重复消费详解.html` |
| 📐 系统架构 | 系统架构师知识体系 | `系统架构师-知识体系全指南.html` |
| | Docker & Kubernetes | `Docker-Kubernetes-容器化与编排指南.html` |
| | 后端面试知识体系 | `后端技术栈知识体系-面试分析与故障排查.html` |
| | 分布式服务化拆分路线 | `分布式服务化拆分路线.html` |
| | 高并发系统设计 | `高并发系统设计-实施步骤全指南.html` |

---

## 4. 目录结构

```
frontend-learning-hub/
├── index.html                         # 🔑 统一门户入口（SPA 框架）
├── MEMORY.md                          # 📋 本项目记忆文件
├── README.md                          # GitHub 仓库 README
│
├── [教程文件].html                    # 36 个单文件教程，命名规则：
│   ├── MetaGPT-CrewAI-分析报告.html   #   中文描述性命名
│   ├── Java-JUC-并发工具包教程.html   #   分类前缀 + 主题 + 后缀
│   ├── Redis-交互式学习指南.html      #   便于识别和排序
│   └── ...
│
├── .github/
│   └── workflows/
│       └── deploy.yml                 # GitHub Actions 自动部署
│
├── .workbuddy/
│   ├── memory/
│   │   ├── YYYY-MM-DD.md              # 每日工作日志（追加模式）
│   │   └── MEMORY.md                  # 项目长期记忆
│   └── skills/                        # 项目级技能模块
│       └── content-to-html/           # 内容转 HTML 技能
│           └── SKILL.md
│
└── assets/                            # （暂无，所有资源内联）
```

---

## 5. 关键依赖与配置

### 5.1 外部依赖：无

所有教程页面均无外部 CDN 依赖。唯一使用 Tailwind CSS CDN 的页面（`AI编码Token节省工具.html`、`AI前端工程生态.html`）来自外部导入，不影响核心架构。

### 5.2 GitHub Actions 部署 (`deploy.yml`)

```yaml
触发条件: push → main 分支
环境: ubuntu-latest
步骤:
  1. Checkout 代码
  2. Upload artifact (整个仓库作为 Pages 静态文件)
  3. Deploy to GitHub Pages
```

### 5.3 本地开发

无需任何构建工具。直接用浏览器打开 `index.html` 即可本地预览全部内容。

```bash
# 本地预览（任选一种）
open index.html                        # macOS
start index.html                       # Windows
python -m http.server 8080             # 通过 HTTP 服务（推荐，避免 iframe 跨域问题）
```

---

## 6. 新增教程流程

三步操作，无需修改任何现有代码逻辑：

1. **创建教程 HTML 文件** — 单文件，内联 CSS/JS，放置于项目根目录
2. **添加侧边栏导航** — 在 `index.html` 对应分类 `<div class="cat">` 下方，添加带 `data-nav` 和 `data-title` 的 `<a>` 标签
3. **添加首页卡片** — 在 `index.html` 的 `.cards-grid` 区域，按分类位置添加 `.card-link` 卡片

```html
<!-- 侧边栏导航示例 -->
<a class="nav-item" data-nav="new-topic" data-title="新教程 · 标题" href="新教程.html" target="contentFrame">
  <span class="icon">📘</span> 新教程名称
</a>

<!-- 首页卡片示例 -->
<a class="card-link" data-nav="new-topic" data-title="新教程 · 标题" href="新教程.html" target="contentFrame">
  <div class="card-icon ic-java">📘</div>
  <h3>新教程名称</h3>
  <p>简短描述</p>
  <div class="tags"><span class="tag ic-java">标签</span></div>
</a>
```

---

## 7. 设计规范

### 7.1 门户配色（CSS 变量）

```css
--primary: #2563eb      /* 蓝色主调 */
--bg: #f8fafc           /* 浅灰背景 */
--surface: #ffffff      /* 白色卡片 */
--text: #0f172a         /* 正文 */
--text2: #475569        /* 次要文字 */
--border: #e2e8f0       /* 边框 */
```

### 7.2 子页面设计约定

- 主题色自定义（如 Redis 用红色 `#DC382D`，Spring 用绿色 `#059669`）
- 导航栏 sticky top + 顶部 logo 链接回门户
- 章节编号圆角方块 + 分区标题下划线
- 代码块深色背景 `#1a1a2e`，带语法高亮类 + 复制按钮
- Tip 提示块 4 种颜色（info / warn / good / blue）
- 响应式 768px 断点
- 字体：`--sans` 系统栈 + `--mono` 等宽栈

---

## 8. 会话恢复指南

新会话开始时，阅读本文件即可获得完整项目上下文。
额外细节参见 `.workbuddy/memory/` 下的每日日志（按日期组织的操作记录）。

**快速导航：**
- 门户入口：`index.html`
- 最新教程：按 `git log --oneline -5` 查看
- 部署状态：`gh run list --limit 3`
