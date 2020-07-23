import { ADD_TRANSACTION } from "../../constants/types";
import { API } from "../../config/api";

export const addTransaction = (input) => {
  return {
    type: ADD_TRANSACTION,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/transaction", input);
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) return data.message;
        }
      }
    },
  };
};
