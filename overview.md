# Mycelium · 菌丝 · 开发交接文档

> **设计师**: UI Designer (像素君)  
> **日期**: 2026-07-25 → 改版 v2：2026-09-05  
> **项目**: Mycelium · 菌丝（个人知识花园）—— 历史版本：Mycelium · 菌丝 首页重设计  
> **状态**: ✅ 花园形态重构完成，devportal 2.0 设计稿已沉淀进记忆

---

## 一、交付物清单

| 文件 | 路径 | 说明 |
|------|------|------|
| 设计系统规范 | `design-system/index.html` | 完整设计 Token、组件库、布局规范、交互模式、响应式策略 |
| 高保真交互稿 | `design-system/homepage-redesign.html` | 可操作的原型：搜索、暗色模式、键盘导航、命令面板全部可用 |
| 本交接文档 | `overview.md` | 设计决策说明、改进对比、实施指引 |

---

## 二、设计决策说明

### 2.1 为什么重新设计？

旧版首页存在 6 个核心问题，直接影响开发者用户体验：

1. **信息密度过低** — 大卡片(300px) + 大间距(16px gap)，单屏仅可见 6 个教程
2. **无搜索功能** — 47 个教程只能靠肉眼扫描侧边栏
3. **无暗色模式** — 开发者长时间阅读的刚需
4. **Emoji 图标不专业** — 📊⛓️🧩 缺乏视觉一致性
5. **信息层级扁平** — 所有卡片一视同仁，没有元数据辅助判断
6. **键盘不可操作** — 只有 Esc 关侧边栏

### 2.2 设计方向：「开发者优先」

参考 Linear、Vercel、GitHub 等一线开发者工具的视觉语言：

- **高密度紧凑布局**：14px 基准字号，280px 卡片宽度，8px 间距
- **键盘驱动**：⌘K 命令面板 + ↑↓ 方向键 + Enter 确认
- **暗色原生**：CSS 变量驱动，明暗双主题等优先级
- **SVG 线条图标**：16px stroke-1.5，统一视觉语言

### 2.3 核心改进对比

| 维度 | 旧版 v1 | 新版 v2 (DevPortal) |
|------|---------|---------------------|
| 顶栏 | Logo + 页标题 | Logo + 全局搜索 + 主题切换 + GitHub |
| 侧边栏 | 250px / Emoji | 240px / SVG 图标 / 更紧凑 |
| 首页 Hero | 居中大标题 | 左对齐信息流 + 实时状态点 |
| 卡片 | 300px / 无元数据 | 280px / 含阅读时长+浏览量+日期 |
| 搜索 | ❌ | ✅ ⌘K 命令面板 + 模糊匹配 |
| 暗色模式 | ❌ | ✅ CSS 变量 + localStorage |
| 键盘操作 | 仅 Esc | ⌘K / ↑↓ / Enter / Esc / ⇧⌘L |
| 字体 | 系统默认 16px | Inter 14px + JetBrains Mono |
| 色彩 | 扁平定义 | CSS 变量 Token 系统 |

---

## 三、组件标注规格

### 3.1 教程卡片 (核心组件)

```
┌─────────────────────────────────────┐
│ ┌────┐  RAG 检索增强生成全指南      │
│ │icon│                              │  ← card-icon: 36×36, radius-6px
│ └────┘                              │     h4: 13px / 600 / line-1.4
│                                     │
│ RAG 原理与架构图解 · 嵌入模型...    │  ← desc: 12px / text-2 / 2行截断
│                                     │
│ [RAG进阶] [变体架构] [NEW]          │  ← tags: 11px / 600 / radius-full
│ ──────────────────────────────────  │  ← border-top: 1px subtle
│ ⏱25min  📊1.2K  📅07.10            │  ← meta: 11px / mono / text-3
└─────────────────────────────────────┘
```

**尺寸标注**：
- 卡片：padding 16px / border-radius 10px / border 1px
- hover：border → primary + shadow-md + translateY(-2px)
- hover::before：顶部 2px 彩色条（分类强调色）

### 3.2 搜索框 / 命令面板触发器

```
[🔍 搜索 47 个教程…                    ⌘K]
```

- max-width: 420px / height: 34px / border-radius: 8px
- hover: border → primary + shadow-sm
- kbd badge：mono 11px / 右对齐

