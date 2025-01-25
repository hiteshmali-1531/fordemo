import { NextResponse } from "next/server"
import CryptoJS from "crypto-js";
import Signup from "@/models/Signup";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import ConnectDb from "@/components/ConnectDb";

export const POST = async (req) => {//req is the request object
    
    try {
        if(!mongoose.connections[0].readyState){
            await ConnectDb();
        }
        const body = await req.json(); // get the request body

        const user = await Signup.findOne({user_name:body.user_name}); // find the user by username form the database
        if(user){
            const pass = body.password;// get the password from the request body
           

            const bytes = CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);// decrypt the password
            const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);// convert the decrypted password to string
     
            if(pass == decryptedPassword){// check if the password is correct
                let token = jwt.sign({user: user.user_name, email:user.email},process.env.JWT_SECRET);

                return NextResponse.json({msg:"Login sucsess::::", status: true,token});// return the response
            }
            else {
                return NextResponse.json({msg: "Password is incorrect", status: false});//password is incorrect then return the response
            }
        }else{
            return NextResponse.json({msg: "user doesn't exists", status: false})
        }



    } catch (error) {
        console.log(error)
        return NextResponse.json({msg:"invalid Request", error: "Invalid request" }, { status: 400 });// if any error occurs then return the response
    }
}