import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the workArea state domain
 */

const selectWorkAreaDomain = state =>
  state.get('workArea', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by WorkArea
 */

const makeSelectWorkArea = () =>
  createSelector(selectWorkAreaDomain, substate => substate.toJS());

export default makeSelectWorkArea;
export { selectWorkAreaDomain };
