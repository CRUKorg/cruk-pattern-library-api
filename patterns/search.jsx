import React from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  const defaultSubmitCallback = e => e.preventDefault();
  return (
    <form role="search" onSubmit={props.submitCallback || defaultSubmitCallback}>
      <div className="cr-input-group cr-search-input">
        <label htmlFor={props.uniqueId} className="cr-search-input__label">{props.label}</label>
        <input type="search" name="search" id={props.uniqueId} onChange={props.changeCallback} className="cr-input-group__input cr-search-input__input" placeholder={props.label} autoComplete="off" autoCorrect="off" />
        <button type="submit" className="cr-input-group__button cr-search-input__button" aria-label="Submit your search">Search</button>
      </div>
    </form>
  );
}

Search.propTypes = {
  changeCallback: PropTypes.func,
  label: PropTypes.string,
  submitCallback: PropTypes.func,
  uniqueId: PropTypes.string,
};

export default Search;
