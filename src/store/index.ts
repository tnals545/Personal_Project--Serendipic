import {
  configureStore,
  combineReducers,
  AnyAction,
  CombinedState,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { Reducer } from "@reduxjs/toolkit";

import alertSlice, { type AlertState } from "@/store/slice/alertSlice";
import keywordDataSlice, {
  type KeywordDataState,
} from "@/store/slice/keywordDataSlice";

export interface RootState {
  alert: AlertState;
  keyword: KeywordDataState;
}

const RootReducer = (
  state: RootState,
  action: AnyAction
): CombinedState<RootState> => {
  if (action.type === HYDRATE) return { ...state, ...action.payload };

  const combinedReducer = combineReducers({
    alert: alertSlice.reducer,
    keyword: keywordDataSlice.reducer,
  });

  return combinedReducer(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: RootReducer as Reducer<CombinedState<RootState>, AnyAction>,
    devTools: process.env.NODE_ENV === "development",
  });

export const wrapper = createWrapper(makeStore);
