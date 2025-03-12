import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export const POST = async(request) =>{
    return NextResponse.redirect("http://localhost:3000?admission=sucess");
    // console.log(request)
    // let body = await request.json();
    // // console.log(body)


    // body = JSON.parse(JSON.stringify(body))

    // let xx = validatePaymentVerification({"order_id": body.razorpay_order_id,"payment_id":body.razorpay_payment_id }, body.razorpay_signature, "rzp_test_i992dpzpgNA0fH");
    // console.log(xx)

}