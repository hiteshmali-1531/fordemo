import ConnectDb from "@/components/ConnectDb";
import Result from "@/models/Result";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        if (!mongoose.connections[0].readyState) {
            await ConnectDb();
        }
        const body = await req.json();
        const res = await Result.create(body);
        console.log(res);
        return NextResponse.json({res, msg:true});
    } catch (err) {
        return NextResponse.json({ message: err.message });
    }
}