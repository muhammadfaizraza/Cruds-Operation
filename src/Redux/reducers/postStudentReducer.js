import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  message: null,
};

const postStudentSlice = createSlice({
  name: "postStudent",
  initialState,
  reducers: {
    postStudentStart(state) {
      state.loading = true;
      state.error = null;
    },
    postStudentSuccess(state, action) {
      state.loading = false;
      state.message = "Form Submitted Successfully";
    },
    postStudentFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
});

export const {
  postStudentStart,
  postStudentSuccess,
  postStudentFailure,
  clearError,
  clearMessage,
} = postStudentSlice.actions;

export default postStudentSlice.reducer;
