import React from "react"; 
import Styles from './TextInput.module.css'

const TextInput=(props)=>{
    // const {title,icon,children}=props
    return(
        
        <div >
                <input className={Styles.input} type="text" {...props}/>              
        </div>
        
    );
}

export default TextInput;