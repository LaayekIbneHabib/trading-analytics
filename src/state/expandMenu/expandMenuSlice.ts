import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface expandMenuSlice {
  isOpen: boolean;
}

const initialState: expandMenuSlice = {
  isOpen: false,
};

export const expandMenuSlice = createSlice({
  name: "expandMenu",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setOpen } = expandMenuSlice.actions;
export default expandMenuSlice.reducer;
