import { ADD_MUSIC, GET_MUSIC_ALL } from "../../constants/types";

import { API } from "../../config/api";

export const getMusics = () => {
  return {
    type: GET_MUSIC_ALL,
    payload: async () => {
      try {
        const { data } = await API.get("/musics");
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

export const addMusic = (music) => {
  return {
    type: ADD_MUSIC,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/music", music);
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
