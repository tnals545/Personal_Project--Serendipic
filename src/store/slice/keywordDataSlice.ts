import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface KeywordDataState {
  colorList: string[];
  keywordList: string[];
}

const initialState: KeywordDataState = {
  colorList: [],
  keywordList: [],
};

const keywordDataSlice = createSlice({
  name: "Keyword",
  initialState,
  reducers: {
    addColor: (state, action: PayloadAction<string>) => {
      state.colorList = [action.payload, ...state.colorList];
    },
    addKeyword: (state, action: PayloadAction<string>) => {
      const newList = state.keywordList.filter(
        (keyword) => keyword !== action.payload
      );

      if (state.keywordList.length === 8) {
        newList.pop();
        newList.unshift(action.payload);
        state.keywordList = [...newList];
      } else {
        state.keywordList = [action.payload, ...newList];
      }
    },
  },
});

export const { addColor, addKeyword } = keywordDataSlice.actions;
export default keywordDataSlice;
