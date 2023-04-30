import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Ownerapp from './Ownerapp';
import Adminapp from './Adminapp';
import Signup from './Signup';
import Log1 from './Log1'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Ownerapp/> */}
    {/* <Adminapp/> */}
    {/* <Signup/> */}
    {/* <Log1/> */}
    
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
