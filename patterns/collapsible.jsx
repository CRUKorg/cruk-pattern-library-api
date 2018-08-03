import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Collapsible extends Component {
  render() {
    // We prefer taking content as a JSX object, but will also accept a static html string.
    let content = this.props.content;
    if (!this.props.content && this.props.staticContent) {
      content = <div dangerouslySetInnerHTML={{ __html: this.props.staticContent }}/>;
    }
    const inputClass = `cr-collapsible__input-${this.props.title.replace(/\s/g, '')}`;
    return (
      <div className="cr-collapsible">
        <input id={inputClass} className="cr-collapsible__input" type="checkbox" defaultChecked={false} />
        <label htmlFor={inputClass} className="cr-collapsible__heading-button">
          <h2 className="cr-collapsible__heading">
            {this.props.title}
          </h2>
        </label>
        <div className="cr-collapsible__content">
          {content}
        </div>
      </div>
    );
  }
}

Collapsible.propTypes = {
  content: PropTypes.object, // Content as a JSX object.
  staticContent: PropTypes.string, // Content as an html string.
  title: PropTypes.string,
};

export default Collapsible;
