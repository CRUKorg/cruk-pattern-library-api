module.exports = function(event, element) {
  if (event === 'click' && element.classList.contains('cr-cta--print')) {
    window.print();
  }
};
