import {put, call, takeEvery} from 'redux-saga/effects';
import {fetchResponse} from '../utilities';

import {
  loginUser,
  getAssignment,
  setAssignmentScore,
  quizStatus,
} from '../Actions/user';

// let url = 'https://mocki.io/v1/790b7f19-3174-4a45-aa86-d16908b9dbbfp';
let url = 'https://quiz-react-native-api.cleverapps.io';

const {REQUEST, success, failure} = loginUser;
const {success: assignmentSuccess} = getAssignment;
const {success: scoreSuccess, REQUEST: ScoreRequest} = setAssignmentScore;
const {success: checkQuizSuccess} = quizStatus;

// requestURL, { method: 'POST', body }

function* getLogin(action) {
  const method = {
    method: 'POST',
    body: JSON.stringify(action.payload),
    headers: {'Content-Type': 'application/json'},
  };
  try {
    let response = yield call(
      fetchResponse,
      url + '/users/authenticate',
      method,
    );
    console.log(response, 'Response');
    const method2 = {
      method: 'POST',
      body: JSON.stringify({id: response._id}),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${response.token}`,
      },
    };
    let response1 = yield call(
      fetchResponse,
      url + '/tests/getAssignment',
      method2,
    );
    console.log(response1, 'ppp');

    const method3 = {
      method: 'POST',
      body: JSON.stringify({id: response._id}),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${response.token}`,
      },
    };
    let response3 = yield call(
      fetchResponse,
      url + '/tests/checkQuizStatus',
      method3,
    );

    yield put(assignmentSuccess(response1));
    yield put(success(response));
    yield put(checkQuizSuccess(response3));
  } catch (e) {
    yield put(failure(e));
  }
}

function* setScore(action) {
  const method = {
    method: 'POST',
    body: JSON.stringify(action.payload),
    headers: {'Content-Type': 'application/json'},
  };
  try {
    let response = yield call(fetchResponse, url + '/tests/update', method);
    console.log(response, 'Response');
    yield put(scoreSuccess(response));
  } catch (e) {
    yield put(failure(e));
  }
}

export default function* watchUser() {
  yield takeEvery(REQUEST, getLogin);
}

export function* watchScore() {
  yield takeEvery(ScoreRequest, setScore);
}
