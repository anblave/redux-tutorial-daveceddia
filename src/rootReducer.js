import { combineReducers } from "redux";
import { counterReducer, imagesReducer } from "./reducers";

export default combineReducers({
  counterReducer,
  imagesReducer
});
