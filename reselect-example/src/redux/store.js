import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import hearthstone from './hearthstone/reducer';

const reducers = combineReducers({
  hearthstone
});

const middlewares = [];
const enhancers = [];

middlewares.push(thunk);

enhancers.push(applyMiddleware(...middlewares));

const store = createStore(reducers, compose(...enhancers));

export default store;
