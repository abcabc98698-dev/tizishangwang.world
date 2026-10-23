import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '梯子上网 | tizishangwang.world',
  description: '电脑翻墙与 Windows/Mac 科学上网权威指南，提供 Clash Verge Rev、v2rayN 客户端配置、IEPL 专线机场实测与网络故障排查方案。',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://tizishangwang.world'
  },
  head: [
    ['link', { rel: 'icon', href: '/avatar.jpg' }],
    ['meta', { name: 'theme-color', content: '#090d16' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'keywords', content: '电脑翻墙, Windows科学上网, Windows梯子, Mac翻墙, Clash下载, v2rayN教程, 梯子上网, 机场推荐, IEPL专线' }],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: '梯子上网 tizishangwang.world',
        url: 'https://tizishangwang.world',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://tizishangwang.world/?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      })
    ]
  ],
  themeConfig: {
    siteTitle: '梯子上网 (tizishangwang.world)',
    logo: '/avatar.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '电脑翻墙', link: '/pc/' },
      { text: 'Windows科学上网', link: '/windows/' },
      { text: 'Mac科学上网', link: '/mac/' },
      { text: '客户端下载', link: '/clients/' },
      { text: '梯子推荐', link: '/ladder/' },
      { text: '机场推荐', link: '/airport/' },
      { text: '免费机场', link: '/free/' },
      { text: '电脑网络排障', link: '/network-troubleshooting/' }
    ],
    sidebar: {
      '/pc/': [
        {
          text: '电脑翻墙知识大系',
          items: [
            { text: '电脑翻墙全景图谱与选型 (总览)', link: '/pc/' },
            { text: '翻墙底层原理：VPN 与代理差异', link: '/pc/vpn-vs-proxy' },
            { text: '电脑首次上网完整闭环流程', link: '/pc/getting-started' },
            { text: '协议层解密：Shadowsocks 到 VLESS', link: '/pc/protocols' },
            { text: '专线 vs 公网中转 vs 直连', link: '/pc/lines-comparison' },
            { text: '常见网络安全与法律合规红线', link: '/pc/security-compliance' }
          ]
        }
      ],
      '/windows/': [
        {
          text: 'Windows 科学上网宝典',
          items: [
            { text: 'Windows 11/10 代理配置总纲', link: '/windows/' },
            { text: '系统代理 vs TUN 虚拟网卡实战', link: '/windows/system-proxy-vs-tun' },
            { text: 'Clash Verge Rev 深度实操指南', link: '/windows/clash-verge-tutorial' },
            { text: 'v2rayN 极客与多核心配置', link: '/windows/v2rayn-tutorial' },
            { text: 'UWP 应用回环代理与解除限制', link: '/windows/uwp-loopback' },
            { text: 'Windows 7 大典型断网排障大系', link: '/windows/troubleshooting-7' }
          ]
        }
      ],
      '/mac/': [
        {
          text: 'Mac 科学上网指南',
          items: [
            { text: 'macOS 科学上网全景选型', link: '/mac/' },
            { text: 'Apple Silicon (M1/M2/M3/M4) 适配', link: '/mac/apple-silicon' },
            { text: '系统代理与 Network Extension 权限', link: '/mac/network-extension' },
            { text: 'Surge / Clash Verge / FlClash 横评', link: '/mac/client-comparison' },
            { text: 'Mac 终端命令行代理加速实战', link: '/mac/terminal-proxy' }
          ]
        }
      ],
      '/clients/': [
        {
          text: '代理客户端矩阵',
          items: [
            { text: '客户端下载与选型总览', link: '/clients/' },
            { text: 'Clash Verge Rev (Mihomo 内核)', link: '/clients/clash-verge-rev' },
            { text: 'v2rayN (Xray / sing-box 核心)', link: '/clients/v2rayn' },
            { text: 'FlClash (全平台极简)', link: '/clients/flclash' },
            { text: 'Hiddify (现代多协议多平台)', link: '/clients/hiddify' }
          ]
        }
      ],
      '/ladder/': [
        {
          text: '梯子推荐与决策指南',
          items: [
            { text: '电脑好用梯子综合排行动', link: '/ladder/' },
            { text: '长时间稳定跨境办公方案', link: '/ladder/office-work' },
            { text: '高性价比月付低预算首选', link: '/ladder/budget-options' },
            { text: '多设备与家庭团队并发方案', link: '/ladder/multi-devices' }
          ]
        }
      ],
      '/airport/': [
        {
          text: '机场深度实测与横评',
          items: [
            { text: '2026 机场梯队实测全景', link: '/airport/' },
            { text: '光速云 (IEPL 双专线主推评测)', link: '/airport/guangshuyun' },
            { text: '飞猫云 (专属客户端新手评测)', link: '/airport/feimao' },
            { text: '微风网络 (原生 IP 专线评测)', link: '/airport/weifeng' },
            { text: '流媒体与 AI 解锁能力排行榜', link: '/airport/streaming-matrix' }
          ]
        }
      ],
      '/free/': [
        {
          text: '免费机场与低成本方案',
          items: [
            { text: '免费机场与低成本方案 (总览)', link: '/free/' },
            { text: '免费电脑节点可用性与安全红线', link: '/free/security-risks' },
            { text: '免费试用机场的鉴别与避坑', link: '/free/free-trial' },
            { text: '软件免费 vs 节点免费的本质区别', link: '/free/software-vs-service' },
            { text: '低价付费替代与不限时流量包', link: '/free/budget-alternatives' }
          ]
        }
      ],
      '/network-troubleshooting/': [
        {
          text: '电脑网络诊断与排障全书',
          items: [
            { text: '电脑网络问题诊断决策流', link: '/network-troubleshooting/' },
            { text: '设置代理后网页无法打开排查', link: '/network-troubleshooting/browser-fail' },
            { text: '客户端报错与 TUN 虚拟网卡冲突', link: '/network-troubleshooting/tun-conflict' },
            { text: 'DNS 污染、泄露与 hosts 锁死', link: '/network-troubleshooting/dns-issues' },
            { text: '手机能连电脑连不上的差异排障', link: '/network-troubleshooting/pc-vs-phone' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档与技术问答',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关技术条款',
                resetButtonTitle: '清除搜索条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: '本站所有技术评测与网络架构解析仅供学习交流与合规配置参考，请自觉遵守属地网络法律法规。',
      copyright: 'Copyright © 2026 tizishangwang.world 梯子上网 | All Rights Reserved.'
    }
  }
});
