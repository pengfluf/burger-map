/**
 *
 * WorkArea
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Wrapper from './styled/Wrapper';

function WorkArea() {
  return (
    <Wrapper>
      <h1>Venues</h1>
      <p>Gathering data...</p>
      <div>Map</div>
      <div>Burger Images</div>
    </Wrapper>
  );
}

WorkArea.propTypes = {};

export default WorkArea;
