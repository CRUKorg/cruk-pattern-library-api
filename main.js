import Twig from 'twig';
import patternsData from './patternsData.build';

export {default as Breadcrumb} from './patterns/breadcrumb';
export {default as Collapsible} from './patterns/collapsible.jsx';
export {default as CtaLink} from './patterns/cta.link';
export {default as CtaPrimary} from './patterns/cta.primary';
export {default as CtaSecondary} from './patterns/cta.secondary';
export {default as Divider} from './patterns/divider';
export {default as Header} from './patterns/header';
export {default as HeaderPageTitle} from './patterns/header.page-title';
export {default as Loader} from './patterns/loader';
export {default as Search} from './patterns/search';
export {default as ListOrdered} from './patterns/list.ordered';
export {default as ListUnordered} from './patterns/list.unordered';
export {default as MegaMenu} from './patterns/menu';
export {default as NavigationBlock} from './patterns/navigation_block';
export {default as RelatedLinks} from './patterns/related.links';
export {default as Video} from './patterns/video';

import vCollapsible from './patterns/collapsible.js';
import vCtaPrint from './patterns/cta.print.js';

import './scss/all.scss';

const vanillaHandlers = [
  vCollapsible,
  vCtaPrint,
];

export default {
  getPatternMarkup: (patternName, patternConfig) => {
    const template = Twig.twig({ data: patternsData.twig[patternName] });
    return template.render(patternConfig).trim();
  },
  // When users interact with the DOM, check if our patterns want to do anything.
  // parentClassName is the container in which your patterns are being rendered as flat html (from twig).
  addVanillaBehaviours: (parentClassName, document) => {
    const eventsWeCareAbout = ['click'];
    const patternContainers  = Array.from(document.getElementsByClassName(parentClassName)) || [];
    patternContainers.forEach((element) => {
      if (element.classList.contains('js-behaviours')) { return; }
      eventsWeCareAbout.forEach((eventName) => {
        element.addEventListener(eventName, (event) => {
          vanillaHandlers.forEach((handler) => {
            handler(eventName, event.target);
          });
        });
      });
      element.classList.add('js-behaviours');
    });
  },
  getPatternList: () => {
    return [
      'breadcrumb',
      'collapsible',
      'cta.link',
      'cta.primary',
      'cta.print',
      'cta.secondary',
      'divider',
      'header',
      'header.h2',
      'header.h3',
      'header.page-title',
      'layout',
      'list.ordered',
      'list.unordered',
      'loader',
      'menu',
      'navigation_block',
      'related.links',
      'search',
      'text',
      'video',
    ];
  },
};
