import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RelatedLinks extends Component {
  render() {
    let content = this.props.content;
    if (!this.props.content && this.props.staticContent) {
      content = <div dangerouslySetInnerHTML={{ __html: this.props.staticContent }}/>;
    }
    return (
      <div className="cr-related-links">
        <div className="cr-related-links__content">
          <h2 className="cr-related-links__heading">{this.props.title}</h2>
          <div className="cr-related-links__body">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

RelatedLinks.propTypes = {
  content: PropTypes.object,
  staticContent: PropTypes.string,
  title: PropTypes.string,
};

export default RelatedLinks;
