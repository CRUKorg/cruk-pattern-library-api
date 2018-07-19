/* eslint-disable no-undef */
// Taken from https://codepen.io/mican/pen/wrNjVW.
var slideToggler = class slideToggler {
  constructor(el1) {
    this.getHeight = this.getHeight.bind(this);
    this.toggle = this.toggle.bind(this);
    this.el = el1;
    if (!this.el) {
      return;
    }
    window.addEventListener('resize', this.getHeight);
  }

  getHeight() {
    var clone;
    clone = this.el.cloneNode(true);
    clone.style.cssText = 'visibility: hidden; display: block; margin: -999px 0';
    this.height = (this.el.parentNode.appendChild(clone)).clientHeight;
    this.el.parentNode.removeChild(clone);
    return this.height;
  }

  toggle(time) {
    var currHeight, disp, el, end, init, repeat, start;
    this.getHeight();
    time || (time = this.height / 3 + 150);
    currHeight = this.el.clientHeight * (getComputedStyle(this.el).display !== 'none');
    [start, end] = currHeight > this.height / 2 ? [this.height, 0] : [0, this.height];
    disp = end - start;
    el = this.el;
    this.el.classList[end === 0 ? 'remove' : 'add']('open');
    this.el.style.cssText = 'overflow: hidden; display: block;';
    init = (new Date).getTime();
    repeat = function() {
      var instance, ref, repeatLoop, step;
      instance = (new Date).getTime() - init;
      step = start + disp * instance / time;
      if (instance <= time) {
        el.style.height = step + 'px'; // if Math.floor(step) in [start..end]
      } else {
        el.style.cssText = `display: ${(end === 0 ? 'none' : 'block')}`;
      }
      repeatLoop = requestAnimationFrame(repeat);
      if (ref = Math.floor(step), Array.prototype.indexOf.call((function() {
        var results = [];
        for (var i = start; start <= end ? i <= end : i >= end; start <= end ? i++ : i--){ results.push(i); }
        return results;
      }).apply(this), ref) < 0) {
        return cancelAnimationFrame(repeatLoop);
      }
    };
    return repeat();
  }

};

module.exports = function(event, element) {
  if (event === 'click' && element.classList.contains('cr-collapsible__heading-button')) {
    var parent = element.closest('.cr-collapsible');
    var body = parent.querySelector('.cr-collapsible__content');
    if ('undefined' !== typeof window) {
      new slideToggler(body).toggle();
    }
    parent.classList.toggle('cr-collapsible--expanded');
    parent.classList.toggle('cr-collapsible--collapsed');
  }
};
