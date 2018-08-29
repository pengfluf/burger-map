/**
 *
 * BurgerItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';

function BurgerItem(props) {
  return <Wrapper>{props.place.name}</Wrapper>;
}

BurgerItem.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default BurgerItem;
