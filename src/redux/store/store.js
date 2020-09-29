import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

//--- MIDDLEWARE
// add middleware inside this function
const middleware = applyMiddleware(thunk);

//--- STORE
const store = createStore(rootReducer, middleware);

export default store;
