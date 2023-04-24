import {
  loginUser,
  getAssignment,
  setAssignmentScore,
  quizStatus,
  checkQuizStatus,
} from '../Actions/user';
import reducerHandle from './reducerHandler';

const initialAsycnState = {
  isloading: false,
  loaded: false,
  data: null,
  error: null,
};

const initialState = {
  user: initialAsycnState,
  assignment: initialAsycnState,
  quizStatus: initialAsycnState,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case loginUser.REQUEST:
    case loginUser.SUCCESS:
    case loginUser.FAILURE:
      return {
        ...state,
        user: reducerHandle(state.user, action, loginUser),
      };
    case getAssignment.REQUEST:
    case getAssignment.SUCCESS:
    case getAssignment.FAILURE:
      return {
        ...state,
        assignment: reducerHandle(state.assignment, action, getAssignment),
      };
    case setAssignmentScore.REQUEST:
      return {
        ...state,
        user: {
          ...state.user,
          data: {
            ...state.user.data,
            score: action.payload.score,
          },
        },
      };
    case quizStatus.REQUEST:
    case quizStatus.SUCCESS:
    case quizStatus.FAILURE:
      return {
        ...state,
        quizStatus: reducerHandle(state.quizStatus, action, quizStatus),
      };
    case 'CLEAR_ASSIGNMENT':
      return {
        ...state,
        assignment: initialState.assignment,
      };
    case 'CLEAR':
      return {state: initialState};
    default:
      return state;
  }
};

export default user;
