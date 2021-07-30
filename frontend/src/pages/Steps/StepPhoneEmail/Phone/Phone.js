import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import Styles from '../StepPhoneEmail.module.css'

function Phone(props) {
    const {onNext}=props
    const [phoneNumber, setPhoneNumber]=useState('');
    return (
          <>
              <Card
                    title="Enter tour phone number" 
                    icon="phone"
                >   
                    <TextInput 
                        value={phoneNumber} 
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                    />
                    <div>
                        <div className={Styles.actionButtonWrap}>
                            <Button
                                    text="Next"
                                    icon="arrow-forward"
                                    onClick={onNext}
                            />
                        </div>
                        <p className={Styles.bottomParagraph}>
                            By entering your phone number ,you're agreeing to Terms of Services 
                            and Privacy Policy.Thanks!
                        </p>
                    </div>
                    
                </Card>
          </>
    );
}


export default Phone;