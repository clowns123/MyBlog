import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import login from "./login";
import loading from "./loading";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    login: connectRouter(login),
    loading: connectRouter(loading),
  });

export default createRootReducer;
