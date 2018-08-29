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
import burgerIcon from 'images/icon.svg';

function MapBox(props) {
  const { centerLat, centerLng, places } = props;
  return (
    <GoogleMap
      defaultZoom={12.75}
      defaultCenter={{ lat: centerLat, lng: centerLng }}
    >
      {places.map(place => {
        const { lat, lng } = place.venue.location;
        return (
          <Marker
            key={place.venue.id}
            position={{ lat, lng }}
            icon={burgerIcon}
          />
        );
      })}
    </GoogleMap>
  );
}

MapBox.propTypes = {
  centerLat: PropTypes.number,
  centerLng: PropTypes.number,
  places: PropTypes.array,
};

export default withScriptjs(withGoogleMap(MapBox));
