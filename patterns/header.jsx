import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CtaPrimary from './cta.primary';
import Search from './search';

function Header(props) {
  return (
    <div className="cr-header">
      <div className="cr-header__logo">
        <a href={props.logoHref} title={props.logoTitle} rel="home">
          <img className="cr-header__logo-img" src={props.logoSrc} alt={props.logoAlt} />
        </a>
      </div>
      <div className="cr-header__slogan">
        <h2 className="cr-header__site-slogan">{props.slogan}</h2>
      </div>
      <div className="cr-header__search">
        <Search />
      </div>
      <div className="cr-header__cta">
        <CtaPrimary
          href={props.ctaHref}
          text={props.ctaText}
        />
      </div>
    </div>
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
  ctaHref: PropTypes.string,
  ctaText: PropTypes.string,
  displayCTA: PropTypes.bool
};

export default Header;
