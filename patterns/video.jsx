import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';

function Video(props) {
  return (
    <div class="cr-video">
      <div class="cr-video__holder">
        <Iframe width="640" height="360" url={props.url} allowfullscreen />
      </div>
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string,
};

export default Video;