import Twig from 'twig';
import patternsData from './patternsData.build';

export {default as Breadcrumb} from './patterns/breadcrumb';
export {default as Collapsible} from './patterns/collapsible';
export {default as CtaPrimary} from './patterns/cta.primary';
export {default as CtaSecondary} from './patterns/cta.secondary';
export {default as Divider} from './patterns/divider';
export {default as HeaderPageTitle} from './patterns/header.page-title';
export {default as Loader} from './patterns/loader';
export {default as Search} from './patterns/search';

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
      'breadcrumb',
      'collapsible',
      'cta.primary',
      'cta.print',
      'cta.secondary',
      'divider',
      'header.h2',
      'header.h3',
      'header.page-title',
      'layout',
      'loader',
      'search',
      'text',
    ];
  },
};
