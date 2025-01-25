"use client"
import { Stepper,Step, StepLabel, Box } from "@mui/material"
import Link from "next/link"
import React, { useState } from "react"
import { useSelector } from "react-redux"

const layout = ({children}) => {

    
    
    const steps = ["personal detail", "course", "qualification","document","preview", "fee payment"]
    const step = useSelector((state) =>state.navbar.step);
    console.log(step)
   
  return (
    <> 
    <Box  sx={{ width: '100%',height:'40vh' }}   alignItems={"center"} alignContent={"center"}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
            
          <Step key={label}>
            <Link href={`/admissions/${label=="personal detail"?"": label}`}>
            <StepLabel>{label}</StepLabel>
            </Link>
          </Step>
        
        ))}
      </Stepper>
    </Box>
        <main>
          {/* {React.cloneElement(children, {
            step:{step},
            setStep:{setStep}
          })} */}
          {/* {
            childrenWithTabs
          } */}
          {children}
        </main>
        <div className="button w-[90vw] mx-auto flex justify-between my-4">
            <button className=" flex  mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>
            <button className=" flex  mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>
        </div>
    </>
  )
}

export default layout
