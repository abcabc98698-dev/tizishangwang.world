<template>
  <div class="matrix-card">
    <div class="matrix-header">
      <div class="matrix-title-area">
        <span class="matrix-icon">🎬</span>
        <span class="matrix-title">{{ title || '流媒体 & AI 服务解锁矩阵实测 (Service Availability Matrix)' }}</span>
      </div>
      <div class="matrix-meta">
        <span class="meta-tag">测试工具: RegionRestrictionCheck v3.2</span>
        <span class="meta-tag">环境: 原生住宅/机房 IP</span>
      </div>
    </div>

    <!-- AI Services Group -->
    <div class="service-group">
      <div class="group-heading">
        <span class="group-title">人工智能服务 (AI & LLM Services)</span>
        <span class="group-desc">针对 OpenAI / Anthropic / Google 封锁策略的落地有效性</span>
      </div>
      <div class="grid-layout">
        <div class="service-box" :class="aiServices.chatgpt.status">
          <div class="box-top">
            <span class="service-name">ChatGPT / OpenAI</span>
            <span class="status-pill">{{ getLabel(aiServices.chatgpt.status) }}</span>
          </div>
          <div class="box-note">{{ aiServices.chatgpt.note || '原生住宅 IP 支持，无降级 429 报错' }}</div>
        </div>

        <div class="service-box" :class="aiServices.claude.status">
          <div class="box-top">
            <span class="service-name">Claude 3.5 Sonnet</span>
            <span class="status-pill">{{ getLabel(aiServices.claude.status) }}</span>
          </div>
          <div class="box-note">{{ aiServices.claude.note || '支持 Web/API 认证，无组织限制' }}</div>
        </div>

        <div class="service-box" :class="aiServices.gemini.status">
          <div class="box-top">
            <span class="service-name">Google Gemini</span>
            <span class="status-pill">{{ getLabel(aiServices.gemini.status) }}</span>
          </div>
          <div class="box-note">{{ aiServices.gemini.note || '视节点而定，需选择美/日/新原生节点' }}</div>
        </div>
      </div>
    </div>

    <!-- Streaming Services Group -->
    <div class="service-group">
      <div class="group-heading">
        <span class="group-title">跨国流媒体服务 (Global Streaming Media)</span>
        <span class="group-desc">针对版权锁区及 4K HDR 码率的解码与分流验证</span>
      </div>
      <div class="grid-layout">
        <div class="service-box" :class="streamingServices.netflix.status">
          <div class="box-top">
            <span class="service-name">Netflix</span>
            <span class="status-pill">{{ getLabel(streamingServices.netflix.status) }}</span>
          </div>
          <div class="box-note">{{ streamingServices.netflix.note || '全区自制及非自制版权剧目全解锁' }}</div>
        </div>

        <div class="service-box" :class="streamingServices.disney.status">
          <div class="box-top">
            <span class="service-name">Disney+</span>
            <span class="status-pill">{{ getLabel(streamingServices.disney.status) }}</span>
          </div>
          <div class="box-note">{{ streamingServices.disney.note || '支持 Star+ 与 IMAX Enhanced 4K' }}</div>
        </div>

        <div class="service-box" :class="streamingServices.youtube.status">
          <div class="box-top">
            <span class="service-name">YouTube 4K / Premium</span>
            <span class="status-pill">{{ getLabel(streamingServices.youtube.status) }}</span>
          </div>
          <div class="box-note">{{ streamingServices.youtube.note || '4K 60FPS 极速缓冲，跨区订阅支持' }}</div>
        </div>

        <div class="service-box" :class="streamingServices.hbomax.status">
          <div class="box-top">
            <span class="service-name">Max (HBO Max)</span>
            <span class="status-pill">{{ getLabel(streamingServices.hbomax.status) }}</span>
          </div>
          <div class="box-note">{{ streamingServices.hbomax.note || '美区/港区原生解锁' }}</div>
        </div>

        <div class="service-box" :class="streamingServices.tiktok.status">
          <div class="box-top">
            <span class="service-name">TikTok (海外版)</span>
            <span class="status-pill">{{ getLabel(streamingServices.tiktok.status) }}</span>
          </div>
          <div class="box-note">{{ streamingServices.tiktok.note || '支持免拔卡及海外直播推流' }}</div>
        </div>

        <div class="service-box" :class="streamingServices.spotify.status">
          <div class="box-top">
            <span class="service-name">Spotify</span>
            <span class="status-pill">{{ getLabel(streamingServices.spotify.status) }}</span>
          </div>
          <div class="box-note">{{ streamingServices.spotify.note || '全球免 14 天异地登录限制' }}</div>
        </div>
      </div>
    </div>

    <div class="matrix-footer">
      <span>* 遥测记录时间：2026-10-19 | 规则模式推荐：Clash Verge Rev [Rule 模式 + 自动分流]</span>
      <span class="matrix-watermark">[tizishangwang.world]</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ServiceStatus {
  status: 'supported' | 'partial' | 'unsupported';
  note?: string;
}

