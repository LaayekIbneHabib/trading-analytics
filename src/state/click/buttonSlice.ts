import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface buttonSlice {
  isLoading: boolean;
  isDisabled: boolean;
}

const initialState: buttonSlice = {
  isLoading: false,
  isDisabled: false,
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setDisabled: (state, action: PayloadAction<boolean>) => {
      state.isDisabled = action.payload;
    },
  },
});

export const { setLoading, setDisabled } = buttonSlice.actions;
export default buttonSlice.reducer;
