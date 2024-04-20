import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getStudentStart,
  getStudentSuccess,
  getStudentFailure,
} from "../reducers/getStudentReducer";
import axios from "axios";

export const getStudent = createAsyncThunk(
  "getStudent",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(getStudentStart());

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/students`
      );

      thunkAPI.dispatch(getStudentSuccess(response.data));
    } catch (error) {
      thunkAPI.dispatch(getStudentFailure(error));
    }
  }
);
