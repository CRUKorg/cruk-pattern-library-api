import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';

function Video(props) {
  return (
    <div className="cr-video">
      <div className="cr-video__holder">
        <Iframe
          className="cr-video__player"
          width="854"
          height="480"
          url={props.url + '?autoplay=' + props.autoplay + '&rel=' + props.rel + '&modestbranding=' + props.modestbranding}
          allowfullscreen/>
      </div>
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string,
  autoplay: PropTypes.bool,
  rel: PropTypes.bool,
  modestbranding: PropTypes.bool,
};

export default Video;
