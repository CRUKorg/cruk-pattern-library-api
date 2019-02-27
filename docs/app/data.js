import React from 'react';
import fetch from 'isomorphic-fetch';

function Data() {
  return fetch('https://www.cancerresearchuk.org/cruk-navigation/menu-mdd/json')
    .then(data => data.json())
}
export default Data;
