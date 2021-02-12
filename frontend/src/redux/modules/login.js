import { createAction, handleActions } from "redux-actions";

const URL = "login";
const REQUEST = `${URL}/REQUEST`;
const SUCCESS = `${URL}/SUCCESS`;
const FAILURE = `${URL}/FAILURE`;

export const requert = createAction(REQUEST);
export const success = createAction(SUCCESS);
export const failure = createAction(FAILURE, error => error);

const initialState = {
  token: localStorage.getItem("token"),
  isAuth: false,
  isLoading: false,
  user: "",
  userId: "",
  userName: "",
  userRole: "",
  errorMsg: "",
  successMsg: "",
};

const login = handleActions(
  {
    [REQUEST]: state => ({ ...state, errorMsg: "" }),
    [SUCCESS]: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        userId: action.payload.userId,
        userRole: action.payload.userRole,
        errorMsg: "",
      };
    },
    [FAILURE]: (state, action) => {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        user: "",
        userId: "",
        isAuth: false,
        isLoading: false,
        userRole: "",
        errorMsg: action.payload,
      };
    },
  },
  initialState
);

export default login;
