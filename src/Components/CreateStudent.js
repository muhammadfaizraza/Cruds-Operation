import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postStudent } from "../Redux/actions/postStudent";
import { clearError, clearMessage } from "../Redux/reducers/postStudentReducer";
import { toast } from "react-toastify";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [classValue, setClassValue] = useState("");
  const [section, setSection] = useState("");
  const [validation, valchange] = useState(false);
  const [active, activechange] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, message } = useSelector(
    (state) => state.postStudents
  );
  const handlesubmit = (e) => {
    e.preventDefault();
    const studentData = {
      studentId: Math.floor(Math.random() * 1000),
      name,
      description,
      class: classValue,
      section,
      id: Math.floor(Math.random() * 1000),
      isActive: active,
    };
    dispatch(postStudent(studentData));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      navigate("/");
    }
  }, [error, message]);
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Student Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onMouseDown={() => valchange(true)}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length === 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Class</label>
                      <select
                        value={classValue}
                        onChange={(e) => setClassValue(e.target.value)}
                        className="form-control"
                      >
                        <option value="">Select Class</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Section</label>
                      <select
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        className="form-control"
                      >
                        <option value="">Select Section</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button
                        disabled={loading}
                        className="btn btn-success"
                        type="submit"
                      >
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
