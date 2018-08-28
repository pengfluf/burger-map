/*
 *
 * BurgerList actions
 *
 */

import {
  START_FETCHING,
  TAKE_BURGERS,
  RECEIVE_ERROR,
} from './constants';

export function startFetching(lat, lng) {
  return {
    type: START_FETCHING,
    lat,
    lng,
  };
}

export function takeBurgers(burgers) {
  return {
    type: TAKE_BURGERS,
    burgers,
  };
}

export function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    error,
  };
}
