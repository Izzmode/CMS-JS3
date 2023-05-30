import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/products/productSlice'
import authSlice from './features/auth/authSlice'
import orderSlice from './features/orders/orderSlice'

export const store = configureStore({
    reducer: {
      products: productSlice,
      auth: authSlice,
      orders: orderSlice
    }
  })
  