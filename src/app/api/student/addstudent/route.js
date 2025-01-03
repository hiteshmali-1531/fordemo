import { NextResponse } from "next/server"
import mongoose from "mongoose";
import Student from "@/models/Student";
import ConnectDb from "@/components/ConnectDb";
export const POST = async(req) =>{
    // console.log("Hello World");
    try{
        if(!mongoose.connections[0].readyState){
            await ConnectDb();
            console.log("connected");
        }
        let body = await req.json();
        // console.log("object")
    const res = await Student.create(body);//15325632+2161
    console.log(res);
    // console.log(body);
    return NextResponse.json(res)
    }catch(err){
        // console.log("some error")
        console.log(err)
        return NextResponse.json({err, bool : false})
    }
}
