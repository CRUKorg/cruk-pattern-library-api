module.exports = function(event, element) {
  if (event === 'click' && element.classList.contains('cr-collapsible__heading-button')) {
    console.log('collapse it');
  }
};
