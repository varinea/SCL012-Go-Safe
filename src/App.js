import React, { Fragment } from 'react';
import './App.css';
import CreateRoute from './components/CreateRoute'
import {DisplayMapClass} from './components/DisplayMapClass';
//import {DisplayMapClass} from './components/DisplayMapClass';
//import CreateRoute from './components/CreateRoute';
//import Button from './components/button';
//import Home from  './templates/home';
//import Form from './components/Form';
//import SignUp from './views/signUp'
//import SignUp from './templates/signUp'
//import SignIn from '../src/templates/signIn';
//import SignUp from './templates/signUp';
//import MyRoutes from './templates/myRoutes';
//import HomeRoutes from './templates/homeRoutes'
 //import Login from './templates/login';

/*import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
*/

function App() {
  return (
    <Fragment>
      <CreateRoute />
      <DisplayMapClass />
    
    </Fragment> 
  
  );
  }
  
  export default App;


   {/*class App extends Component {
    render() {
      return (
        <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Home">
              </Route>
            </Switch>
            <SignIn />
        </Router>
      );
    }
  }
  
  export default App;
*/}