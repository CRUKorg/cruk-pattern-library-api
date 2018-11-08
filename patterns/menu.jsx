import React from 'react';
import PropTypes from 'prop-types';

function MegaMenu(props) {
  return (
    <div className="cr-menu__wrapper">
      <hr className="cr-menu__divider" />
      <div className="cr-menu__inner">
        <div className="cr-menu">
          <input type="checkbox" id="cr-menu__btn--menu" className="cr-menu__btn" />
          <label htmlFor="cr-menu__btn--menu" className="cr-menu__label">Menu</label>
          <input type="checkbox" id="cr-menu__btn--search" className="cr-menu__btn" />
          <label htmlFor="cr-menu__btn--search" className="cr-menu__label">Search</label>
          <div className="cr-menu__main-menu">
            <nav className="cr-menu__nav">
              <ul role="menubar" tabIndex="0">
                <li>Main menu</li>
              </ul>
            </nav>
          </div>
          <div className="cr-menu__search">
            <form role="search" className="cr-search-input">
              <label htmlFor="{{ uniqueId }}" className="cr-search-input__label">Search</label>
              <input
                type="search"
                name="search"
                id="{{ uniqueId }}"
                className="cr-search-input__input"
                placeholder="Search..."
                autoComplete="off"
                autoCorrect="off"
              />
              <button
                type="submit"
                className="cr-search-input__button"
                aria-label="Submit your search"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

MegaMenu.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default MegaMenu;
