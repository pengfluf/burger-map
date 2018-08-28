/**
 *
 * BurgerItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function BurgerItem(props) {
  return <div>{props.place.name}</div>;
}

BurgerItem.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default BurgerItem;
