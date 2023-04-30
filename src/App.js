import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userhome from './usercomponents/Userhome';
import Userstatus from './usercomponents/Userstatus'; 
import Userhistory from './usercomponents/Userhistory';

import './App.css'
import Car1 from './usercomponents/car1';
import Ownerhistory from './ownercomponents/Ownerhistory';
import Ownerpayment from './ownercomponents/Ownerpayment';
import Ownerstatus from './ownercomponents/Ownerstatus';
import Ownnersinglecar from './ownercomponents/Ownersinglecar';
import Ownnersinglecar2 from './ownercomponents/Ownersiglecar2';
import Ownnersinglecar3 from './ownercomponents/Ownersinglecar3';
import Ownnersinglecar4 from './ownercomponents/Ownersinglecar4';
import Ownerhome from './ownercomponents/Ownerhome';
import Head from './ownercomponents/Navbar';

import Admin1 from './admincomponents/Admin1';
import Admin2 from './admincomponents/Admin2';
import Owners from './admincomponents/Owners';
import Status from './admincomponents/Status';
import ManageUsers from './admincomponents/ManageUsers';
import ManageOwners from './admincomponents/ManageOwners';
import Signup from './Signup';
import Log1 from './Log1';
// import './Ownerapp.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Userhome' element={<Userhome/>}/>
      
      <Route path='/Userhistory' element={<Userhistory/>}/>
      
      <Route path='/Userstatus' element={<Userstatus/>}/>
      <Route path='/car1' element={<Car1/>}/>
      <Route path='/Ownerhome' element={<Ownerhome/>}/>
        
        <Route path='/Ownerhistory' element={<Ownerhistory/>}/>
        <Route path='/Ownerpayment' element={<Ownerpayment/>}/>
        <Route path='/Ownersinglecar' element={<Ownnersinglecar/>}/>
        <Route path='/Ownersinglecar2' element={<Ownnersinglecar2/>}/>
        <Route path='/Ownersinglecar3' element={<Ownnersinglecar3/>}/>
        <Route path='/Ownersinglecar4' element={<Ownnersinglecar4/>}/>
        <Route path='/Ownerstatus' element={<Ownerstatus/>}/>

       
      <Route path='/Admin1' element={<Admin1/>}/>
      <Route path='/Admin2' element={<Admin2/>}/> 
      <Route path='/Owners' element={<Owners/>}/>
      <Route path='/Status' element={<Status/>}/>
      <Route path='/ManageUsers' element={<ManageUsers/>}/>
      <Route path='/ManageOwners' element={<ManageOwners/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/' element={<Log1/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
