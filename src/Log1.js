import React, {useState,useEffect} from "react";
// import './Login.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Ownerhome from "./ownercomponents/Ownerhome";
import Userhome from "./usercomponents/Userhome";
import Status from "./admincomponents/Status";

function Log1(){  
    const navig=useNavigate();  
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [role,setRole]=useState('')
    const [users,setusers]=useState([]);

    //To get Logins Information
    const getUsers=async()=>{
        const result=await fetch('http://localhost:8009/',{
            method:"GET"
        })
        const resul=await result.json();
        setusers(resul);

    }
   const handleSubmit=()=>{
  const log=users.find((ele)=>{ return (ele.username===name && ele.password===password && ele.role===role)})
  if(log===undefined)
  {
    document.getElementById('error').innerHTML="Username or Passowrd is incorrect";
 }
 else if(role==='Admin'){navig('/Status')}
 else if(role==='Owner'){navig('/Ownerhome')}
 else if(role==='User'){navig('/Userhome')}

   }
    function fun(){
        navig('/Signup');
    }
    useEffect(()=>{
        getUsers()
    },[]);
   
    return (
        <div >
        <div className="lgin" >
        <div className="row">
                <div className="col-md-12 name">
                    <center><h1 style={{color:'blue'}}>Car Rentals SERVICES</h1></center>
                    
                </div>
               
            </div>
            <br/>
        <div className="row">
          
            <div className="col-md-6 offset-md-3 lgn" >
                <div className="s1box" >
                    
            <h2 style={{textAlign:"center",width:"100%"}}>LOGIN</h2> 
                <br/>
                <p style={{color:'red'}} id='error'></p>
                <center>
                <Form>
                <Form.Group controlId="form.UserName">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter Username"  onChange={(e)=>{setName(e.target.value);}}/>
        </Form.Group>
<br/>
        
        <Form.Group controlId="form.Pass">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="*******" name="password" onChange={(e)=>{setPassword(e.target.value); }} />
        </Form.Group>
        <br/>
        <Form.Group controlId="form.Role">
            <Form.Label><b>Select Your Role : &nbsp;</b></Form.Label>
            <select onChange={(e)=>setRole(e.target.value)} style={{borderRadius:'10px',padding:'2%'}}>
                <option>Choose your role</option>
                <option>Admin</option>
                <option>Owner</option>
                <option>User</option>
            </select>
        </Form.Group>
        <br/>
        <center><Button  className="btn btn-primary" onClick={handleSubmit}>Submit</Button></center><br/>
      </Form>
      
     
      </center>
</div>
            </div>
           <div className="row">
            <div className="col-md-3 offset-md-4">
            <center><h2 style={{color:'black',marginTop:'1%',marginLeft:'11%'}}>Don't have an account ? Click here to<button style={{backgroundColor:'transparent',border:'0px',color:'blue'}} onClick={fun}>Signup</button></h2></center>
            </div>
           </div>
      
        </div>
        </div>
        </div>
    )
}
export default Log1;