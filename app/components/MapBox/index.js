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
} from 'react-google-maps';

import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';

import MarkerLabel from 'components/MarkerLabel';

import burgerIcon from 'images/icon.svg';

class MapBox extends React.Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);

    this.mapRef = React.createRef();
  }

  onDragEnd() {
    const lat = this.mapRef.current.getCenter().lat();
    const lng = this.mapRef.current.getCenter().lng();
    this.props.updateCenter(lat, lng);
    this.props.startFetching(lat, lng);
  }

  render() {
    const { centerLat, centerLng, places } = this.props;
    return (
      <GoogleMap
        ref={this.mapRef}
        defaultZoom={12.75}
        defaultCenter={{ lat: centerLat, lng: centerLng }}
        onDragEnd={this.onDragEnd}
      >
        {places.map((place, index) => {
          const { lat, lng } = place.venue.location;
          return (
            /* eslint-disable no-undef */
            <MarkerWithLabel
              labelClass="test"
              labelStyle={{ overflow: 'visible' }}
              style={{ overflow: 'visible' }}
              key={place.venue.id}
              position={{ lat, lng }}
              icon={burgerIcon}
              labelAnchor={new google.maps.Point(10, 140)}
              labelVisible={place.labelVisible === true}
              onClick={() => this.props.toggleMarkerLabel(index)}
            >
              <MarkerLabel place={place} />
            </MarkerWithLabel>
          );
          /* eslint-enable */
        })}
      </GoogleMap>
    );
  }
}

MapBox.propTypes = {
  centerLat: PropTypes.number,
  centerLng: PropTypes.number,
  places: PropTypes.array,
  updateCenter: PropTypes.func,
  startFetching: PropTypes.func,
  toggleMarkerLabel: PropTypes.func,
};

export default withScriptjs(withGoogleMap(MapBox));
