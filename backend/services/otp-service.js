const crypto = require('crypto');
const hashService=require('./hash-service')

let smsSid=process.env.SMS_SID;
let smsAuthToken=process.env.SMS_AUTH_TOKEN;
const twilio=require('twilio')(smsSid,smsAuthToken,{
    lazyLoading: true, //this is for optimisation
    // region: 'jp1',
    // edge: 'tokyo',
    logLevel: 'debug'
});

class OtpService{
    async generateOtp(){
            let otp=crypto.randomInt(1000,9999);
            return otp;
    }

    async sendBySms(phone,otp){
            return await twilio.messages.create({
                to:phone,
                from:process.env.SMS_FROM_NUMBER,
                body:`Your WebRTC OTP is ${otp}`

            })
    }

    
    verifyOtp(hashedOtp,data){
        let completedHash=hashService.hashOtp(data)
        //this return true if match or false if not
        return completedHash===hashedOtp;
        // if(completedHash===hashedOtp){
        //     return true;
        // }
        // return false;
    }

}


module.exports=new OtpService();