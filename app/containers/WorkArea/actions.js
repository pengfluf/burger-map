/*
 *
 * WorkArea actions
 *
 */

import {
  START_FETCHING,
  RECEIVE_PLACES,
  RECEIVE_PHOTOS,
  RECEIVE_ERROR,
  UPDATE_COORDS,
} from './constants';

export function startFetching(lat, lng) {
  return {
    type: START_FETCHING,
    lat,
    lng,
  };
}

export function receivePlaces(places) {
  return {
    type: RECEIVE_PLACES,
    places,
  };
}

export function receivePhotos(photos) {
  return {
    type: RECEIVE_PHOTOS,
    photos,
  };
}

export function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    error,
  };
}

export function updateCoords(lat, lng) {
  return {
    type: UPDATE_COORDS,
    lat,
    lng,
  };
}
