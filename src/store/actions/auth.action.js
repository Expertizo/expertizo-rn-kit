import { LOGIN, SIGNUP, SIGNOUT } from "../constants";

/**
|--------------------------------------------------
| 🔑 Auth Actions Waiting for Dispatch
|--------------------------------------------------
*/

export const loginAction = payload => ({
  type: LOGIN,
  payload
});

export const signupAction = payload => ({
  type: SIGNUP,
  payload
});

export const signoutAction = payload => ({
  type: SIGNOUT,
  payload
});
