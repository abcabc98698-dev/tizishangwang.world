<template>
  <div class="table-container">
    <div class="table-header-bar">
      <div class="bar-title">
        <span class="icon">📊</span>
        <span>2026 电脑梯子与机场梯队综合技术对比大表 (Comprehensive Benchmark)</span>
      </div>
      <div class="bar-meta">
        <span class="live-indicator"><span class="dot"></span>实时更新</span>
        <span>统计基准: 2026-10 遥测实测</span>
      </div>
    </div>

    <!-- Scrollable viewport with custom scrollbar & sticky brand header -->
    <div class="table-scroll">
      <table class="benchmark-table">
        <thead>
          <tr>
            <th class="th-brand">品牌与梯队</th>
            <th class="th-tech">线路架构 / 协议</th>
            <th class="th-price">起步单价</th>
            <th class="th-unlock">流媒体 & AI 解锁</th>
            <th class="th-action">优惠与官网直达</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="brand in displayBrands"
            :key="brand.id"
            :class="{ 'featured-row': brand.featured }"
          >
            <!-- 品牌与排名 (Sticky on mobile) -->
            <td class="td-brand">
              <div class="cell-brand">
                <span class="rank-tag" :class="'rank-' + brand.rank">#{{ brand.rank }}</span>
                <div class="brand-text">
                  <div class="brand-name-row">
                    <strong class="brand-name">{{ brand.name }}</strong>
                    <span v-if="brand.featured" class="tag-hot">主推</span>
                  </div>
                  <span class="sub-info">{{ brand.foundedYear }} 年建立</span>
                </div>
              </div>
            </td>

            <!-- 线路架构与协议 -->
            <td class="td-tech">
              <div class="cell-tech">
                <span class="line-badge">{{ brand.lineType }}</span>
                <span class="proto-code">{{ brand.protocol }}</span>
              </div>
            </td>

            <!-- 起步单价 -->
            <td class="td-price">
              <div class="cell-price">
                <span class="price-val">{{ getShortPrice(brand.startingPrice) }}</span>
                <span class="price-cycle" v-if="getPricePeriod(brand.startingPrice)">
                  {{ getPricePeriod(brand.startingPrice) }}
                </span>
              </div>
            </td>

            <!-- 流媒体与 AI 解锁 -->
            <td class="td-unlock">
              <div class="cell-unlock">
                <span class="unlock-tag green">Netflix 4K</span>
                <span
                  class="unlock-tag"
                  :class="brand.streamingUnlocks.chatgpt === 'supported' ? 'green' : 'amber'"
                >
                  ChatGPT: {{ brand.streamingUnlocks.chatgpt === 'supported' ? '原生解锁' : '需选点' }}
                </span>
              </div>
            </td>

            <!-- 优惠码与 CTA 直达 -->
            <td class="td-action">
              <div class="cell-action">
                <a
                  :href="brand.affiliateUrl"
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  class="btn-direct"
                >
                  直达官网 ↗
                </a>
                <span v-if="brand.promoCode" class="coupon-pill">
                  优惠码: <code>{{ brand.promoCode }}</code>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-footer-bar">
      <span>* 注：所有数据源自实验室 1000M FTTH 晚高峰遥测样本。排名综合考量网络抖动、丢包率及工单响应时效。专属链接含 <code>nofollow sponsored</code> 属性。</span>
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

function getShortPrice(str: string): string {
  if (!str) return '¥8/月';
  const match = str.match(/^[^\(（]+/);
  return match ? match[0].trim() : str;
}

function getPricePeriod(str: string): string {
  if (!str) return '';
  const match = str.match(/[\(（]([^\)）]+)[\)）]/);
  return match ? match[1] : '';
}
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
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  color: #64748b;
  font-family: ui-monospace, monospace;
}

.live-indicator {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #10b981;
}

.live-indicator .dot {
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 6px #10b981;
}

/* Scroll wrapper with custom scrollbar */
.table-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-scroll::-webkit-scrollbar {
  height: 6px;
}

.table-scroll::-webkit-scrollbar-track {
  background: #090d16;
}

.table-scroll::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 3px;
}

.table-scroll::-webkit-scrollbar-thumb:hover {
  background: #38bdf8;
}

