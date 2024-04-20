import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  editStudentStart,
  editStudentSuccess,
  editStudentFailure,
} from "../reducers/editStudentReducer";
import axios from "axios";

export const editStudent = createAsyncThunk(
  "editStudent",
  async ({ empid, studentData }, thunkAPI) => {
    try {
      thunkAPI.dispatch(editStudentStart());

      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/students/` + empid,
        studentData,
        { headers: { "content-type": "application/json" } }
      );
      thunkAPI.dispatch(editStudentSuccess(response.data));
    } catch (error) {
      thunkAPI.dispatch(editStudentFailure(error.message));
    }
  }
);
