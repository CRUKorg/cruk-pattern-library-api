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
  getPatternStyle: (patternName) => {
    return patternsData.scss[patternName];
  },
  getPatternScript: (patternName) => {
    return patternsData.js[patternName];
  },
};
