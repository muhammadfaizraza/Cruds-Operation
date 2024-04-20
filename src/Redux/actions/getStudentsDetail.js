import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getStudentsDetailStart,
  getStudentsDetailSuccess,
  getStudentsDetailFailure,
} from "../reducers/getStudentsDetailReducer";
import axios from "axios";

export const getStudentsDetail = createAsyncThunk(
  "getStudentsDetail",
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(getStudentsDetailStart());

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/students/` + id
      );

      thunkAPI.dispatch(getStudentsDetailSuccess(response.data));
    } catch (error) {
      thunkAPI.dispatch(getStudentsDetailFailure(error));
    }
  }
);
