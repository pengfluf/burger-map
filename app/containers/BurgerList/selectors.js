import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the burgerList state domain
 */

const selectBurgerListDomain = state =>
  state.get('burgerList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by BurgerList
 */

const makeSelectBurgerList = () =>
  createSelector(selectBurgerListDomain, substate => substate.toJS());

export default makeSelectBurgerList;
export { selectBurgerListDomain };
