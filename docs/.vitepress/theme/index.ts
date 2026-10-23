import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './custom.css';

import AirportCard from './components/AirportCard.vue';
import SpeedDashboard from './components/SpeedDashboard.vue';
import StreamingMatrix from './components/StreamingMatrix.vue';
import TopologyView from './components/TopologyView.vue';
import BrandComparisonTable from './components/BrandComparisonTable.vue';
import AsciiDecisionTree from './components/AsciiDecisionTree.vue';
import FaqSection from './components/FaqSection.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AirportCard', AirportCard);
    app.component('SpeedDashboard', SpeedDashboard);
    app.component('StreamingMatrix', StreamingMatrix);
    app.component('TopologyView', TopologyView);
    app.component('BrandComparisonTable', BrandComparisonTable);
    app.component('AsciiDecisionTree', AsciiDecisionTree);
    app.component('FaqSection', FaqSection);
  }
} satisfies Theme;
