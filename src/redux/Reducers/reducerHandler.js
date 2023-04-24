const initialState = {
  isloading: false,
  loaded: false,
  data: null,
  error: null,
};

const reducerHandler = (state = initialState, action, actionHandle) => {
  switch (action.type) {
    case actionHandle.REQUEST:
      return {
        ...state,
        isloading: true,
        loaded: false,
        data: null,
        error: null,
      };
    case actionHandle.SUCCESS:
      return {
        ...state,
        isloading: false,
        loaded: true,
        data: action.payload,
        error: null,
      };
    case actionHandle.FAILURE:
      return {
        ...state,
        isloading: false,
        loaded: true,
        data: null,
        error: action.payload,
      };
  }
};

export default reducerHandler;
