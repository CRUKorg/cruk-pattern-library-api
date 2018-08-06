import React from 'react';
import PropTypes from 'prop-types';

function NavigationBlock(props) {
  return (
    <a className="cr-navigation-block__cta" href="{props.href}" target="{props.target}">
      <div className="cr-navigation-block">
        <h2 className="cr-navigation-block__title">{props.title}</h2>
        <div
          className="cr-navigation-block__content"
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
      </div>
    </a>
  );
}

NavigationBlock.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  target: PropTypes.string,
};

export default NavigationBlock;
