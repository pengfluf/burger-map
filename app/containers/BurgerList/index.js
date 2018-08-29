/**
 *
 * BurgerList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import BurgerItem from 'components/BurgerItem';

import makeSelectMapContainer from 'containers/MapContainer/selectors';

import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { startFetching } from './actions';
import makeSelectBurgerList from './selectors';

import Wrapper from './styled/Wrapper';

export class BurgerList extends React.Component {
  componentDidMount() {
    const { lat, lng } = this.props.mapContainer;
    this.props.startFetching(lat, lng);
  }

  render() {
    const { places, photos } = this.props.burgerList;
    return (
      <Wrapper>
        {places.map((place, index) => (
          <BurgerItem
            key={place.venue.id}
            place={place.venue}
            photo={photos[index]}
          />
        ))}
      </Wrapper>
    );
  }
}

BurgerList.propTypes = {
  burgerList: PropTypes.shape({
    places: PropTypes.array,
    photos: PropTypes.array,
  }),
  mapContainer: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  startFetching: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  burgerList: makeSelectBurgerList(),
  mapContainer: makeSelectMapContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    startFetching: (lat, lng) => dispatch(startFetching(lat, lng)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'burgerList', saga });

export default compose(
  withSaga,
  withConnect,
)(BurgerList);
