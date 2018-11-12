# cruk-pattern-library-api
Methods to return markup / styles / scripts for reusable patterns.

## Usage Examples

### PHP Usage

composer.json

```
"repositories": [
    {
        "type": "git",
        "url": "https://github.com/CRUKorg/cruk-pattern-library-api"
    },
],
"require": {
    "cruk/cruk-pattern-library-api": "^2.0",
},
```

YourFile.php
```
use Cruk\CrukPatternLibraryApi\Patterns;

$patterns = new Patterns();
$markup = $patterns->getMarkup('cta.primary', [
  'href' => 'https://www.cancerresearchuk.org/',
  'text' => 'Home',
]);
```

### JS Usage (return a string)

package.json:

```
"dependencies": {
    "cruk-pattern-library-api": "^2.0",
},
```

YourFile.js:

```
import Patterns from 'cruk-pattern-library-api';

const markup = Patterns.getPatternMarkup('cta.primary', {
    text: 'Home',
    href: 'https://www.cancerresearchuk.org/'
});
```

getPatternMarkup should return an empty string if there is no content.

### React Usage (Return a JSX component)

```
import React from 'react';
import { CtaPrimary } from 'cruk-pattern-library-api';

export default function YourComponent(props) {
  return <CtaPrimary href="https://www.cancerresearchuk.org/" text="Home" />;
}
```

### SCSS Usage

package.json:

```
"dependencies": {
    "cruk-pattern-library-api": "^2.0",
},
```

To import everything including patterns and global styles:

```
@import "~cruk-pattern-library-api/scss/all.scss";
```

To import only variables, mixins, and other tools (no rules):

```
@import "~cruk-pattern-library-api/scss/base.scss";
```

To import specific patterns only:

```
@import "~cruk-pattern-library-api/patterns/cta.primary.scss";
```

### Rendering flat markup

When rendering the flat markup, you will need to attach behaviour
handlers for things like collapsible slide toggles, etc.

Something like this:

```
import Patterns from 'cruk-pattern-library-api';

const markup = 'theFullMarkupOfAllPatterns';

<div className="foo-bar" dangerouslySetInnerHTML={{ __html: markup }} />

Patterns.addVanillaBehaviours('foo-bar', window.document);
```

## Development

* Run `npm run start:dev` then http://localhost:8081/
* Run `npm run build` to rebuild before committing changes
* Distribution folder location `/lib` to preview patterns (jsx)

## Design system
Gihub page: https://crukorg.github.io/cruk-pattern-library-api/
* currently it integrates with Netlify CI/CD until there's official CRUK one took place

### Updating

* Increment the version number in `package.json`.
* Increment the version number in `composer.json`.
* Run `npm run build` to rebuild.
* Commit and create a new release in github.
* Publish to [NPM](https://www.npmjs.com/package/cruk-pattern-library-api).

### Adding patterns

* Patterns should be fully self-contained (don't rely on bootstrap, jQuery, etc).
* Add a twig file to the patterns directory. (See section on naming)
* Add a jsx file to the patterns directory. (See section on naming)
* Add a scss file to the patterns directory. (See section on naming)
* If the pattern requires scripted behaviour, add a vanilla js file to the patterns directory. (See section on naming)
* Add pattern name to main.js in the getPatternList() method.
* Add JSX component to main.js as an import/export.
* Import pattern scss file in `scss/all.scss`.
* Run `npm run build` to rebuild.

### File naming

Files should be named consistently as {pattern-name}.{extension}.
For example: `foo-pattern.twig`. Sub-patterns look like `type.variant.twig`.

## Roadmap

* UNIT TESTING AS SOON AS POSSIBLE
* Themable - e.g. rfl, su2c, etc. have different color schemes
* ~~Display patterns visually using github pages or similar~~
* Provide some way to document each pattern, including what arguments it accepts
* ~~Add more global styles, reset, etc~~
* Improve styles! Horizontal and vertical rhythm would be nice
* Break up the patterns directory into sub-dirs
* Add all the missing patterns
* Reduce the effort involved in adding new patterns
* Extend for other technologies (E.g. React Native, react styled components)
* CI/CD
* ~~Compile a CSS file and~~ push to S3 on build

Track progress here: https://github.com/CRUKorg/cruk-pattern-library-api/issues

