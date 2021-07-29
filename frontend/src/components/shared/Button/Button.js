import React from "react"; 
import buttonStyles from './Button.module.css'

const Button=(props)=>{
    const {text,icon,onClick}=props
    return(
        <button className={buttonStyles.button} onClick={onClick}>
            <span>{text}</span>
            <img className={buttonStyles.arrow} src={`/images/${icon}.png`} alt="arrow" />
        </button>
        
    );
}

export default Button;