/**
 *
 * BurgerList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import BurgerItem from 'components/BurgerItem';
import isWithinCircle from 'helpers/isWithinCircle';

import {
  EXCLUDE_CENTER_LAT,
  EXCLUDE_CENTER_LNG,
  EXCLUDE_RADIUS_METERS,
} from 'containers/WorkArea/constants';

import Wrapper from './styled/Wrapper';

function BurgerList(props) {
  const { places, photos } = props;
  return (
    <Wrapper>
      {places.map((place, index) => {
        if (
          !isWithinCircle(
            place.venue.location.lat,
            place.venue.location.lng,
            EXCLUDE_CENTER_LAT,
            EXCLUDE_CENTER_LNG,
            EXCLUDE_RADIUS_METERS,
          )
        ) {
          return (
            <BurgerItem
              key={place.venue.id}
              place={place.venue}
              photo={photos[index]}
            />
          );
        }
        return null;
      })}
    </Wrapper>
  );
}

BurgerList.propTypes = {
  places: PropTypes.array,
  photos: PropTypes.array,
};

export default BurgerList;
