import React from "react";


function StepOtp(props) {
    const {onNext}=props
    return (
          <>
              <h1>this is otp page</h1>
              <button onClick={onNext}>Next</button>
              
          </>
    );
}


export default StepOtp;