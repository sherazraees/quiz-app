import {createAssignment, uploadAssignment} from '../Actions/assignment';
import reducerHandle from './reducerHandler';

const initialAsycnState = {
  isloading: false,
  loaded: false,
  data: [],
  error: null,
};

const initialState = {
  assignment: initialAsycnState,
  uploadAssignment: initialAsycnState,
};

const assignment = (state = initialState, action) => {
  switch (action.type) {
    case createAssignment.REQUEST:
    case createAssignment.SUCCESS:
    case createAssignment.FAILURE:
      return {
        ...state,
        uploadAssignment: reducerHandle(
          state.uploadAssignment,
          action,
          createAssignment,
        ),
      };
    case 'SET_QUESTION':
      return {
        ...state,
        assignment: {
          ...state.assignment,
          data: [...state.assignment.data, action.payload],
        },
      };
    case 'CLEAR_ASSIGNMENT_REDUCER':
      console.log('CLEAR---------------------------------------------');
      return {...state, assignment: initialAsycnState};
    default:
      return state;
  }
};

export default assignment;
