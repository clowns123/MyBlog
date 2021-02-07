import { createAction, handleAction, handleActions } from "redux-actions";

const URL = "loading";
const START_LOADING = `${URL}/START_LOADING`;
const FINISH_LOADING = `${URL}/FINISH_LOADING`;

export const startLoading = createAction(
  START_LOADING,
  requestType => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  requestType => requestType
);

const initialState = {};

const loading = handleAction(
  {
    [START_LOADING]: (state, action) => ({ ...state, [action.payload]: true }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);

export default loading;
