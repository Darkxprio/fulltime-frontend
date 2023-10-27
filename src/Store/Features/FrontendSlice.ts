import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DataType } from "./Model";
import axios from "axios";

interface FrontendState {
  data: DataType[];
  status?: RequestStatus;
}

export enum RequestStatus {
  idle = "idle",
  pending = "pending",
  success = "success",
  failed = "failed",
}

const initialState: FrontendState = {
  data: [],
  status: RequestStatus.idle,
};

const frontendSlice = createSlice({
  name: "load",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadFrontendThunk.pending, (state) => {
      state.status = RequestStatus.pending;
    });

    builder.addCase(loadFrontendThunk.fulfilled, (state, action) => {
      state.data = [...(action.payload as DataType[])];
      state.status = RequestStatus.success;
    });

    builder.addCase(loadFrontendThunk.rejected, (state) => {
      state.status = RequestStatus.failed;
    });
  },
});

export const loadFrontendThunk = createAsyncThunk("loadFrontend", async () => {
  try {
    const response = await axios.get("/frontend");
    if (response.data) {
      return response.data as DataType[];
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw error;
  }
});

const { reducer } = frontendSlice;

export default reducer;
