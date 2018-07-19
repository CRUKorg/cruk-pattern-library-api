module.exports = function(event, element) {
  if (event === 'click' && element.classList.contains('cr-cta--print')) {
    if (typeof window !== 'undefined') {
      window.print();//eslint-disable-line
    }
  }
};
