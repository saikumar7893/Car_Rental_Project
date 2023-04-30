import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Status = () => {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    console.log("Selected option:", selectedValue);
    window.location.href = selectedValue;
  }

  return (
    <div className="container-fluid">

      {/* Top */}
      <div className="row mb-3">

        <div className="col-md-10 mb-3">
          <div className="bg-light"><h3>Car Rentals</h3></div>
        </div>

        <div className="col-md-2 mb-3">
          <div className="bg-light"><h3>Admin Info</h3></div>
        </div>
      </div>

      
      <div class="row">

        {/* Aside */}
        <div class="col-md-2">
          <div class="col-md-12 mb-3">
            <div class="bg-light"><h3>
               {/* <a class="dropdown-item" href="Admin1">Available Cars</a> */}
               <Link to="/Admin1" style={{ textDecoration: 'none',color:'black' }}>Available Cars</Link>
               </h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-light"><h3>
              {/* <a class="dropdown-item" href="Admin2">All Users</a> */}
              <Link to="/Admin2" style={{ textDecoration: 'none',color:'black' }}>All Users</Link>
              </h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-light"><h3>
              {/* <a class="dropdown-item" href="/#">All Owners</a> */}
              <Link to="/Owners" style={{ textDecoration: 'none',color:'black' }}>All Owners</Link>
              </h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-light"><h3>
                {/* <a class="dropdown-item" href="/#">View Status</a> */}
                <Link to="/Status" activeClassName="active-link" style={{ textDecoration: 'none',color:'blue' }}>Car Status</Link>
            </h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-light"><h3>
              {/* <a class="dropdown-item" href="/#">View History</a> */}
              <Link to="/" style={{ textDecoration: 'none',color:'black' }}>View History</Link>
              </h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-light"><h3>
              <select value={selectedOption} onChange={handleSelect}>
                <option value="">Manage</option>
                <option value="/ManageUsers">Manage users</option>
                <option value="/ManageOwners">Manage Owners</option>
                <option value="/">Car Advertisements</option>
              </select>
              
              </h3>
            </div>
          </div>

        </div>


        {/* Main Content */}
        <div class="col-md-9">

             <div class="row">
          
            <div class="col-md-9">
            <div class="bg-light"><h3>Car Status</h3></div>
            </div>
            <div class="col-md-3" style={{marginTop:'20px'}}>
            
              <div>
            <input
             type="text"
             value={query}
             onChange={(e) => setQuery(e.target.value)}
             placeholder="Search"
            />
           <button onClick={() => console.log(query)}>Search</button>
           </div>
            </div>
            </div>


            <div class="row"> <br></br> </div>
          <div class="row">
            <div class="tab1">
                <Table Striped bordered hover style={{marginLeft:'100px', boxShadow: '8px 8px 12px grey'}}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Car Name</th>
                            <th>Fuel</th>
                            <th>Price</th>
                            <th>State</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Audi</td>
                            <td>Diesel</td>
                            <td>269/hr</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mahindra Thar</td>
                            <td>Diesel</td>
                            <td>627/hr</td>
                            <td>Worth</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
          </div>
       

        </div>

      </div>


    </div>
    
  )
}

export default Status;
