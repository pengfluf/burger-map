/**
 *
 * BurgerItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';
import Info from './styled/Info';
import Title from './styled/Title';

function BurgerItem(props) {
  return (
    <Wrapper>
      {props.photo && (
        <Info backgroundURL={props.photo.webformatURL}>
          <Title>{props.place.name}</Title>
          <Title address>{props.place.location.address}</Title>
        </Info>
      )}
    </Wrapper>
  );
}

BurgerItem.propTypes = {
  photo: PropTypes.shape({
    webformatURL: PropTypes.string,
  }),
  place: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      address: PropTypes.string,
    }),
  }),
};

export default BurgerItem;
