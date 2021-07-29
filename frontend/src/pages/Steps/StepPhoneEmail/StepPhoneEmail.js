import React from "react";


function StepPhoneEmail(props) {
    const {onNext}=props
  return (
        <>
            <h1>this is Phone or Email page</h1>
            <button onClick={onNext}>Next</button>
            
        </>
  );
}


export default StepPhoneEmail;