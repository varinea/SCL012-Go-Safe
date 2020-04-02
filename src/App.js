import React, { Fragment } from 'react';
import './App.css';
import CreaateRoute from './components/CreateRoute'
import DisplayMapClass from './components/DisplayMap'
import ScreenCapture from './components/ScreenCapture'

/*import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
*/

function App() {
  return (
    <Fragment>
      <CreaateRoute />
      <DisplayMapClass />
      <ScreenCapture />
    
    </Fragment> 
  
  )
  }
  
  export default App;


   /*class App extends Component {
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
*/