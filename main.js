import Twig from 'twig';
import patternsData from './patternsData.build';

export {default as Collapsible} from './patterns/collapsible';
export {default as CtaPrimary} from './patterns/cta.primary';
export {default as CtaSecondary} from './patterns/cta.secondary';
export {default as Divider} from './patterns/divider';
export {default as HeaderPageTitle} from './patterns/header.page-title';
export {default as Loader} from './patterns/loader';

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
