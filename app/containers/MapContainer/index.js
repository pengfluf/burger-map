/**
 *
 * MapContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MapBox from 'components/MapBox';
import LoadingIndicator from 'components/LoadingIndicator';

import { startFetching } from 'containers/BurgerList/actions';
import makeSelectBurgerList from 'containers/BurgerList/selectors';

import { updateCoords } from './actions';
import { GOOGLE_API_URL } from './constants';
import makeSelectMapContainer from './selectors';

import TopTitles from './styled/TopTitles';
import MainTitle from './styled/MainTitle';

function MapContainer(props) {
  const { lat, lng } = props.mapContainer;
  const { places, fetching } = props.burgerList;
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
  mapContainer: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  burgerList: PropTypes.shape({
    fetching: PropTypes.bool,
  }),
  updateCoords: PropTypes.func,
  startFetching: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  mapContainer: makeSelectMapContainer(),
  burgerList: makeSelectBurgerList(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateCoords: (lat, lng) => dispatch(updateCoords(lat, lng)),
    startFetching: (lat, lng) => dispatch(startFetching(lat, lng)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapContainer);
