import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;