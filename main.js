import Twig from 'twig';
import patternsData from './patternsData.build';
import collapsible from './patterns/collapsible.jsx';

export const PatternComponents = {
  collapsible
};

export default {
  getPatternMarkup: (patternName, patternConfig) => {
    const template = Twig.twig({ data: patternsData.twig[patternName] });
    return template.render(patternConfig).trim();
  },
  getPatternScript: (patternName) => {
    return patternsData.js[patternName];
  },
  getPatternList: () => {
    return [
      'collapsible',
      'cta.primary',
      'cta.print',
      'cta.secondary',
      'divider',
      'header.page-title',
      'layout',
      'loader',
    ];
  },
};
