/**
 *
 * WorkArea
 *
 */

import React from 'react';

import MapContainer from 'containers/MapContainer';
import BurgerList from 'containers/BurgerList';

import Wrapper from './styled/Wrapper';
import Container from './styled/Container';

function WorkArea() {
  return (
    <Wrapper>
      <MapContainer />
      <BurgerList />
    </Wrapper>
  );
}

WorkArea.propTypes = {};

export default WorkArea;
