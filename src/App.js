import React, { Fragment } from 'react';
import './App.css';
import CreaateRoute from './components/CreateRoute';
import {DisplayMapClass} from "./components/DisplayMapClass";
//import {DisplayMapFC} from "./components/DisplayMapFC";

// DENTRO DE FRAGMENT 
const App = () => {

  return (
    <Fragment>
      <DisplayMapClass />
      <CreaateRoute />
      
    
    </Fragment> 
   );
}

export default App;