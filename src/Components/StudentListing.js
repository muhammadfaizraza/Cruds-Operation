import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getStudent } from "../Redux/actions/getStudents";
import { deleteStudent } from "../Redux/actions/deleteStudent";
import * as XLSX from "xlsx";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { clearError } from "../Redux/reducers/deleteStudentReducer";

const StudentListing = () => {
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getStudents);
  const { error, message } = useSelector((state) => state.getStudents);

  const Removefunction = (id) => {
    setSelectedStudentId(id);
    setShowConfirmationModal(true);
  };

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "students.xlsx");
  };

  const LoadDetail = (id) => {
    navigate("/students/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/students/edit/" + id);
  };

  const handleDeleteConfirmed = () => {
    dispatch(deleteStudent(selectedStudentId));
    dispatch(getStudent());
    setShowConfirmationModal(false);
  };

  const handleDeleteCancelled = () => {
    setSelectedStudentId(null);
    setShowConfirmationModal(false);
  };
  useEffect(() => {
    dispatch(getStudent());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
    }
  }, [error, message]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Students Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn ">
            <Link to="students/create" className="btn btn-dark text-white">
              Add New (+)
            </Link>
            <Button onClick={handleExport} className="btn btn-success">
              Export
            </Button>
          </div>
          <table className="table table-bordered">
            <thead className="bg-primary text-white ">
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Description</th>
                <th>class</th>
                <th>Section</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.map((item) => (
                  <tr key={item?.studentId}>
                    <td
                      className={
                        item.isActive
                          ? "bg-success text-white"
                          : "bg-danger text-white "
                      }
                    >
                      {item?.studentId}
                    </td>
                    <td>{item?.name}</td>
                    <td>{item?.description}</td>
                    <td>{item?.class}</td>
                    <td>{item?.section}</td>
                    <td>
                      <button
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-primary text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                      <button
                        className="btn btn-primary text-white  "
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {showConfirmationModal && (
        <Modal show={showConfirmationModal} onHide={handleDeleteCancelled}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this student?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleDeleteCancelled}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteConfirmed}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default StudentListing;
