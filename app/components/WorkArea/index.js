/**
 *
 * WorkArea
 *
 */

import React from 'react';

import MapContainer from 'containers/MapContainer';
import BurgerList from 'containers/BurgerList';

import Wrapper from './styled/Wrapper';

function WorkArea() {
  return (
    <Wrapper>
      <h1>Venues</h1>
      <MapContainer />
      <BurgerList />
    </Wrapper>
  );
}

WorkArea.propTypes = {};

export default WorkArea;
