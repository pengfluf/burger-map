import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mapContainer state domain
 */

const selectMapContainerDomain = state =>
  state.get('mapContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MapContainer
 */

const makeSelectMapContainer = () =>
  createSelector(selectMapContainerDomain, substate =>
    substate.toJS(),
  );

export default makeSelectMapContainer;
export { selectMapContainerDomain };
