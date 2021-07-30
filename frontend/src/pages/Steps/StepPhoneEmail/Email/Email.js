import React,{useState} from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import Styles from '../StepPhoneEmail.module.css'


function Email(props) {
    const {onNext}=props
    const [email, setEmail]=useState('');
    return (
          <>
              <Card
                    title="Enter your email id" 
                    icon="email-emoji"
                >
                    <TextInput 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
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
                                By entering your Email, you're agreeing to Terms of Services 
                                and Privacy Policy.Thanks!
                            </p>
                    </div>
                    
                </Card>
              
          </>
    );
}


export default Email;