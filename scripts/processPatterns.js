// Take the pattern file values and export them to js variables that can be imported in the browser scope.
// This node script can be run in webpack before the compile, so that the output gets bundled.

const fs = require('fs');
const path = require('path');

const patternsDir = './patterns';
const patternsData = {
  html: {},
  scss: {},
  js: {},
};

function inspectFilename(filename) {
  const parts = filename.split('.');
  return {
    extension: parts.pop(),
    patternName: parts.join('.'),
  };
}

function promiseAll(items, callback) {
  const promises = [];
  items.forEach(function(item, index) {
    promises.push( function(item) {
      return new Promise(function(resolve, reject) {
        return callback.apply(this, [item, index, resolve, reject]);
      });
    }(item, index));
  });
  return Promise.all(promises);
}

function readPatternFiles(dirname) {
  const callback = function (filename, index, resolve, reject) {
    fs.readFile(path.resolve(dirname, filename), 'utf-8', function(err, content) {
      if (err) return reject(err);
      if (!content || typeof content !== 'string') return reject(`Could not process file ${filename}`);
      const patternInfo = inspectFilename(filename);
      patternsData[patternInfo.extension][patternInfo.patternName] = content;
      return resolve(true);
    });
  };
  return new Promise(function(resolve, reject) {
    fs.readdir(dirname, function(err, filenames) {
      if (err) return reject(err);
      promiseAll(
        filenames,
        callback
      )
        .then(function(results) {
          return resolve(results);
        })
        .catch(function(error) {
          return reject(error);
        });
    });
  });
}

readPatternFiles(patternsDir)
  .then(
    function (results) {
      const fileOutput = `export default ${JSON.stringify(patternsData)}; //eslint-disable-line`;
      fs.writeFile('patternsData.build.js', fileOutput, function(err) {
        if(err) {
          return console.log(err);
        }

        console.log('Successfully built patternsData file.');
      });
    },
    function (error) {
      return console.log(error);
    }
  );
