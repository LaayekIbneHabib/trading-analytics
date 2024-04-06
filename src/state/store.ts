import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/state/counter/counterSlice";
import buttonSlice from "@/state/click/buttonSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    button: buttonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
