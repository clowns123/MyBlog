import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";

import createRootReducer from "./redux/reducers/index";
import rootSaga from "./redux/sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const store = createStore(
  createRootReducer(history),
  initialState,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;
