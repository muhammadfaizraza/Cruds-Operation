import { combineReducers } from "redux";
import getStudentReducer from "./reducers/getStudentReducer";
import deleteStudentReducer from "./reducers/deleteStudentReducer";
import postStudentReducer from "./reducers/postStudentReducer";
import getStudentsDetailReducer from "./reducers/getStudentsDetailReducer";
import editStudentReducer from "./reducers/editStudentReducer";

const rootReducer = combineReducers({
  getStudents: getStudentReducer,
  deleteStudents: deleteStudentReducer,
  postStudents: postStudentReducer,
  getStudentsDetail: getStudentsDetailReducer,
  editStudent: editStudentReducer,
});

export default rootReducer;
