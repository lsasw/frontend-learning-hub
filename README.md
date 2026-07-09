# Frontend Learning Hub

交互式技术学习教程合集 —— 统一门户入口 + 独立教程页面，打开即用。

## 🏠 入口

| 入口 | 说明 |
|------|------|
| **[index.html](./index.html)** | 🌟 **统一门户** — 导航栏 + 侧边栏 + 一键切换所有教程 |
| 各独立页面 | 下方教程均可单独在浏览器中打开 |

## 📚 教程索引

### 🧠 AI 智能体 & 工作流

| 文件 | 说明 | 主题 |
|------|------|------|
| [MetaGPT-CrewAI-分析报告.html](./MetaGPT-CrewAI-分析报告.html) | MetaGPT vs CrewAI 深度技术对比 | AI 多智能体框架 |
| [LangChain-LangGraph-Python-教程.html](./LangChain-LangGraph-Python-教程.html) | LangChain/LangGraph/Python 三合一教学 | AI 开发框架 |
| [Dify-n8n-实战教程.html](./Dify-n8n-实战教程.html) | Dify × n8n 双平台实战教程 | AI 工作流自动化 |

### ☕ Java 进阶

| 文件 | 说明 | 主题 |
|------|------|------|
| [Java-JUC-并发工具包教程.html](./Java-JUC-并发工具包教程.html) | Java JUC 并发工具包系统学习 | Java 并发编程 |
| [Java-JVM-虚拟机教程.html](./Java-JVM-虚拟机教程.html) | JVM 虚拟机架构 + GC + 调优 | Java 虚拟机 |

### 🗄️ 基础设施

| 文件 | 说明 | 主题 |
|------|------|------|
| [Redis-交互式学习指南.html](./Redis-交互式学习指南.html) | Redis 数据类型 / 持久化 / 缓存策略 / 分布式 | 缓存 & NoSQL |
| [消息队列系统-综合演示平台.html](./消息队列系统-综合演示平台.html) | Kafka / RabbitMQ / RocketMQ / Pulsar 综合对比 | 消息队列 |

## 🚀 使用方式

```bash
# 克隆仓库
git clone https://github.com/lsasw/frontend-learning-hub.git

# 方式一：打开统一门户（推荐）
open index.html

# 方式二：直接打开任意教程
open Java-JUC-并发工具包教程.html
```

## 🎨 特点

- 🏠 统一门户 —— 导航栏 + 侧边栏，流畅切换，无需刷新框架
- 📄 单文件 HTML，无外部依赖
- 📱 响应式布局，支持桌面端 + 移动端
- 🔽 折叠展开式交互设计
- 🎨 内置 SVG 架构图 / 流程图 / 思维导图
- 📋 代码块支持一键复制
- 🎯 面向实战场景（金融估值等）

## 🧱 架构说明

```
index.html          ← 统一门户入口（SPA 框架）
├── 顶部导航栏       ← Logo + 当前页面标题
├── 左侧分类侧边栏   ← AI / Java / 基础设施 分类导航
├── 内容区 (iframe)  ← 加载各教程页面
├── 首页欢迎页       ← 默认首页，教程卡片概览
└── 页脚             ← 版权信息

各教程页面           ← 保持独立，可单独打开
```

**新增页面只需两步：**
1. 创建教程 HTML 文件
2. 在 `index.html` 的侧边栏和首页卡片中添加对应的 `<a>` 标签（带 `data-nav` 属性）

## 📝 更新日志

- 2026-07-09: 新增统一门户入口 `index.html`，支持侧边栏导航 + iframe 内容切换
- 2026-07-08: 新增 MetaGPT-CrewAI 分析报告、LangChain/LangGraph/Python 教程、Dify/n8n 实战教程
- 2026-07-09: 新增 Java JUC 并发工具包教程、Java JVM 虚拟机教程、Redis 交互式学习指南、消息队列系统综合演示平台
