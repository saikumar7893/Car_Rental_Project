import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import car1 from '../images/Audi.jpg';
import car2 from '../images/BMW.png'
import car3 from '../images/Hyundai.jpg'
import car4 from '../images/KIA.jpg'
import car5 from '../images/Scorpio.jpg'
import {AiFillStar} from 'react-icons/ai'
import { CardGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import user from './user.png'
import '../Ownerapp.css'

const Ownerhome = () => {
    const navigate = useNavigate();
    const navigatecar = () =>{
      navigate('/Ownersinglecar');
    }

    const navigatecar2 = () =>{
      navigate('/Ownersinglecar2')
    }

    const navigatecar3 = () =>{
      navigate('/Ownersinglecar3')
    }

    const navigatecar4 = () =>{
      navigate('/Ownersinglecar4')
    }

  return (
    <div className="container-fluid">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={user} style={{width:"30px"}} />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/Ownerhome'></Link>
            <Nav.Link><Link to='/Ownerhome'  ><li>Home</li></Link></Nav.Link>
            <Nav.Link><Link to='/Ownerstatus'  ><li>View Status</li></Link></Nav.Link>
            <Nav.Link><Link to='/Ownerhistory'  ><li>View History</li></Link></Nav.Link>
            <Nav.Link><Link to='/Ownerpayment'><li>Payment</li></Link></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link><Link to='/Logout'><li>Logout</li></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="row mb-3">
        <div className="col-md-3">
          <Card onClick={navigatecar} className="effect">
            <Card.Img variant="top" src={car1} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Audi A4 2017</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{ fontSize:"19px" , textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar2} className="effect">
            <Card.Img variant="top" src={car2} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.89
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    55 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>BMW</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar3} className="effect">
            <Card.Img variant="top" src={car3} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.58
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    60 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Hyundai</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar4} className="effect">
            <Card.Img variant="top" src={car4} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.95
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    45 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>KIA</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
        <Card onClick={navigatecar2} className="effect">
            <Card.Img variant="top" src={car2} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>BMW</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar4} className="effect">
            <Card.Img variant="top" src={car4} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>KIA</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar} className="effect">
            <Card.Img variant="top" src={car1} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Audi A4 2017</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card onClick={navigatecar3} className="effect">
            <Card.Img variant="top" src={car5} />
            <Card.Body>
              <CardGroup style={{ display: "flex", alignItems: "center" }}>
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-8">
                  <AiFillStar style={{color:"orange" , fontSize:"20px"}}/> 4.88
                  </div>
                  <div className="col-md-4" style={{fontSize:"15px" , color:"gray" , textAlign:"right"}}>
                    50 trips
                  </div>
                  </div>
              </CardGroup>

              <Card.Title>Scorpio</Card.Title>

              <Card.Text>
                <p>Diesel</p>
                <div className="stat" style={{textAlign:"center" , borderTop:"1px solid grey" , color:"green" , textShadow:"2px 2px 5px green"}}>
                  Available
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Ownerhome;