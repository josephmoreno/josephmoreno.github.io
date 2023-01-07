import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";

type AppState = {
  appState: string;
};

const initialState: AppState = {
  appState: ""
};

export const AppStateSlice = createSlice({
  name: "AppState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    }
  }
});

export const {
  setAppState
} = AppStateSlice.actions;

export default AppStateSlice.reducer;