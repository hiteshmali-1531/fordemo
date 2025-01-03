import { NextResponse } from "next/server"

import connectDb from "@/components/ConnectDb";

import mongoose from "mongoose";

export  async function GET(){
    await connectDb();
    if(mongoose.connections[0].readyState){

        return NextResponse.json({ans:"connected", bool : false})
    }

   
   
    return NextResponse.json({ans:"not Connected", bool : false})
    
    
}



