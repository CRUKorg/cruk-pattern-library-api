import React from 'react';
import PropTypes from 'prop-types';

function CtaPrimary(props) {
  return (
    <a className="cr-cta--primary" href={`${props.href}`}>
      {props.text}
    </a>
  );
}

CtaPrimary.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default CtaPrimary;
