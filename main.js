import Handlebars from 'handlebars';
import patternsData from './patternsData.build';

const processTemplate = (source, data) => {
  // @TODO: Something something about precompilation being faster?
  const template = Handlebars.compile(source);
  return template(data);
};

export default {
  getPatternMarkup: (patternName, patternConfig) => {
    const template = patternsData.html[patternName];
    return processTemplate(template, patternConfig);
  },
  getPatternScript: (patternName) => {
    return patternsData.js[patternName];
  },
  getPatternList: () => {
    return [
      'cta.primary',
      'cta.print',
      'cta.secondary',
    ];
  },
};
