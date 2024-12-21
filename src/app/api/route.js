import { NextResponse } from "next/server"

export  async function GET(){
    return NextResponse.json({ans:"true", bool : false})
}