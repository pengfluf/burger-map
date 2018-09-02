/**
 *
 * MarkerLabel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';
import Title from './styled/Title';
import Address from './styled/Address';

function MarkerLabel(props) {
  const { name, location } = props.place.venue;
  return (
    <Wrapper>
      <Title>{name}</Title>
      <Address>{location.address}</Address>
    </Wrapper>
  );
}

MarkerLabel.propTypes = {
  place: PropTypes.shape({
    venue: PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.shape({
        address: PropTypes.string,
      }),
    }),
  }),
};

export default MarkerLabel;
