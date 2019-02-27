import React from 'react';
import PropTypes from 'prop-types';

function CtaSecondary(props) {
  return (
    <a className="cr-cta--secondary" href={`${props.href}`}>
      {props.text}
    </a>
  );
}

CtaSecondary.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default CtaSecondary;
