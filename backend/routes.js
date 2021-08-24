const express=require('express')
const router=express.Router();

const authController=require('./controllers/auth-controller')

router.get('/',(req,res)=>{
    return res.send('hello server')
})
router.post('/api/send-otp',authController.sendOtp);
router.post('/api/verify-otp',authController.verifyOtp);


module.exports=router;