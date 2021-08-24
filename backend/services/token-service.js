const jwt=require("jsonwebtoken");
const accessTokenSecret=process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret=process.env.JWT_REFRESH_TOKEN_SECRET;

class TokenService{
     generateTokens(payload){// payload contain user data that we are going to pass in token
        const accessToken=jwt.sign(payload,accessTokenSecret,{
            expiresIn:'1h',

        });
        const refreshToken=jwt.sign(payload,refreshTokenSecret,{
            expiresIn:'1y',
            
        })
        return {accessToken,refreshToken}

    }


}

module.exports=new TokenService();
