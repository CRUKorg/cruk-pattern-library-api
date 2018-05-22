# cruk-pattern-library-api
Methods to return markup / styles / scripts for reusable patterns.

## Usage Examples

@TODO: How do you load vanilla js snippets to go with the static markup returned? When not using JSX?

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

### SCSS Usage

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

## Updating

* Increment the version number in `package.json`.
* Increment the version number in `composer.json`.
* Run `npm run build` to rebuild.
* Commit and create a new release in github.
* Publish to NPM.

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
