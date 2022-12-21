import { combineReducers } from "redux";
import dataSlice from "slices/dataSlice";
import uiSlice from "slices/uiSlice";

export const rootReducer = combineReducers({
  data: dataSlice,
  ui: uiSlice,
});
