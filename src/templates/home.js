import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import SignUp from './signUp'
import SignIn from './signIn';
import logoApp from  './pictures/logoApp.png';
//import Button from '../components/button';
import './home.css'


const Home = () => {
  return (
  <Router>
  <div className="homeContent">
    <img src={logoApp} alt="logo" className="logo"></img>
    <div className="homeTittle">
    <p> <Link to="/singin">INICIAR SESION</Link></p>
    <p> <Link to="/singup">REGISTRATE</Link></p>
    </div>
  </div>

  <Switch>
      <Route path="/singup">
        <SignUp />
      </Route>
      <Route path="/singin">
        <SignIn />
      </Route>
      <Route path="/">

      </Route>
    </Switch>
  </Router>
  );
};

export default Home;