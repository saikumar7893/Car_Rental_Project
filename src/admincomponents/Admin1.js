import React, { useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import './Card.css';
const Admin1 = () => {
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
              {/* <a class="dropdown-item" href="Admin1.js">Available Cars</a> */}
              <Link to="/Admin1" activeClassName="active-link" style={{ textDecoration: 'none',color:'blue' }}>Available Cars</Link>
</h3></div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="bg-light"><h3>
              {/* <a class="dropdown-item" href="Admin2.js">All Users</a> */}
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
              <Link to="/Status" style={{ textDecoration: 'none',color:'black' }}>Car Status</Link>
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
                
                 <option value="/ManageUsers">Manage Users</option>
                         
                 <option value="/ManageOwners">Manage Owners</option>
              
                   <option value="/">Car Advertisements</option>
                
                </select>
              </h3>
            </div>
          </div>

        </div>


        {/* Main Content */}
        <div class="col-md-9">
            <div class="col-md-3">
                <div class="col-md-12">
              </div>
            </div>
            <div className="card-list">
            <div class="col-md-3">
      <Card
        title="Audi"
        description="Audi is a German luxury car brand."
        image="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-A8-200920222145.jpg&w=872&h=578&q=75&c=1"
      />
      </div> 
      <div class="col-md-3">
      <Card
        title="Mahindra Thar"
        description="The Mahindra Thar is a popular off-road vehicle."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQQrF3fVjxIasqXwdVlBupM8DTINq075tTbwEL7zXfGnQDjLXGM09Ys1RCXfJ7nE6b-Y&usqp=CAU"
        />
      </div>
      <div class="col-md-3">
      <Card
        title="KIA seltos"
        description="The Kia Seltos is a compact crossover SUV manufacture"
        image="https://imgd.aeplcdn.com/642x336/n/cw/ec/144159/seltos-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
      />
      </div>   
    </div>
    <br></br>

    <div className="card-list">
            <div class="col-md-3">
      <Card
        title="Hyundai 120"
        description="Hyundai Motor India Limited (HMIL) is a wholly-owned subsidiary"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZBT9CgKHzVbALhJFvKOBdoY1-KBs4iWN5dAAUbB2nDhvQYAw0P-KKOH5N-fXKnE5MqQ&usqp=CAU"
      />
      </div> 
      <div class="col-md-3">
      <Card
        title="Mahindra Scorpio"
        description="Mahindra company is one of the largest vehicle manufacturers in India "
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9odZ0EXBHYEvYZ3S-kJ7COc_yyp9up8PXQBf8cZ3diLYMHDzi4FBMmnIH6s8hc2MjSIc&usqp=CAU"
      />
      </div>
      <div class="col-md-3">
      <Card
        title="BMW 320i"
        description="BMW is a German multinational corporation that produces luxury vehicle"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCTjpaqVcdfnVRzDEA__bsyr-QmoDQgCsGg&usqp=CAU"
      />
      </div>
      
    </div>
  
  
            
      </div>

      </div>


    </div>
    
  )
}

export default Admin1;
