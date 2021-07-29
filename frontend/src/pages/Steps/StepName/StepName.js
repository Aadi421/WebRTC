import React from "react";


function StepName(props) {
    const {onNext}=props
    return (
          <>
              <h1>this is name page</h1>
              <button onClick={onNext}>Next</button>
              
          </>
    );
}


export default StepName;