import React, { Children, useReducer, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import Home from './pages/Home/Home'
import Navigation from './components/shared/Navigation/Navigation'
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import {useSelector} from 'react-redux'


// const isAuth=false;
// const user={
//   activated:true
// }

function App() {
  return (
    <Router>

        <Navigation/>

        <Switch>
          <GuestRoute path="/" exact>
            <Home />
          </GuestRoute>
          {/* we are using this for applying check or auth on route */}
          {/* this is our guest route !login and !activated */}
          <GuestRoute path="/authenticate">
            <Authenticate />
          </GuestRoute>
          {/* this is our semiprotected route means till user not activated
              and user redirect at activated page where for activation user 
              need to add  profile picture and last is otp varification 
          */}
          <SemiProtectedRoute path="/activate">
            <Activate/>
          </SemiProtectedRoute>
          {/* this is our protecte route user is login and activated too.
              then user redirect at rooms page 
          */}
          <ProtectedRoute path="/rooms">
            <Rooms/>
          </ProtectedRoute>

        </Switch>
      
    </Router>
  );
}

const GuestRoute=({children,...rest})=>{
  //advantage of this we can apply check or auth here that user is logged in or not

  const {isAuth}=useSelector((state)=>state.auth);

  return(
    <Route {...rest}
            render={({location})=>{
              return isAuth?
                    <Redirect to={
                      {
                        pathname:'/rooms',
                        state:{from:location}

                      }

                    }/>
                    :children
            }}>
    
  </Route>
  )

}

const SemiProtectedRoute=({children,...rest})=>{
  const {user,isAuth}=useSelector((state)=>state.auth);

  return(
      <Route {...rest}
          render={({location})=>{
            return !isAuth?
                  <Redirect to={
                    {
                      pathname:'/',
                      state:{from:location}

                    }

                  }/>
                  :isAuth && !user.activated?
                    (children):(<Redirect to={
                                {
                                  pathname:'/rooms',
                                  state:{from:location}
            
                                }
            
                              }/>)
      }}>
      

      </Route>
  )
}
const ProtectedRoute=({children,...rest})=>{
  const {user,isAuth}=useSelector((state)=>state.auth);

  return(
      <Route {...rest}
          render={({location})=>{
            return !isAuth?
                  <Redirect to={
                    {
                      pathname:'/',
                      state:{from:location}

                    }

                  }/>
                  :isAuth && !user.activated?(
                        <Redirect to={
                          {
                            pathname:'/activate',
                            state:{from:location}
      
                          }
      
                        }/>
                        ):(
                          children
                          )
      }}>
      

      </Route>
  )
}


export default App;
