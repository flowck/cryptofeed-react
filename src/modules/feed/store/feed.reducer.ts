import { SET_NEWS } from "./feed.constants";
import { FeedModuleState } from "./feed.interfaces";
import { AppAction } from "./../../../store/store.types";

const state: FeedModuleState = {
  news: [],
};

export function feedModuleReducer(_state: FeedModuleState = state, action: AppAction) {
  switch (action.type) {
    case SET_NEWS:
      return { ..._state, news: action.payload };
    default:
      return _state;
  }
}
