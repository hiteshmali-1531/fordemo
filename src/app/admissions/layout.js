import { Stepper,Step, StepLabel, Box } from "@mui/material"
import Link from "next/link"

const layout = ({children}) => {
    const steps = ["personal detail", "course", "qualification","document","preview", "fee payment"]
  return (
    <> 
    <Box  sx={{ width: '100%',height:'40vh' }}   alignItems={"center"} alignContent={"center"}>
      <Stepper activeStep={5} alternativeLabel>
        {steps.map((label) => (
            
          <Step key={label}>
            <Link href={`/admissions/${label=="personal detail"?"": label}`}>
            <StepLabel>{label}</StepLabel>
            </Link>
          </Step>
        
        ))}
      </Stepper>
    </Box>
        <main>{children}</main>
        <div className="button w-[90vw] mx-auto flex justify-between my-4">
            <button className=" flex  mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>
            <button className=" flex  mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>
        </div>
    </>
  )
}

export default layout
