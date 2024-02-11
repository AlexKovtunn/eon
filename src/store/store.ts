import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import filmSlice from "./slices/slice";
import { FilmState } from "./slices/type";

const appReducer = combineReducers({
  film: filmSlice,
});

export const store = configureStore({
  reducer: appReducer,
});

export type AppDispatch = typeof store.dispatch;

export type AppState = {
  film: FilmState;
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector;
