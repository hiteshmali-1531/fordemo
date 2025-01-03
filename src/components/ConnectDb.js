import mongoose from "mongoose"
import { NextResponse } from "next/server";

const ConnectDb = async () => {
    try {
        
        const conn = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
        // console.log("processed")
        return conn;

    } catch (error) {
        console.log("Error in connecting to database", error);
        // return NextResponse.json({msg:"not connected"});
        process.exit(1);
    }
}

export default ConnectDb
