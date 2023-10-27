import { configureStore } from "@reduxjs/toolkit";
import frontendReducer from "./Features/FrontendSlice";
import backendReducer from "./Features/BackendSlice";
import baseUrl from "../Axios/config";
import axios from "axios";

axios.defaults.baseURL = baseUrl;

export const store = configureStore({
  reducer: {
    frontend: frontendReducer,
    backend: backendReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
