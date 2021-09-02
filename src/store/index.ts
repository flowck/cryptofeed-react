import thunk from "redux-thunk";
import logger from "redux-logger";
import { feedModuleReducer } from "../modules/feed/store/feed.reducer";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Assemble all reducers
 */
const reducers = combineReducers({ feedModule: feedModuleReducer });

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

export type RootState = ReturnType<typeof store.getState>;
