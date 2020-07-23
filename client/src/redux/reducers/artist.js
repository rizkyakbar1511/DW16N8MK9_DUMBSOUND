import { GET_ARTIST_ALL, ADD_ARTIST } from "../../constants/types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  loading: false,
  allArtists: null,
  data: null,
  errorLogger: false,
};

const GET_ARTIST_ALL_PENDING = `${GET_ARTIST_ALL}_${ActionType.Pending}`;
const GET_ARTIST_ALL_FULFILLED = `${GET_ARTIST_ALL}_${ActionType.Fulfilled}`;
const GET_ARTIST_ALL_REJECTED = `${GET_ARTIST_ALL}_${ActionType.Rejected}`;

const ADD_ARTIST_PENDING = `${ADD_ARTIST}_${ActionType.Pending}`;
const ADD_ARTIST_FULFILLED = `${ADD_ARTIST}_${ActionType.Fulfilled}`;
const ADD_ARTIST_REJECTED = `${ADD_ARTIST}_${ActionType.Rejected}`;

const artistReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTIST_ALL_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_ARTIST_ALL_FULFILLED:
      return {
        ...state,
        allArtists: payload,
        loading: false,
      };
    case GET_ARTIST_ALL_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_ARTIST_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_ARTIST_FULFILLED:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case ADD_ARTIST_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
        errorLogger: true,
      };
    default:
      return state;
  }
};

export default artistReducer;
