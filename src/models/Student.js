import mongoose from "mongoose";



const studentSchema = new mongoose.Schema({
    studentId:{
        type:String,
        required: true,
        unique: [true, "same student id"]
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
        unique: true
    },
    gender:{
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
    branch:{
        type:String,
        required: true
    },
    profile_pic:{
        type:String,
        required: true
    },
  

},{timestamps:true})



// mongoose.models = {};

// export default mongoose.model("Student", studentSchema); 


export default mongoose.models.Student || mongoose.model("Student", studentSchema);

