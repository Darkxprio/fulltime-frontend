import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DataType } from "./Model";

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
    const response = await fetch(
      "https://api.github.com/repos/Darkxprio/fulltime-frontend/commits"
    );
    if (response.ok) {
      const data = await response.json();
      return data as DataType[];
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw error;
  }
});

const { reducer } = frontendSlice;

export default reducer;
