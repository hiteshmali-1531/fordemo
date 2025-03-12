import ConnectDb from "@/components/ConnectDb";

import Student from "@/models/Student";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";

export const POST = async (req) => {
    
    try{
        if(!mongoose.connections[0].readyState){
            await ConnectDb();
        }
        const body = await req.json();
        const res = new Student({
            studentId: body.studentId,
            name: body.name,
            dob: body.dob,
            email: body.email,
            gender:body.gender,
            phone: body.phone,
            address:body.address,
            branch: body.branch,
            profile_pic: "http://",
            password: CryptoJS.AES.encrypt(body.password,process.env.SECRET_KEY).toString()
        });
        const p = await res.save();


        return NextResponse.json({p, msg: "User Registered Successfully", status:true});
    }catch(err){
        console.log(err);
        return NextResponse.json({ msg: "Inavalid credentials!", status:false});
    }

    
}