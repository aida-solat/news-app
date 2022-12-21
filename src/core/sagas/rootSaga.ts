import { all, fork } from 'redux-saga/effects';
import {appSaga} from './appSaga';

export default function* rootSaga() {
  yield all([fork(appSaga)]);
}