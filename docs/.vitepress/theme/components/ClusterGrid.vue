<template>
  <div class="cluster-container">
    <div class="cluster-header" v-if="title || subtitle">
      <div class="cluster-title-wrap">
        <span class="cluster-icon">🕸️</span>
        <h3 class="cluster-title">{{ title || '蜂巢式主题集群导航 (Topic Cluster Hub)' }}</h3>
      </div>
      <p class="cluster-subtitle" v-if="subtitle">{{ subtitle }}</p>
    </div>

    <div class="cluster-grid">
      <a
        v-for="(item, idx) in items"
        :key="idx"
        :href="item.link"
        class="cluster-card"
      >
        <div class="card-top">
          <span class="card-badge" v-if="item.badge">{{ item.badge }}</span>
          <span class="arrow-indicator">↗</span>
        </div>
        <div class="card-name">{{ item.title }}</div>
        <div class="card-desc">{{ item.description }}</div>
        <div class="card-tags" v-if="item.tags && item.tags.length">
          <span class="tag-pill" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ClusterItem {
  title: string;
  link: string;
  badge?: string;
  description: string;
  tags?: string[];
}

withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    items: ClusterItem[];
  }>(),
  {
    title: '蜂巢式深度主题集群 (Topic Cluster Navigation)',
    subtitle: '紧密串联下辖二级长尾实战与跨专题横向技术锚点',
    items: () => []
  }
);
</script>

<style scoped>
.cluster-container {
  margin: 32px 0;
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.cluster-header {
  margin-bottom: 16px;
  border-bottom: 1px solid #1e293b;
  padding-bottom: 12px;
}

.cluster-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cluster-icon {
  font-size: 16px;
}

.cluster-title {
  margin: 0;
  color: #f1f5f9;
  font-size: 14.5px;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.cluster-subtitle {
  margin: 4px 0 0 0;
  color: #64748b;
  font-size: 12px;
}

.cluster-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
}

.cluster-card {
  display: flex;
  flex-direction: column;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 14px 16px;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.cluster-card:hover {
  border-color: #38bdf8;
  background: #0f1c36;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(56, 189, 248, 0.12);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.card-badge {
  font-size: 10px;
  font-family: ui-monospace, monospace;
  padding: 2px 6px;
  border-radius: 3px;
  background: rgba(56, 189, 248, 0.12);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.25);
  font-weight: 600;
}

.arrow-indicator {
  color: #64748b;
  font-size: 13px;
  transition: color 0.2s, transform 0.2s;
}

.cluster-card:hover .arrow-indicator {
  color: #38bdf8;
  transform: translate(2px, -2px);
}

.card-name {
  color: #f1f5f9;
  font-size: 13.5px;
  font-weight: 700;
  margin-bottom: 6px;
  line-height: 1.4;
}

.card-desc {
  color: #94a3b8;
  font-size: 12px;
  line-height: 1.55;
  flex: 1;
  margin-bottom: 10px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag-pill {
  font-size: 10.5px;
  color: #64748b;
  background: #090d16;
  padding: 2px 6px;
  border-radius: 3px;
  border: 1px solid #1e293b;
  font-family: ui-monospace, monospace;
}
</style>
