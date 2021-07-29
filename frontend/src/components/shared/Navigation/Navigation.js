import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import fileStyles from './Navigation.module.css'


function Navigation() {
    
  return (
    <nav className={`${fileStyles.navbar} container`}>
        <Link to="/" style={styles.link}>
            <img src="/images/logo.png" alt="logo" title="click here to go to home apge" />
            <span style={styles.logoText}>WebRTC</span>
        </Link>
    </nav>
  );

}

const styles={
    link:{
        color:'#fff',
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'22px',
        display:'flex',
        alignItems:'center'
    },
    logoText:{
      marginLeft:'10px'
    }
}


export default Navigation;
