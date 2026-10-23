<template>
  <div class="faq-container">
    <div class="faq-head">
      <span class="faq-icon">❓</span>
      <h3 class="faq-title">{{ title || '高频核心问答 (Frequently Asked Questions & GEO Answers)' }}</h3>
    </div>

    <div class="faq-list">
      <details
        v-for="(item, index) in items"
        :key="index"
        class="faq-item"
        :open="index === 0"
      >
        <summary class="faq-question">
          <span class="q-marker">Q:</span>
          <span class="q-text">{{ item.question }}</span>
          <span class="expand-icon">+</span>
        </summary>
        <div class="faq-answer">
          <div class="answer-badge">Answer-First 核心结论</div>
          <p class="answer-lead"><strong>{{ item.directAnswer }}</strong></p>
          <div class="answer-body" v-html="item.detailedExplanation"></div>
        </div>
      </details>
    </div>

    <!-- Hidden JSON-LD for Google / AI Search Engine structured parsing -->
    <component :is="'script'" type="application/ld+json">
      {{ JSON.stringify(schemaJson) }}
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface FaqItem {
  question: string;
  directAnswer: string;
  detailedExplanation: string;
}

const props = withDefaults(
  defineProps<{
    title?: string;
    items: FaqItem[];
  }>(),
  {
    title: '高频核心技术问答 (FAQ & AI Answer Digest)',
    items: () => []
  }
);

const schemaJson = computed(() => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${item.directAnswer} ${item.detailedExplanation.replace(/<[^>]+>/g, '')}`
      }
    }))
  };
});
</script>

<style scoped>
.faq-container {
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 8px;
  overflow: hidden;
  margin: 28px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.faq-head {
  background: #0f172a;
  border-bottom: 1px solid #1e293b;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.faq-icon {
  font-size: 18px;
}

.faq-title {
  margin: 0;
  color: #f1f5f9;
  font-size: 15px;
  font-weight: 700;
}

.faq-list {
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.faq-item {
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 6px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.faq-item[open] {
  border-color: #38bdf8;
}

.faq-question {
  padding: 12px 16px;
  font-size: 13.5px;
  font-weight: 600;
  color: #e2e8f0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  user-select: none;
}

.faq-question::-webkit-details-marker {
  display: none;
}

.q-marker {
  color: #38bdf8;
  font-family: ui-monospace, monospace;
  font-weight: 700;
}

.q-text {
  flex: 1;
}

.expand-icon {
  color: #64748b;
  font-size: 16px;
  font-weight: 300;
  transition: transform 0.2s;
}

.faq-item[open] .expand-icon {
  transform: rotate(45deg);
  color: #38bdf8;
}

.faq-answer {
  padding: 14px 18px 18px 18px;
  border-top: 1px solid #1e293b;
  background: #070b13;
}

.answer-badge {
  display: inline-block;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  font-size: 10.5px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid rgba(16, 185, 129, 0.3);
  margin-bottom: 8px;
  font-family: ui-monospace, monospace;
}

.answer-lead {
  margin: 0 0 10px 0;
  font-size: 13.5px;
  color: #f1f5f9;
  line-height: 1.6;
}

.answer-body {
  font-size: 12.5px;
  color: #94a3b8;
  line-height: 1.7;
}

.answer-body p {
  margin: 6px 0;
}
</style>
