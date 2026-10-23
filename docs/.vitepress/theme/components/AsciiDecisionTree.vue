<template>
  <div class="terminal-tree">
    <div class="terminal-bar">
      <div class="window-buttons">
        <span class="btn close"></span>
        <span class="btn minimize"></span>
        <span class="btn zoom"></span>
      </div>
      <div class="window-title">{{ title || '电脑网络选型交互决策树 (Interactive Decision Tree)' }}</div>
      <div class="window-status">ASCII EXECUTION</div>
    </div>
    <div class="terminal-content">
      <pre class="ascii-art"><code><slot></slot></code></pre>
    </div>
    <div class="terminal-caption">
      <span>* 遵循 Answer-First 逻辑：顺着箭头根据您的核心诉求直接锁定最优网络方案</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<style scoped>
.terminal-tree {
  background: #060911;
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
  padding: 8px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.window-buttons {
  display: flex;
  gap: 6px;
}

.btn {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.close { background: #ef4444; }
.minimize { background: #f59e0b; }
.zoom { background: #10b981; }

.window-title {
  color: #94a3b8;
  font-size: 12px;
  font-weight: 500;
}

.window-status {
  color: #38bdf8;
  font-size: 10px;
  letter-spacing: 0.5px;
}

.terminal-content {
  padding: 16px;
  overflow-x: auto;
  background: #060911;
}

.ascii-art {
  margin: 0;
  padding: 0;
  background: transparent;
  color: #38bdf8;
  font-size: 12.5px;
  line-height: 1.45;
  white-space: pre;
}

.terminal-caption {
  padding: 8px 16px;
  background: #090d16;
  border-top: 1px solid #141f33;
  font-size: 11px;
  color: #475569;
}
</style>
