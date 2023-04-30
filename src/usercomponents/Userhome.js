import React from 'react';
import { Link } from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom';
import car from '../images/thar1.webp';
// import 'font-awesome/css/font-awesome.min.css';

const Userhome = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/car1');
  };


  return (
   
    


    <div className='container-fluid whole'>
      <div className='row header' >
        <div className='col-md-8'>
         <center><h1 style={{
          paddingTop:'12px'
         }}>Car Rental Application</h1></center> 
        </div>

       
        
        <div className='col-md-4 '>
          <nav className='ss'>
          <ul className='ulstyle' style={{paddingTop:'12px'}}>
         <Link to='/'><li style={{backgroundColor:'papayawhip'}}>Available Cars</li></Link>
     
     <Link to='/Userhistory'><li> History</li></Link>
      <Link to='/Userstatus'><li>Status</li></Link>
          </ul>
          </nav>
        </div>

      </div>
      <br/>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
         
          <input type='text' className='form-control' style={{borderRadius:'10px'}}/>
          
        </div>
        <div className='col-md-4'>
        <button style={{padding:'5px',backgroundColor:'lightblue',borderRadius:'10%'}}>search</button>
        </div>
      </div>
      <br/>
      <div className='row'>
        <div className='col-md-3'style={{backgroundColor:'white'}}>
         
<div id='ss'>
        
        <img src={car} style={{width:'100%'}} alt='Avatar' className='image'  />
  <div class="overlay">
    <div class="text">
<center>
  <h3 className='gap'>AUDI</h3>
 <h3 className='gap'> Price : 2000/Day</h3>
 <h3 className='gap'> Model : Q6</h3>
 <h3 className='gap'>Miles Driven - 200</h3>
 <h3 className='gap'>No_plate:AP05-1111</h3>
 <h3 className='gap'>Rating:4/5</h3>
 <center><button className='ss btn-md btn-info' className='gap' style={{borderRadius:'10%'}}>Add_to_Cart</button></center>


</center>

    </div>
    </div>
    </div>
          <center> 
          <h3>AUDI</h3>
          </center>
        </div>
        <div className='col-md-3'style={{backgroundColor:'white'}}>
         
<div id='ss'>
        
        <img src={car} style={{width:'100%'}} alt='Avatar' className='image'  />
  <div class="overlay">
    <div class="text">
    <center>
  <h3 className='gap'>AUDI</h3>
 <h3 className='gap'> Price : 2000/Day</h3>
 <h3 className='gap'> Model : Q6</h3>
 <h3 className='gap'>Miles Driven - 200</h3>
 <h3 className='gap'>No_plate:AP05-1111</h3>
 <h3 className='gap'>Rating:4/5</h3>
 <center><button className='ss btn-md btn-info' className='gap' style={{borderRadius:'10%'}}>Add_to_Cart</button></center>


</center>

    </div>
    </div>
    </div>
          <center> 
          <h3>AUDI</h3>
          </center>
        </div>
        <div className='col-md-3'style={{backgroundColor:'white'}}>
         
         <div id='ss'>
                 
                 <img src={car} style={{width:'100%'}} alt='Avatar' className='image'  />
           <div class="overlay">
             <div class="text">
             <center>
  <h3 className='gap'>AUDI</h3>
 <h3 className='gap'> Price : 2000/Day</h3>
 <h3 className='gap'> Model : Q6</h3>
 <h3 className='gap'>Miles Driven - 200</h3>
 <h3 className='gap'>No_plate:AP05-1111</h3>
 <h3 className='gap'>Rating:4/5</h3>
 <center><button className='ss btn-md btn-info' className='gap' style={{borderRadius:'10%'}}>Add_to_Cart</button></center>


</center>
         
             </div>
             </div>
             </div>
                   <center> 
                   <h3>AUDI</h3>
                   </center>
                 </div>
                 <div className='col-md-3'style={{backgroundColor:'white'}}>
         
         <div id='ss'>
                 
                 <img src={car} style={{width:'100%'}} alt='Avatar' className='image'  />
           <div class="overlay">
             <div class="text">
             <center>
  <h3 className='gap'>AUDI</h3>
 <h3 className='gap'> Price : 2000/Day</h3>
 <h3 className='gap'> Model : Q6</h3>
 <h3 className='gap'>Miles Driven - 200</h3>
 <h3 className='gap'>No_plate:AP05-1111</h3>
 <h3 className='gap'>Rating:4/5</h3>
 <center><button className='ss btn-md btn-info' className='gap' style={{borderRadius:'10%'}}>Add_to_Cart</button></center>


</center>
         
             </div>
             </div>
             </div>
                   <center> 
                   <h3>AUDI</h3>
                   </center>
                 </div>
      </div>
      <div className='row'>
      <div className='col-md-3'style={{backgroundColor:'white'}}>
         
         <div id='ss'>
                 
                 <img src={car} style={{width:'100%'}} alt='Avatar' className='image'  />
           <div class="overlay">
             <div class="text">
             <center>
  <h3 className='gap'>AUDI</h3>
 <h3 className='gap'> Price : 2000/Day</h3>
 <h3 className='gap'> Model : Q6</h3>
 <h3 className='gap'>Miles Driven - 200</h3>
 <h3 className='gap'>No_plate:AP05-1111</h3>
 <h3 className='gap'>Rating:4/5</h3>
 <center><button className='ss btn-md btn-info' className='gap' style={{borderRadius:'10%'}}>Add_to_Cart</button></center>


</center>
         
             </div>
             </div>
             </div>
                   <center> 
                   <h3>AUDI</h3>
                   </center>
                 </div>
                 <div className='col-md-3'style={{backgroundColor:'white'}}>
         
         <div id='ss'>
                 
                 <img src={car} style={{width:'100%'}} alt='Avatar' className='image'  />
           <div class="overlay">
             <div class="text">
             <center>
  <h3 className='gap'>AUDI</h3>
 <h3 className='gap'> Price : 2000/Day</h3>
 <h3 className='gap'> Model : Q6</h3>
 <h3 className='gap'>Miles Driven - 200</h3>
 <h3 className='gap'>No_plate:AP05-1111</h3>
 <h3 className='gap'>Rating:4/5</h3>
 <center><button className='ss btn-md btn-info' className='gap' style={{borderRadius:'10%'}}>Add_to_Cart</button></center>


</center>
         
             </div>
             </div>
             </div>
                   <center> 
                   <h3>AUDI</h3>
                   </center>
                 </div>
                 <div className='col-md-3'style={{backgroundColor:'white'}}>
         
         <div id='ss'>
                 
                 <img src={car} style={{width:'100%'}} alt='Avatar' className='image'  />
           <div class="overlay">
             <div class="text">
             <center>
  <h3 className='gap'>AUDI</h3>
 <h3 className='gap'> Price : 2000/Day</h3>
 <h3 className='gap'> Model : Q6</h3>
 <h3 className='gap'>Miles Driven - 200</h3>
 <h3 className='gap'>No_plate:AP05-1111</h3>
 <h3 className='gap'>Rating:4/5</h3>
 <center><button className='ss btn-md btn-info' className='gap' style={{borderRadius:'10%'}}>Add_to_Cart</button></center>


</center>
         
             </div>
             </div>
             </div>
                   <center> 
                   <h3>AUDI</h3>
                   </center>
                 </div>
                 <div className='col-md-3'style={{backgroundColor:'white'}}>
         
         <div id='ss'>
                 
                 <img src={car} style={{width:'100%'}} alt='Avatar' className='image'  />
           <div class="overlay">
             <div class="text">
             <center>
  <h3 className='gap'>AUDI</h3>
 <h3 className='gap'> Price : 2000/Day</h3>
 <h3 className='gap'> Model : Q6</h3>
 <h3 className='gap'>Miles Driven - 200</h3>
 <h3 className='gap'>No_plate:AP05-1111</h3>
 <h3 className='gap'>Rating:4/5</h3>
 <center><button className='ss btn-md btn-info' className='gap' style={{borderRadius:'10%'}}>Add_to_Cart</button></center>


</center>
         
             </div>
             </div>
             </div>
                   <center> 
                   <h2>AUDI</h2>
                   </center>
                 </div>
      </div>
      

    </div>
          
  )
}

export default Userhome;
