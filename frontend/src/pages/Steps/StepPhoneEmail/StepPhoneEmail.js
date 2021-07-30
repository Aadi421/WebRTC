import React, {useState} from "react";
import Phone from './Phone/Phone'
import Email from './Email/Email'
import Styles from './StepPhoneEmail.module.css'

const PhoneEmailMap={
  phone:Phone,
  email:Email
}


function StepPhoneEmail(props) {
  const {onNext} =props
  const [type,setType]=useState('phone');
  const Component=PhoneEmailMap[type];
  
    
  return (
        <>
          <div className={Styles.cardWrapper}>
            <div>
                <div className={Styles.buttonWrapp}>
                    <button className={`${Styles.tabButton} ${type==='phone'?Styles.active:''}`} onClick={()=>setType('phone')}>
                        <img src="/images/phone-white.png" alt="phone" />
                    </button>
                    <button className={`${Styles.tabButton} ${type==='email'?Styles.active:''}`} onClick={()=>setType('email')}>
                        <img src="/images/mail-white.png" alt="phone" /> 
                    </button>
                </div> 
                <Component onNext={onNext}/>
            </div>
          </div>


            
            
            
        </>
  );
}


export default StepPhoneEmail;