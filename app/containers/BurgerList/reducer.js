/*
 *
 * BurgerList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  START_FETCHING,
  RECEIVE_PLACES,
  RECEIVE_PHOTOS,
  RECEIVE_ERROR,
} from './constants';

export const initialState = fromJS({
  places: [],
  photos: [],
  fetching: false,
  fetchingFailed: false,
  error: null,
});

function burgerListReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING:
      return state
        .set('fetchingFailed', false)
        .set('error', null)
        .set('fetching', true);
    case RECEIVE_PLACES:
      return state
        .set('fetching', false)
        .set('places', action.places);
    case RECEIVE_PHOTOS:
      return state
        .set('fetching', false)
        .set('photos', action.photos);
    case RECEIVE_ERROR:
      return state
        .set('fetching', false)
        .set('fetchingFailed', true)
        .set('error', action.error);
    default:
      return state;
  }
}

export default burgerListReducer;
