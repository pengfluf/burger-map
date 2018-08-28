/*
 *
 * MapContainer actions
 *
 */

import { UPDATE_COORDS } from './constants';

export function updateCoords(lat, lng) {
  return {
    type: UPDATE_COORDS,
    lat,
    lng,
  };
}
