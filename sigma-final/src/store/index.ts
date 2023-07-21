import { combineReducers } from "redux";
import { shop } from "./reducers/shop";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({
  shop: shop,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type IState = ReturnType<typeof rootReducer>;
const confstore = configureStore({
  reducer: rootReducer,
});
export type Dispatch = typeof store.dispatch;
export type AppDispatch = typeof confstore.dispatch;
