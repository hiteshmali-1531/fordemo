import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Faculty from "@/models/Faculty";
import ConnectDb from "@/components/ConnectDb";
import CryptoJS from "crypto-js";


export const POST = async (req) => {
    try{
    if(!mongoose.connections[0].readyState){
        await ConnectDb();
    }
    const body = await req.json();
    body.password = CryptoJS.AES.encrypt(body.password,process.env.SECRET_KEY).toString() 
    console.log(body);
    const res = await Faculty.create(body);
    return NextResponse.json(res);
    }catch(err){
        console.log(err);
        return NextResponse.json({ message: "Some Error Occured" });
    }
}

