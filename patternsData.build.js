export default {"html":{"cta.print":"<a href=\"#\" class=\"cr-cta--print\">\n    {{text}}\n</a>\n","cta.primary":"<a class=\"cr-cta--primary\"  href=\"{{href}}\">\n    {{text}}\n</a>\n","cta.secondary":"<a class=\"cr-cta--secondary\" href=\"{{href}}\">\n    {{text}}\n</a>\n"},"scss":{"cta.primary":"$font-size: 16px !default;\n$font-weight-heavy: 700 !default;\n$brand-secondary: #ec008c !default;\n\n.cr-cta--primary {\n  text-decoration: none;\n  display: inline-block;\n  background-color: $brand-secondary;\n  border: 1px solid $brand-secondary;\n  font-size: $font-size;\n  font-weight: $font-weight-heavy;\n  padding: 9px 12px;\n  border-radius: 4px;\n  text-align: center;\n  vertical-align: middle;\n  position: relative;\n}\n","cta.print":"$font-size: 14px !default;\n$font-weight-heavy: 700 !default;\n$brand-primary: #2e008b !default;\n$icon-print: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1792 1792\"><path d=\"M885 634h-47v233H186V634h-46C46 634 0 588 0 494V215h186V-64h652v279h186v279c0 94-46 140-139 140zM279 774h466V634H279v140zM745 29H279v279h466V29zm186 419H93v46h838v-46zM326 262h372v-47H326v47zm0-93h233v-47H326v47z\"/></svg>') !default;\n\n.cr-cta--print {\n  color: $brand-primary;\n  display: block;\n  font-size: $font-size;\n  font-weight: $font-weight-heavy;\n  padding-left: 20px;\n\n  &::before {\n    background-image: $icon-print;\n    padding-right: 8px;\n    text-decoration: none;\n    vertical-align: middle;\n  }\n}\n","cta.secondary":"$font-size: 14px !default;\n$font-weight-heavy: 700 !default;\n$brand-secondary: #ec008c !default;\n$icon-chevron-right: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1792 1792\"><path d=\"M633 413L209-11a36 36 0 0 0-52 0L62 84a36 36 0 0 0 0 51l304 304L62 742a36 36 0 0 0 0 52l95 95c14 14 37 14 52 0l424-424c14-15 14-38 0-52z\"/></svg>') !default;\n\n.cr-cta--secondary {\n  color: $brand-secondary;\n  display: block;\n  font-size: $font-size;\n  font-weight: $font-weight-heavy;\n  padding-left: 20px;\n\n  &::before {\n    background-image: $icon-chevron-right;\n    padding-right: 8px;\n    text-decoration: none;\n    vertical-align: middle;\n  }\n}\n"},"js":{"cta.print":"var printWindow = function() {\n  window.print();\n  return false;\n};\n\nvar anchors = document.getElementsByClassName('cr-cta--print');\nfor (var i = 0; i < anchors.length; i++) {\n  var current = anchors[i];\n  current.addEventListener('click', printWindow, false);\n}\n"}}; //eslint-disable-line