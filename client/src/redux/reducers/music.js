import { ADD_MUSIC, GET_MUSIC_ALL } from "../../constants/types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  allMusics: null,
  loading: true,
  data: null,
  errorLogger: false,
};

const ADD_MUSIC_PENDING = `${ADD_MUSIC}_${ActionType.Pending}`;
const ADD_MUSIC_FULFILLED = `${ADD_MUSIC}_${ActionType.Fulfilled}`;
const ADD_MUSIC_REJECTED = `${ADD_MUSIC}_${ActionType.Rejected}`;

const GET_MUSIC_ALL_PENDING = `${GET_MUSIC_ALL}_${ActionType.Pending}`;
const GET_MUSIC_ALL_FULFILLED = `${GET_MUSIC_ALL}_${ActionType.Fulfilled}`;
const GET_MUSIC_ALL_REJECTED = `${GET_MUSIC_ALL}_${ActionType.Rejected}`;

const musicReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MUSIC_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_MUSIC_FULFILLED:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case ADD_MUSIC_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
        errorLogger: true,
      };

    case GET_MUSIC_ALL_PENDING:
      return {
        ...state,
        loading: true,
      };

    case GET_MUSIC_ALL_FULFILLED:
      return {
        ...state,
        loading: false,
        allMusics: payload,
      };
    case GET_MUSIC_ALL_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
