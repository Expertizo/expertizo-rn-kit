import { LOGIN, SIGNUP, SIGNOUT } from "../constants";

/**
|--------------------------------------------------
| 🔑 Auth Reducer with sweet 😗 initial state
|--------------------------------------------------
*/

const initialState = {
  user: null,
  userStatus: false
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, user: payload.user, userStatus: payload.userStatus };
    case SIGNUP:
      return { ...state, user: payload.user, userStatus: payload.userStatus };
    case SIGNOUT:
      return { ...state, userStatus: payload.userStatus };

    default:
      return state;
  }
};
