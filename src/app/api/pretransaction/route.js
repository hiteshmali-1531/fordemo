import { NextResponse } from "next/server"
import Razorpay from "razorpay"

export const POST = async(request) =>{
    try{
        let instance = new Razorpay({key_id: "rzp_test_i992dpzpgNA0fH",key_secret:"zx3VRz3RedCaoeOggDE7ICse"})
        let options = {
            amount: 100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11"
        };
        let x = await instance.orders.create(options)
        x = JSON.parse(JSON.stringify(x));
        return NextResponse.json(x)
    }catch(e){
        return  NextResponse.error(e)
    }
}