import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    studentId:{
        type:String,
        required: true
    },
    course_id:{
        type:String,
        required: true
    },
    attendance_date:{
        type:String,
        required: true
    },
    status:{
        type:String,
        required: true,
        default: "Absent"
    },
    division:{
        type:String,
        required: true
    }

},{timestamps:true});

export default mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema);