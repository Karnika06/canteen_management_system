import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { foodReducer } from "./foodReducer";
import { userReducer } from "./CartReducer/userReducer";

const reducer = combineReducers({ fooditems: foodReducer, user: userReducer });

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
