import { GET_ARTIST_ALL, ADD_ARTIST } from "../../constants/types";
import { API } from "../../config/api";

export const getArtists = () => {
  return {
    type: GET_ARTIST_ALL,
    payload: async () => {
      try {
        const { data } = await API.get("/artists");
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          if (status > 399) return data.error;
        }
      }
    },
  };
};

export const addArtist = (artist) => {
  return {
    type: ADD_ARTIST,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/artis", artist);
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};
