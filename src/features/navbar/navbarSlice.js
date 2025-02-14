
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : "",
    user :"",
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
        },
        setUser: (state, action) =>{
            state.user = action.payload
        }
    }
})

export const {setToken,setStep,setUser} = navbarSlice.actions;

export default navbarSlice.reducer;