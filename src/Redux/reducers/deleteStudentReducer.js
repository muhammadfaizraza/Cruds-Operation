import { createSlice } from "@reduxjs/toolkit";
import { clearMessage } from "./postStudentReducer";

const initialState = {
  loading: false,
  error: null,
  data: [],
  message: null,
};

const deleteStudentSlice = createSlice({
  name: "deleteStudent",
  initialState,
  reducers: {
    deleteStudentStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteStudentSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.message = "Data Delete Successfully";
    },
    deleteStudentFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  deleteStudentStart,
  deleteStudentSuccess,
  deleteStudentFailure,

  clearError,
} = deleteStudentSlice.actions;

export default deleteStudentSlice.reducer;
