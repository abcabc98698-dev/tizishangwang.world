import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { h } from 'vue';
import './custom.css';

import AirportCard from './components/AirportCard.vue';
import SpeedDashboard from './components/SpeedDashboard.vue';
import StreamingMatrix from './components/StreamingMatrix.vue';
import TopologyView from './components/TopologyView.vue';
import BrandComparisonTable from './components/BrandComparisonTable.vue';
import AsciiDecisionTree from './components/AsciiDecisionTree.vue';
import FaqSection from './components/FaqSection.vue';
import ClusterGrid from './components/ClusterGrid.vue';
import AuthorBadge from './components/AuthorBadge.vue';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(AuthorBadge)
    });
  },
  enhanceApp({ app }) {
    app.component('AirportCard', AirportCard);
    app.component('SpeedDashboard', SpeedDashboard);
    app.component('StreamingMatrix', StreamingMatrix);
    app.component('TopologyView', TopologyView);
    app.component('BrandComparisonTable', BrandComparisonTable);
    app.component('AsciiDecisionTree', AsciiDecisionTree);
    app.component('FaqSection', FaqSection);
    app.component('ClusterGrid', ClusterGrid);
    app.component('AuthorBadge', AuthorBadge);
  }
} satisfies Theme;
