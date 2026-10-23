export interface AirportPlan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  period: string;
}

export interface SpeedTestRecord {
  region: string;
  latency: string;
  download: string;
  testDate: string;
}

export interface AirportBrand {
  id: string;
  name: string;
  rank: number;
  featured?: boolean;
  tagline: string;
  foundedYear: string;
  protocol: string;
  lineType: string;
  startingPrice: string;
  promoCode?: string;
  promoDiscount?: string;
  affiliateUrl: string;
  clientSupport: string[];
  streamingUnlocks: {
    chatgpt: 'supported' | 'partial' | 'unsupported';
    claude: 'supported' | 'partial' | 'unsupported';
    gemini: 'supported' | 'partial' | 'unsupported';
    netflix: 'supported' | 'partial' | 'unsupported';
    disney: 'supported' | 'partial' | 'unsupported';
    youtube: 'supported' | 'partial' | 'unsupported';
    tiktok: 'supported' | 'partial' | 'unsupported';
  };
  features: string[];
  disadvantages: string[];
  plans: AirportPlan[];
  speedRecords: SpeedTestRecord[];
  verifiedDate: string;
  summary: string;
}

export const AIRPORTS: AirportBrand[] = [
  {
    id: 'guangshuyun',
    name: '光速云',
    rank: 1,
    featured: true,
    tagline: 'IEPL + 企业级内网专线双架构，高性价比全能首选',
    foundedYear: '2020',
    protocol: 'VLESS / Trojan',
    lineType: 'IEPL专线 + 内网隧道',
    startingPrice: '¥8/月（年付折算）',
    promoCode: 'AMM',
    promoDiscount: '入门版约8元/月',
    affiliateUrl: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
    clientSupport: ['自研客户端', 'Clash Verge Rev', 'v2rayN', 'Shadowrocket', 'Sing-box'],
    streamingUnlocks: {
      chatgpt: 'partial',
      claude: 'supported',
      gemini: 'partial',
      netflix: 'supported',
      disney: 'supported',
      youtube: 'supported',
      tiktok: 'supported'
    },
    features: [
      '双线路高可用：IEPL专线 + 企业级内网专线架构',
      '节点覆盖丰富：香港×20、台湾×5、日本×10、新加坡×10、美国×10等',
      '极高性价比：年付99元（69GB/月），另有致敬斯诺克147永久不限时包',
      '支持VLESS现代抗封锁协议，自研客户端与第三方通用订阅双轨支持'
    ],
    disadvantages: [
      'AI工具（ChatGPT/Gemini）部分节点需手动切换匹配',
      '特殊特价套餐不支持退款，建议初次先选择月付或小额测试'
    ],
    plans: [
      { name: '轻量版', billing: '年付', price: '¥99/年', traffic: '69GB/月', period: '每月重置' },
      { name: '极速版', billing: '月付', price: '¥25/月', traffic: '168GB/月', period: '每月重置' },
      { name: '流光版', billing: '月付', price: '¥34/月', traffic: '238GB/月', period: '每月重置' },
      { name: '量子版', billing: '月付', price: '¥68/月', traffic: '500GB/月', period: '每月重置' },
      { name: '147永久套餐', billing: '一次性', price: '¥147', traffic: '247GB', period: '永久不过期' }
    ],
    speedRecords: [
      { region: '香港 IEPL', latency: '22ms', download: '529Mbps', testDate: '2026-10-19' },
      { region: '台湾 专线', latency: '41ms', download: '114Mbps', testDate: '2026-10-19' },
      { region: '新加坡 优化', latency: '46ms', download: '387Mbps', testDate: '2026-10-19' },
      { region: '日本 专线', latency: '57ms', download: '135Mbps', testDate: '2026-10-19' },
      { region: '美国 落地', latency: '143ms', download: '18Mbps', testDate: '2026-10-19' }
    ],
    verifiedDate: '2026-10-19',
    summary: '2020年起稳定运营，凭借IEPL专线结合企业隧道的混合拓扑，兼顾了超低延迟与极强性价比。提供自研开箱即用客户端和标准Clash/v2ray订阅，适合大多数电脑与手机日常科学上网。'
  },
  {
    id: 'feimao',
    name: '飞猫云 (feimao)',
    rank: 2,
    featured: true,
    tagline: '专属开箱即用客户端，零基础新手首选',
    foundedYear: '2023',
    protocol: 'Proprietary / VLESS',
    lineType: 'BGP优化 + 中转直连',
    startingPrice: '¥7/月（年付学生版）',
    promoCode: 'flycat888',
    promoDiscount: '立享折扣',
    affiliateUrl: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
    clientSupport: ['专属一键客户端', 'Windows/Mac/Android/iOS'],
    streamingUnlocks: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial',
      netflix: 'supported',
      disney: 'supported',
      youtube: 'supported',
      tiktok: 'supported'
    },
    features: [
      '新手绝对友好：专属客户端下载即用，完全无需配置订阅与规则',
      '低门槛入门：学生版年付84元（约7元/月，50GB/月）',
      '节点覆盖亚太与欧美核心城市，连接轻快，换节点极其便捷',
      'ChatGPT 与主流流媒体解锁率高'
    ],
    disadvantages: [
      '不适合极客折腾自定义分流规则',
      '非重度专线架构，晚高峰极限带宽略低于顶级专线'
    ],
    plans: [
      { name: '飞猫·学生版', billing: '年付', price: '¥84/年', traffic: '50GB/月', period: '每月重置' },
      { name: '飞猫·星耀版', billing: '月付', price: '¥25/月', traffic: '150GB/月', period: '每月重置' },
      { name: '飞猫·星环版', billing: '月付', price: '¥45/月', traffic: '300GB/月', period: '每月重置' },
      { name: '飞猫·不限时', billing: '一次性', price: '¥680', traffic: '1000GB', period: '永久不过期' }
    ],
    speedRecords: [
      { region: '香港 优化', latency: '21ms', download: '526Mbps', testDate: '2026-10-19' },
      { region: '台湾 节点', latency: '41ms', download: '116Mbps', testDate: '2026-10-19' },
      { region: '新加坡', latency: '45ms', download: '413Mbps', testDate: '2026-10-19' },
      { region: '日本 节点', latency: '54ms', download: '138Mbps', testDate: '2026-10-19' },
      { region: '美国 节点', latency: '178ms', download: '14Mbps', testDate: '2026-10-19' }
    ],
    verifiedDate: '2026-10-19',
    summary: '2023年创立，以彻底降低用户配置门槛为核心卖点。提供 Windows 与 Mac 的专属一键运行客户端，不用寻找或转换订阅链接，适合初次接触电脑翻墙、不想研究复杂配置的新手。'
  },
  {
    id: 'weifeng',
    name: '微风网络 (weifeng)',
    rank: 3,
    featured: false,
    tagline: 'IEPL 专线 + VLESS 协议，原生 IP 低门槛性价比',
    foundedYear: '2023',
    protocol: 'VLESS',
    lineType: 'IEPL专线',
    startingPrice: '¥11/月（清风年付折算）',
    promoCode: 'flat888',
    promoDiscount: '立减优惠',
    affiliateUrl: 'https://edp01.breezenetaff.com/#/?code=t3huofyI',
    clientSupport: ['Clash Verge Rev', 'v2rayN', 'Sing-box', 'FlClash'],
    streamingUnlocks: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial',
      netflix: 'supported',
      disney: 'supported',
      youtube: 'supported',
      tiktok: 'supported'
    },
    features: [
      '全节点 IEPL 专线传输，跨境不经公网 GFW，抗封锁能力强',
      '香港、新加坡、日本、美国部署原生 IP 节点，流媒体与 AI 解锁好',
      '客服支持度高：7×24 小时在线，夜间配备 AI 客服值守'
    ],
    disadvantages: [
      '入门套餐 100GB/月 流量对重度 4K 追剧用户略显局促',
      '需要使用第三方客户端导入订阅'
    ],
    plans: [
      { name: '清风 (Breeze)', billing: '年付', price: '¥137/年', traffic: '100GB/月', period: '每月重置' },
      { name: '乘风 (Riding)', billing: '月付', price: '¥27/月', traffic: '200GB/月', period: '每月重置' },
      { name: '破风 (Breaking)', billing: '月付', price: '¥57/月', traffic: '500GB/月', period: '每月重置' }
    ],
    speedRecords: [
      { region: '香港 IEPL', latency: '25ms', download: '546Mbps', testDate: '2026-10-19' },
      { region: '台湾 节点', latency: '40ms', download: '115Mbps', testDate: '2026-10-19' },
      { region: '新加坡 优化', latency: '43ms', download: '384Mbps', testDate: '2026-10-19' },
      { region: '日本 节点', latency: '54ms', download: '131Mbps', testDate: '2026-10-19' },
      { region: '美国 节点', latency: '167ms', download: '17Mbps', testDate: '2026-10-19' }
    ],
    verifiedDate: '2026-10-19',
    summary: '2023年运营的性价比专线品牌，以 11 元/月左右的均价提供原生 IP 与纯 IEPL 专线，适合希望以较低预算获得稳定专线体验的个人用户。'
  },
  {
    id: 'muguang',
    name: '暮光加速 (muguang)',
    rank: 4,
    featured: false,
    tagline: 'BGP 智能调度 + 专线级出口，多设备跨平台办公',
    foundedYear: '2023',
    protocol: 'Trojan / VLESS',
    lineType: 'BGP优化中转 + 专线级出口',
    startingPrice: '¥9/月（年付轻量折算）',
    promoCode: 'muguang5555',
    promoDiscount: '限时优惠码',
    affiliateUrl: 'https://varnexa.twilightaff.com/#/?code=D1LHglg3',
    clientSupport: ['Windows', 'macOS', 'iOS', 'Android', 'Linux', '多端同时在线'],
    streamingUnlocks: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial',
      netflix: 'supported',
      disney: 'supported',
      youtube: 'supported',
      tiktok: 'supported'
    },
    features: [
      'BGP 智能多线接入调度，根据用户本地运营商动态优选入口',
      '支持多设备同时并发连接，适合家庭与小团队办公',
      '提供 120GB–1500GB 宽幅流量阶梯，支持不限时大容量包',
      '7×24 小时真人在线客服'
    ],
    disadvantages: [
      '高流量套餐单价相对偏向中端',
      '美国等远端节点下载峰值略显平缓'
    ],
    plans: [
      { name: '暮光·基础版', billing: '月付', price: '¥20/月', traffic: '120GB/月', period: '每月重置' },
      { name: '暮光·标准版', billing: '月付', price: '¥40/月', traffic: '240GB/月', period: '每月重置' },
      { name: '暮光·旗舰版', billing: '月付', price: '¥100/月', traffic: '700GB/月', period: '每月重置' },
      { name: '年付轻量版', billing: '年付', price: '¥109/年', traffic: '70GB/月', period: '每月重置' }
    ],
    speedRecords: [
      { region: '香港 BGP', latency: '26ms', download: '509Mbps', testDate: '2026-10-19' },
      { region: '台湾 节点', latency: '40ms', download: '107Mbps', testDate: '2026-10-19' },
      { region: '新加坡 优化', latency: '43ms', download: '419Mbps', testDate: '2026-10-19' },
      { region: '日本 专线', latency: '53ms', download: '150Mbps', testDate: '2026-10-19' },
      { region: '美国 节点', latency: '160ms', download: '19Mbps', testDate: '2026-10-19' }
    ],
    verifiedDate: '2026-10-19',
    summary: '强调跨设备协同与客服响应速度，适合需要 Windows 与 Mac 多台电脑同时挂载网络工具的远程工作者及外贸团队。'
  },
  {
    id: 'dalaoyun',
    name: '大佬云 (dalaoyun)',
    rank: 5,
    featured: false,
    tagline: '5.6元档标准 IEPL + VLESS 入门方案',
    foundedYear: '2024',
    protocol: 'VLESS',
    lineType: 'IEPL专线',
    startingPrice: '¥5.6/月（年付折算）',
    promoCode: 'dly888',
    promoDiscount: '季付及以上 7 折',
    affiliateUrl: 'https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN',
    clientSupport: ['自研客户端', 'Clash Verge Rev', 'v2rayN'],
    streamingUnlocks: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial',
      netflix: 'supported',
      disney: 'supported',
      youtube: 'supported',
      tiktok: 'supported'
    },
    features: [
      '极低年付均价：年付约5.6元/月（60GB/月）',
      '全线采用 IEPL 专线传输 + VLESS 协议',
      '自研客户端与标准第三方通用订阅双轨支持'
    ],
    disadvantages: [
      '月均 60GB 流量较小，重度追剧用户需加购',
      '同价位规格与闪电鼠、云界线相似，无显著独家技术壁垒'
    ],
    plans: [
      { name: '轻巧包', billing: '年付', price: '¥68/年', traffic: '60GB/月', period: '每月重置' }
    ],
    speedRecords: [
      { region: '香港 IEPL', latency: '24ms', download: '490Mbps', testDate: '2026-10-19' },
      { region: '日本 节点', latency: '58ms', download: '120Mbps', testDate: '2026-10-19' }
    ],
    verifiedDate: '2026-10-19',
    summary: '定位于 5.6 元极低预算档位，适合学生群体与极轻度查阅文档的备用梯子。'
  },
  {
    id: 'xingdaomeng',
    name: '星岛梦 (xingdaomeng)',
    rank: 6,
    featured: false,
    tagline: 'IEPL 专线全线 1 倍率，不限设备连接数',
    foundedYear: '2020',
    protocol: 'Trojan',
    lineType: 'IEPL专线',
    startingPrice: '¥8/月（年付贴心小包）',
    promoCode: 'nmw888',
    promoDiscount: '立减专属折扣',
    affiliateUrl: 'https://guangs.xingdaomeng.com/#/?code=1TynBYnR',
    clientSupport: ['Clash Verge Rev', 'Shadowrocket', 'v2rayN', 'FlClash'],
    streamingUnlocks: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial',
      netflix: 'supported',
      disney: 'supported',
      youtube: 'supported',
      tiktok: 'supported'
    },
    features: [
      '所有专线节点均为 1.0 倍率计费，绝无偷跑或高倍率刺客',
      '完全不限制设备同时连接数，多台电脑/手机共享无压力',
      '覆盖香港、台湾、日本、美国、新加坡以及韩国、东南亚等宽广地区',
      '海外专业团队运维，老牌运营超过 4 年'
    ],
    disadvantages: [
      '年付入门包每月流量 60GB，重度下载需升级到 150G/300G 套餐',
      '节点需要定期在客户端中执行延迟测试以剔除故障节点'
    ],
    plans: [
      { name: '贴心小包', billing: '年付', price: '¥96/年', traffic: '60GB/月', period: '每月重置' },
      { name: '超量150G', billing: '月付', price: '¥25/月', traffic: '150GB/月', period: '每月重置' },
      { name: '进阶300G', billing: '月付', price: '¥50/月', traffic: '300GB/月', period: '每月重置' },
      { name: '永久不限时100', billing: '一次性', price: '¥100', traffic: '100GB', period: '永久不过期' }
    ],
    speedRecords: [
      { region: '香港 IEPL', latency: '27ms', download: '504Mbps', testDate: '2026-10-19' },
      { region: '台湾 节点', latency: '41ms', download: '103Mbps', testDate: '2026-10-19' },
      { region: '新加坡 专线', latency: '44ms', download: '411Mbps', testDate: '2026-10-19' },
      { region: '日本 节点', latency: '57ms', download: '136Mbps', testDate: '2026-10-19' },
      { region: '美国 节点', latency: '177ms', download: '18Mbps', testDate: '2026-10-19' }
    ],
    verifiedDate: '2026-10-19',
    summary: '以不限设备数量和全线统一 1.0 倍率为核心差异化，长年保持稳定表现，是多设备用户的坚实备选。'
  },
  {
    id: 'ermao',
    name: '二猫云 (ermao)',
    rank: 7,
    featured: false,
    tagline: '纯 IEPL 专线，不限设备，主打长期稳定',
    foundedYear: '2023',
    protocol: 'VLESS',
    lineType: '全线 IEPL 专线',
    startingPrice: '¥20/月（白猫套餐）',
    promoCode: 'ermao5555',
    promoDiscount: '限时优惠码',
    affiliateUrl: 'https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW',
    clientSupport: ['独家定制客户端', 'Clash Verge Rev', 'v2rayN'],
    streamingUnlocks: {
      chatgpt: 'supported',
      claude: 'partial',
      gemini: 'partial',
      netflix: 'supported',
      disney: 'supported',
      youtube: 'supported',
      tiktok: 'supported'
    },
    features: [
      '不做低价走量与跑路盘，专注长期稳定性',
      '全线采用 IEPL 专线直连，账号不限制设备连接数',
      '海外专业团队主理，配备专属定制客户端'
    ],
    disadvantages: [
      '入门月付 20 元起步，单价稍高于普通中转',
      '节点未包含新加坡节点，主打香港、日本、美国'
    ],
    plans: [
      { name: '白猫套餐', billing: '月付', price: '¥20/月', traffic: '130GB/月', period: '每月重置' },
      { name: '橘猫畅玩版', billing: '月付', price: '¥40/月', traffic: '230GB/月', period: '每月重置' },
      { name: '不限时套餐', billing: '一次性', price: '¥99', traffic: '100GB', period: '永久不过期' }
    ],
    speedRecords: [
      { region: '香港 IEPL', latency: '22ms', download: '481Mbps', testDate: '2026-10-19' },
      { region: '日本 专线', latency: '53ms', download: '143Mbps', testDate: '2026-10-19' },
      { region: '美国 落地', latency: '134ms', download: '17Mbps', testDate: '2026-10-19' }
    ],
    verifiedDate: '2026-10-19',
    summary: '主打长期不降速的专线品质，适合看重稳定、不希望频繁折腾换机场的品质型用户。'
  },
  {
    id: 'wuyou',
    name: '无忧链接 (wuyou)',
    rank: 8,
    featured: false,
    tagline: '超低预算门槛，跨境电商与轻度刷网利器',
    foundedYear: '2025',
    protocol: 'VLESS / Proprietary',
    lineType: 'BGP优化中转',
    startingPrice: '¥6.5/月（年付MINI包）',
    promoCode: 'wuyou666',
    promoDiscount: '优惠码专享',
    affiliateUrl: 'https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL',
    clientSupport: ['专属一键客户端', '不限设备连接'],
    streamingUnlocks: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial',
      netflix: 'supported',
      disney: 'supported',
      youtube: 'supported',
      tiktok: 'supported'
    },
    features: [
      '极低价格门槛：年付79元折合每月仅6.5元，舒心月付仅19元',
      '全线无倍率、不限速、不限设备数量',
      '专属客户端下载登录即用，免订阅配置，适合跨境电商及短视频运营',
      '支持 TikTok 跨区直连'
    ],
    disadvantages: [
      '入门流量仅 40GB/月，不适合作为高强度 4K 视频主力主力机',
      '运营历史较新（2025起），建议优先尝试月付'
    ],
    plans: [
      { name: 'MINI链接', billing: '年付', price: '¥79/年', traffic: '40GB/月', period: '每月重置' },
      { name: '舒心链接', billing: '月付', price: '¥19/月', traffic: '100GB/月', period: '每月重置' },
      { name: '省心链接', billing: '月付', price: '¥33/月', traffic: '200GB/月', period: '每月重置' }
    ],
    speedRecords: [
      { region: '香港 优化', latency: '23ms', download: '531Mbps', testDate: '2026-10-19' },
      { region: '台湾 节点', latency: '41ms', download: '107Mbps', testDate: '2026-10-19' },
      { region: '新加坡', latency: '42ms', download: '418Mbps', testDate: '2026-10-19' },
      { region: '日本 节点', latency: '55ms', download: '147Mbps', testDate: '2026-10-19' },
      { region: '美国 节点', latency: '145ms', download: '17Mbps', testDate: '2026-10-19' }
    ],
    verifiedDate: '2026-10-19',
    summary: '面向预算有限、需要简单直接开箱即用客户端的轻度用户与电商从业者，以低廉的价格覆盖基本外网访问诉求。'
  },
  {
    id: 'weitu',
    name: '唯兔云 (weitu)',
    rank: 9,
    featured: false,
    tagline: 'IPLC 纯专线，不限速不限设备，主流 AI 全支持',
    foundedYear: '2023',
    protocol: 'Trojan',
    lineType: 'IPLC专线',
    startingPrice: '¥14.9/月（限时款）',
    promoCode: 'weitu666',
    promoDiscount: '限时折扣',
    affiliateUrl: 'https://guangs.v2yunvipaff.com/#/?code=xIutqOBA',
    clientSupport: ['Clash Verge Rev', 'v2rayN', 'Shadowrocket', 'Sing-box'],
    streamingUnlocks: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial',
      netflix: 'supported',
      disney: 'supported',
      youtube: 'supported',
      tiktok: 'supported'
    },
    features: [
      '纯 IPLC 国际点对点私有专线，敏感时期网络波动极低',
      '全线 1 倍率计费，不限客户端设备数量',
      '对 ChatGPT、Claude、Disney+、Netflix 具有良好解锁率',
      '海外专业技术团队保障'
    ],
    disadvantages: [
      '月付价格略高于普通中转机场',
      '官网特惠活动时间具有一定波动性'
    ],
    plans: [
      { name: '限时开启款', billing: '月付', price: '¥14.9/月', traffic: '100GB/月', period: '每月重置' },
      { name: '普通版', billing: '月付', price: '¥19.9/月', traffic: '150GB/月', period: '每月重置' },
      { name: '进阶版', billing: '月付', price: '¥29.9/月', traffic: '200GB/月', period: '每月重置' }
    ],
    speedRecords: [
      { region: '香港 IPLC', latency: '27ms', download: '500Mbps', testDate: '2026-10-19' },
      { region: '台湾 IPLC', latency: '37ms', download: '100Mbps', testDate: '2026-10-19' },
      { region: '新加坡 IPLC', latency: '44ms', download: '414Mbps', testDate: '2026-10-19' },
      { region: '日本 IPLC', latency: '56ms', download: '147Mbps', testDate: '2026-10-19' },
      { region: '美国 节点', latency: '179ms', download: '17Mbps', testDate: '2026-10-19' }
    ],
    verifiedDate: '2026-10-19',
    summary: '2023年建立的 IPLC 专线服务，主打纯净点对点传输与不限设备连接数，为对网络抖动和连通率有严苛要求的用户提供稳定底座。'
  },
  {
    id: 'firefly',
    name: 'Firefly (萤火虫)',
    rank: 10,
    featured: false,
    tagline: 'IPLC 专线直达，原生 IP 晚高峰抗拥堵',
    foundedYear: '2023',
    protocol: 'VLESS',
    lineType: 'IPLC专线',
    startingPrice: '¥8/月（年付折算）',
    promoCode: 'firefly',
    promoDiscount: '专享8折优惠（年付除外）',
    affiliateUrl: 'https://vip02.fireflyaff.com/#/?code=2n7VURre',
    clientSupport: ['专属一键客户端', '不限设备数量'],
    streamingUnlocks: {
      chatgpt: 'supported',
      claude: 'supported',
      gemini: 'partial',
      netflix: 'supported',
      disney: 'supported',
      youtube: 'supported',
      tiktok: 'supported'
    },
    features: [
      'IPLC 专线接入，晚高峰抵抗公共骨干网拥堵与 QoS 限速',
      '全节点不限速，不限制并发设备数',
      '香港、新加坡、日本、美国部署高纯净原生 IP',
      '2026年10月起全面采用专属客户端，开箱即用免配订阅'
    ],
    disadvantages: [
      '专属客户端模式下不提供标准订阅链接供极客提取',
      '年付套餐不可叠加额外 8 折优惠券'
    ],
    plans: [
      { name: 'Firefly 年付版', billing: '年付', price: '¥96/年', traffic: '60GB/月', period: '每月重置' },
      { name: 'Firefly Lite', billing: '月付', price: '¥25/月', traffic: '150GB/月', period: '每月重置' },
      { name: 'Firefly Plus', billing: '月付', price: '¥45/月', traffic: '300GB/月', period: '每月重置' },
      { name: 'Firefly 不限时', billing: '一次性', price: '¥100', traffic: '100GB', period: '永久不过期' }
    ],
    speedRecords: [
      { region: '香港 IPLC', latency: '27ms', download: '547Mbps', testDate: '2026-10-19' },
      { region: '台湾 节点', latency: '39ms', download: '135Mbps', testDate: '2026-10-19' },
      { region: '新加坡 IPLC', latency: '42ms', download: '445Mbps', testDate: '2026-10-19' },
      { region: '日本 IPLC', latency: '57ms', download: '147Mbps', testDate: '2026-10-19' },
      { region: '美国 节点', latency: '143ms', download: '30Mbps', testDate: '2026-10-19' }
    ],
    verifiedDate: '2026-10-19',
    summary: '将 IPLC 专线的底层质量与专属一键客户端相结合，使普通用户也能轻松享受免折腾、抗拥堵的高阶专线网络。'
  }
];
