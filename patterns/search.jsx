import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
  }

  onFocus = () => {
    this.setState({ focused: true });
  };

  onBlur = () => {
    this.setState({ focused: false });
  };

  render() {
    const defaultSubmitCallback = e => e.preventDefault();
    return (
      <form
        role="search"
        onSubmit={this.props.submitCallback || defaultSubmitCallback}
        className={`cr-search-input${this.state.focused ? ' cr-search-input--focused' : ''}`}
      >
        <label htmlFor={this.props.uniqueId} className="cr-search-input__label">{this.props.label}</label>
        <input
          type="search"
          name="search"
          id={this.props.uniqueId}
          onChange={this.props.changeCallback}
          className="cr-search-input__input"
          placeholder={this.props.label}
          autoComplete="off"
          autoCorrect="off"
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
        <button
          type="submit"
          className="cr-search-input__button"
          aria-label="Submit your search"
        >
          Search
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  changeCallback: PropTypes.func,
  label: PropTypes.string,
  submitCallback: PropTypes.func,
  uniqueId: PropTypes.string,
};

export default Search;