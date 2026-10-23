<template>
  <div class="faq-container">
    <div class="faq-head">
      <span class="faq-icon">❓</span>
      <h3 class="faq-title">{{ title || '高频核心问答 (Frequently Asked Questions & GEO Answers)' }}</h3>
    </div>

    <div class="faq-list">
      <details
        v-for="(item, index) in normalizedList"
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

interface RawFaqItem {
  question?: string;
  q?: string;
  directAnswer?: string;
  detailedExplanation?: string;
  a?: string;
}

interface NormalizedFaq {
  question: string;
  directAnswer: string;
  detailedExplanation: string;
}

const props = withDefaults(
  defineProps<{
    title?: string;
    items?: RawFaqItem[];
    faqList?: RawFaqItem[];
  }>(),
  {
    title: '高频核心技术问答 (FAQ & AI Answer Digest)',
    items: () => [],
    faqList: () => []
  }
);

const normalizedList = computed<NormalizedFaq[]>(() => {
  const source = props.items && props.items.length > 0 ? props.items : (props.faqList || []);
  return source.map((item) => {
    const question = item.question || item.q || '';
    const rawAnswer = item.a || item.detailedExplanation || '';
    
    // If directAnswer is provided, use it; otherwise use rawAnswer directly
    let directAnswer = item.directAnswer;
    if (!directAnswer) {
      directAnswer = rawAnswer.length > 90 ? rawAnswer.slice(0, 90) + '...' : rawAnswer;
    }

    let detailedExplanation = item.detailedExplanation;
    if (!detailedExplanation) {
      detailedExplanation = `<p>${rawAnswer}</p>`;
    }

    return {
      question,
      directAnswer,
      detailedExplanation
    };
  });
});

const schemaJson = computed(() => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: normalizedList.value.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${item.directAnswer} ${item.detailedExplanation.replace(/<[^>]+>/g, '')}`.trim()
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
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.faq-icon {
  font-size: 16px;
}

.faq-title {
  margin: 0;
  color: #f1f5f9;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.faq-list {
  padding: 8px 16px;
}

.faq-item {
  border-bottom: 1px solid #141f33;
  padding: 10px 0;
  transition: all 0.2s ease;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  font-weight: 600;
  font-size: 13.5px;
  color: #f8fafc;
  padding: 6px 4px;
  user-select: none;
}

.faq-question::-webkit-details-marker {
  display: none;
}

.q-marker {
  color: #38bdf8;
  font-family: ui-monospace, monospace;
  font-weight: 700;
  margin-right: 8px;
}

.q-text {
  flex: 1;
}

.expand-icon {
  color: #64748b;
  font-size: 16px;
  font-family: ui-monospace, monospace;
  transition: transform 0.2s ease;
}

.faq-item[open] .expand-icon {
  transform: rotate(45deg);
  color: #38bdf8;
}

.faq-answer {
  padding: 10px 8px 6px 8px;
  color: #cbd5e1;
  font-size: 13px;
  line-height: 1.7;
  border-top: 1px dashed rgba(30, 41, 59, 0.6);
  margin-top: 6px;
}

.answer-badge {
  display: inline-block;
  background: rgba(56, 189, 248, 0.12);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.25);
  font-size: 10.5px;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 3px;
  margin-bottom: 8px;
}

.answer-lead {
  margin: 0 0 8px 0;
  color: #f1f5f9;
}

.answer-body {
  color: #94a3b8;
}

.answer-body :deep(p) {
  margin: 6px 0;
}

.answer-body :deep(code) {
  background: #141f33;
  color: #38bdf8;
  padding: 1px 5px;
  border-radius: 3px;
  font-family: ui-monospace, monospace;
  font-size: 0.9em;
}
</style>
