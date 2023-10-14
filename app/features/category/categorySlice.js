import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategoryFilter: (state,action) => {
      
      if(!state.includes(action.payload)) {
        state.push(action.payload);
      }else {
        let index = state.indexOf(action.payload);
        state.splice(index, 1); //remove item
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCategoryFilter } = categorySlice.actions

export default categorySlice.reducer