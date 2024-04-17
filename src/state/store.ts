import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "@/state/button/buttonSlice";
import expandMenuSlice from "@/state/expandMenu/expandMenuSlice";

export const store = configureStore({
  reducer: {
    button: buttonSlice,
    expandMenu: expandMenuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
