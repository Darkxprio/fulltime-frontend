import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DataType } from "./Model";
import axios from "axios";
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
    const response = await axios.get("/backend");
    if (response.data) {
      console.log(response.data);
      return response.data as DataType[];
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw error;
  }
});

const { reducer } = backendSlice;

export default reducer;
