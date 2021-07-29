import React from "react";


function StepUsername(props) {
    const {onNext}=props
    return (
          <>
              <h1>this is username page</h1>
              <button onClick={onNext}>Next</button>
              
          </>
    );
}


export default StepUsername;