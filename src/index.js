import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import Images from "./Images";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Counter />
    <Images />
  </Provider>
);

render(<App />, document.getElementById("root"));

/*
ERRORS of tutorial

1.- initialzation
2.- 
*/
