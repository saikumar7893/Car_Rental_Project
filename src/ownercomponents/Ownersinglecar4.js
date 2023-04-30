import React from 'react';
import { Link } from 'react-router-dom';
import car1 from '../images/KIA.jpg'
import "./Singlecar.css"

const Ownnersinglecar4 = () => {

  return (
    <div className='container-fluid'>
      <div className='row mb-3'>
      <div className='col-md-2'></div>
      <div className='col-md-8 car'>
          <img src={car1} className='img-fluid car-img' />
        </div>
        <div className='col-md-2'></div>
      </div>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
        <ul >
          <li>Model Number: <span>2023004</span></li>
          <li>Model Name: <span>KIA</span></li>
          <li>Miles Driven: <span>2900km</span></li>
          <li>Model Number: <span>123456789</span></li>
          <li>Required documents:
            
              <li>Insurance:</li>
              <li>Population:</li>
           
          </li>
        </ul>
        </div>
        <div className='col-md-2'></div>
      </div>
    </div>
  )
}

export default Ownnersinglecar4;