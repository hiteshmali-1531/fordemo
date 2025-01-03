import mongoose from "mongoose";

const faccultySchema = new mongoose.Schema({
    facultyId:{
        type:String,
        required: true,
        unique: [true, "same faculty id"]
    },
    name:{
        type:String,
        required: true
    },
    dob:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: [true, "Email is already in use!"]
    },
    gender:{
        type:String,
        required: true
    },
    department:{
        type:String,
        required: true
    },
    phone:{
        type:Number,
        required: true,
        unique:[true, "Mobile Number is already in use!"],
        maxlength :[10, 'Phone number must be 10 digits']
    },
    address:{
        type:String,
        required: true
    },
    profile_pic:{
        type:String,
        required: true
    }

},{timestamps:true})

export default mongoose.models.Faculty || mongoose.model("Faculty", faccultySchema);