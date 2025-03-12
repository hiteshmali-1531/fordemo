import { NextResponse } from "next/server"
import Razorpay from "razorpay"
import Admission from "@/models/Admission";
import mongoose from "mongoose";
import ConnectDb from "@/components/ConnectDb";

export const POST = async(request) =>{
    try{
        if(!mongoose.connections[0].readyState){
            await ConnectDb();
        }
        
        const body = await request.json();
        // console.log(body)
        let instance = new Razorpay({key_id: "rzp_test_i992dpzpgNA0fH",key_secret:"zx3VRz3RedCaoeOggDE7ICse"})

        const res= new Admission({
            
            name: body.personalDetails.fullName,
            dob: body.personalDetails.dob,
            email: body.personalDetails.email,
            gender: body.personalDetails.gender,
            phone: body.personalDetails.mobile,
            address: body.personalDetails.street,
            branch: body.programDetails.beBranch,
            profile_pic:'http://',
            admission_date: '22',
            religion: body.personalDetails.religion,
            category: body.personalDetails.category,
            mother_name: body.personalDetails.motherName,
            guardian_name: body.personalDetails.guardianName,
            guardian_relation: body.personalDetails.guardianRelation,
            program: body.programDetails.programType,
            matric_seat_no: body.qualificationDetails.tenthSeatNo,
            ssc_document: '',
            ssc_percentage: body.qualificationDetails.tenthMarks,
            hsc_seat_no: body.qualificationDetails.twelfthSeatNo,
            hsc_document : '',
            hsc_percentage : body.qualificationDetails.twelfthMarks,
            jee_seat_no : body.qualificationDetails.jeeRank,
            graduation_year: '',
            graduation_cpi: body.qualificationDetails.graduationMarks,
            aadhar_number : '838383833883'



        })
        const p = await res.save();
        
        console.log(p)
        
        let options = {
            amount: 5400000,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11"
        };
        let x = await instance.orders.create(options)
        x = JSON.parse(JSON.stringify(x));
        return NextResponse.json(x)
    }catch(e){
        console.log(e)
        return  NextResponse.error(e)
    }
}