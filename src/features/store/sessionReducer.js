import { SET_SESSION_ID } from './sessionAction';

const initialState = {
  sessionId: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION_ID:
      return {
        ...state,
        sessionId: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;