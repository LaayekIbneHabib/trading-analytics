import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "@/state/button/buttonSlice";

export const store = configureStore({
  reducer: {
    button: buttonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
