import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getStudentsDetail } from "../Redux/actions/getStudentsDetail";
import { useDispatch, useSelector } from "react-redux";

const StudentDetail = () => {
  const { empid } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getStudentsDetail);

  useEffect(() => {
    dispatch(getStudentsDetail(empid));
  }, [empid, dispatch]);

  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          {data && (
            <div>
              <h2>
                The Student name is : <b>{data.name}</b> ({data.id})
              </h2>
              <h3>Details</h3>
              <h5>
                Student of : {data.class} Section {data.section}
              </h5>
              <h5>Personal Id No : {data.studentId}</h5>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* </div>
            </div> */}
    </div>
  );
};

export default StudentDetail;
