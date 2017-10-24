import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';
import { createReducer } from 'reduxsauce';

import { onLoading, onSuccess, onFailure } from '../utils';

import { actions } from './actions';

const defaultState = {
  cards: [],
  count: 0
};

const reducerHandler = {
  [actions.GET_CARDS]: onLoading(),
  [actions.GET_CARDS_SUCCESS]: onSuccess(),
  [actions.GET_CARDS_FAILURE]: onFailure(),
  [actions.OTHER_ACTION]: (state, action) => state.merge({ count: state.count + 1 })
};

export const propTypes = {
  id: PropTypes.number
};

export default createReducer(Immutable(defaultState), reducerHandler);
