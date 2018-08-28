/*
 *
 * MapContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { UPDATE_COORDS } from './constants';

export const initialState = fromJS({
  lat: 58.3750727,
  lng: 26.6975258,
});

function mapContainerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_COORDS:
      return state.set('lat', action.lat).set('lng', action.lng);
    default:
      return state;
  }
}

export default mapContainerReducer;
