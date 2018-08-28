/*
 *
 * BurgerList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  START_FETCHING,
  TAKE_BURGERS,
  RECEIVE_ERROR,
} from './constants';

export const initialState = fromJS({
  list: [],
  fetching: false,
  fetchingFailed: false,
  error: null,
});

function burgerListReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING:
      return state.set('fetching', true).set('fetchingFailed', false);
    case TAKE_BURGERS:
      return state.set('fetching', false).set('list', action.burgers);
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
