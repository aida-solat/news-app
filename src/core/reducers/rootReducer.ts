import { combineReducers } from 'redux';
import appReducers from './appReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  app: appReducers,
  router: routerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;