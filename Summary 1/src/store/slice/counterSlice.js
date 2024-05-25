import { createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : 0
    },
    reducers: {
       increment : (state , { payload = 1 }) => {
           state.value += payload;
       },
       decrement : (state , action) => {
        //    console.log(payload)
           state.value -= 1;
       }
    }
})

export const { increment , decrement } = counterSlice.actions;


export default counterSlice.reducer