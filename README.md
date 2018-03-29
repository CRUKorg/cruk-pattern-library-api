# cruk-pattern-library-api
Methods to return markup / styles / scripts for reusable patterns.

## Usage

```
import Patterns from 'cruk-pattern-library-api';

const markup = Patterns.getPatternMarkup('cta.link', { text: 'Do it!', href: 'https://www.example.com/' });
const script = Patterns.getPatternScript('cta.link');
```

Methods should return an empty string if there is no content.

To import scss, use the following in your styles.scss file:

```
$fonts-directory: '~cruk-pattern-library-api/fonts';
@import "~cruk-pattern-library-api/scss/all.scss";
```

## Adding patterns

* Patterns should be fully self-contained (don't rely on bootstrap, jQuery, etc).
* Add an html file to the patterns directory, using "handlebars" templating. (See section on naming)
* Add an scss file to the patterns directory. (See section on naming)
* If the pattern requires scripted behaviour, add a vanilla js file to the patterns directory. (See section on naming)
* Add pattern name to main.js in the getPatternList() method.
* Import pattern scss file in `scss/all.scss`.
* Run `npm run build` to rebuild.

## File naming

Files should be named consistently as {pattern-name}.{extension}.
For example: `foo-pattern.html`. Sub-patterns look like `type.variant.html`.

Some examples:
* `cta.link.html` (A handlebars template)
* `cta.link.scss`
* `cta.link.js` (Vanilla JS only)
* `cta.button.html`
* `cta.button.scss`
* `cta.button.js`

## Updating

* Increment the version number in `package.json`.
* Run `npm run build` to rebuild.
* Commit and create a new release in github.
* Publish to NPM.
