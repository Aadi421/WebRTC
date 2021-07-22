import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home'
import Navigation from './components/shared/Navigation/Navigation'



function App() {
  return (
    <Router>

        <Navigation/>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          
          
        </Switch>
      
    </Router>
  );
}


export default App;
