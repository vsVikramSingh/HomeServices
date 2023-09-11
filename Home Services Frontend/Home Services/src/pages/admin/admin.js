import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const Employee = () => {
    navigate("/employees");
    //add and remove employees
  };
  const Services = () => {
    //add and remove Services
    navigate("/services");
  };
  const Orders = () => {
    //view and accept orders
    navigate("/showallbookedservices/");
  };
  const showallfeedback = () => {
    //show all feedback 
    navigate("/showallfeedback");
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "navy" }}>Admin Dashboard</h1>
      <div className="row">
        <div
          className="card col mb-4"
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 90
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1869/1869679.png"
            alt="employee image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: "100%", display: "block" }}
          />
          <div className="card-body">
            <button onClick={Employee} style={styles.Button}>
              Employee
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
            marginTop: 90
          }}
        >
          <img
            src="https://images.assetsdelivery.com/compings_v2/lvnl/lvnl2102/lvnl210200039.jpg"
            alt="Services image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: "100%", display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={Services} style={styles.Button}>
              Services
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
            marginTop: 90
          }}
        >
         <img
            src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
            alt="Orders image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: "100%", display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={Orders} style={styles.Button}>
              Orders
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
            marginTop: 90
          }}
        >
         <img
            src="https://png.pngtree.com/png-clipart/20201123/ourmid/pngtree-d-small-person-leaning-on-a-question-mark-square-question-clipart-png-image_2461741.jpg"
            alt="feedback image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: "100%", display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={showallfeedback} style={styles.Button}>
              Show Feedback
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
    marginTop: 10
  }
};

export default Admin;
