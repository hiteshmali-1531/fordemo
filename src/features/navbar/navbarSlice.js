
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : "",
    step: 0
}

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers:{
        setToken : (state, action)=>{
            state.token = action.payload;
        },
        setStep: (state, action) =>{
            state.step = action.payload
        }
    }
})

export const {setToken,setStep} = navbarSlice.actions;

export default navbarSlice.reducer;