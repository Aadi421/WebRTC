import React from "react";


function StepAvatar(props) {
    const {onNext}=props
    return (
          <>
              <h1>this is avatar page</h1>
              <button onClick={onNext}>Next</button>
              
          </>
    );
}


export default StepAvatar;
