import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getStudentsDetailSlice = createSlice({
  name: "getStudentsDetail",
  initialState,
  reducers: {
    getStudentsDetailStart(state) {
      state.loading = true;
      state.error = null;
    },
    getStudentsDetailSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    getStudentsDetailFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  getStudentsDetailStart,
  getStudentsDetailSuccess,
  getStudentsDetailFailure,
  clearError,
} = getStudentsDetailSlice.actions;

export default getStudentsDetailSlice.reducer;
