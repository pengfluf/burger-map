/**
 *
 * LoadingIndicator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';

function LoadingIndicator(props) {
  const { loading } = props;
  return <Wrapper>{loading ? 'Gathering data...' : null}</Wrapper>;
}

LoadingIndicator.propTypes = {
  loading: PropTypes.bool,
};

export default LoadingIndicator;
