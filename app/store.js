import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '@/app/features/category/categorySlice'
import priceReducer from '@/app/features/price/priceSlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    price: priceReducer,
  },
})