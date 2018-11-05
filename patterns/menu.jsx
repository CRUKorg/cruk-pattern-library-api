import React from 'react';
import PropTypes from 'prop-types';

function MegaMenu(props) {
  return (
    <a className="cr-cta--link" href={props.href}>
      {props.text}
    </a>
  );
}

MegaMenu.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default MegaMenu;
