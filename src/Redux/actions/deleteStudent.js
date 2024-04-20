import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteStudentStart,
  deleteStudentSuccess,
  deleteStudentFailure,
} from "../reducers/deleteStudentReducer";
import axios from "axios";

export const deleteStudent = createAsyncThunk(
  "deleteStudent",
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(deleteStudentStart());

      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/students/` + id
      );

      thunkAPI.dispatch(deleteStudentSuccess(response.data));
    } catch (error) {
      thunkAPI.dispatch(deleteStudentFailure(error.response.data.message));
    }
  }
);
