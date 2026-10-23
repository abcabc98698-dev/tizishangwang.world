---
layout: doc
title: 开启代理后浏览器无法打开网页？PAC 规则、系统代理与端口被占排查 - tizishangwang.world
description: 深度解决电脑开启科学上网客户端后 Chrome、Edge 浏览器提示 ERR_PROXY_CONNECTION_FAILED、连接超时或白屏的排查方案。
head:
  - - meta
    - name: keywords
      content: 代理开启打不开网页, ERR_PROXY_CONNECTION_FAILED, Chrome代理连接失败, Edge翻墙白屏, 系统代理端口被占
---

<script setup>
import { AIRPORTS } from '../data/airports';
</script>

<div class="hero-tagline-badge">
  <span>🚑 急救排障大系 | 浏览器代理故障深度根治</span>
</div>

# 开启代理后浏览器无法打开网页？PAC 规则、系统代理与端口被占排查

> **【Answer-First 核心急救三步骤】**  
> 遇到“开启翻墙后浏览器所有网页打不开，关掉梯子反而能上网”，请按以下顺序在 1 分钟内自查解决：  
> 1. **核对代理端口是否被抢占**：打开客户端设置查看 Mixed Port 端口（默认为 `7890`）。打开 Windows 设置「网络和 Internet」→「代理」，确认手动代理的端口**必须与客户端实际运行端口严格一致**。若被迅雷、360 等软件抢占，在客户端中将端口修改为 `7892` 或 `10808`。  
> 2. **检查节点是否存活（小闪电测速）**：如果选择的节点已经下线超时（显示 Timeout），浏览器自然无法收到响应。点击客户端右上角的 ⚡ 测速图标，切换到一个显示绿色的存活专线节点。  
> 3. **清除浏览器第三方代理插件冲突**：如果安装了 SwitchyOmega、Proxy SwitchySharp 等浏览器插件，确保插件模式设置为「使用系统代理」或先临时禁用插件，防止插件与客户端产生规则死锁。

---

## 一、排障决策流 (Decision Flow)

<AsciiDecisionTree title="浏览器代理无法加载网页排查决策树">
                  [开启代理后 Chrome/Edge 打不开网页？]
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
【报错：ERR_PROXY_...】    【报错：ERR_CONNECTION_...】  【网页无报错无限转圈】
         │                        │                        │
         ▼                        ▼                        ▼
[系统代理未正确挂钩]       [节点超时或协议失效]      [分流规则错配或DNS死锁]
• 检查本地 7890 端口     • 在客户端测速切换节点   • 将模式从全局切为规则
• 确认客户端服务已运行   • 检查套餐流量是否用尽   • 开启 Fake-IP 模式
</AsciiDecisionTree>

---

## 二、四大典型浏览器报错与修复方案

### 1. ERR_PROXY_CONNECTION_FAILED (代理连接失败)
- **原因**：浏览器尝试通过 `127.0.0.1:7890` 访问外网，但本地没有任何程序在这个端口监听。
- **修复**：
  1. 检查 Clash Verge Rev 或 v2rayN 是否意外崩溃退出；
  2. 重新启动客户端，并确认「系统代理」开关处于开启状态。

### 2. NET::ERR_CERT_COMMON_NAME_INVALID (证书无效警告)
- **原因**：部分恶意软件或被感染的公共节点试图进行中间人解密，伪造了 SSL 证书。
- **修复**：立即断开当前不可信节点，切换为正规商业专线（如光速云或微风网络）。

---

## 三、推荐稳定不断连专线

<AirportCard :brand="AIRPORTS[0]" />

---

## 四、常见问题深入解答 (FAQ)

<FaqSection :faqList="[
  {
    q: '为什么 Edge 浏览器打不开网页，而 Chrome 可以？',
    a: 'Edge 浏览器在 Windows 10/11 中部分版本可能受到应用沙盒回环网络隔离。打开 Clash Verge Rev 的「UWP 回环工具」，将 Microsoft Edge 勾选豁免并保存即可解决。'
  },
  {
    q: '如何判断是节点问题还是本地电脑网络问题？',
    a: '在客户端中点击节点测速：如果所有节点都显示红色 Timeout 或 -1，说明是本地网络无法连接机场入口（或系统时间不准）；如果部分节点显示有绿色毫秒延迟，说明本地网络正常，只需双击切换到绿色节点即可。'
  }
]" />

---

## 五、全网蜂巢式内链导航矩阵 (Topic Cluster Hub)

<ClusterGrid :items="[
  { title: '网络排障总纲', desc: '电脑网络问题诊断全书与决策流', link: '/network-troubleshooting/' },
  { title: 'TUN 网卡冲突解决', desc: '虚拟网卡安装失败与驱动修复', link: '/network-troubleshooting/tun-conflict' },
  { title: 'DNS 污染与泄露', desc: '域名解析彻底修复与 hosts 检查', link: '/network-troubleshooting/dns-issues' },
  { title: '手机能连电脑不能', desc: '多设备差异与局域网网络排查', link: '/network-troubleshooting/pc-vs-phone' }
]" />
