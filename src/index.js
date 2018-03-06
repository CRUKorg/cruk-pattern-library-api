import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const patternsDir = '../patterns';

const findFile = (dir, filter) => {
  const files = fs.readdirSync(dir);
  for(let i=0;i<files.length;i++){
    const filename = path.join(dir, files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      findFile(filename, filter); //recurse
    }
    else if (filename.indexOf(filter) >= 0) {
      return filename;
    }
  }
  return false;
};

const getFileContents = (filename) => {
  const path = findFile(patternsDir, filename);
  const fileContents = fs.readFileSync(path, 'utf-8');

  if (!fileContents || typeof fileContents !== 'string') {
    return '';
  }

  return fileContents;
};

const processTemplate = (source, data) => {
  // @TODO: Precompilation is faster apparently?
  const template = Handlebars.compile(source);
  return template(data);
};

export default {
  getPatternMarkup: (patternName, patternConfig) => {
    const template = getFileContents(`${patternName}.html`);
    return processTemplate(template, patternConfig);
  },
  getPatternStyle: (patternName) => {
    return getFileContents(`${patternName}.scss`);
  },
  getPatternScript: (patternName) => {
    return getFileContents(`${patternName}.js`);
  },
};
