import React from 'react';
import PropTypes from 'prop-types';

function ListUnordered(props) {
  return (
    <ul className="cr-list cr-list--unordered">
      {props.items.map((item, i) => (
        <li key={i} className="cr-list__item" dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
  );
}

ListUnordered.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default ListUnordered;
