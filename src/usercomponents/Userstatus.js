import React from'react';
import { Link } from 'react-router-dom';


function Userstatus()
{
    return(
       <div  style={{backgroundColor:'lightgray'}}>

<div className='container-fluid whole'>
      <div className='row header'>
        <div className='col-md-8'>
         <center><h1 style={{paddingTop:'12px'}}>Car Rental Application</h1></center>
        </div>

       
        
        <div className='col-md-4 '>
          <nav className='ss'>
          <ul className='ulstyle' style={{paddingTop:'10px'}}>
        <Link to='/'><li>Available_Cars</li></Link>
     
     <Link to='/Userhistory'><li> History</li></Link>
      <Link to='/Userstatus'><li style={{backgroundColor:'papayawhip'}}>Status</li></Link>
          </ul>
          </nav>
        </div>

      </div>
      </div>
       
        <div >
        
            <center>
                <h2>Current Status:</h2>
            <div className='row' style={{backgroundColor:'rgb(135, 175, 207)'}}>
            <div className='col-md-2'></div>
          <div className='col-md-4 '>
            <h2>Here You can Edit Your Booking Details</h2>
            <br/>
        <form className='f1'>
          <center>
          <label >
                        Booking Id:&nbsp;
                    <input type="text"  />
                </label>
                <br/><br/>
                    <label >
                        Car Model:&nbsp; <input type="text"  />
                </label><br/><br/>
                <label >
                    Car Colour:&nbsp;<input type="text" />
                </label>
                <br/><br/>                             
                <label >
                    End Date:&nbsp;&nbsp;<input type="text" placeholder='m/dd/yyyy' />
                </label><br/>
                <br/>
                <button className="btn1" type="submit">Modify Booking Details</button>
                </center>
            </form>  
            </div>   
          <div className='col-md-4' >
          <center><h2 >Here You can Cancel Your Booking </h2></center>
          <br/>
          <form className='f1'>
         <div style={{marginLeft:'1%'}}>
         <label style={{marginLeft:'-3%'}} >
                        Booking Id &nbsp;&nbsp;&nbsp;
                        <input type="text"  />
                </label>
              
           
         </div>
           
            <br/>
            <div>
            <label style={{marginLeft:'-3%'}} >
                  Time Left &nbsp;
                  <input type="text" style={{marginRight:'-9%'}}/>
                </label>
              
            </div>
            <br/>
            <div>
            <label  > Amount Paid:&nbsp;&nbsp;
            <input type="text" />
                </label>
               
            </div>
          <br/>
          <div>
          <label style={{marginLeft:'-3%'}} >
                        Licence Number &nbsp;&nbsp;
                        <input type="text"  />
                </label></div>
          <br/>
         
         
                
<button className="btn2" type="submit">Terminate Booking</button>
<br/>

        </form>  
          
          </div>
          <div className='col-md-2'></div>
            </div>                  
            </center>
            <h1 style={{textAlign:'center',marginTop:'2%'}}>Booking Information</h1>
            <div className='row'>
            <div className="col-md-1"></div>
        <div className="col-md-10 " style={{ marginTop: "1%" }}>
          <center>
            {" "}
            <table className="my-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>User Name</th>
                  <th>Car Name</th>
                  <th>Licence</th>
                  <th>Booking Id</th>
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
       </div>
    );

}
export default Userstatus;

