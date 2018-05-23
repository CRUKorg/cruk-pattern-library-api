import React from 'react';

function Loader() {
  return (
    <div className="cr-simple-loader">
      <div className="cr-simple-loader__spinner">
        <div className="cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce1" />
        <div className="cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce2" />
        <div className="cr-simple-loader__spinner-item cr-simple-loader__spinner-item--bounce3" />
      </div>
    </div>
  );
}

export default Loader;
