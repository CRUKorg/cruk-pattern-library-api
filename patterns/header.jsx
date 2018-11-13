import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CtaPrimary from './cta.primary';
import Search from './search';

function Header(props) {
  return (
    <header className="cr-header">
      <div className="cr-header__logo">
        <a href="/" title={props.logoTitle} rel="home">
          <img src={props.logoSrc} alt="Cancer Research UK Homepage" />
        </a>
      </div>
      <div className="cr-header__slogan">
        <h2>{props.slogan}</h2>
      </div>
      <div className="cr-header__search">
        <Search/>
      </div>
      <div className="cr-header__cta">
        <CtaPrimary
          href
          title
          text
        />
      </div>
    </header>
  );
}

Header.defaultProps = {
  displayCTA: true
};

Header.propTypes = {
  logoSrc: PropTypes.string,
  logoTitle: PropTypes.string,
  logoAlt: PropTypes.string,
  logoHref: PropTypes.string,
  slogan: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  displayCTA: PropTypes.bool,
};

export default Header;
