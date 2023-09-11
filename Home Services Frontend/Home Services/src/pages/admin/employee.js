import { useNavigate } from "react-router-dom";

const Employee = () => {
  const navigate = useNavigate();

  const addEmployee = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate("/add-employee");
  };
  const listEmployee = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate("/list-employee");
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "navy" }}>Employee</h1>
      <div className="row">
        <div
          className="card col mb-4"
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 70,
          }}
        >
          <img
            src="data:image/jpeg;base64,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"
            alt="employee image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body">
            <button onClick={addEmployee} style={styles.Button}>
              Add Employee
            </button>
          </div>
        </div>
        <div
          className="card col mb-4  "
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 70,
          }}
        >
          <img
            src="https://icon-library.com/images/employee-icon-png/employee-icon-png-1.jpg"
            alt="list of employee image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={listEmployee} style={styles.Button}>
              Employee List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  Button: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "navy",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

export default Employee;
