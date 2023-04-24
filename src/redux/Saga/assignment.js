import {put, call, takeEvery} from 'redux-saga/effects';
import {fetchResponse} from '../utilities';
import {quizStatus} from '../Actions/user';
import {createAssignment} from '../Actions/assignment';

// let url = 'https://mocki.io/v1/790b7f19-3174-4a45-aa86-d16908b9dbbfp';
let url = 'https://quiz-react-native-api.cleverapps.io';

const {REQUEST, success, failure} = createAssignment;
const {success: checkQuizSuccess} = quizStatus;

function* getAssignment(action) {
  console.log(action.payload);
  const method = {
    method: 'POST',
    body: JSON.stringify(action.payload),
    headers: {'Content-Type': 'application/json'},
  };
  try {
    let response = yield call(fetchResponse, url + '/tests/createQuiz', method);
    console.log(response, 'Response');
    const method1 = {
      method: 'POST',
      body: JSON.stringify({id: action.payload.createBy}),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let response1 = yield call(
      fetchResponse,
      url + '/tests/checkQuizStatus',
      method1,
    );
    console.log('RESPONSE 1', response1);
    yield put(checkQuizSuccess(response1));
    yield put(success(response));
  } catch (e) {
    yield put(failure(e));
  }
}

export default function* watchAssignment() {
  yield takeEvery(REQUEST, getAssignment);
}
