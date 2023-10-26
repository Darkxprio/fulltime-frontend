import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DataType } from "./Model";

interface BackendState {
  data: DataType[];
  status?: RequestStatus;
}

export enum RequestStatus {
  idle = "idle",
  pending = "pending",
  success = "success",
  failed = "failed",
}

const initialState: BackendState = {
  data: [],
  status: RequestStatus.idle,
};

const backendSlice = createSlice({
  name: "load",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadBackendThunk.pending, (state) => {
      state.status = RequestStatus.pending;
    });

    builder.addCase(loadBackendThunk.fulfilled, (state, action) => {
      state.data = [...(action.payload as DataType[])];
      state.status = RequestStatus.success;
    });

    builder.addCase(loadBackendThunk.rejected, (state) => {
      state.status = RequestStatus.failed;
    });
  },
});

export const loadBackendThunk = createAsyncThunk("loadBackend", async () => {
  try {
    const response = await fetch("/backend");
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

const { reducer } = backendSlice;

export default reducer;
