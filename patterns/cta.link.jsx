import React from 'react';
import PropTypes from 'prop-types';

function CtaLink(props) {
  return (
    <a className="cr-cta--link" href={props.href}>
      {props.text}
    </a>
  );
}

CtaLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default CtaLink;
