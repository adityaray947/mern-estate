import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique: true,
            
        },
        email:{
            type:String,
            required:true,
            unique: true,
            
        },
        password:{
            type:String,
            required:true, 
        },
        avatar:{
            type:String,
            default : "https://cdn3.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"

        },
    },
    {timestamps:true});

    const User=mongoose.model('User',userSchema);

    export default User;