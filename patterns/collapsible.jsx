import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: this.props.collapsed,
    };
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    // We prefer taking content as a JSX object, but will also accept a static html string.
    let content = this.props.content;
    if (!this.props.content && this.props.staticContent) {
      content = <div dangerouslySetInnerHTML={{ __html: this.props.staticContent }}/>;
    }
    return (
      <div className={`cr-collapsible ${this.state.collapsed ? 'cr-collapsible--collapsed' : 'cr-collapsible--expanded'}`}>
        <h2 className="cr-collapsible__heading">
          <button
            className="cr-collapsible__heading-button"
            aria-expanded={!this.state.collapsed}
            onClick={this.toggleCollapsed}
          >
            {this.props.title}
          </button>
        </h2>
        <div className="cr-collapsible__content">
          {content}
        </div>
      </div>
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
