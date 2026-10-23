<template>
  <div class="observatory-terminal">
    <div class="terminal-bar">
      <div class="bar-left">
        <span class="pulse-dot"></span>
        <span class="report-title">{{ title || '网络实测性能遥测报告 (Performance Monitoring Report)' }}</span>
      </div>
      <div class="bar-right">
        <span class="mono-badge">ENV: Clash Verge Rev / Speedtest.net</span>
        <span class="mono-badge time-badge">{{ time || '晚高峰实测' }}</span>
      </div>
    </div>

    <div class="terminal-body">
      <div class="speed-items">
        <div v-for="(item, idx) in items" :key="idx" class="speed-row">
          <div class="row-header">
            <span class="node-name">
              <span class="status-marker" :class="item.status || 'stable'"></span>
              {{ item.name }}
            </span>
            <div class="metrics-summary">
              <span class="metric-tag latency-tag">延迟: <strong>{{ item.latency }}</strong></span>
              <span class="metric-tag speed-tag">下载: <strong>{{ item.speed }}</strong></span>
              <span class="metric-tag loss-tag" v-if="item.loss">丢包: <strong>{{ item.loss }}</strong></span>
            </div>
          </div>
          <div class="progress-track">
            <div
              class="progress-fill"
              :style="{ width: item.percentage + '%' }"
              :class="getProgressClass(item.percentage)"
            ></div>
          </div>
        </div>
      </div>

      <div class="terminal-summary">
        <div class="summary-stat">
          <span class="stat-label">测试环境</span>
          <span class="stat-val">电信/联通 1000M FTTH</span>
        </div>
        <div class="summary-stat">
          <span class="stat-label">测试时间口径</span>
          <span class="stat-val">2026-10-19 晚高峰 20:30-22:00</span>
        </div>
        <div class="summary-stat">
          <span class="stat-label">平均抖动 (Jitter)</span>
          <span class="stat-val text-green">&lt; 3.8 ms</span>
        </div>
        <div class="watermark-tag">[tizishangwang.world]</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SpeedItem {
  name: string;
  latency: string;
  speed: string;
  percentage: number;
  status?: 'stable' | 'warning' | 'critical';
  loss?: string;
}

const props = withDefaults(
  defineProps<{
    title?: string;
    time?: string;
    items?: SpeedItem[];
  }>(),
  {
    title: '专线节点晚高峰性能遥测报告 (Performance Telemetry)',
    time: '2026 晚高峰测速',
    items: () => [
      { name: '🟢 香港 IEPL 01 (内网专线直连)', latency: '22ms', speed: '529 Mbps', percentage: 95, status: 'stable', loss: '0%' },
      { name: '🟢 日本 东京 专线 (BGP优化入口)', latency: '57ms', speed: '135 Mbps', percentage: 70, status: 'stable', loss: '0%' },
      { name: '🟢 新加坡 专线 02 (原生IP流媒体)', latency: '46ms', speed: '387 Mbps', percentage: 85, status: 'stable', loss: '0%' },
      { name: '🟡 台湾 专线 01 (中华电信落地)', latency: '41ms', speed: '114 Mbps', percentage: 65, status: 'warning', loss: '0.2%' },
      { name: '🟡 美国 洛杉矶 优化 (OpenAI 原生)', latency: '143ms', speed: '48 Mbps', percentage: 38, status: 'warning', loss: '0.5%' }
    ]
  }
);

function getProgressClass(pct: number) {
  if (pct >= 80) return 'fill-high';
  if (pct >= 50) return 'fill-mid';
  return 'fill-low';
}
</script>

<style scoped>
.observatory-terminal {
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 8px;
  overflow: hidden;
  margin: 24px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.terminal-bar {
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.bar-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
}

.report-title {
  color: #f1f5f9;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.bar-right {
  display: flex;
  gap: 8px;
}

.mono-badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  background: #1e293b;
  color: #94a3b8;
  border: 1px solid #334155;
}

.time-badge {
  color: #38bdf8;
  border-color: #0284c7;
}

.terminal-body {
  padding: 16px;
}

.speed-items {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.speed-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.row-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 12.5px;
}

.node-name {
  color: #e2e8f0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.status-marker {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.status-marker.stable {
  background: #10b981;
}

.status-marker.warning {
  background: #f59e0b;
}

.metrics-summary {
  display: flex;
  gap: 12px;
}

.metric-tag {
  color: #64748b;
  font-size: 11.5px;
}

.metric-tag strong {
  color: #cbd5e1;
}

.latency-tag strong {
  color: #10b981;
}

.speed-tag strong {
  color: #38bdf8;
}

.loss-tag strong {
  color: #94a3b8;
}

.progress-track {
  height: 8px;
  background: #1e293b;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.4s ease;
}

.fill-high {
  background: linear-gradient(90deg, #0284c7 0%, #10b981 100%);
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
}

.fill-mid {
  background: linear-gradient(90deg, #0284c7 0%, #38bdf8 100%);
}

.fill-low {
  background: linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%);
}

.terminal-summary {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px dashed #1e293b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 11px;
  color: #64748b;
}

.summary-stat {
  display: flex;
  gap: 6px;
}

.stat-label {
  color: #475569;
}

.stat-val {
  color: #94a3b8;
}

.text-green {
  color: #10b981;
}

.watermark-tag {
  color: #334155;
  font-size: 10px;
}
</style>
