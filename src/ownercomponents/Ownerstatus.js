import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BiSearchAlt2 } from 'react-icons/bi'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
import { icons } from 'react-icons';

const Ownerstatus = () => {

  const columns = [
    {
      name: 'Model Number',
      selector: row => row.ModelNumber,
      sortable: true
    },
    {
      name: "Model Name",
      selector: row => row.ModelName,
      sortable: true
    },
    {
      name: "Status",
      selector: row => row.Status,
      sortable: true
    },
    {
      name: "Customer",
      selector: row => row.Name,
      sortable: true
    },
    {
      name: "Date",
      selector: row => row.Date,
      sortable: true
    },
    {
      name: "Payment",
      selector: row => row.Payment,
      sortable: true
    }
  ];

  const data = [
    {
      id:1,
      ModelNumber:'2023001',
      ModelName:'Audi A4',
      Status:'Booked',
      Name:'sanjay',
      Date:'05-04-2023',
      Payment:'done'
    },
    {
      id:2,
      ModelNumber:'2023002',
      ModelName:'BMW',
      Status:'Not Booked',
      Name:'-',
      Date:'-',
      Payment:'-'
    },
    {
      id:3,
      ModelNumber:'2023003',
      ModelName:'Hyndia',
      Status:'Booked',
      Name:'Sai',
      Date:'01-05-2023',
      Payment:'done'
    },
    {
      id:4,
      ModelNumber:'2023004',
      ModelName:'KIA',
      Status:'Booked',
      Name:'Raaman',
      Date:'10-05-2023',
      Payment:'done'
    },
    {
      id:5,
      ModelNumber:'2023005',
      ModelName:'Scorpio',
      Status:'Booked',
      Name:'Nithya',
      Date:'02-05-2023',
      Payment:'Pending'
    }
  ];

  const [records, setRecords] = useState(data);
  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.ModelName.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h2 style={{textAlign:"center" , fontWeight:"bold"}}>Booking Details</h2>
      </div>
      <div className='row'>
        <div className='col-md-12 form-group'>
          <div class="input-group">
            <div class="input-group-addon" style={{ fontSize: "25px" }}>
              <BiSearchAlt2 />
            </div>
            <input type="text" placeholder="Search Model Name" class="form-control" onChange={handleFilter} />
          </div>
        </div>
      </div>

      <div className='row'>
        <DataTable columns={columns}
          data={records}
          fixedHeader
        ></DataTable>
      </div>

    </div>
  )
}

export default Ownerstatus;