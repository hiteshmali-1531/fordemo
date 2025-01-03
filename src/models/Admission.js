import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
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
    admission_date:{
        type:String,
        required: true
    },
    religion:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    mother_name:{
        type:String,
        required: true
    },
    guardian_name:{
        type:String,
        required: true
    },
    guardian_relation:{
        type:String,
        required: true
    },
    program:{
        type:String,
        required: true
    },
    matric_seat_no:{
        type:String
    },
    ssc_document:{
        type:String,
      
    },
    ssc_percentage:{
        type:Number,
       
    },
    hsc_seat_no:{
        type:String,
      
    },
    hsc_document:{
        type:String,
     
    },
    hsc_percentage:{
        type:Number,
      
    },
    jee_seat_no:{
        type:String,
        
    },
    jee_rank:{
        type:Number,

    },
    graduation_year:{
     type:Number,
  
    },
    graduation_university:{
        type:String,
        
    },
    graduation_cpi:{
        type:Number,
       
    },
    aadhar_number:{
        type:Number,
        required:true
    }
    
    
    
},{timestamps:true});


export default mongoose.models.Admission || mongoose.model("Admission", admissionSchema);