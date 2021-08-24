const mongoose=require('mongoose');
  const { Schema } = mongoose;

  const userSchema = new Schema({
        phone:{
            type:String,
            require:true
        },
        activated:{
            type:Boolean,
            required:false,
            default:false
        }
    
  },{
      timestamps:true,
  });
  const User = mongoose.model('User', userSchema);
  module.exports=User;
