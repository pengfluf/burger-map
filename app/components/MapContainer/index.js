/**
 *
 * MapContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import MapBox from 'components/MapBox';
import LoadingIndicator from 'components/LoadingIndicator';

import { GOOGLE_API_URL } from 'containers/WorkArea/constants';

import TopTitles from './styled/TopTitles';
import MainTitle from './styled/MainTitle';

function MapContainer(props) {
  const { lat, lng } = props.map;
  const { places, fetching } = props;
  return (
    <div>
      <TopTitles>
        <MainTitle>Venues</MainTitle>
        <LoadingIndicator loading={fetching} />
      </TopTitles>
      <MapBox
        centerLat={lat}
        centerLng={lng}
        places={places}
        updateCenter={props.updateCoords}
        startFetching={props.startFetching}
        isMarkerShown
        googleMapURL={GOOGLE_API_URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={
          <div style={{ height: `100%`, borderRadius: '5px' }} />
        }
      />
    </div>
  );
}

MapContainer.propTypes = {
  map: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  places: PropTypes.array,
  fetching: PropTypes.bool,
  updateCoords: PropTypes.func,
  startFetching: PropTypes.func,
};

export default MapContainer;
