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
  const { name } = props.place.venue;
  const { formattedAddress } = props.place.venue.location;
  return (
    <Wrapper>
      <Title>{name}</Title>
      <Address>
        {formattedAddress.map((chunk, index) => {
          if (
            formattedAddress.length > 1 &&
            index !== formattedAddress.length - 1
          ) {
            return `${chunk}, `;
          }
          return chunk;
        })}
      </Address>
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
