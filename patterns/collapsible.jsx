import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SlideToggle } from 'react-slide-toggle';

class Collapsible extends Component {
  render() {
    // We prefer taking content as a JSX object, but will also accept a static html string.
    let content = this.props.content;
    if (!this.props.content && this.props.staticContent) {
      content = <div dangerouslySetInnerHTML={{ __html: this.props.staticContent }}/>;
    }
    return (
      <SlideToggle>
        {({onToggle, setCollapsibleElement, toggleState}) => (
          <div className={`cr-collapsible ${toggleState !== 'EXPANDED' ? 'cr-collapsible--collapsed' : 'cr-collapsible--expanded'}`}>
            <h2 className="cr-collapsible__heading">
              <button
                className="cr-collapsible__heading-button"
                aria-expanded={toggleState === 'EXPANDED'}
                onClick={onToggle}
              >
                {this.props.title}
              </button>
            </h2>
            <div className="cr-collapsible__content" ref={setCollapsibleElement}>
              {content}
            </div>
          </div>
        )}
      </SlideToggle>
    );
  }
}

Collapsible.propTypes = {
  collapsed: PropTypes.bool,
  content: PropTypes.object, // Content as a JSX object.
  staticContent: PropTypes.string, // Content as an html string.
  title: PropTypes.string,
};

export default Collapsible;
