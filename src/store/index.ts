import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
  configureStore,
  combineReducers,
  AnyAction,
  CombinedState,
} from "@reduxjs/toolkit";
import { Reducer } from "@reduxjs/toolkit";

import alertSlice, { type AlertState } from "@/store/slice/alertSlice";
import keywordDataSlice, {
  type KeywordDataState,
} from "@/store/slice/keywordDataSlice";
import { SerendipicApiState, serendipicApi } from "@/api/serendipicApi";

export interface RootState {
  alert: AlertState;
  keyword: KeywordDataState;
  serendipicApi: SerendipicApiState;
}

const RootReducer = (
  state: RootState,
  action: AnyAction
): CombinedState<RootState> => {
  if (action.type === HYDRATE) return { ...state, ...action.payload };

  const combinedReducer = combineReducers({
    alert: alertSlice.reducer,
    keyword: keywordDataSlice.reducer,
    serendipicApi: serendipicApi.reducer,
  });

  return combinedReducer(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: RootReducer as Reducer<CombinedState<RootState>, AnyAction>,
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(serendipicApi.middleware),
  });

export const wrapper = createWrapper(makeStore);
