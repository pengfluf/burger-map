/*
 *
 * WorkArea reducer
 *
 */

import { fromJS } from 'immutable';
import {
  START_FETCHING,
  RECEIVE_ERROR,
  RECEIVE_PLACES,
  RECEIVE_PHOTOS,
  UPDATE_COORDS,
  TOGGLE_MARKER_LABEL,
} from './constants';

export const initialState = fromJS({
  map: {
    lat: 58.373452,
    lng: 26.715379,
  },
  places: [],
  photos: [],
  fetching: false,
  fetchingFailed: false,
  error: null,
});

function workAreaReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING:
      return state
        .set('fetchingFailed', false)
        .set('error', null)
        .set('fetching', true);
    case RECEIVE_ERROR:
      return state
        .set('fetching', false)
        .set('fetchingFailed', true)
        .set('error', action.error);
    case RECEIVE_PLACES:
      return state
        .set('fetching', false)
        .set('places', fromJS(action.places));
    case RECEIVE_PHOTOS:
      return state
        .set('fetching', false)
        .set('photos', fromJS(action.photos));
    case UPDATE_COORDS:
      return state
        .setIn(['map', 'lat'], action.lat)
        .setIn(['map', 'lng'], action.lng);
    case TOGGLE_MARKER_LABEL:
      return state.setIn(
        ['places', action.index, 'labelVisible'],
        state.getIn(['places', action.index, 'labelVisible']) !==
          true,
      );
    default:
      return state;
  }
}

export default workAreaReducer;
