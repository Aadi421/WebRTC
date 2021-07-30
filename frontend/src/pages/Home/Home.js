import React from "react"; 
import homeStyles from './Home.module.css'
import {Link,useHistory}  from 'react-router-dom';
import Card  from '../../components/shared/Card/Card'
import Button from "../../components/shared/Button/Button";


function Home(){
    const history=useHistory();
    function startRegister(){
        history.push('/authenticate')
    }
    return(
            <div  className={homeStyles.cardWrapper}>
                <Card
                    title="Welcome to WebRTC!" 
                    icon="logo"
                >
                    <p className={homeStyles.text}>
                        This is WebRTC web app using this u can make audio chat easily with
                        your connection on that  WebRTC platform.
                    </p>
                    <div>
                        <Button
                                text="Let's Go"
                                icon="arrow-forward"
                                onClick={startRegister}
                        />
                    </div>
                    <div className={homeStyles.signinWrapper}>
                        <span className={homeStyles.hasInvite}>Have an invite text?</span>
                        
                    </div>
                    
                </Card>
            </div>
    );
}

const styles={
    loginLink:{
        color:"#0077ff",
        fontWeight:'bold',
        textDecoderation:'none',
        marginLeft:'10px'
    }
}
export default Home;