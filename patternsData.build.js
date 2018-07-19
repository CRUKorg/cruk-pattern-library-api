export default {"twig":{"breadcrumb":"{% set class = 'cr-breadcrumb' %}\n{% if hide_current %}\n    {% set class = class ~ ' cr-breadcrumb--hide-current' %}\n{% endif %}\n{% if hide_top %}\n    {% set class = class ~ ' cr-breadcrumb--hide-top' %}\n{% endif %}\n<nav id=\"breadcrumb\" aria-label=\"You are here\" class=\"{{ class }}\">\n    <ol itemScope itemType=\"http://schema.org/BreadcrumbList\" class=\"cr-breadcrumb__list\">\n        {% for crumb in crumbs %}\n            <li itemProp=\"itemListElement\" itemScope itemType=\"http://schema.org/ListItem\" aria-level=\"{{ loop.index }}\" class=\"cr-breadcrumb__list-item\">\n                <a itemProp=\"item\" href={{ crumb.href }} class=\"cr-breadcrumb__link\">{{ crumb.label }}</a>\n                <meta itemProp=\"position\" content=\"{{ loop.index }}\" />\n            </li>\n        {% endfor %}\n    </ol>\n</nav>\n","cta.primary":"<a class=\"cr-cta--primary\" href=\"{{ href }}\">{{ text }}</a>\n","collapsible":"<div class=\"cr-collapsible cr-collapsible--expanded\">\n    <h2 class=\"cr-collapsible__heading\">\n        <button class=\"cr-collapsible__heading-button\" aria-expanded=\"1\">{{ title }}</button>\n    </h2>\n    <div class=\"cr-collapsible__content\">\n        {{ content|raw }}\n    </div>\n</div>\n","cta.print":"<button class=\"cr-cta--print\">{{ text }}</button>\n","cta.secondary":"<a class=\"cr-cta--secondary\" href=\"{{ href }}\">{{ text }}</a>\n","header.h2":"<h2 class=\"cr-heading-pattern\">{{ text }}</h2>\n","divider":"<hr class=\"cr-divider\" />\n","header.h3":"<h3 class=\"cr-heading-pattern\">{{ text }}</h3>\n","header.page-title":"<h1 class=\"cr-page-title\">{{ text }}</h1>\n","layout":"{% if isRoot %}\n    <div class=\"cr-layout\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_full %}\n    <div class=\"cr-layout__row cr-layout__row--full\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_100 %}\n    <div class=\"cr-layout__row cr-layout__row--100\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_50_50 %}\n    <div class=\"cr-layout__row cr-layout__row--50-50\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_66_33 %}\n    <div class=\"cr-layout__row cr-layout__row--66-33\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_33_66 %}\n    <div class=\"cr-layout__row cr-layout__row--33-66\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_33_33_33 %}\n    <div class=\"cr-layout__row cr-layout__row--33-33-33\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_25_50_25 %}\n    <div class=\"cr-layout__row cr-layout__row--25-50-25\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isRow_25_25_25_25 %}\n    <div class=\"cr-layout__row cr-layout__row--25-25-25-25\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n{% if isCell %}\n    <div class=\"cr-layout__cell\">\n        {{ contents|raw }}\n    </div>\n{% endif %}\n","list.ordered":"<ol class=\"cr-list cr-list--ordered\">\n    {% for item in items %}\n        <li class=\"cr-list__item\">{{ item|raw }}</li>\n    {% endfor %}\n</ol>\n","list.unordered":"<ul class=\"cr-list cr-list--unordered\">\n    {% for item in items %}\n        <li class=\"cr-list__item\">{{ item|raw }}</li>\n    {% endfor %}\n</ul>\n","loader":"<div class=\"cr-simple-loader\">\n    <div class=\"cr-simple-loader__spinner\">\n        <div class=\"cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce1\" />\n        <div class=\"cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce2\" />\n        <div class=\"cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce3\" />\n    </div>\n</div>\n","search":"<form role=\"search\" class=\"cr-search-input\">\n    <label for=\"{{ uniqueId }}\" class=\"cr-search-input__label\">{{ label }}</label>\n    <input\n            type=\"search\"\n            name=\"search\"\n            id=\"{{ uniqueId }}\"\n            class=\"cr-search-input__input\"\n            placeholder=\"{{ label }}\"\n            autocomplete=\"off\"\n            autocorrect=\"off\"\n    />\n    <button\n            type=\"submit\"\n            class=\"cr-search-input__button\"\n            aria-label=\"Submit your search\"\n    >\n        Search\n    </button>\n</form>\n","text":"<div class=\"cr-text-pattern\">\n    {{ content|raw }}\n</div>\n"},"scss":{"breadcrumb":"@import '../scss/base';\n\n.cr-breadcrumb__list {\n  padding: 0 $rhythm-horizontal-base 0 0;\n  margin: $rhythm-vertical-base 0 $rhythm-vertical-base * 2;\n  list-style: none;\n  // Zero font-size is a way to avoid gaps between the inline elements (spaces in html).\n  font-size: 0;\n}\n\n.cr-breadcrumb__link {\n  color: $brand-gray-dark;\n  display: inline-block;\n  padding: $rhythm-vertical-base / 2\n    $rhythm-horizontal-base\n    $rhythm-vertical-base / 2\n    $rhythm-horizontal-base * 2;\n  position: relative;\n  background-color: $WHITE;\n  text-decoration: underline;\n  white-space: nowrap;\n  font-size: $font-size-small;\n  vertical-align: middle;\n\n  &::after,\n  &::before {\n    content: '';\n    border-top: 18px solid transparent;\n    border-bottom: 18px solid transparent;\n    border-left: 15px solid;\n    margin-top: -18px;\n    position: absolute;\n    right: -14px;\n    top: 50%;\n  }\n\n  &::after {\n    border-left-color: $WHITE;\n    z-index: 2;\n  }\n\n  &::before {\n    border-left-color: $brand-gray-medium;\n    right: -15px;\n    z-index: 1;\n  }\n\n  &:hover {\n    background: $brand-gray-light;\n    color: $brand-secondary;\n\n    &::after {\n      border-left-color: $brand-gray-light;\n    }\n  }\n}\n\n.cr-breadcrumb__list-item {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  border-bottom: 1px solid $brand-gray-medium;\n  border-left: 1px solid $brand-gray-medium;\n  border-top: 1px solid $brand-gray-medium;\n  display: inline-block;\n\n  &:first-child .cr-breadcrumb__link {\n    padding-left: $rhythm-horizontal-base;\n  }\n\n  // The \"current\" page.\n\n  &:last-child .cr-breadcrumb__link {\n    text-decoration: none;\n    color: $BLACK;\n    background: $brand-gray-light;\n    cursor: default;\n\n    &::after {\n      border-left-color: $brand-gray-light;\n    }\n  }\n}\n\n// Hide the current page link.\n\n.cr-breadcrumb--hide-current .cr-breadcrumb__list-item:last-child {\n  @extend %sr-only;\n}\n\n// Hide the home page link.\n\n.cr-breadcrumb--hide-top {\n\n  .cr-breadcrumb__list-item:first-child {\n    @extend %sr-only;\n  }\n\n  .cr-breadcrumb__list-item:nth-child( 2 ) .cr-breadcrumb__link {\n    padding-left: $rhythm-horizontal-base;\n  }\n}\n","collapsible":"@import '../scss/base';\n\n.cr-collapsible {\n  margin-bottom: $rhythm-vertical-base * 2;\n  border: 1px solid $brand-gray-light;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0,0,0,0.05);\n}\n\n.cr-collapsible__heading {\n  margin: 0;\n  padding: 0;\n}\n\n.cr-collapsible__heading-button {\n  @include icon-beside($icon-minus, $brand-primary, left, $rhythm-horizontal-base * 2);\n  background: $gray-5;\n  border: none;\n  color: $brand-primary;\n  font-size: $font-size-h2;\n  padding: $rhythm-vertical-base $rhythm-horizontal-base;\n  padding-left: $rhythm-horizontal-base * 4;\n  display: block;\n  width: 100%;\n  text-align: left;\n  font-family: $font-family-headings;\n  font-weight: $font-weight-heavy;\n\n  &:hover, &:focus {\n    @include icon-beside($icon-minus, $brand-secondary, left, $rhythm-horizontal-base * 2);\n    color: $brand-secondary;\n    text-decoration: underline;\n    outline: none;\n  }\n}\n\n.cr-collapsible__content {\n  padding: $rhythm-vertical-base $rhythm-horizontal-base;\n}\n\n.cr-collapsible--collapsed {\n\n  .cr-collapsible__heading-button {\n    @include icon-beside($icon-plus, $brand-primary, left, $rhythm-horizontal-base * 2);\n\n    &:hover, &:focus {\n      @include icon-beside($icon-plus, $brand-secondary, left, $rhythm-horizontal-base * 2);\n    }\n  }\n\n  .cr-collapsible__content {\n    display: none;\n  }\n}\n","cta.primary":"@import '../scss/base';\n\n.cr-cta--primary {\n  background-color: $brand-secondary;\n  border-radius: $border-radius;\n  border: 1px solid $brand-secondary;\n  color: $WHITE;\n  display: inline-block;\n  font-family: $font-family-museo;\n  font-size: $font-size-large;\n  font-weight: $font-weight-heavy;\n  padding: 10px 19px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  line-height: $line-height-cta;\n\n  &:hover {\n    color: $WHITE;\n    text-decoration: none;\n    background-color: $brand-secondary-light;\n  }\n\n  &:visited {\n    color: $WHITE;\n  }\n}\n","cta.print":"@import '../scss/base';\n\n.cr-cta--print {\n  color: $brand-primary;\n  display: block;\n  font-size: $font-size;\n  font-weight: $font-weight-heavy;\n  padding-left: 20px;\n\n  &::before {\n    @include icon-background($icon-print, $brand-primary);\n    padding-right: 8px;\n    text-decoration: none;\n    vertical-align: middle;\n  }\n}\n","cta.secondary":"@import '../scss/base';\n\n.cr-cta--secondary {\n  color: $brand-secondary;\n  display: block;\n  font-size: $font-size;\n  font-weight: $font-weight-heavy;\n  padding-left: 20px;\n  position: relative;\n  text-decoration: none;\n\n  &:hover {\n    color: $brand-secondary;\n    text-decoration: underline;\n  }\n\n  &::before {\n    @include icon-background($icon-chevron-right, $brand-secondary);\n    content: '';\n    display: block;\n    height: 16px;\n    left: 0;\n    margin-top: -8px;\n    position: absolute;\n    top: 50%;\n    width: 16px;\n  }\n\n  &:visited {\n    color: $brand-secondary-light;\n  }\n}\n","divider":"@import '../scss/base';\n\n.cr-divider {\n  border: 1px solid $brand-gray-light;\n  height: 0;\n  margin: $rhythm-vertical-base*2 0;\n  padding: inherit;\n  position: inherit;\n}\n","header.page-title":"@import '../scss/base';\n\n.cr-page-title {\n  @extend %constrain-width;\n  text-align: center;\n}\n\n.cr-page-title,\n.page-title {\n  font-weight: $font-weight-light;\n  @extend %clearfix;\n}\n\n.page-title {\n  padding-left: 20px;\n\n  @include breakpoint(sm) {\n    padding-left: 30px;\n  }\n}\n","layout":"@import '../scss/base';\n\n.cr-layout__row {\n  @extend %constrain-width;\n  margin-bottom: $rhythm-horizontal-base;\n  width: auto;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-column-gap: $rhythm-vertical-base;\n  grid-row-gap: $rhythm-horizontal-base;\n}\n\n.cr-layout__row.cr-layout__row--fullbleed {\n  max-width: none;\n}\n\n// On screens that are big enough, apply the grid.\n@media screen and (min-width: $breakpoint-b) {\n  // @TODO: investigate why fr unit cause auto increase overlap issue\n\n  .cr-layout__row--100 {\n    grid-template-columns: 100%;\n  }\n\n  .cr-layout__row--50-50 {\n    grid-template-columns: repeat(2, 49.5%);\n  }\n\n  .cr-layout__row--66-33 {\n    grid-template-columns: 66% 33%;\n  }\n\n  .cr-layout__row--33-66 {\n    grid-template-columns: 33% 66%;\n  }\n\n  .cr-layout__row--33-33-33 {\n    grid-template-columns: repeat(3, 32.5%);\n  }\n\n  .cr-layout__row--25-50-25 {\n    grid-template-columns: 25% 48% 25%;\n  }\n\n  .cr-layout__row--25-25-25-25 {\n    grid-template-columns: repeat(4, 24.25%);\n  }\n}\n\n//\n// == IE Backwards Compatibility\n//\n\n@include evil-ie {\n  @media screen and (max-width: $breakpoint-b) {\n\n    .cr-layout__row {\n      display: block;\n    }\n  }\n  @media screen and (min-width: $breakpoint-b) {\n\n    .cr-layout__cell {\n      margin-left: 5px;\n      margin-right: 5px;\n    }\n\n    .cr-layout__cell:nth-of-type( 2 ) {\n      -ms-grid-column: 2;\n    }\n\n    .cr-layout__cell:nth-of-type( 3 ) {\n      -ms-grid-column: 3;\n    }\n\n    .cr-layout__cell:nth-of-type( 4 ) {\n      -ms-grid-column: 4;\n    }\n  }\n}\n\n","list":"@import '../scss/base';\n\n.cr-list--unordered {\n  list-style: disc inside;\n}\n\n.cr-list--ordered {\n  list-style: decimal inside;\n}\n\n.cr-list--unordered .cr-list--unordered,\n.cr-list--ordered .cr-list--unordered {\n  list-style: circle inside;\n  margin-left: $rhythm-horizontal-base;\n}\n\n.cr-list--ordered .cr-list--ordered,\n.cr-list--unordered .cr-list--ordered {\n  list-style: lower-latin inside;\n  margin-left: $rhythm-horizontal-base;\n}\n\n/* stylelint-disable selector-max-universal */\n\n.cr-list__item * {\n  display: inline;\n}\n","loader":"@import '../scss/base';\n\n.cr-simple-loader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba($WHITE, 0.7);\n  z-index: 999;\n}\n\n.cr-simple-loader__spinner-item {\n  width: 40px;\n  height: 40px;\n}\n\n.cr-simple-loader__spinner {\n  width: 200px;\n  position: absolute;\n  margin-top: -20px;\n  top: 50%;\n  left: 50%;\n  margin-left: -100px;\n}\n","search":"@import '../scss/base';\n\n.cr-search-input__label {\n  @extend %sr-only;\n}\n\n.cr-search-input {\n  @extend %input-group__group;\n  margin-bottom: $rhythm-vertical-base * 2;\n}\n\n.cr-search-input--focused {\n  @extend %input-group__group--focused;\n}\n\n.cr-search-input__input {\n  @extend %input-group__input;\n}\n\n.cr-search-input__button {\n  @extend %input-group__button;\n  @include text-replace($icon-search, $gray-20);\n  border: 0;\n  background-size: 18px;\n}\n"},"js":{"collapsible":"/* eslint-disable no-undef */\n// Taken from https://codepen.io/mican/pen/wrNjVW.\nvar slideToggler = class slideToggler {\n  constructor(el1) {\n    this.getHeight = this.getHeight.bind(this);\n    this.toggle = this.toggle.bind(this);\n    this.el = el1;\n    if (!this.el) {\n      return;\n    }\n    window.addEventListener('resize', this.getHeight);\n  }\n\n  getHeight() {\n    var clone;\n    clone = this.el.cloneNode(true);\n    clone.style.cssText = 'visibility: hidden; display: block; margin: -999px 0';\n    this.height = (this.el.parentNode.appendChild(clone)).clientHeight;\n    this.el.parentNode.removeChild(clone);\n    return this.height;\n  }\n\n  toggle(time) {\n    var currHeight, disp, el, end, init, repeat, start;\n    this.getHeight();\n    time || (time = this.height / 3 + 150);\n    currHeight = this.el.clientHeight * (getComputedStyle(this.el).display !== 'none');\n    [start, end] = currHeight > this.height / 2 ? [this.height, 0] : [0, this.height];\n    disp = end - start;\n    el = this.el;\n    this.el.classList[end === 0 ? 'remove' : 'add']('open');\n    this.el.style.cssText = 'overflow: hidden; display: block;';\n    init = (new Date).getTime();\n    repeat = function() {\n      var instance, ref, repeatLoop, step;\n      instance = (new Date).getTime() - init;\n      step = start + disp * instance / time;\n      if (instance <= time) {\n        el.style.height = step + 'px'; // if Math.floor(step) in [start..end]\n      } else {\n        el.style.cssText = `display: ${(end === 0 ? 'none' : 'block')}`;\n      }\n      repeatLoop = requestAnimationFrame(repeat);\n      if (ref = Math.floor(step), Array.prototype.indexOf.call((function() {\n        var results = [];\n        for (var i = start; start <= end ? i <= end : i >= end; start <= end ? i++ : i--){ results.push(i); }\n        return results;\n      }).apply(this), ref) < 0) {\n        return cancelAnimationFrame(repeatLoop);\n      }\n    };\n    return repeat();\n  }\n\n};\n\nmodule.exports = function(event, element) {\n  if (event === 'click' && element.classList.contains('cr-collapsible__heading-button')) {\n    var parent = element.closest('.cr-collapsible');\n    var body = parent.querySelector('.cr-collapsible__content');\n    if ('undefined' !== typeof window) {\n      new slideToggler(body).toggle();\n    }\n    parent.classList.toggle('cr-collapsible--expanded');\n    parent.classList.toggle('cr-collapsible--collapsed');\n  }\n};\n","cta.print":"module.exports = function(event, element) {\n  if (event === 'click' && element.classList.contains('cr-cta--print')) {\n    if (typeof window !== 'undefined') {\n      window.print();//eslint-disable-line\n    }\n  }\n};\n"}}; //eslint-disable-line