/* Table Architecture */
.benchmark-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 12.5px;
  text-align: left;
  table-layout: auto;
}

.benchmark-table th {
  background: #0b1120;
  color: #64748b;
  padding: 11px 14px;
  font-weight: 600;
  border-bottom: 1px solid #1e293b;
  font-size: 11.5px;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.benchmark-table td {
  padding: 10px 14px;
  border-bottom: 1px solid #141f33;
  color: #cbd5e1;
  vertical-align: middle;
}

.featured-row {
  background: rgba(14, 165, 233, 0.03);
}

.benchmark-table tbody tr:hover {
  background: #0d1527;
}

/* Sticky first column (Brand & Rank) */
.th-brand,
.td-brand {
  position: sticky;
  left: 0;
  z-index: 2;
  background: #090d16;
  min-width: 165px;
}

.benchmark-table th.th-brand {
  background: #0b1120;
}

.benchmark-table tbody tr:hover .td-brand {
  background: #0d1527;
}

.td-brand::after,
.th-brand::after {
  content: '';
  position: absolute;
  top: 0;
  right: -4px;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.35), transparent);
  pointer-events: none;
}

/* Cell 1: Brand & Rank */
.cell-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.rank-tag {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-weight: 800;
  font-size: 11px;
  padding: 2px 7px;
  border-radius: 4px;
  background: #1e293b;
  color: #94a3b8;
  border: 1px solid #334155;
  white-space: nowrap;
}

.rank-tag.rank-1 {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
  border-color: rgba(245, 158, 11, 0.35);
}

.rank-tag.rank-2 {
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border-color: rgba(56, 189, 248, 0.35);
}

.rank-tag.rank-3 {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  border-color: rgba(16, 185, 129, 0.35);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-name-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.brand-name {
  color: #f8fafc;
  font-size: 13.5px;
  font-weight: 700;
  white-space: nowrap;
}

.tag-hot {
  background: #0284c7;
  color: #fff;
  font-size: 9.5px;
  font-weight: 600;
  padding: 1px 5px;
  border-radius: 3px;
  letter-spacing: 0.5px;
}

.sub-info {
  font-size: 11px;
  color: #64748b;
  white-space: nowrap;
}

/* Cell 2: Tech & Protocols */
.cell-tech {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 145px;
}

.line-badge {
  display: inline-block;
  background: #1e293b;
  padding: 2px 8px;
  border-radius: 4px;
  color: #38bdf8;
  border: 1px solid #334155;
  font-size: 11px;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
}

.proto-code {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 11px;
  color: #94a3b8;
  white-space: nowrap;
}

/* Cell 3: Price */
.cell-price {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 105px;
}

.price-val {
  font-family: ui-monospace, SFMono-Regular, monospace;
  color: #fbbf24;
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
}

.price-cycle {
  font-size: 10.5px;
  color: #64748b;
  white-space: nowrap;
}

/* Cell 4: Unlocks */
.cell-unlock {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;
}

.unlock-tag {
  font-size: 10.5px;
  padding: 2px 7px;
  border-radius: 3px;
  width: fit-content;
  white-space: nowrap;
  font-weight: 500;
}

.unlock-tag.green {
  background: rgba(16, 185, 129, 0.12);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.unlock-tag.amber {
  background: rgba(245, 158, 11, 0.12);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

/* Cell 5: Action & CTA */
.cell-action {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 115px;
}

.btn-direct {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #2563eb;
  color: #ffffff !important;
  text-decoration: none !important;
  padding: 5px 12px;
  border-radius: 4px;
  font-size: 11.5px;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
  white-space: nowrap;
}

.btn-direct:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.45);
}

.coupon-pill {
  font-size: 10.5px;
  color: #94a3b8;
  font-family: ui-monospace, SFMono-Regular, monospace;
  white-space: nowrap;
}

.coupon-pill code {
  color: #fbbf24;
  background: #1e293b;
  padding: 1px 4px;
  border-radius: 3px;
  border: 1px solid #334155;
  font-size: 10px;
}

.table-footer-bar {
  padding: 8px 16px;
  font-size: 11px;
  color: #475569;
  background: #090d16;
  border-top: 1px solid #141f33;
}

.table-footer-bar code {
  color: #38bdf8;
  background: transparent;
}
</style>
