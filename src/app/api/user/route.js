import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server';


export const POST = async(request) =>{
    try{

        const body = await request.json();
        const token = body.token;
        if(token){

            const user = await jwt.verify(token, process.env.JWT_SECRET) 
            // console.log(user)
            return NextResponse.json({user, status: true})
        }else{
            return NextResponse.json({msg:"token is not provided", status: false})
        }
        // console.log(token)
        // console.log(body)  
    }catch(e){
        console.log(e)
        NextResponse.json({msg:"", status: false})
    }
    


}