import {spawn} from 'redux-saga/effects';

import watchUser, {watchScore} from './user';
import watchAssignment from './assignment';

export default function* rootSaga() {
  yield spawn(watchUser);
  yield spawn(watchScore);
  yield spawn(watchAssignment);
}
