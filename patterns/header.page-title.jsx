import React from 'react';
import PropTypes from 'prop-types';

function HeaderPageTitle(props) {
  return <h1 className="cr-page-title">{props.text}</h1>;
}

HeaderPageTitle.propTypes = {
  text: PropTypes.string,
};

export default HeaderPageTitle;