### 3.3 侧边栏导航项

```
┌──────────────────────────────────────┐
│ ▎ [ic] RAG 进阶全攻略         [NEW] │
└──────────────────────────────────────┘
```

- padding: 6px 12px / margin: 1px 0 / border-radius: 6px
- active: background primary-light + border-left 2px primary
- NEW badge: 9px / green-500 / radius-full

### 3.4 CSS 变量清单 (可直接复制)

```css
:root {
  /* 色彩 - 完整 11 级灰阶 + 10 级蓝 + 7 级紫 */
  --gray-50: #fafafa;  --gray-900: #18181b;
  --blue-600: #2563eb; --purple-600: #9333ea;
  /* ... 完整清单见 design-system/index.html :root 块 */

  /* 主题映射 */
  --bg: var(--gray-50);    --surface: #ffffff;
  --border: var(--gray-200); --text: var(--gray-900);
  --primary: var(--blue-600);

  /* 字体 */
  --font-sans: 'Inter', -apple-system, ...;
  --font-mono: 'JetBrains Mono', ...;

  /* 间距 - 4px 基准 */
  --sp-1: 4px; --sp-2: 8px; ... --sp-16: 64px;

  /* 圆角 */
  --radius-sm: 6px; --radius: 8px; --radius-md: 10px;

  /* 布局 */
  --topbar-h: 56px; --sidebar-w: 240px;
}
```

---

## 四、实施路径 (建议优先级)

### Phase 1：基础架构 (0.5 天)
1. 在 `index.html` 的 `:root` 中定义所有 CSS 变量
2. 替换硬编码颜色为 `var(--token)`
3. 调整全局字号到 14px 基准

### Phase 2：顶栏 + 搜索 (1 天)
4. 顶栏加入搜索框（暂用 `<input>` 或 `<button>`）
5. 实现 ⌘K 命令面板（搜索 + 键盘导航）
6. 搜索数据源：从现有 `data-title` 属性构建索引

### Phase 3：暗色模式 (0.5 天)
7. 添加 `[data-theme="dark"]` 变量覆盖块
8. 顶栏添加主题切换按钮
9. localStorage 持久化用户选择

### Phase 4：图标系统 (0.5 天)
10. 将 emoji 替换为 SVG 线条图标
11. 推荐图标库：Lucide Icons / Heroicons (outline)
12. 统一尺寸 16px / stroke-width 1.5

### Phase 5：卡片 + 首页布局 (0.5 天)
13. 卡片缩小至 280px minmax
14. 添加元数据行（阅读时长等 — 需手动标注或估算）
15. Hero 从居中改为左对齐信息流

### Phase 6：响应式适配 (0.5 天)
16. 768px 断点：侧边栏 → 汉堡菜单
17. 卡片网格自适应列数

**总工期估算：3-3.5 天**

---

## 五、技术注意事项

1. **iframe 隔离**：现有架构通过 iframe 加载子页面，暗色模式仅作用于外层 index.html。子页面需各自实现暗色模式，或通过 `postMessage` 同步主题状态。

2. **搜索索引构建**：建议在页面加载时从 DOM 的 `data-title` + `data-nav` 属性构建搜索索引，无需额外数据文件。

3. **图标替换策略**：emoji → SVG 是最大工作量。建议使用统一的 `<svg>` inline 方式，或创建一个 JS 图标映射对象（如交互稿中的 `I` 对象）。

4. **字体加载**：Inter 和 JetBrains Mono 可通过 Google Fonts CDN 加载，或下载为本地 woff2 文件。建议 `font-display: swap` 防止 FOIT。

5. **性能**：所有交互均为原生 JS，无依赖。命令面板搜索为内存过滤，47 条数据无需虚拟滚动。

---

## 六、后续迭代建议

- [ ] 教程阅读时长自动统计（基于字数 / 代码行数估算）
- [ ] 浏览量统计（需后端支持或用 localStorage 简单计数）
- [ ] 最近浏览记录（localStorage 存储最近 5 条）
- [ ] 标签筛选器（点击 tag 过滤同标签教程）
- [ ] 教程难度评级（入门/进阶/专家 三级标记）
- [ ] 全局暗色模式同步到 iframe 子页面
