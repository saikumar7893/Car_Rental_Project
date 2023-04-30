import React from "react";
import { Link } from "react-router-dom";
function Userhistory() {
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <div className="row header" >
        <div className="col-md-8">
          <center>
            <h1 style={{paddingTop:'12px'}}>Car Rental Application</h1>
          </center>
        </div>

        <div className="col-md-4 ">
          <nav className="ss">
            <ul className="ulstyle" style={{ paddingTop: "12px" }}>
             
                <Link to="/">
                  <li>Available Cars</li>
                </Link>
              

              <Link to="/Userhistory">
                <li style={{backgroundColor:'papayawhip'}}> History</li>
              </Link>
              <Link to="/UserStatus">
                <li>Status</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-6" style={{justifyContent:'center',textAlign:'center',display:'flex'}}>
          <form className="form1" >
            <h3 style={{ textAlign: "center" }}>
              Post Feedback
            </h3>
            <div className="row">
              <div className="col-md-4 offset-md-2">
                <label id="2">Car Model:&nbsp; </label>
                <input type="text" />
              </div>
              <div className="col-md-4 ">
                <label id="2">Licence Plate:&nbsp;</label>
                <input type="text" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4 offset-md-2">
                <label id="2">Duration:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" />
              </div>
              <div className="col-md-4 ">
                <label id="2">Amount Paid:&nbsp;</label>
                <input type="text" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <label id="2">Feedback : </label>
                <br />
                <textarea style={{ width: "90%", height: "10vh" }}></textarea>
              </div>
            </div>

            <center>
              {" "}
              <button
                className="submit-btn"
                type="submit"
                style={{ marginBottom: "2%", marginTop: "2%" }}
              >
                Submit
              </button>
            </center>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className="row" style={{ marginTop: "1%" }}>
        <center>
          <h2 style={{ textAlign: "center" }}>Previous History Details</h2>{" "}
        </center>
        <div className="col-md-1"></div>
        <div className="col-md-10 " style={{ marginTop: "1%" }}>
          <center>
            {" "}
            <table className="my-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Car Model</th>
                  <th>Licence Plate</th>
                  <th>Duration</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {/* more rows go here */}
              </tbody>
            </table>
          </center>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default Userhistory;
