import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CtaPrimary from './cta.primary';
import Search from './search';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableSubmit: false,
    };
    this.changeCallback = this.changeCallback.bind(this);
  }

  changeCallback = (e) => {
    if (e.target.value !== '' ) {
      this.setState({ enableSubmit: true });
    }
  };

  render() {
    return (
      <div className="cr-header">
        <div className="cr-header__logo">
          <a href={this.props.logoHref} title={this.props.logoTitle} rel="home">
            <img className="cr-header__logo-img" src={this.props.logoSrc} alt={this.props.logoAlt}/>
          </a>
        </div>
        <div className="cr-header__slogan">
          <h2 className="cr-header__site-slogan">{this.props.slogan}</h2>
        </div>
        <div className="cr-header__search">
          <Search
            submitCallback={this.state.enableSubmit}
            changeCallback={this.changeCallback}
          />
        </div>
        <div className="cr-header__cta">
          <CtaPrimary
            href={this.props.ctaHref}
            text={this.props.ctaText}
          />
        </div>
      </div>
    );
  }
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
