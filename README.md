<div align="center">

# 🌐 梯子上网 (tizishangwang.world)

**电脑翻墙与 Windows / Mac 科学上网权威指南 · 行业级网络架构与知识图谱**

[![Official Site](https://img.shields.io/badge/Official%20Site-tizishangwang.world-0284c7?style=for-the-badge&logo=google-chrome&logoColor=white)](https://tizishangwang.world)
[![VitePress](https://img.shields.io/badge/VitePress-v1.6.4-4f46e5?style=for-the-badge&logo=vite&logoColor=white)](https://vitepress.dev/)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-42b883?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![SEO Health](https://img.shields.io/badge/SEO%20Health-100%25%20PASS-10b981?style=for-the-badge&logo=lighthouse&logoColor=white)](https://tizishangwang.world)
[![License](https://img.shields.io/badge/License-ISC-amber?style=for-the-badge)](./package.json)

<p align="center">
  <a href="https://tizishangwang.world">🌐 官网直达</a> •
  <a href="#-核心特性与架构亮点">✨ 核心特性</a> •
  <a href="#-全站主题拓扑图谱-topic-cluster">📚 内容图谱</a> •
  <a href="#-技术栈与工程实现">🛠 技术栈</a> •
  <a href="#-本地运行与构建">🚀 快速开始</a> •
  <a href="#-合规声明">⚖️ 免责声明</a>
</p>

</div>

---

## 📖 项目简介

`tizishangwang.world`（梯子上网）是一套专为 **Windows / macOS 桌面端电脑用户** 打造的深度科学上网技术知识库与网络选型体系。

不同于传统粗制滥造的单页推荐站，本项目采用 **VitePress SSG 静态站点生成体系**，深度融合 **Google / Bing 技术 SEO 规范** 与 **E-E-A-T（专业性、经验、权威性、可信度）内容标准**，为跨国跨境办公人员、科研学者、出海开发者及日常网络用户提供从底层网络协议解密、客户端深度配置到跨境专线实测的全链路解决方案。

---

## ✨ 核心特性与架构亮点

### 1. 蜂巢式 Topic Cluster（主题集群拓扑）
- **八大一级核心柱页 (Pillars)**：全面覆盖电脑翻墙、Windows 科学上网、Mac 科学上网、客户端下载、梯子推荐、机场推荐、免费机场、电脑网络排障。
- **34+ 深度长尾子集群**：单篇字数 1,000 ~ 15,000 字不等，彻底告别单薄内容（Thin Content），提供可落地的实战步骤与真实命令行代码。
- **高连通性内链网**：网状交叉锚文本穿透，使全站任意页面的蜘蛛爬取深度 $\le 2$。

### 2. Vue 3 动态可视化交互组件
- **`SpeedDashboard.vue`**：实时流式测速与全球节点（香港、日本、新加坡、美国）延迟抖动看板。
- **`StreamingMatrix.vue`**：Netflix 4K、Disney+、ChatGPT、YouTube Premium 解锁能力与原生住宅 IP 判定矩阵。
- **`BrandComparisonTable.vue`**：万字级专线网络与公网中转核心参数横向大对比。
- **`AsciiDecisionTree.vue`**：面向新手与极客用户的终端字符风分步决策树。
- **`FaqSection.vue`**：Answer-First 核心折叠交互，且自动输出合规的 `FAQPage` Schema。
- **`AuthorBadge.vue`**：CCIE 认证网络架构审计师署名背书，强化 E-E-A-T 权威度。

### 3. 搜索引擎 SEO 基础设施（100% 静态验证）
- **规范自引用 Canonical**：全站 100% 自动注入，无斜杠/有斜杠统一收敛，根除内容重复惩罚。
- **全要素 Meta 与 Social Card**：动态注入 Open Graph（`og:title`, `og:image`, `og:url`）及 Twitter Card。
- **多引擎站长验证槽位**：原生预置 Google、Bing、百度、神马（夸克）、360 搜索所有权验证。
- **多重结构化数据 (Schema.org JSON-LD)**：
  - `WebSite` 与 `SearchAction`
  - `Organization`（实验室品牌与 Logo 实体）
  - `BreadcrumbList`（自动化层级面包屑）
  - `FAQPage`（强化 ChatGPT / Perplexity / Google SGE 引用权重）
- **精细化 Robots 与 Sitemap**：47 条正规 URL 清单，内部拓扑白皮书自动打上 `noindex, nofollow` 并物理屏蔽。

---

## 📚 全站主题拓扑图谱 (Topic Cluster)

```
tizishangwang.world (首页)
├── 💻 /pc/ (电脑翻墙知识大系)
│   ├── /vpn-vs-proxy (网络代理 vs VPN 隧道底层差异)
│   ├── /getting-started (电脑首次上网完整闭环流程)
│   ├── /protocols (协议层解密：Shadowsocks 到 VLESS)
│   ├── /lines-comparison (IEPL/IPLC 专线 vs 公网中转 vs 直连)
│   └── /security-compliance (网络安全、DNS 泄露与法律红线)
├── 🪟 /windows/ (Windows 科学上网实战宝典)
│   ├── /system-proxy-vs-tun (系统代理 vs TUN 虚拟网卡深度实操)
│   ├── /clash-verge-tutorial (Clash Verge Rev 深度实操指南)
│   ├── /v2rayn-tutorial (v2rayN 极客与多核心配置全书)
│   ├── /uwp-loopback (Windows 局域网回环代理与应用解限)
│   └── /troubleshooting-7 (Windows 7 大典型断网排障大系)
├── 🍎 /mac/ (Mac 科学上网全景指南)
│   ├── /apple-silicon (M1/M2/M3/M4 架构原生支持与选型)
│   ├── /network-extension (系统代理与 Network Extension 权限)
│   ├── /client-comparison (Surge / Clash Verge / FlClash 评测)
│   └── /terminal-proxy (Mac 终端命令行代理加速实战)
├── 🚀 /clients/ (代理客户端下载矩阵)
│   ├── /clash-verge-rev (Mihomo 内核现代跨平台客户端)
│   ├── /v2rayn (Windows 经典强大的多核心客户端)
│   ├── /flclash (基于 Flutter 的现代全平台极简客户端)
│   └── /hiddify (新一代多协议通用客户端)
├── 🪜 /ladder/ (梯子推荐与决策指南)
│   ├── /office-work (长时间跨国办公稳定性方案)
│   ├── /budget-options (高性价比月付低预算首选)
│   └── /multi-devices (多设备并发与家庭团队协作)
├── ✈️ /airport/ (机场深度实测与横评)
│   ├── /guangshuyun (光速云 IEPL 双专线主推深度评测)
│   ├── /feimao (飞猫云专属定制客户端评测)
│   ├── /weifeng (微风网络原生 IP 专线评测)
│   └── /streaming-matrix (流媒体与 AI 工具解锁评测榜)
├── 🎁 /free/ (免费机场与低成本方案)
│   ├── /security-risks (免费节点可用性与隐私钓鱼红线)
│   ├── /free-trial (免费试用机制鉴别与避坑指南)
│   ├── /software-vs-service (开源软件免费与节点服务的本质区别)
│   └── /budget-alternatives (低价月付与不限时轻量包方案)
├── 🔧 /network-troubleshooting/ (电脑网络排障全书)
│   ├── /browser-fail (设置代理后网页无法打开排查)
│   ├── /tun-conflict (客户端报错与 TUN 网卡冲突深度分析)
│   ├── /dns-issues (DNS 污染、泄露与 hosts 锁死抢修)
│   └── /pc-vs-phone (手机能连电脑却连不上的差异分析)
└── 🛡️ 信任与合规体系
    ├── /about (关于我们 & 实验室成员背景)
    ├── /methodology (严苛评测方法论与指标定义)
    ├── /disclosure (商业返利透明披露，全站赞助链接 nofollow sponsored)
    ├── /privacy (用户隐私保护条例)
    └── /terms (网站服务使用协议)
```

---

## 🛠 技术栈与工程实现

| 分层 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **文档引擎** | [VitePress 1.6.4](https://vitepress.dev/) | 极速打包、纯静态预渲染 (SSG)、支持 Markdown 与 Vue 组件混排 |
| **前端框架** | [Vue 3.5](https://vuejs.org/) + TypeScript | 组件化设计，构建可交互仪表板与数据看板 |
| **构建工具** | [Vite 6](https://vitejs.dev/) + Rollup | 毫秒级热更新开发环境，秒级静态 HTML / CSS 编译 |
| **静态部署** | Apache HTTP Server / Nginx | 配置 `.htaccess` 实现全量 HTTPS 301、Clean URLs 重写与 HSTS 安全头 |
| **代码搜索** | VitePress 本地搜索插件 | 开箱即用离线极速分词检索 |

---

## 🚀 本地运行与构建

### 1. 环境准备
确保您的运行环境中已安装：
- **Node.js** >= `18.0.0`
- **npm** >= `9.0.0`

### 2. 克隆代码与依赖安装
```bash
# 克隆仓库
git clone https://github.com/abcabc98698-dev/tizishangwang.world.git

# 进入目录
cd tizishangwang.world

# 安装依赖
npm install
```

### 3. 本地启动开发服务器
```bash
npm run docs:dev
```
启动后访问本地地址：`http://localhost:5173/`，支持热更新（HMR）。

### 4. 静态生产构建与验证
```bash
# 静态构建（生成 dist/ 纯静态资源目录与 sitemap.xml）
npm run docs:build

# 本地预览生产构建产物
npm run docs:preview
```

---

## 📂 项目目录结构

```
tizishangwang.world/
├── docs/                             # 文档与内容源码根目录
│   ├── .vitepress/                   # VitePress 核心配置与主题定制
│   │   ├── config.mts                # 站点全局配置、SEO Head 与内链导航
│   │   ├── theme/                    # 自定义主题扩展
│   │   │   ├── components/           # 交互式 Vue 组件库
│   │   │   ├── custom.css            # 现代化暗色主题样式体系
│   │   │   └── index.ts              # 主题挂载入口
│   │   └── dist/                     # 静态编译产物（已被 git 忽略）
│   ├── public/                       # 静态公共资源（图标、头像、robots、.htaccess）
│   ├── pc/                           # 电脑翻墙专题模块
│   ├── windows/                      # Windows 专题模块
│   ├── mac/                          # Mac 专题模块
│   ├── clients/                      # 客户端专题模块
│   ├── ladder/                       # 梯子专题模块
│   ├── airport/                      # 机场评测模块
│   ├── free/                         # 免费机场模块
│   ├── network-troubleshooting/      # 网络排障模块
│   ├── about.md                      # 关于我们
│   ├── methodology.md                # 评测方法论
│   ├── disclosure.md                 # 商业推广披露
│   ├── privacy.md                    # 隐私政策
│   ├── terms.md                      # 服务条款
│   ├── site-architecture.md          # 内部架构拓扑白皮书 (noindex)
│   └── index.md                      # 站点首页
├── .gitignore                        # Git 忽略配置
├── package.json                      # 依赖与脚本配置
└── README.md                         # 项目技术自述文件
```

---

## ⚖️ 合规声明与免责条款

1. 本项目所包含的所有技术评测、客户端教程、网络拓扑解析与故障排错方案仅用于**计算机网络协议学习、学术跨境访问与合规办公参考**。
2. 请使用者自觉遵守所在国家和地区的相关网络法律法规，**严禁将本项目所述技术与工具用于任何从事危害国家安全、侵犯他人隐私或非法网络渗透等违法违规行为**。
3. 本项目全站商业链接均遵循 Google 搜索规范，显式标注 `rel="nofollow sponsored noopener"`，评测结果独立于商业赞助，真实客观反映晚高峰实测数据。

---

<div align="center">

**Copyright © 2026 [tizishangwang.world](https://tizishangwang.world) 梯子上网 | All Rights Reserved.**

</div>
