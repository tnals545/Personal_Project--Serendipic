import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AlertState {
  status: string | number | null;
}

const initialState: AlertState = {
  status: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alertStatus: (state, action: PayloadAction<string | number | null>) => {
      state.status = action.payload;
    },
  },
});

export const { alertStatus } = alertSlice.actions;
export default alertSlice;
