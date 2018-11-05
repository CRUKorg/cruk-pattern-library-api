export default {"twig":{"breadcrumb":"{% set class = 'cr-breadcrumb' %}\n{% if hide_current %}\n    {% set class = class ~ ' cr-breadcrumb--hide-current' %}\n{% endif %}\n{% if hide_top %}\n    {% set class = class ~ ' cr-breadcrumb--hide-top' %}\n{% endif %}\n<nav id=\"breadcrumb\" aria-label=\"You are here\" class=\"{{ class }}\">\n    <ol itemScope itemType=\"http://schema.org/BreadcrumbList\" class=\"cr-breadcrumb-nav\">\n        {% for crumb in crumbs %}\n            <li itemProp=\"itemListElement\" itemScope itemType=\"http://schema.org/ListItem\" aria-level=\"{{ loop.index }}\" class=\"cr-breadcrumb__item\">\n                <a itemProp=\"item\" href={{ crumb.href }} class=\"cr-breadcrumb__link\">{{ crumb.label }}</a>\n                <span></span>\n                <meta itemProp=\"position\" content=\"{{ loop.index }}\" />\n            </li>\n        {% endfor %}\n    </ol>\n</nav>\n","cta.primary":"<a class=\"cr-cta--primary\" href=\"{{ href }}\">{{ text }}</a>\n","cta.link":"<a class=\"cr-cta--link\" href=\"{{ href }}\">{{ text }}</a>\n","collapsible":"<div class=\"cr-collapsible\">\n  <input id=\"cr-collapsible__input-{{ title|replace({' ': ''}) }}\" class=\"cr-collapsible__input\" type=\"checkbox\">\n  <label htmlFor=\"cr-collapsible__input-{{ title|replace({' ': ''}) }}\" class=\"cr-collapsible__heading-button\">\n    <h2 class=\"cr-collapsible__heading\">\n      {{ title }}\n    </h2>\n  </label>\n  <div class=\"cr-collapsible__content\">\n    {{ content|raw }}\n  </div>\n</div>\n","cta.print":"<button class=\"cr-cta--print\">{{ text }}</button>\n","cta.secondary":"<a class=\"cr-cta--secondary\" href=\"{{ href }}\">{{ text }}</a>\n","divider":"<hr class=\"cr-divider\" />\n","header.h2":"<h2 class=\"cr-heading-pattern\">{{ text }}</h2>\n","header.h3":"<h3 class=\"cr-heading-pattern\">{{ text }}</h3>\n","layout":"{% if isRoot %}\n    <div class=\"cr-layout\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_full %}\n    <div class=\"cr-layout__row cr-layout__row--full\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_100 %}\n    <div class=\"cr-layout__row cr-layout__row--100\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_50_50 %}\n    <div class=\"cr-layout__row cr-layout__row--50-50\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_66_33 %}\n    <div class=\"cr-layout__row cr-layout__row--66-33\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_33_66 %}\n    <div class=\"cr-layout__row cr-layout__row--33-66\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_33_33_33 %}\n    <div class=\"cr-layout__row cr-layout__row--33-33-33\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_25_50_25 %}\n    <div class=\"cr-layout__row cr-layout__row--25-50-25\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_25_25_25_25 %}\n    <div class=\"cr-layout__row cr-layout__row--25-25-25-25\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isCell %}\n    <div class=\"cr-layout__cell\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n","header.page-title":"<h1 class=\"cr-page-title\">{{ text }}</h1>\n","list.ordered":"<ol class=\"cr-list cr-list--ordered\">\n    {% for item in items %}\n        <li class=\"cr-list__item\">{{ item|raw }}</li>\n    {% endfor %}\n</ol>\n","list.unordered":"<ul class=\"cr-list cr-list--unordered\">\n    {% for item in items %}\n        <li class=\"cr-list__item\">{{ item|raw }}</li>\n    {% endfor %}\n</ul>\n","loader":"<div class=\"cr-simple-loader\">\n    <div class=\"cr-simple-loader__spinner\">\n        <div class=\"cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce1\" />\n        <div class=\"cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce2\" />\n        <div class=\"cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce3\" />\n    </div>\n</div>\n","navigation_block":"<a class=\"cr-navigation-block__cta\" href=\"{{ href }}\" target=\"{{ target }}\">\n    <div class=\"cr-navigation-block\">\n        <h2 class=\"cr-navigation-block__title\">{{ title }}</h2>\n        <div class=\"cr-navigation-block__content\">\n            {{ text }}\n        </div>\n    </div>\n</a>\n","search":"<form role=\"search\" class=\"cr-search-input\">\n    <label for=\"{{ uniqueId }}\" class=\"cr-search-input__label\">{{ label }}</label>\n    <input\n            type=\"search\"\n            name=\"search\"\n            id=\"{{ uniqueId }}\"\n            class=\"cr-search-input__input\"\n            placeholder=\"{{ label }}\"\n            autocomplete=\"off\"\n            autocorrect=\"off\"\n    />\n    <button\n            type=\"submit\"\n            class=\"cr-search-input__button\"\n            aria-label=\"Submit your search\"\n    >\n        Search\n    </button>\n</form>\n","text":"<div class=\"cr-text-pattern\">\n    {{ content|raw }}\n</div>\n","related.links":"<div class=\"cr-related-links\">\n  <div class=\"cr-related-links__content\">\n    <h2 class=\"cr-related-links__heading\">{{ title }}</h2>\n    <div class=\"cr-related-links__body\">\n      {{ content|raw }}\n    </div>\n  </div>\n</div>\n"},"scss":{"breadcrumb":"@import '../scss/base';\n\n.cr-breadcrumb-nav {\n  padding: $rhythm-vertical-base 0;\n  @extend %constrain-width;\n\n  .cr-breadcrumb__item {\n    display: inline;\n    list-style: none;\n    // Zero font-size is a way to avoid gaps between the inline elements (spaces in html).\n    font-size: 0;\n\n    span {  /* stylelint-disable-line */\n      background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 593 922'%3E%3Cpath fill='%23333333' d='M582 435L158 11a36 36 0 0 0-52 0l-95 95a36 36 0 0 0 0 51l304 304L11 764a36 36 0 0 0 0 52l95 95c14 14 37 14 52 0l424-424c14-15 14-38 0-52z'/%3E%3C/svg%3E\") no-repeat center center;\n      display: inline-block;\n      width: 18px;\n      height: 18px;\n      margin: 10px;\n      background-size: 50%;\n    }\n  }\n\n  .cr-breadcrumb__item:last-of-type span { /* stylelint-disable-line */\n    display: none;\n  }\n\n  .cr-breadcrumb__link {\n    color: $gray-80;\n\n    &:hover {\n      color: $brand-secondary;\n      text-decoration: underline;\n    }\n\n    &:active,\n    &:focus,\n    &:visited {\n      color: $gray-80;\n    }\n  }\n}\n\n// Hide the current page link.\n\n.cr-breadcrumb--hide-current .cr-breadcrumb__list-item:last-child {\n  @extend %sr-only;\n}\n\n// Hide the home page link.\n\n.cr-breadcrumb--hide-top {\n\n  .cr-breadcrumb__list-item:first-child {\n    @extend %sr-only;\n  }\n\n  .cr-breadcrumb__list-item:nth-child( 2 ) .cr-breadcrumb__link {\n    padding-left: $rhythm-horizontal-base;\n  }\n}\n","collapsible":"@import '../scss/base';\n\n.cr-collapsible {\n  @extend .vertical-spacing;\n  border: 1px solid $brand-gray-light;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  position: relative;\n}\n\n.cr-collapsible__heading {\n  margin: 0;\n  padding: 0;\n}\n\n.cr-collapsible__content {\n  display: none;\n  padding: $rhythm-vertical-base $rhythm-horizontal-base;\n}\n\n.cr-collapsible__heading-button {\n  @include icon-beside($icon-plus, $brand-primary, left, $rhythm-horizontal-base * 2);\n  @include font-size-map($h2-font-map);\n  display: block;\n  cursor: pointer;\n  background: $gray-5;\n  border: none;\n  color: $brand-primary;\n  padding: $rhythm-vertical-base $rhythm-horizontal-base;\n  padding-left: $rhythm-horizontal-base * 4;\n  width: 100%;\n  text-align: left;\n  font-family: $font-family-headings;\n  font-weight: $font-weight-heavy;\n\n  &:hover, &:focus {\n    @include icon-beside($icon-plus, $brand-secondary, left, $rhythm-horizontal-base * 2);\n    color: $brand-secondary;\n    text-decoration: underline;\n    outline: none;\n  }\n}\n\n.cr-collapsible__input {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  width: 95%;\n  height: 45px;\n  cursor: pointer;\n\n  &:hover {\n\n    ~ .cr-collapsible__heading-button {\n      @include icon-beside($icon-plus, $brand-secondary, left, $rhythm-horizontal-base * 2);\n      color: $brand-secondary;\n      text-decoration: underline;\n      outline: none;\n    }\n  }\n\n  &:checked {\n\n    ~ .cr-collapsible__content {\n      display: block;\n    }\n\n    ~ .cr-collapsible__heading-button {\n      @include icon-beside($icon-minus, $brand-primary, left, $rhythm-horizontal-base * 2);\n      color: $brand-primary;\n    }\n  }\n}\n","cta.link":"@import '../scss/base';\n\n.cr-cta--link {\n  color: $KINGFISHER_DAISY;\n  font-weight: $font-weight-heavy;\n  padding: 0.3em 0;\n  text-decoration: none;\n  display: inline-block;\n  @include font-size-map($base-font-map);\n\n  &:hover {\n    color: $brand-secondary;\n    text-decoration: underline;\n  }\n\n  &:active,\n  &:focus,\n  &:visited {\n    color: $KINGFISHER_DAISY;\n  }\n\n  @extend .vertical-spacing;\n}\n","cta.primary":"@import '../scss/base';\n\n.cr-cta--primary {\n  background-color: $brand-secondary;\n  border-radius: $border-radius;\n  border: 1px solid $brand-secondary;\n  color: $WHITE;\n  display: inline-block;\n  font-family: $font-family-museo;\n  font-weight: $font-weight-heavy;\n  padding: 10px 19px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  @include font-size-map($base-font-map);\n\n  &:hover {\n    color: $WHITE;\n    text-decoration: none;\n    background-color: $brand-secondary-light;\n  }\n\n  &:visited {\n    color: $WHITE;\n  }\n\n  @extend .vertical-spacing;\n}\n","cta.print":"@import '../scss/base';\n\n.cr-cta--print {\n  color: $brand-primary;\n  display: block;\n  font-weight: $font-weight-heavy;\n  padding-left: 20px;\n  @include font-size-map($base-font-map);\n\n  &::before {\n    @include icon-background($icon-print, $brand-primary);\n    padding-right: 8px;\n    text-decoration: none;\n    vertical-align: middle;\n  }\n\n  @extend .vertical-spacing;\n}\n","cta.secondary":"@import '../scss/base';\n\n.cr-cta--secondary {\n  color: $brand-secondary;\n  display: block;\n  font-weight: $font-weight-heavy;\n  padding-left: 20px;\n  position: relative;\n  text-decoration: none;\n  @include font-size-map($base-font-map);\n\n  &:hover {\n    color: $brand-secondary;\n    text-decoration: underline;\n  }\n\n  &::before {\n    @include icon-background($icon-chevron-right, $brand-secondary);\n    content: '';\n    display: block;\n    height: 16px;\n    left: 0;\n    margin-top: -8px;\n    position: absolute;\n    top: 50%;\n    width: 16px;\n  }\n\n  &:visited {\n    color: $brand-secondary-light;\n  }\n\n  @extend .vertical-spacing;\n}\n","divider":"@import '../scss/base';\n\n.cr-divider {\n  border: 1px solid $brand-gray-light;\n  height: 0;\n  margin: $rhythm-vertical-base 0;\n  padding: initial;\n  position: initial;\n}\n","header.page-title":"@import '../scss/base';\n\n.cr-page-title {\n  @extend %constrain-width;\n  @extend %clearfix;\n  font-weight: $font-weight-heavy;\n  text-align: left;\n}\n","layout":"@import '../scss/base';\n\n.cr-layout__row {\n  @extend %constrain-width;\n  @extend .vertical-spacing;\n  width: auto;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-column-gap: $rhythm-vertical-base;\n  grid-row-gap: $rhythm-horizontal-base;\n}\n\n.cr-layout__row.cr-layout__row--fullbleed {\n  max-width: none;\n}\n\n// On screens that are big enough, apply the grid.\n@media screen and (min-width: $breakpoint-b) {\n  // @TODO: investigate why fr unit cause auto increase overlap issue\n\n  .cr-layout__row--100 {\n    grid-template-columns: 100%;\n  }\n\n  .cr-layout__row--50-50 {\n    grid-template-columns: repeat(2, 49%);\n  }\n\n  .cr-layout__row--66-33 {\n    grid-template-columns: 66% 33%;\n  }\n\n  .cr-layout__row--33-66 {\n    grid-template-columns: 33% 66%;\n  }\n\n  .cr-layout__row--33-33-33 {\n    grid-template-columns: repeat(3, 32.5%);\n  }\n\n  .cr-layout__row--25-50-25 {\n    grid-template-columns: 25% 48% 25%;\n  }\n\n  .cr-layout__row--25-25-25-25 {\n    grid-template-columns: repeat(4, 24.25%);\n  }\n}\n\n//\n// == IE Backwards Compatibility\n//\n\n@include evil-ie {\n  @media screen and (max-width: $breakpoint-b) {\n\n    .cr-layout__row {\n      display: block;\n    }\n  }\n  @media screen and (min-width: $breakpoint-b) {\n\n    .cr-layout__cell {\n      margin-left: 5px;\n      margin-right: 5px;\n    }\n\n    .cr-layout__cell:nth-of-type( 2 ) {\n      -ms-grid-column: 2;\n    }\n\n    .cr-layout__cell:nth-of-type( 3 ) {\n      -ms-grid-column: 3;\n    }\n\n    .cr-layout__cell:nth-of-type( 4 ) {\n      -ms-grid-column: 4;\n    }\n  }\n}\n\n","list":"@import '../scss/base';\n\n.cr-list--unordered {\n  list-style: disc inside;\n  @extend .vertical-spacing;\n}\n\n.cr-list--ordered {\n  list-style: decimal inside;\n  @extend .vertical-spacing;\n}\n\n.cr-list--unordered .cr-list--unordered,\n.cr-list--ordered .cr-list--unordered {\n  list-style: circle inside;\n  margin-left: $rhythm-horizontal-base;\n}\n\n.cr-list--ordered .cr-list--ordered,\n.cr-list--unordered .cr-list--ordered {\n  list-style: lower-latin inside;\n  margin-left: $rhythm-horizontal-base;\n}\n\n/* stylelint-disable selector-max-universal */\n\n.cr-list__item * {\n  display: inline;\n}\n","loader":"@import '../scss/base';\n\n.cr-simple-loader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba($WHITE, 0.7);\n  z-index: 999;\n}\n\n.cr-simple-loader__spinner-item {\n  width: 40px;\n  height: 40px;\n}\n\n.cr-simple-loader__spinner {\n  width: 200px;\n  position: absolute;\n  margin-top: -20px;\n  top: 50%;\n  left: 50%;\n  margin-left: -100px;\n}\n","navigation_block":".cr-navigation-block {\n  border: 1px solid $gray-10;\n  border-radius: $border-radius;\n  padding: $rhythm-base;\n  @extend .vertical-spacing;\n}\n\n.cr-navigation-block__title {\n  color: $KINGFISHER_DAISY;\n  padding-bottom: 5px;\n\n  .cr-navigation-block__cta:hover & {\n    color: $HOLLYWOOD_CERISE;\n    text-decoration: underline;\n  }\n}\n\n.cr-navigation-block__content {\n  color: $gray-80;\n  word-break: break-word;\n\n  .cr-navigation-block__cta:hover & {\n    color: $gray-80;\n  }\n}\n\n.cr-navigation-block__cta:hover {\n  text-decoration: none;\n}\n","related.links":"@import '../scss/base';\n\n.cr-related-links {\n  background-color: $LILY_WHITE;\n  border-radius: $border-radius;\n  @extend .vertical-spacing;\n}\n\n.cr-related-links__content {\n  padding: $rhythm-base;\n}\n\n.cr-related-links__body {\n  padding-left: $rhythm-horizontal-base;\n}\n","search":"@import '../scss/base';\n\n.cr-search-input__label {\n  @extend %sr-only;\n}\n\n.cr-search-input {\n  @extend %input-group__group;\n  @extend .vertical-spacing;\n}\n\n.cr-search-input--focused {\n  @extend %input-group__group--focused;\n}\n\n.cr-search-input__input {\n  @extend %input-group__input;\n}\n\n.cr-search-input__button {\n  @extend %input-group__button;\n  @include text-replace($icon-search, $gray-20);\n  border: 0;\n  background-size: 18px;\n}\n"},"js":{"collapsible":"/* eslint-disable no-undef, no-empty */\n\nvar speed = 200;\n\n// Like Element.closest() but works in IE.\nvar getClosest = function (elem, selector) {\n  // Element.matches() polyfill\n  if (!Element.prototype.matches) {\n    Element.prototype.matches =\n      Element.prototype.matchesSelector ||\n      Element.prototype.mozMatchesSelector ||\n      Element.prototype.msMatchesSelector ||\n      Element.prototype.oMatchesSelector ||\n      Element.prototype.webkitMatchesSelector ||\n      function(s) {\n        var matches = (this.document || this.ownerDocument).querySelectorAll(s),\n          i = matches.length;\n        while (--i >= 0 && matches.item(i) !== this) {}\n        return i > -1;\n      };\n  }\n\n  // Get the closest matching element\n  for ( ; elem && elem !== document; elem = elem.parentNode ) {\n    if ( elem.matches( selector ) ) return elem;\n  }\n  return null;\n\n};\n\n// Get the natural height of the element\nvar getHeight = function (elem) {\n  elem.style.display = 'block'; // Make it visible\n  var height = elem.scrollHeight + 'px'; // Get it's height\n  elem.style.display = ''; //  Hide it again\n  return height;\n};\n\n// Show an element\nvar show = function (elem) {\n  elem.classList.remove('cr-collapsible--collapsed');\n  elem.classList.add('cr-collapsible--expanded');\n  var body = elem.querySelector('.cr-collapsible__content');\n\n  var height = getHeight(body); // Get the natural height\n  body.setAttribute('style', 'display: block; height: ' + height + '; overflow: hidden; transition: height '+speed+'ms ease-in-out;');\n  body.setAttribute('aria-expanded', 'true');\n\n  // Once the transition is complete, remove the inline max-height so the content can scale responsively\n  window.setTimeout(function () {\n    body.style.height = '';\n  }, speed);\n\n};\n\n// Hide an element\nvar hide = function (elem) {\n  elem.classList.remove('cr-collapsible--expanded');\n  elem.classList.add('cr-collapsible--collapsed');\n  var body = elem.querySelector('.cr-collapsible__content');\n  body.setAttribute('aria-expanded', 'false');\n\n  // Give the element a height to change from\n  body.style.height = body.scrollHeight + 'px';\n\n  // Set the height back to 0\n  window.setTimeout(function () {\n    body.style.height = '0';\n  }, 1);\n\n  // When the transition is complete, hide it\n  window.setTimeout(function () {\n    body.setAttribute('style', 'display: none; height: 0; overflow: hidden; transition: height '+speed+'ms ease-in-out;');\n  }, speed);\n\n};\n\n// Toggle element visibility\nvar toggle = function (elem) {\n  // If the element is visible, hide it\n  if (elem.classList.contains('cr-collapsible--expanded')) {\n    hide(elem);\n    return;\n  }\n\n  // Otherwise, show it\n  show(elem);\n};\n\nmodule.exports = function(event, element) {\n  if (event === 'click' && element.classList.contains('cr-collapsible__heading-button')) {\n    if ('undefined' !== typeof window) {\n      toggle(getClosest(element, '.cr-collapsible'));\n    }\n  }\n};\n","cta.print":"module.exports = function(event, element) {\n  if (event === 'click' && element.classList.contains('cr-cta--print')) {\n    if (typeof window !== 'undefined') {\n      window.print();//eslint-disable-line\n    }\n  }\n};\n"}}; //eslint-disable-line