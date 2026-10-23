---
layout: doc
title: macOS 终端全局代理配置指南：Zsh 环境变量、Homebrew 与 Git 命令行加速 - tizishangwang.world
description: 解决 Mac 命令行无法翻墙导致 brew update 超时、git clone 失败与 pip 报错问题，详解在 ~/.zshrc 中配置代理别名的一键方案。
head:
  - - meta
    - name: keywords
      content: Mac终端代理, macOS命令行代理, brew加速, git clone加速, zsh代理设置, Mac终端翻墙
---

<script setup>
import { AIRPORTS } from '../data/airports';
</script>

<div class="hero-tagline-badge">
  <span>💻 开发者加速秘籍 | 终端命令行与开发环境代理</span>
</div>

# macOS 终端全局代理配置指南：Zsh 环境变量、Homebrew 与 Git 命令行加速

> **【Answer-First 核心技术结论】**  
> 1. **为什么开了 Mac 代理客户端，终端里的 `curl`、`git clone` 还是超时？** 因为 macOS 终端（Terminal / iTerm2）默认运行在独立的用户 Shell 环境中，**完全无视操作系统的网络代理图形化设置**。  
> 2. **最快一键解决方案**：在用户目录下的 `~/.zshrc` 配置文件中写入快捷别名函数 `proxy` 与 `unproxy`，平时终端直连国内，需要翻墙时输入 `proxy` 回车，瞬间满速下载 GitHub 仓库与 Homebrew 依赖。

---

## 一、配置 ~/.zshrc 极速代理函数

在 Mac 终端中运行以下命令编辑 Zsh 配置文件：

```bash
# 打开配置文件
nano ~/.zshrc
```

在文件末尾追加以下标准化代理函数脚本（假设您的 Clash 混合代理端口为 `7890`）：

```bash
# === 科学上网终端代理一键配置 ===
function proxy() {
    export http_proxy="http://127.0.0.1:7890"
    export https_proxy="http://127.0.0.1:7890"
    export all_proxy="socks5://127.0.0.1:7890"
    echo "⚡ 终端代理已开启 [HTTP/HTTPS: 7890, SOCKS5: 7890]"
    curl -I https://www.google.com
}

function unproxy() {
    unset http_proxy https_proxy all_proxy
    echo "🛑 终端代理已关闭"
}
```

按下 `Ctrl + O` 保存并按 `Ctrl + X` 退出，随后运行命令立即生效：

```bash
source ~/.zshrc
```

---

## 二、Git 专属全局代理配置

如果经常需要拉取海量代码仓库，可以直接让 Git 专属走代理端口：

```bash
# 为 GitHub 单独配置代理 (推荐：仅加速 GitHub，不影响国内 Gitee)
git config --global url."https://github.com/".insteadOf git@github.com:
git config --global http.https://github.com.proxy "http://127.0.0.1:7890"

# 查看当前 Git 代理配置
git config --global --get http.https://github.com.proxy

# 如需取消 Git 代理
git config --global --unset http.https://github.com.proxy
```

---

## 三、推荐适配的高速专线机场

<AirportCard :brand="AIRPORTS[0]" />

---

## 四、常见问题深入解答 (FAQ)

<FaqSection :faqList="[
  {
    q: '为什么开了 proxy 之后运行 brew install 依然很卡？',
    a: 'Homebrew 除了从 GitHub 拉取代码外，还会下载二进制预编译包（Bottle）。如果代理节点延迟较高，建议将 Homebrew 的 Bottles 镜像源替换为国内的清华源或中科大源，实现双管齐下。'
  },
  {
    q: '开启客户端的 TUN 模式后，终端还需要配置这些别名吗？',
    a: '不需要！TUN 模式通过虚拟网卡在底层路由表全面拦截所有网络流量，终端无需设置任何环境变量即可自动走代理。'
  }
]" />

---

## 五、全网蜂巢式内链导航矩阵 (Topic Cluster Hub)

<ClusterGrid :items="[
  { title: 'Mac 科学上网总纲', desc: 'macOS 全局代理配置与客户端全景选型', link: '/mac/' },
  { title: 'Apple Silicon 适配', desc: 'M1/M2/M3/M4 原生 ARM64 选型', link: '/mac/apple-silicon' },
  { title: 'Network Extension 权限', desc: '系统扩展授权与弹窗消除实战', link: '/mac/network-extension' },
  { title: 'Mac 客户端横评', desc: 'Surge vs Clash Verge vs FlClash', link: '/mac/client-comparison' }
]" />
