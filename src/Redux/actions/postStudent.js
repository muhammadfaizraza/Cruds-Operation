import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  postStudentStart,
  postStudentSuccess,
  postStudentFailure,
} from "../reducers/postStudentReducer";
import axios from "axios";

export const postStudent = createAsyncThunk(
  "postStudent",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(postStudentStart());

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/students/`,
        data,
        { headers: { "content-type": "application/json" } }
      );
      thunkAPI.dispatch(postStudentSuccess(response.data));
    } catch (error) {
      thunkAPI.dispatch(postStudentFailure(error.message));
    }
  }
);
