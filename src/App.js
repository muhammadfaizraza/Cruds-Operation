import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StudentListing from "./Components/StudentListing";
import CreateStudent from "./Components/CreateStudent";
import StudentDetail from "./Components/StudentDetail";
import EditStudent from "./Components/EditStudent";

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Opertations Test</h1>
      <Routes>
        <Route path="/" element={<StudentListing />} />
        <Route path="/students/create" element={<CreateStudent />} />

        <Route path="/students/detail/:empid" element={<StudentDetail />} />
        <Route path="/students/edit/:empid" element={<EditStudent />} />
      </Routes>
    </div>
  );
}

export default App;
