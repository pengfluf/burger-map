/**
 *
 * WorkArea
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import MapContainer from 'components/MapContainer';
import BurgerList from 'components/BurgerList';

import injectSaga from 'utils/injectSaga';
import makeSelectWorkArea from './selectors';
import saga from './saga';

import Wrapper from './styled/Wrapper';

import {
  startFetching,
  updateCoords,
  toggleMarkerLabel,
} from './actions';

export class WorkArea extends React.Component {
  componentDidMount() {
    const { lat, lng } = this.props.workarea.map;
    this.props.startFetching(lat, lng);
  }

  render() {
    const { places, photos, map, fetching } = this.props.workarea;
    return (
      <div>
        <Helmet>
          <title>Burger Map</title>
          <meta name="description" content="Burger Map" />
        </Helmet>
        <Wrapper>
          <MapContainer
            startFetching={this.props.startFetching}
            updateCoords={this.props.updateCoords}
            toggleMarkerLabel={this.props.toggleMarkerLabel}
            map={map}
            places={places}
            fetching={fetching}
          />
          <BurgerList places={places} photos={photos} />
        </Wrapper>
      </div>
    );
  }
}

WorkArea.propTypes = {
  workarea: PropTypes.shape({
    map: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    places: PropTypes.array,
    photos: PropTypes.array,
    fetching: PropTypes.bool,
  }),
  startFetching: PropTypes.func,
  updateCoords: PropTypes.func,
  toggleMarkerLabel: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  workarea: makeSelectWorkArea(),
});

function mapDispatchToProps(dispatch) {
  return {
    startFetching: (lat, lng) => dispatch(startFetching(lat, lng)),
    updateCoords: (lat, lng) => dispatch(updateCoords(lat, lng)),
    toggleMarkerLabel: index => dispatch(toggleMarkerLabel(index)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'workArea', saga });

export default compose(
  withSaga,
  withConnect,
)(WorkArea);
