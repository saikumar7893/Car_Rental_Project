import React, {useState} from "react";
import './Signup.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
function Signup(){ 
    const [formdata,setform]=useState({
        username:''
    });
    const handleChange=(e)=>{
        setform({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
     function  fun(){
        // navig('/');
    }
    const handleSubmit = async () => {
        // navig('/');
        await fetch('http://localhost:8009/signup', {
          method: 'POST',
          body: JSON.stringify(formdata),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
            console.log(response)
        //    navig('/');
        })
      }
    // const navig=useNavigate();   
   
   

    return (
        <>
        <div className="lgin">
        <div className="row">
                <div className="col-md-3 name">
                    <h1>HR'S CAR RENTAL <br></br>SERVICES</h1>
                    
                </div>
                <div className="col-md-9"></div>
            </div>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 lgn">
                <div className="sbox">
                    
            <h2 style={{textAlign:"center",width:"100%"}}>SIGN UP</h2> 
                <br/>
                <center>
                <Form>
                <Form.Group controlId="form.UserName">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" name="username" value={formdata.username} onChange={handleChange}/>
        </Form.Group>
<br></br>
        
        <Form.Group controlId="form.Pass">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="*******" name="password" onChange={handleChange} />
        </Form.Group>
        <br></br>

        <Form.Group controlId="form.Pass">
            <Form.Label>UserMail</Form.Label>
            <Form.Control type="text" placeholder="Enter Email"  name="email" onChange={handleChange} />
        </Form.Group>
        <br></br>


        <Form.Group controlId="form.Pass">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Address" style={{height: '50px'}} name="address" onChange={handleChange} />
</Form.Group>

<br></br>
<Form.Group controlId="form.Role">
            <Form.Label><b>Select Your Role :&nbsp;</b></Form.Label>
            <select onChange={handleChange} name='role' style={{borderRadius:'10px',padding:'2%'}}>
                <option>Choose your role</option>
                <option>Owner</option>
                <option>User</option>
            </select>
        </Form.Group>
        <br/>
        <center><Button  className="btn btn-primary" onClick={handleSubmit}>Submit</Button></center>
       
      </Form>
      
      
      </center>
</div>
            </div>
          
        </div>
        <div className="row">
            <div className="col-md-5 offset-md-4">
            <h5 style={{color:'white',marginTop:'1%',marginLeft:'5%'}}>Already have an account ? Click here to Login<button style={{backgroundColor:'transparent',border:'0px',color:'blue'}} onClick={fun}>Login</button></h5>
            </div>
           </div>
        </div>
        </>
    )
}
export default Signup;