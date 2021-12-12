import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchByLocation from "../features/searchByLocation/searchByLocationSlice";

export const store = configureStore({
  reducer: {
    searchWeather: searchByLocation,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
