import React from "react"; 
import cardStyles from './Card.module.css'

const Card=(props)=>{
    const {title,icon,children}=props
    return(
        
        <div className={cardStyles.card}>
            <div className={cardStyles.headingWrapper}>
                <img src={`/images/${icon}.png`} alt="logo" />
                <h1 className={cardStyles.heading}>{title}</h1>
            </div> 
            {children}                  
        </div>
        
    );
}

export default Card;