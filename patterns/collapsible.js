/* eslint-disable no-undef, no-empty */

var speed = 200;

// Like Element.closest() but works in IE.
var getClosest = function (elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }

  // Get the closest matching element
  for ( ; elem && elem !== document; elem = elem.parentNode ) {
    if ( elem.matches( selector ) ) return elem;
  }
  return null;

};

// Get the natural height of the element
var getHeight = function (elem) {
  elem.style.display = 'block'; // Make it visible
  var height = elem.scrollHeight + 'px'; // Get it's height
  elem.style.display = ''; //  Hide it again
  return height;
};

// Show an element
var show = function (elem) {
  elem.classList.remove('cr-collapsible--collapsed');
  elem.classList.add('cr-collapsible--expanded');
  var body = elem.querySelector('.cr-collapsible__content');

  var height = getHeight(body); // Get the natural height
  body.setAttribute('style', 'display: block; height: ' + height + '; overflow: hidden; transition: height '+speed+'ms ease-in-out;');
  body.setAttribute('aria-expanded', 'true');

  // Once the transition is complete, remove the inline max-height so the content can scale responsively
  window.setTimeout(function () {
    body.style.height = '';
  }, speed);

};

// Hide an element
var hide = function (elem) {
  elem.classList.remove('cr-collapsible--expanded');
  elem.classList.add('cr-collapsible--collapsed');
  var body = elem.querySelector('.cr-collapsible__content');
  body.setAttribute('aria-expanded', 'false');

  // Give the element a height to change from
  body.style.height = body.scrollHeight + 'px';

  // Set the height back to 0
  window.setTimeout(function () {
    body.style.height = '0';
  }, 1);

  // When the transition is complete, hide it
  window.setTimeout(function () {
    body.setAttribute('style', 'display: none; height: 0; overflow: hidden; transition: height '+speed+'ms ease-in-out;');
  }, speed);

};

// Toggle element visibility
var toggle = function (elem) {
  // If the element is visible, hide it
  if (elem.classList.contains('cr-collapsible--expanded')) {
    hide(elem);
    return;
  }

  // Otherwise, show it
  show(elem);
};

module.exports = function(event, element) {
  if (event === 'click' && element.classList.contains('cr-collapsible__heading-button')) {
    if ('undefined' !== typeof window) {
      toggle(getClosest(element, '.cr-collapsible'));
    }
  }
};
