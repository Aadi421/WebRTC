import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";
import TextInput from "../../../components/shared/TextInput/TextInput";
import Styles from './StepOtp.module.css'
import { verifyOtp } from "../../../http";
import {useSelector,useDispatch} from 'react-redux'
import { setAuth } from "../../../store/authSlice";


function StepOtp(props) {
    const [otp, setOtp]=useState('');
    const {onNext}=props

    const {phone,hash}=useSelector((state)=>state.auth.otp)

    const dishpatch=useDispatch();
    async function submit(){
        try{
            const {data}=await verifyOtp({otp,phone,hash})
            console.log(data)
            dishpatch(setAuth(data));
            
        }catch(err){
            console.log(err)
        }

        
    }
    return (
          <>
            <div className={Styles.cardWrapper}>
              <Card
                    title="Enter the code we just send you" 
                    icon="lock-emoji"
                >   
                    <TextInput 
                        value={otp} 
                        onChange={(e)=>setOtp(e.target.value)}
                    />
                    <div>
                        <div className={Styles.actionButtonWrap}>
                            <Button
                                    text="Next"
                                    icon="arrow-forward"
                                    onClick={submit}

                            />
                        </div>
                        <p className={Styles.bottomParagraph}>
                            By entering otp ,you're agreeing to Terms of Services 
                            and Privacy Policy.Thanks!
                        </p>
                    </div>
                    
                </Card>
            </div>
              
          </>
    );
}


export default StepOtp;