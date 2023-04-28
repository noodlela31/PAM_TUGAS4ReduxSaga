import { combineReducers } from "redux";
import dataReducer from "../Data/DataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
