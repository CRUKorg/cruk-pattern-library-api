/**
 * Extra
 */
/*
 * Handle Mobile menu
 * @TODO: limit to mobile only
 */
var handleMobileMenu = function() {
  var btnSearch = document.getElementById('cr-menu__btn--search'),
    btnMenu = document.getElementById('cr-menu__btn--menu');

  function uncheckMenuItemOne() {
    document.getElementById('cr-menu__btn--menu').checked = false;
  }
  function uncheckMenuItemTwo() {
    document.getElementById('cr-menu__btn--search').checked = false;
  }

  btnSearch.addEventListener('click', uncheckMenuItemOne);
  btnMenu.addEventListener('click', uncheckMenuItemTwo);
}();
