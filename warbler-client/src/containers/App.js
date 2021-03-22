import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

// first create the store
const store = configureStore();

// make this a stateless functional component
const App = () => (
  // here return Provider component
  // always accepts a prop called store
  // value is the store we created in line 5 const store
  
  <Provider store={store}>
  { /* placeholder <div /> */ }
  { /* import { BrowserRouter as Router} */ }
    <Router>
    { /* <div> Hello World! </div>*/ }
      <h1>Hello World!</h1>
    </Router>
  </Provider>
);

export default App;
