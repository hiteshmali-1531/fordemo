import mongoose from "mongoose";


const signupSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required: true
    },
})

export default mongoose.models.Signup || mongoose.model("Signup", signupSchema);