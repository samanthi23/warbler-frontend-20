import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// can't find App compiled fail 
// so use "./containers/App";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
