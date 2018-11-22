import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';

function Video(props) {
  return (
    <div class="cr-video">
      <div class="cr-video__holder">
        <Iframe
          className="cr-video__player"
          width="854"
          height="480"
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