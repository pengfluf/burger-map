/**
 *
 * BurgerList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import BurgerItem from 'components/BurgerItem';

import Wrapper from './styled/Wrapper';

function BurgerList(props) {
  const { places, photos } = props;
  return (
    <Wrapper>
      {places.map((place, index) => (
        <BurgerItem
          key={place.venue.id}
          place={place.venue}
          photo={photos[index]}
        />
      ))}
    </Wrapper>
  );
}

BurgerList.propTypes = {
  places: PropTypes.array,
  photos: PropTypes.array,
};

export default BurgerList;
