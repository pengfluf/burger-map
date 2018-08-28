/**
 *
 * LoadingIndicator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function LoadingIndicator(props) {
  const { loading } = props;
  return <p>{loading ? 'Gathering data...' : null}</p>;
}

LoadingIndicator.propTypes = {
  loading: PropTypes.bool,
};

export default LoadingIndicator;
