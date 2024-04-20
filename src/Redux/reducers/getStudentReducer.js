import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const getStudentSlice = createSlice({
  name: "getStudent",
  initialState,
  reducers: {
    getStudentStart(state) {
      state.loading = true;
      state.error = null;
    },
    getStudentSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    getStudentFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  getStudentStart,
  getStudentSuccess,
  getStudentFailure,
  clearError,
} = getStudentSlice.actions;

export default getStudentSlice.reducer;
