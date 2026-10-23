<template>
  <div class="observatory-card" :class="{ 'featured-border': brand.featured }">
    <div class="card-header">
      <div class="header-left">
        <span class="rank-badge">RANK #{{ brand.rank }}</span>
        <h3 class="brand-title">{{ brand.name }}</h3>
        <span class="status-indicator">
          <span class="status-dot"></span>
          OPERATIONAL
        </span>
      </div>
      <div class="header-right">
        <span class="verified-tag">已核实: {{ brand.verifiedDate }}</span>
      </div>
    </div>

    <p class="brand-tagline">{{ brand.tagline }}</p>

    <!-- Key Metrics Dashboard Grid -->
    <div class="metrics-grid">
      <div class="metric-box">
        <div class="metric-label">线路架构 (Topology)</div>
        <div class="metric-value text-accent">{{ brand.lineType }}</div>
      </div>
      <div class="metric-box">
        <div class="metric-label">传输协议 (Protocol)</div>
        <div class="metric-value">{{ brand.protocol }}</div>
      </div>
      <div class="metric-box">
        <div class="metric-label">起步资费 (Pricing)</div>
        <div class="metric-value price-text">{{ brand.startingPrice }}</div>
      </div>
      <div class="metric-box">
        <div class="metric-label">运营资历 (History)</div>
        <div class="metric-value">{{ brand.foundedYear }} 年至今</div>
      </div>
    </div>

    <!-- Speed Snapshot Table -->
    <div class="telemetry-section" v-if="brand.speedRecords && brand.speedRecords.length > 0">
      <div class="section-title-sm">
        <span class="pulse-icon">⚡</span> 节点测速遥测指标 (Telemetry Snapshot)
      </div>
      <div class="telemetry-table-wrapper">
        <table class="telemetry-table">
          <thead>
            <tr>
              <th>节点区域</th>
              <th>RTT 延迟</th>
              <th>下行测速</th>
              <th>采样日期</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rec in brand.speedRecords.slice(0, 3)" :key="rec.region">
              <td class="region-cell">{{ rec.region }}</td>
              <td class="mono-cell latency">{{ rec.latency }}</td>
              <td class="mono-cell speed">{{ rec.download }}</td>
              <td class="date-cell">{{ rec.testDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Streaming & AI Availability Badges -->
    <div class="availability-section">
      <div class="section-title-sm">服务解锁矩阵 (Service Matrix)</div>
      <div class="badges-row">
        <span class="matrix-badge" :class="brand.streamingUnlocks.chatgpt">
          ChatGPT: {{ formatStatus(brand.streamingUnlocks.chatgpt) }}
        </span>
        <span class="matrix-badge" :class="brand.streamingUnlocks.claude">
          Claude: {{ formatStatus(brand.streamingUnlocks.claude) }}
        </span>
        <span class="matrix-badge" :class="brand.streamingUnlocks.netflix">
          Netflix: {{ formatStatus(brand.streamingUnlocks.netflix) }}
        </span>
        <span class="matrix-badge" :class="brand.streamingUnlocks.youtube">
          YouTube 4K: {{ formatStatus(brand.streamingUnlocks.youtube) }}
        </span>
      </div>
    </div>

    <!-- Pros & Cons Accordion / Details -->
    <div class="audit-details">
      <div class="pros-cons-grid">
        <div class="audit-col pros">
          <div class="audit-head">优势特性 (Strengths)</div>
          <ul>
            <li v-for="(feat, idx) in brand.features" :key="'feat-'+idx">{{ feat }}</li>
          </ul>
        </div>
        <div class="audit-col cons">
          <div class="audit-head">限制与建议 (Cautions)</div>
          <ul>
            <li v-for="(dis, idx) in brand.disadvantages" :key="'dis-'+idx">{{ dis }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Action Bar -->
    <div class="card-footer">
      <div class="promo-box" v-if="brand.promoCode">
        <span class="promo-label">优惠码:</span>
        <code class="promo-code" @click="copyCode(brand.promoCode)">{{ brand.promoCode }}</code>
        <span class="promo-note" v-if="copied">已复制!</span>
        <span class="promo-note" v-else>({{ brand.promoDiscount }})</span>
      </div>
      <div class="footer-cta">
        <a
          :href="brand.affiliateUrl"
          target="_blank"
          rel="nofollow sponsored noopener"
          class="cta-button"
        >
          直达官网控制台
          <span class="arrow-icon">↗</span>
        </a>
      </div>
    </div>
    <div class="disclosure-bar">
      <span>* 提示：数据基于历史测试记录；实际体验受本地网络与晚高峰影响；链接包含合规赞助标记。</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { AirportBrand } from '../../../data/airports';

const props = defineProps<{
  brand: AirportBrand;
}>();

const copied = ref(false);

function copyCode(code: string) {
  navigator.clipboard.writeText(code);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
}

function formatStatus(status: 'supported' | 'partial' | 'unsupported') {
  if (status === 'supported') return 'Stable';
  if (status === 'partial') return 'Partial';
  return 'Unavailable';
}
</script>

<style scoped>
.observatory-card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 20px;
  margin: 24px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #e2e8f0;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.observatory-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 6px 24px rgba(59, 130, 246, 0.15);
}

.featured-border {
  border-color: #38bdf8;
  background: linear-gradient(180deg, #0d1b2e 0%, #0f172a 100%);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #1e293b;
  padding-bottom: 12px;
  margin-bottom: 14px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.rank-badge {
  background: #1e293b;
  color: #38bdf8;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid #334155;
  letter-spacing: 0.5px;
}

.brand-title {
  margin: 0;
  font-size: 19px;
  font-weight: 700;
  color: #f8fafc;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 6px #10b981;
}

.verified-tag {
  font-size: 11px;
  color: #64748b;
  font-family: ui-monospace, SFMono-Regular, monospace;
}

.brand-tagline {
  color: #94a3b8;
  font-size: 13.5px;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  margin-bottom: 18px;
}

.metric-box {
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 10px 12px;
}

.metric-label {
  font-size: 11px;
  color: #64748b;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.metric-value {
  font-size: 13.5px;
  font-weight: 600;
  color: #e2e8f0;
}

.text-accent {
  color: #38bdf8;
}

.price-text {
  color: #fbbf24;
  font-family: ui-monospace, monospace;
}

.telemetry-section {
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 16px;
}

.section-title-sm {
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.telemetry-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.telemetry-table th {
  text-align: left;
  padding: 6px 8px;
  color: #64748b;
  font-weight: 500;
  border-bottom: 1px solid #1e293b;
}

.telemetry-table td {
  padding: 6px 8px;
  border-bottom: 1px solid #141f33;
}

.region-cell {
  color: #cbd5e1;
  font-weight: 500;
}

.mono-cell {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

.latency {
  color: #10b981;
}

.speed {
  color: #38bdf8;
  font-weight: 600;
}

.date-cell {
  color: #475569;
  font-size: 11px;
}

.availability-section {
  margin-bottom: 16px;
}

.badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.matrix-badge {
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
}

.matrix-badge.supported {
  background: rgba(16, 185, 129, 0.12);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.matrix-badge.partial {
  background: rgba(245, 158, 11, 0.12);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.matrix-badge.unsupported {
  background: rgba(239, 68, 68, 0.12);
  color: #f87171;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.pros-cons-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}

@media (max-width: 640px) {
  .pros-cons-grid {
    grid-template-columns: 1fr;
  }
}

.audit-col {
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 10px 14px;
}

.audit-head {
  font-size: 11.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.pros .audit-head {
  color: #34d399;
}

.cons .audit-head {
  color: #f87171;
}

.audit-col ul {
  margin: 0;
  padding-left: 18px;
  font-size: 12px;
  color: #cbd5e1;
  line-height: 1.6;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid #1e293b;
}

.promo-box {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.promo-label {
  color: #94a3b8;
}

.promo-code {
  background: #1e293b;
  color: #fbbf24;
  padding: 3px 8px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px dashed #fbbf24;
  font-weight: 600;
}

.promo-code:hover {
  background: #334155;
}

.promo-note {
  font-size: 11px;
  color: #38bdf8;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #2563eb;
  color: #ffffff !important;
  text-decoration: none !important;
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.3);
}

.cta-button:hover {
  background: #1d4ed8;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.5);
  transform: translateY(-1px);
}

.disclosure-bar {
  margin-top: 10px;
  font-size: 10.5px;
  color: #475569;
  text-align: right;
}
</style>
