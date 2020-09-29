import { combineReducers } from "redux";
import fetchTech from "./fetchTech";

//combine reducers

const rootReducer = combineReducers({
  FetchTech: fetchTech,
});

export default rootReducer;
