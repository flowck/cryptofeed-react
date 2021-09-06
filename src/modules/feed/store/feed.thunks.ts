import news from "./sample.json";
import { SET_ERROR, SET_NEWS } from "./feed.constants";
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

export function getCoins(): AppThunk {
  return (dispatch) => {
    // dispatch({})
  };
}
