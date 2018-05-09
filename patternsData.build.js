export default {"html":{"cta.primary":"<a class=\"cr-cta--primary\" href=\"{{href}}\">\n    {{text}}\n</a>\n","cta.print":"<a href=\"#\" class=\"cr-cta--print\">\n    {{text}}\n</a>\n","cta.secondary":"<a class=\"cr-cta--secondary\" href=\"{{href}}\">\n    {{text}}\n</a>\n","divider":"<hr class=\"cr-divider\" />\n","header.page-title":"<h1 class=\"cr-page-title\">{{text}}</h1>\n","layout":"{{#if isRoot}}\n    <div class=\"cr-layout\">{{{contents}}}</div>\n{{/if}}\n{{#if isRow-full}}\n    <div class=\"cr-layout__row cr-layout__row--full\">{{{contents}}}</div>\n{{/if}}\n{{#if isRow-100}}\n    <div class=\"cr-layout__row cr-layout__row--100\">{{{contents}}}</div>\n{{/if}}\n{{#if isRow-50-50}}\n    <div class=\"cr-layout__row cr-layout__row--50-50\">{{{contents}}}</div>\n{{/if}}\n{{#if isRow-66-33}}\n    <div class=\"cr-layout__row cr-layout__row--66-33\">{{{contents}}}</div>\n{{/if}}\n{{#if isRow-33-66}}\n    <div class=\"cr-layout__row cr-layout__row--33-66\">{{{contents}}}</div>\n{{/if}}\n{{#if isRow-33-33-33}}\n    <div class=\"cr-layout__row cr-layout__row--33-33-33\">{{{contents}}}</div>\n{{/if}}\n{{#if isRow-25-50-25}}\n    <div class=\"cr-layout__row cr-layout__row--25-50-25\">{{{contents}}}</div>\n{{/if}}\n{{#if isRow-25-25-25-25}}\n    <div class=\"cr-layout__row cr-layout__row--25-25-25-25\">{{{contents}}}</div>\n{{/if}}\n{{#if isCell}}\n    <div class=\"cr-layout__cell\">{{{contents}}}</div>\n{{/if}}\n","loader":"<div class=\"cr-simple-loader\">\n    <div class=\"cr-simple-loader__spinner\">\n        <div class=\"cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce1\" />\n        <div class=\"cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce2\" />\n        <div class=\"cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce3\" />\n    </div>\n</div>\n"},"scss":{"collapsible":"@import '../scss/base';\n\n.cr-collapsible {\n  margin-bottom: $rhythm-vertical-base * 2;\n  border: 1px solid $brand-gray-light;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0,0,0,0.05);\n}\n\n.cr-collapsible__heading {\n  margin: 0;\n  padding: 0;\n}\n\n.cr-collapsible__heading-button {\n  @include icon-beside($icon-minus, $brand-primary, left, $rhythm-horizontal-base * 2);\n  background: $gray-5;\n  border: none;\n  color: $brand-primary;\n  font-size: $font-size-h2;\n  padding: $rhythm-vertical-base $rhythm-horizontal-base;\n  padding-left: $rhythm-horizontal-base * 4;\n  display: block;\n  width: 100%;\n  text-align: left;\n\n  &:hover, &:focus {\n    @include icon-beside($icon-minus, $brand-secondary, left, $rhythm-horizontal-base * 2);\n    color: $brand-secondary;\n    text-decoration: underline;\n    outline: none;\n  }\n}\n\n.cr-collapsible__content {\n  padding: $rhythm-vertical-base $rhythm-horizontal-base;\n}\n\n.cr-collapsible--collapsed {\n\n  .cr-collapsible__heading-button {\n    @include icon-beside($icon-plus, $brand-primary, left, $rhythm-horizontal-base * 2);\n\n    &:hover, &:focus {\n      @include icon-beside($icon-plus, $brand-secondary, left, $rhythm-horizontal-base * 2);\n    }\n  }\n\n  .cr-collapsible__content {\n    display: none;\n  }\n}\n","cta.primary":"@import '../scss/base';\n\n.cr-cta--primary {\n  background-color: $brand-secondary;\n  border-radius: 4px;\n  border: 1px solid $brand-secondary;\n  color: $WHITE;\n  display: inline-block;\n  font-family: $font-family-museo;\n  font-size: $font-size-large;\n  font-weight: $font-weight-heavy;\n  padding: 9px 12px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n\n  &:hover {\n    color: $WHITE;\n    text-decoration: none;\n    background-color: $brand-secondary-light;\n  }\n}\n","divider":"@import '../scss/base';\n\n.cr-divider {\n  border: 1px solid $brand-gray-light;\n  height: 0;\n  margin: $rhythm-vertical-base*2 0;\n  padding: inherit;\n  position: inherit;\n}\n","cta.print":"@import '../scss/base';\n\n.cr-cta--print {\n  color: $brand-primary;\n  display: block;\n  font-size: $font-size;\n  font-weight: $font-weight-heavy;\n  padding-left: 20px;\n\n  &::before {\n    @include icon-background($icon-print, $brand-primary);\n    padding-right: 8px;\n    text-decoration: none;\n    vertical-align: middle;\n  }\n}\n","cta.secondary":"@import '../scss/base';\n\n.cr-cta--secondary {\n  color: $brand-secondary;\n  display: block;\n  font-size: $font-size;\n  font-weight: $font-weight-heavy;\n  padding-left: 20px;\n  position: relative;\n  text-decoration: none;\n\n  &:hover {\n    color: $brand-secondary;\n  }\n\n  &::before {\n    @include icon-background($icon-chevron-right, $brand-secondary);\n    content: '';\n    display: block;\n    height: 16px;\n    left: 0;\n    margin-top: -8px;\n    position: absolute;\n    top: 50%;\n    width: 16px;\n  }\n}\n","header.page-title":"@import '../scss/base';\n\n.cr-page-title {\n  @extend %constrain-width;\n}\n","layout":"@import '../scss/base';\n\n.cr-layout__row {\n  @extend %constrain-width;\n  margin-bottom: $rhythm-horizontal-base;\n  width: auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-column-gap: $rhythm-vertical-base;\n  grid-row-gap: $rhythm-horizontal-base;\n}\n\n.cr-layout__row.cr-layout__row--fullbleed {\n  max-width: none;\n}\n\n// On screens that are big enough, apply the grid.\n@media screen and (min-width: $breakpoint-b) {\n\n  .cr-layout__row--100 {\n    grid-template-columns: 1fr;\n  }\n\n  .cr-layout__row--50-50 {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .cr-layout__row--66-33 {\n    grid-template-columns: 2fr 1fr;\n  }\n\n  .cr-layout__row--33-66 {\n    grid-template-columns: 1fr 2fr;\n  }\n\n  .cr-layout__row--33-33-33 {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  .cr-layout__row--25-50-25 {\n    grid-template-columns: 1fr 2fr 1fr;\n  }\n\n  .cr-layout__row--25-25-25-25 {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n}\n\n//\n// == IE Backwards Compatibility\n//\n\n@include evil-ie {\n  @media screen and (max-width: $breakpoint-b) {\n\n    .cr-layout__row {\n      display: block;\n    }\n  }\n  @media screen and (min-width: $breakpoint-b) {\n\n    .cr-layout__cell {\n      margin-left: 5px;\n      margin-right: 5px;\n    }\n\n    .cr-layout__cell:nth-of-type( 2 ) {\n      -ms-grid-column: 2;\n    }\n\n    .cr-layout__cell:nth-of-type( 3 ) {\n      -ms-grid-column: 3;\n    }\n\n    .cr-layout__cell:nth-of-type( 4 ) {\n      -ms-grid-column: 4;\n    }\n  }\n}\n\n\n","loader":"@import '../scss/base';\n\n.cr-simple-loader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba($WHITE, 0.7);\n  z-index: 999;\n}\n\n.cr-simple-loader__spinner-item {\n  width: 40px;\n  height: 40px;\n}\n\n.cr-simple-loader__spinner {\n  width: 200px;\n  position: absolute;\n  margin-top: -20px;\n  top: 50%;\n  left: 50%;\n  margin-left: -100px;\n}\n"},"js":{"cta.print":"var printWindow = function() {\n  window.print();\n  return false;\n};\n\nvar anchors = document.getElementsByClassName('cr-cta--print');\nfor (var i = 0; i < anchors.length; i++) {\n  var current = anchors[i];\n  current.addEventListener('click', printWindow, false);\n}\n"}}; //eslint-disable-line