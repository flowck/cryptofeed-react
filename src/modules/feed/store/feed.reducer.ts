import { SET_NEWS } from "./feed.constants";
import { FeedModuleState } from "./feed.interfaces";
import { AppAction } from "./../../../store/store.types";

const state: FeedModuleState = {
  news: [],
  categories: [
    { name: "general", label: "General" },
    { name: "milestone", label: "Milestone" },
    { name: "partnership", label: "Partnership" },
    { name: "exchange_listing", label: "Exchange listing" },
    { name: "software_release", label: "Software release" },
    { name: "fund_movement", label: "Fund movement" },
    { name: "new_listings", label: "New listings" },
    { name: "event", label: "Event" },
  ],
  resources: [
    { name: "coins", label: "Coins" },
    { name: "exchanges", label: "Exchanges" },
  ],
};

export function feedModuleReducer(_state: FeedModuleState = state, action: AppAction) {
  switch (action.type) {
    case SET_NEWS:
      return { ..._state, news: action.payload };
    default:
      return _state;
  }
}
