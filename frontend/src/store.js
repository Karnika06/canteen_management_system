import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { foodReducer } from "./foodReducer";
import { userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/CartReducer"

const reducer = combineReducers({ fooditems: foodReducer, user: userReducer, cartReducer: cartReducer });

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
