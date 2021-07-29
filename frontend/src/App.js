import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from "./pages/Login/Login";
import Navigation from './components/shared/Navigation/Navigation'



function App() {
  return (
    <Router>

        <Navigation/>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          
        </Switch>
      
    </Router>
  );
}


export default App;
