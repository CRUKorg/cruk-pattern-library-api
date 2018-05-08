import React from 'react';
import PropTypes from 'prop-types';

const Collapsible = (props) => {
  return (
    <div className="cr-collapsible">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
};

export default Collapsible;
