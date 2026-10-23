<template>
  <div class="topology-container">
    <div class="topology-header">
      <div class="header-title">
        <span class="topo-icon">🗺️</span>
        <span class="topo-text">{{ title || 'IEPL 内网专线 vs 公网隧道拓扑可观测图 (Network Path Observatory)' }}</span>
      </div>
      <div class="header-tags">
        <span class="spec-tag">架构: 双端私有专网</span>
        <span class="spec-tag">物理介质: 国际点对点内网光缆</span>
      </div>
    </div>

    <div class="topology-canvas">
      <div class="path-diagram">
        <!-- Node 1: Client -->
        <div class="node-block client-node">
          <div class="node-type">CLIENT ENDPOINT</div>
          <div class="node-name">用户终端设备</div>
          <div class="node-detail">Windows 11 / Mac M系列 / 客户端</div>
          <div class="node-status">TUN / 系统代理</div>
        </div>

        <div class="connector-arrow">
          <div class="arrow-line normal-line"></div>
          <span class="arrow-label">本地加密握手 (VLESS / TLS 1.3)</span>
        </div>

        <!-- Node 2: Domestic Ingress -->
        <div class="node-block ingress-node">
          <div class="node-type">INGRESS NODE</div>
          <div class="node-name">国内多线 BGP 入口</div>
          <div class="node-detail">上海 / 广州 / 深圳 骨干机房</div>
          <div class="node-status text-blue">隐藏真实公网 IP</div>
        </div>

        <div class="connector-arrow dedicated">
          <div class="arrow-line dedicated-line"></div>
          <span class="arrow-label dedicated-label">
            ════ IEPL / IPLC 专线跨境传输 (不经过 GFW / 0% QoS 阻断) ════
          </span>
        </div>

        <!-- Node 3: Overseas Egress -->
        <div class="node-block egress-node">
          <div class="node-type">EGRESS NODE</div>
          <div class="node-name">海外落地集群</div>
          <div class="node-detail">香港 Equinix / 东京 / 新加坡</div>
          <div class="node-status text-green">原生住宅 / 双 ISP 纯净 IP</div>
        </div>

        <div class="connector-arrow">
          <div class="arrow-line normal-line"></div>
          <span class="arrow-label">国际公网直连 (4K CDN / BGP)</span>
        </div>

        <!-- Node 4: Target Destination -->
        <div class="node-block target-node">
          <div class="node-type">DESTINATION</div>
          <div class="node-name">目标服务集群</div>
          <div class="node-detail">OpenAI / Claude / Netflix / YouTube</div>
          <div class="node-status text-green">无验证码 / 4K 零缓冲</div>
        </div>
      </div>

      <!-- Comparison Info Box -->
      <div class="topology-audit-box">
        <div class="audit-row">
          <div class="audit-title">专线架构核心技术优势 (Technical Advantages):</div>
          <p class="audit-text">
            普通公网中转和直连梯子直接在国际公网交换中心被 GFW 执行深度数据包检测 (DPI) 与随机丢包 (QoS 限制)；
            而 <strong>IEPL / IPLC 专线</strong> 属于合规租赁的企业内网跨境裸光纤，数据包在境内 BGP 入口打包后直接走私有管道点对点传输，
            <strong>物理上完全避开了 GFW 防火墙过滤层</strong>，因此在敏感时期依然能够维持 100% 连通率与稳定 20ms–50ms 的超低亚洲延迟。
          </p>
        </div>
      </div>
    </div>

    <div class="topology-footer">
      <span>* 架构规范遵循 Dark Network Observatory 标准 | 数据链路全流程监控</span>
      <span class="watermark">[tizishangwang.world]</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<style scoped>
.topology-container {
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 8px;
  overflow: hidden;
  margin: 24px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.topology-header {
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.topo-icon {
  font-size: 16px;
}

.topo-text {
  color: #f1f5f9;
  font-size: 13.5px;
  font-weight: 600;
}

.header-tags {
  display: flex;
  gap: 8px;
}

.spec-tag {
  font-size: 11px;
  color: #64748b;
  font-family: ui-monospace, SFMono-Regular, monospace;
  background: #1e293b;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #334155;
}

.topology-canvas {
  padding: 20px;
}

.path-diagram {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

@media (min-width: 900px) {
  .path-diagram {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
}

.node-block {
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 12px 14px;
  width: 100%;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
}

.node-type {
  font-size: 10px;
  font-family: ui-monospace, SFMono-Regular, monospace;
  color: #64748b;
  letter-spacing: 0.5px;
}

.node-name {
  font-size: 13.5px;
  font-weight: 700;
  color: #f1f5f9;
}

.node-detail {
  font-size: 11px;
  color: #94a3b8;
  line-height: 1.4;
}

.node-status {
  font-size: 10.5px;
  font-family: ui-monospace, monospace;
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px solid #1e293b;
  color: #94a3b8;
}

.text-blue {
  color: #38bdf8;
}

.text-green {
  color: #34d399;
}

.connector-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 4px;
  flex: 1;
  text-align: center;
}

.arrow-line {
  width: 2px;
  height: 20px;
  background: #334155;
}

@media (min-width: 900px) {
  .arrow-line {
    width: 100%;
    height: 2px;
  }
}

.normal-line {
  background: #334155;
}

.dedicated-line {
  background: #10b981;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  height: 3px !important;
}

.arrow-label {
  font-size: 10.5px;
  color: #64748b;
  font-family: ui-monospace, monospace;
  margin-top: 4px;
}

.dedicated-label {
  color: #34d399;
  font-weight: 600;
  text-shadow: 0 0 8px rgba(16, 185, 129, 0.3);
}

.topology-audit-box {
  margin-top: 20px;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 14px 16px;
}

.audit-title {
  font-size: 12px;
  font-weight: 600;
  color: #38bdf8;
  margin-bottom: 6px;
  letter-spacing: 0.5px;
}

.audit-text {
  font-size: 12.5px;
  color: #94a3b8;
  line-height: 1.7;
  margin: 0;
}

.audit-text strong {
  color: #f1f5f9;
}

.topology-footer {
  padding: 10px 18px;
  background: #090d16;
  border-top: 1px solid #141f33;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #475569;
}

.watermark {
  font-family: ui-monospace, monospace;
  color: #334155;
}
</style>
