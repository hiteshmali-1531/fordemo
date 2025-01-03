import mongoose from "mongoose";
import ConnectDb from "@/components/ConnectDb";
import { NextResponse } from "next/server";
import Admission from "@/models/Admission";

export const POST = async (req) =>{
    try{
        if(!mongoose.connections[0].readyState){
            await ConnectDb();
        }
        const body = await req.json();
        const res = await Admission.create(body);   
        console.log(res);
        return NextResponse.json({res, msg:true});
    }catch(err){
        console.log(err);
        return NextResponse.json({ message: "Some Error Occured" });
    }
}