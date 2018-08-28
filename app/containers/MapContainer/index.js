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

import makeSelectBurgerList from 'containers/BurgerList/selectors';
import makeSelectMapContainer from './selectors';

function MapContainer(props) {
  const { lat, lng } = props.mapContainer;
  const { fetching } = props.burgerList;
  return (
    <div>
      <LoadingIndicator loading={fetching} />
      <MapBox
        lat={lat}
        lng={lng}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
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
};

const mapStateToProps = createStructuredSelector({
  mapContainer: makeSelectMapContainer(),
  burgerList: makeSelectBurgerList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapContainer);
