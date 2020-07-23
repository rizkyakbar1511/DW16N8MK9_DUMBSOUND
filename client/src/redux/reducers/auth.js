import {
  REGISTER,
  LOGIN,
  LOGOUT,
  CLEAR_AUTH_ERROR,
} from "../../constants/types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: {},
  loading: false,
  error: null,
  isAuthenticated: false,
  errorLogger: false,
};

const REGISTER_PENDING = `${REGISTER}_${ActionType.Pending}`;
const REGISTER_FULFILLED = `${REGISTER}_${ActionType.Fulfilled}`;
const REGISTER_REJECTED = `${REGISTER}_${ActionType.Rejected}`;

const LOGIN_PENDING = `${LOGIN}_${ActionType.Pending}`;
const LOGIN_FULFILLED = `${LOGIN}_${ActionType.Fulfilled}`;
const LOGIN_REJECTED = `${LOGIN}_${ActionType.Rejected}`;

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_PENDING:
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_FULFILLED:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        data: payload,
      };
    case REGISTER_FULFILLED:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        data: payload,
      };

    case REGISTER_REJECTED:
    case LOGIN_REJECTED:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: payload,
        errorLogger: true,
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        errorLogger: false,
        data: {},
      };

    case CLEAR_AUTH_ERROR:
      return {
        errorLogger: false,
      };
    default:
      return state;
  }
};

export default authReducer;
