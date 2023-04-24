import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import user from './Reducers/user';
import assignment from './Reducers/assignment';

import rootSaga from './Saga/rootSaga';

// import product from './Reducers/reducer';
// import watchCart from './Saga/cart';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
const middlewares = [thunk, saga];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const Enhancers = composeEnhancers(applyMiddleware(...middlewares));

const rootReducer = combineReducers({
  user,
  assignment,
});

const configureStore = () => {
  const Store = createStore(rootReducer, applyMiddleware(...middlewares));
  // use the same saga middleware that you have enhanced your store with
  // saga.run(watchCart);
  saga.run(rootSaga);

  return Store;
};

const store = configureStore();

export default store;
