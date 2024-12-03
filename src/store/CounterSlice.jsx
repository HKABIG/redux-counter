import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name: 'counter',
    initialState: {value:0},
    reducers:{
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        reset: (state)=>{
            state.value = 0;
        },
        addValue: (state, action)=>{
            state.value += action.payload;
        }
    },
});

export const {increment, decrement, reset, addValue } = CounterSlice.actions;
export default CounterSlice.reducer;