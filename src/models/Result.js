import mongoose from "mongoose";


const resultSchema = new mongoose.Schema({
    StudentId:{
        type:String,
        
        required: true
    },
    course_id:{
        type:String,
        required: true
    },
    branch:{
        type:String,
        required: true
    },
    division:{
        type:String,
        required: true
    },
    subject:{
        type:String,
        required: true
    },
    spi:{
        type:Number,
        required: true
    },
    cpi:{
        type:Number,
        required: true
    },
    grade:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    semester:{
        type:Number,
        required: true
    },
    passing_year:{
        type:Number,
        required: true
    }
},{timestamps:true});

export default mongoose.models.Result || mongoose.model("Result", resultSchema);