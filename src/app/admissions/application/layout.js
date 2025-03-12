"use client"
import { Stepper,Step, StepLabel, Box } from "@mui/material"
import Link from "next/link"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { usePathname } from "next/navigation"

const layout = ({children}) => {

    const pathName = usePathname();
    
    
    const steps = ["personal detail", "course", "qualification","document","preview", "fee payment"]
    const step = useSelector((state) =>state.navbar.step);
    console.log(step)
   
  return (
    <> 
    {!pathName.includes("document/preview")&&
    <Box  sx={{ width: '100%',height:'40vh' }}   alignItems={"center"} alignContent={"center"}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
            
          <Step key={label}>
            <Link href={`/admissions/application/${label=="personal detail"?"": label}`}>
            <StepLabel>{label}</StepLabel>
            </Link>
          </Step>
        
        ))}
      </Stepper>
    </Box>}
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
            
    </>
  )
}

export default layout
