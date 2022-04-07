import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from './CartReducer/StateProvider';
import reducer, {initialState} from './CartReducer/reducer'
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
