import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  message: null,
};

const editStudentSlice = createSlice({
  name: "editStudent",
  initialState,
  reducers: {
    editStudentStart(state) {
      state.loading = true;
      state.error = null;
    },
    editStudentSuccess(state, action) {
      state.loading = false;
      state.message = "Form Submitted Successfully";
    },
    editStudentFailure(state, action) {
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
  editStudentStart,
  editStudentSuccess,
  editStudentFailure,
  clearError,
  clearMessage,
} = editStudentSlice.actions;

export default editStudentSlice.reducer;
