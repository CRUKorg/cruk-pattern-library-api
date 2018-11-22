import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';

function Video(props) {
  return (
    <div class="cr-video">
      <div class="cr-video__holder">
        <Iframe
          className="cr-video__player"
          width="100%"
          height="100%"
          url={props.url}
          allowfullscreen
          position="relative"/>
      </div>
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string,
};

export default Video;