import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import SignUp from './signUp'
import SignIn from './signIn';
import logoApp from  './pictures/logoApp.png';
//import Button from '../components/button';
import './home.css'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Home = () => {
  return (
  <Router>
  <div className="homeContent">
    <img src={logoApp} alt="logo" className="logo"></img>
    <div className="homeTittle">
    <Breadcrumb>
    <BreadcrumbItem><a href="/singin">INICIAR SESION</a></BreadcrumbItem>
    <BreadcrumbItem><a href="/singup">REGISTRATE</a></BreadcrumbItem>
    </Breadcrumb>
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