import rootReducer from "./reducers";
// import from redux library
import { createStore, applyMiddleware, compose } from "redux";
// want the thunk middleware
// asynchronous code in redux
import thunk from "redux-thunk";

export function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      // for debugging our application in the redux web tools
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
// return that store
  return store;
}
