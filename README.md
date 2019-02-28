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

* Run `npm run start:dev` then http://localhost:9999/
* Run `npm run build` to rebuild before committing changes
* Distribution folder location `/lib` to preview patterns (jsx)

## Design system
Demo: https://cruk-design-system.netlify.com/
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
* Exclude build folder
* Design system automation

Track progress here: https://github.com/CRUKorg/cruk-pattern-library-api/issues

## Design System
**Objective:** A design system to fit current workflow and easy to integrate with exist Pattern Library. Simple to use, non-opinionated and doesn't expect you to write your markup or code in any particular way.

### Demo
[https://crukorg.github.io/cruk-pattern-library-api/](https://crukorg.github.io/cruk-pattern-library-api/)

### Astrum
Currently this design system is powered up by [Astrum](http://astrum.nodividestudio.com/).
It’s small one page application which simply loop the files (by giving path) and output to the page. A config file data.json to store the path, group, title ..etc.

### New file structure

With new structure and custom code, Astrum will loop through patterns folder and output html markup and description file.  I also modify the layout, separate pages into top navigation.

```
./src
--./pages
--./components
----./designElements
----./uiComponents
./data.json
```

#### designElements
Such as colour, typography, grid layout, body text, base theme

#### uiComponents
Any components submitted through pattern builder.

Currently it points to `./patterns`

Ideally, under each component file structure:

```
./breadcrumb
 --./breadcrumb.jsx
 --./breadcrumb.twig
 --./breadcrumb.tpl
 --./breadcrumb.scss
 --./breadcrumb.html
 --./breadcrumb.md
```

#### TODO
* Make data.json auto-generated to reduce manual process even more.
* Make pages nested so they can have sub-pages
* Read data from data store and fetch from API ?
