import { SET_ERROR, SET_NEWS } from "./feed.constants";
import news from "./sample.json";
import { AppThunk } from "./../../../store/store.types";

export function getNews(): AppThunk {
  return (dispatch) => {
    try {
      dispatch({ type: SET_NEWS, payload: news });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };
}
