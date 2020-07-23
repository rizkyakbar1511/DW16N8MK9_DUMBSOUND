import { ADD_TRANSACTION } from "../../constants/types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const ADD_TRANSACTION_PENDING = `${ADD_TRANSACTION}_${ActionType.Pending}`;
const ADD_TRANSACTION_FULFILLED = `${ADD_TRANSACTION}_${ActionType.Fulfilled}`;
const ADD_TRANSACTION_REJECTED = `${ADD_TRANSACTION}_${ActionType.Rejected}`;

const addTransactionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TRANSACTION_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TRANSACTION_FULFILLED:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case ADD_TRANSACTION_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default addTransactionReducer;
