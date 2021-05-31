import { createSlice } from "@reduxjs/toolkit";

const service = () => {
   if (localStorage.getItem("count")) {
      return localStorage.getItem("count");
   } else {
      localStorage.setItem("count", 0);
      return 0;
   }
};

export const counterSlice = createSlice({
   name: "counter",
   initialState: {
      value: service(),
   },
   reducers: {
      increment: (state) => {
         state.value += 1;
         localStorage.removeItem("count");
         localStorage.setItem("count", state.value);
      },
      decrement: (state) => {
         state.value -= 1;
         localStorage.removeItem("count");
         localStorage.setItem("count", state.value);
      },
      incrementByAmount: (state, action) => {
         state.value += action.payload;
         localStorage.removeItem("count");
         localStorage.setItem("count", state.value);
      },
   },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
