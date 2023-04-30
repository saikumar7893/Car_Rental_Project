import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import user from './user.png'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import './navbar.css'

function Head() {
  const location = useLocation();
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={user} style={{width:"30px"}} />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/Ownerhome' className={location.pathname === '/Ownerhome' ? 'active' : ''} ><li>Home</li></Link></Nav.Link>
            <Nav.Link><Link to='/Ownerstatus' className={location.pathname === '/Ownerstatus' ? 'active' : ''} ><li>View Status</li></Link></Nav.Link>
            <Nav.Link><Link to='/Ownerhistory' className={location.pathname === '/Ownerhistory' ? 'active' : ''} ><li>View History</li></Link></Nav.Link>
            <Nav.Link><Link to='/Ownerpayment' className={location.pathname === '/Ownerpayment' ? 'active' : ''} ><li>Payment</li></Link></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link><Link to='/Logout'><li>Logout</li></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Head;