<template>
  <div class="table-container">
    <div class="table-header-bar">
      <div class="bar-title">
        <span class="icon">📊</span>
        <span>2026 电脑梯子与机场梯队综合技术对比大表 (Comprehensive Architecture Benchmark)</span>
      </div>
      <div class="bar-meta">
        <span>统计基准: 2026-10-19 遥测实测</span>
      </div>
    </div>

    <div class="table-scroll">
      <table class="benchmark-table">
        <thead>
          <tr>
            <th>梯队排名</th>
            <th>品牌名称</th>
            <th>线路架构</th>
            <th>传输协议</th>
            <th>起步折算单价</th>
            <th>AI / 流媒体解锁</th>
            <th>客户端生态</th>
            <th>优惠码 / 专享入口</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="brand in displayBrands"
            :key="brand.id"
            :class="{ 'featured-row': brand.featured }"
          >
            <td class="rank-cell">
              <span class="rank-num">#{{ brand.rank }}</span>
              <span v-if="brand.featured" class="featured-tag">主推</span>
            </td>
            <td class="name-cell">
              <strong>{{ brand.name }}</strong>
              <span class="year-sub">{{ brand.foundedYear }} 年建立</span>
            </td>
            <td class="tech-cell">
              <span class="line-badge">{{ brand.lineType }}</span>
            </td>
            <td class="mono-cell">{{ brand.protocol }}</td>
            <td class="price-cell">{{ brand.startingPrice }}</td>
            <td class="unlock-cell">
              <span class="unlock-pill green">Netflix 4K</span>
              <span class="unlock-pill" :class="brand.streamingUnlocks.chatgpt === 'supported' ? 'green' : 'amber'">
                ChatGPT ({{ brand.streamingUnlocks.chatgpt === 'supported' ? '原生' : '需选点' }})
              </span>
            </td>
            <td class="client-cell">
              <span class="client-tag" v-for="c in brand.clientSupport.slice(0, 2)" :key="c">{{ c }}</span>
            </td>
            <td class="action-cell">
              <a
                :href="brand.affiliateUrl"
                target="_blank"
                rel="nofollow sponsored noopener"
                class="direct-btn"
              >
                前往测试 ↗
              </a>
              <span v-if="brand.promoCode" class="coupon-hint">码: {{ brand.promoCode }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-note-bar">
      <span>* 注：所有数据源自实验室非晚高峰测试样本与官方历史公开方案，价格及优惠随周期变动，请以官网实际结算为准。变现链接统一含 nofollow sponsored 属性。</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { AIRPORTS, type AirportBrand } from '../../../data/airports';

const props = defineProps<{
  limit?: number;
}>();

const displayBrands = computed(() => {
  if (props.limit && props.limit > 0) {
    return AIRPORTS.slice(0, props.limit);
  }
  return AIRPORTS;
});
</script>

<style scoped>
.table-container {
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 8px;
  overflow: hidden;
  margin: 24px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.table-header-bar {
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.bar-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #f1f5f9;
  font-size: 13.5px;
  font-weight: 600;
}

.bar-meta {
  font-size: 11px;
  color: #64748b;
  font-family: ui-monospace, monospace;
}

.table-scroll {
  overflow-x: auto;
}

.benchmark-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  text-align: left;
  white-space: nowrap;
}

.benchmark-table th {
  background: #0b1120;
  color: #64748b;
  padding: 10px 14px;
  font-weight: 600;
  border-bottom: 1px solid #1e293b;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.5px;
}

.benchmark-table td {
  padding: 12px 14px;
  border-bottom: 1px solid #141f33;
  color: #cbd5e1;
}

.featured-row {
  background: rgba(14, 165, 233, 0.04);
}

.rank-cell {
  font-family: ui-monospace, monospace;
  font-weight: 700;
  color: #38bdf8;
  display: flex;
  align-items: center;
  gap: 6px;
}

.featured-tag {
  background: #0369a1;
  color: #fff;
  font-size: 10px;
  padding: 1px 5px;
  border-radius: 3px;
}

.name-cell strong {
  display: block;
  color: #f8fafc;
  font-size: 13px;
}

.year-sub {
  font-size: 10.5px;
  color: #64748b;
}

.line-badge {
  background: #1e293b;
  padding: 3px 8px;
  border-radius: 4px;
  color: #38bdf8;
  border: 1px solid #334155;
  font-size: 11px;
}

.mono-cell {
  font-family: ui-monospace, monospace;
}

.price-cell {
  font-family: ui-monospace, monospace;
  color: #fbbf24;
  font-weight: 600;
}

.unlock-cell {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.unlock-pill {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 3px;
  width: fit-content;
}

.unlock-pill.green {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.unlock-pill.amber {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.client-cell {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.client-tag {
  font-size: 10.5px;
  color: #94a3b8;
  background: #0f172a;
  padding: 2px 6px;
  border-radius: 3px;
  border: 1px solid #1e293b;
  width: fit-content;
}

.action-cell {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.direct-btn {
  display: inline-block;
  background: #2563eb;
  color: #fff !important;
  text-decoration: none !important;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 11.5px;
  font-weight: 600;
  text-align: center;
  transition: background 0.2s;
}

.direct-btn:hover {
  background: #1d4ed8;
}

.coupon-hint {
  font-size: 10px;
  color: #fbbf24;
  font-family: ui-monospace, monospace;
}

.table-note-bar {
  padding: 8px 16px;
  font-size: 11px;
  color: #475569;
  background: #090d16;
}
</style>