const props = withDefaults(
  defineProps<{
    title?: string;
    aiServices?: Record<string, ServiceStatus>;
    streamingServices?: Record<string, ServiceStatus>;
  }>(),
  {
    title: '流媒体 & AI 服务解锁矩阵实测 (Service Availability Matrix)',
    aiServices: () => ({
      chatgpt: { status: 'supported', note: '原生住宅 IP 支持，无降级 429 报错' },
      claude: { status: 'supported', note: '支持 Web/API 认证，无组织限制' },
      gemini: { status: 'partial', note: '视节点而定，需选择美/日/新原生节点' }
    }),
    streamingServices: () => ({
      netflix: { status: 'supported', note: '全区自制及非自制版权剧目全解锁' },
      disney: { status: 'supported', note: '支持 Star+ 与 IMAX Enhanced 4K' },
      youtube: { status: 'supported', note: '4K 60FPS 极速缓冲，跨区订阅支持' },
      hbomax: { status: 'supported', note: '美区/港区原生解锁' },
      tiktok: { status: 'supported', note: '支持免拔卡及海外直播推流' },
      spotify: { status: 'supported', note: '全球免 14 天异地登录限制' }
    })
  }
);

function getLabel(status: 'supported' | 'partial' | 'unsupported') {
  if (status === 'supported') return 'Operational (稳定解锁)';
  if (status === 'partial') return 'Partial (部分支持)';
  return 'Unavailable (未解锁)';
}
</script>

<style scoped>
.matrix-card {
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 8px;
  overflow: hidden;
  margin: 24px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.matrix-header {
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.matrix-title-area {
  display: flex;
  align-items: center;
  gap: 8px;
}

.matrix-icon {
  font-size: 16px;
}

.matrix-title {
  color: #f1f5f9;
  font-size: 13.5px;
  font-weight: 600;
}

.matrix-meta {
  display: flex;
  gap: 8px;
}

.meta-tag {
  font-size: 11px;
  color: #64748b;
  font-family: ui-monospace, SFMono-Regular, monospace;
  background: #1e293b;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #334155;
}

.service-group {
  padding: 16px 18px;
  border-bottom: 1px solid #141f33;
}

.group-heading {
  margin-bottom: 12px;
}

.group-title {
  display: block;
  font-size: 12.5px;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.group-desc {
  display: block;
  font-size: 11px;
  color: #475569;
  margin-top: 2px;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.service-box {
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color 0.2s;
}

.service-box:hover {
  border-color: #3b82f6;
}

.box-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
}

.service-name {
  font-size: 12.5px;
  font-weight: 600;
  color: #e2e8f0;
}

.status-pill {
  font-size: 10px;
  font-family: ui-monospace, SFMono-Regular, monospace;
  padding: 2px 6px;
  border-radius: 4px;
}

.service-box.supported .status-pill {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.service-box.partial .status-pill {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.service-box.unsupported .status-pill {
  background: rgba(239, 68, 68, 0.15);
  color: #f87171;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.box-note {
  font-size: 11px;
  color: #64748b;
  line-height: 1.4;
}

.matrix-footer {
  padding: 10px 18px;
  background: #090d16;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #475569;
}

.matrix-watermark {
  font-family: ui-monospace, monospace;
  color: #334155;
}
</style>
