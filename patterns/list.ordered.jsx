import React from 'react';
import PropTypes from 'prop-types';

function ListOrdered(props) {
  return (
    <ol className="cr-list cr-list--ordered">
      {props.items.map((item, i) => (
        <li key={i} className="cr-list__item" dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ol>
  );
}

ListOrdered.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default ListOrdered;
