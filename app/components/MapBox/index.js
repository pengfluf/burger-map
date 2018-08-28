/**
 *
 * MapBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

function MapBox(props) {
  const { lat, lng } = props;
  return (
    <GoogleMap defaultZoom={12.75} defaultCenter={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
}

MapBox.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default withScriptjs(withGoogleMap(MapBox));
