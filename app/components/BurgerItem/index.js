/**
 *
 * BurgerItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';
import Info from './styled/Info';

function BurgerItem(props) {
  return (
    <Wrapper>
      {props.photo && (
        <Info backgroundURL={props.photo.webformatURL} />
      )}
    </Wrapper>
  );
}

BurgerItem.propTypes = {
  photo: PropTypes.shape({
    webformatURL: PropTypes.string,
    webformatWidth: PropTypes.number,
    webformatHeight: PropTypes.number,
  }),
};

export default BurgerItem;
