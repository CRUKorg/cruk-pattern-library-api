import React from 'react';
import PropTypes from 'prop-types';

function NavigationBlock(props) {
  return (
    <a className="cr-navigation-block__cta" href={props.text}>
      <div>
        <h2 className="cr-navigation-block">{props.title}</h2>
        <div className="cr-navigation-block__content">
          {props.text}
        </div>
      </div>
    </a>
  );
}

NavigationBlock.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default NavigationBlock;
