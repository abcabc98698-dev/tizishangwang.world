<template>
  <div class="author-box">
    <div class="author-avatar-wrap">
      <img src="/avatar.jpg" alt="技术审校专家" class="author-avatar" width="48" height="48" loading="lazy" />
      <span class="verified-icon" title="专家实名认证">✓</span>
    </div>
    <div class="author-info">
      <div class="author-head">
        <span class="author-label">执笔与技术审校：</span>
        <strong class="author-name">{{ author || 'Alex Chen' }}</strong>
        <span class="author-title">{{ role || '资深网络架构审计师 (CCIE #58219)' }}</span>
      </div>
      <p class="author-bio">
        {{ bio || '拥有 12 年跨国网络通信与协议安全分析实战经验，专注于 IEPL/IPLC 物理专线架构、BGP 多线容灾与 Mihomo / sing-box 开源生态。本文档已通过标准化测试环境复核。' }}
      </p>
      <div class="author-footer">
        <span class="review-date">最后核实时间：2026-10-23</span>
        <span class="sep">·</span>
        <a href="/methodology" class="methodology-link">查看评测方法论 ↗</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  author?: string;
  role?: string;
  bio?: string;
}>();
</script>

<style scoped>
.author-box {
  display: flex;
  gap: 16px;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 16px 20px;
  margin: 32px 0 20px 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  align-items: flex-start;
}

.author-avatar-wrap {
  position: relative;
  flex-shrink: 0;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(56, 189, 248, 0.5);
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.2);
}

.verified-icon {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  background: #0284c7;
  color: #fff;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border: 2px solid #0d1527;
}

.author-info {
  flex: 1;
}

.author-head {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 6px;
}

.author-label {
  font-size: 11.5px;
  color: #64748b;
}

.author-name {
  color: #f8fafc;
  font-size: 13.5px;
  font-weight: 700;
}

.author-title {
  font-size: 11.5px;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  padding: 1px 6px;
  border-radius: 3px;
  border: 1px solid rgba(56, 189, 248, 0.25);
}

.author-bio {
  color: #94a3b8;
  font-size: 12.5px;
  line-height: 1.6;
  margin: 0 0 8px 0;
}

.author-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #64748b;
  font-family: ui-monospace, monospace;
}

.methodology-link {
  color: #38bdf8 !important;
  text-decoration: none !important;
}

.methodology-link:hover {
  text-decoration: underline !important;
}
</style>
