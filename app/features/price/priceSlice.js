import { createSlice } from '@reduxjs/toolkit'

const initialState = [1,10000];

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    priceRangeFilter: (state,action) => {
      
      state.splice(0,1,action.payload[0]);
      state.splice(1,1,action.payload[1]);
    },
  },
})

// Action creators are generated for each case reducer function
export const { priceRangeFilter } = priceSlice.actions

export default priceSlice.reducer