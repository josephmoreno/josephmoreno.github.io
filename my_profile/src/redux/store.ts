import { configureStore } from "@reduxjs/toolkit";
import AppStateSlice from "./features/AppStateSlice";

export const store = configureStore({
  reducer: {
    appState: AppStateSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;