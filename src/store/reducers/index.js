import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";

/**
|--------------------------------------------------
| Main Reducers Hub 🔵
|--------------------------------------------------
*/

export const rootReducer = combineReducers({
  authReducer
});
