import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  products: [],
  error: null,
  loading: false
}

export const getAllProducts = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
  try {

    return await productService.getAllAsync()
    
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

  export const registerProduct = createAsyncThunk('products/register', async (formData, thunkAPI) => {
    try {
      return await productService.register(formData)
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  })

  export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id, thunkAPI) => {
    try {
      return await productService.deleteProduct(id)
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  })

  export const updateProduct = createAsyncThunk('products/updateProduct', async (id, formData, thunkAPI) => {
    try {
      return await productService.updateProduct(id, formData)
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  })

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, state => {
        state.loading = true
    })
    .addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = null
    })
    .addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.payload
    })
    .addCase(registerProduct.pending, state => {
      state.loading = true
    })
    .addCase(registerProduct.fulfilled, (state, action) => {
      state.products =  [...state.products, action.payload]
      state.loading = false
      state.error = null
    })
    .addCase(registerProduct.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    .addCase(deleteProduct.pending, state => {
      state.loading = true
    })
    .addCase(deleteProduct.fulfilled, (state, action) => {
      state.products =  [...state.products, action.payload]
      state.loading = false
      state.error = null
    })
    .addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    .addCase(updateProduct.pending, state => {
      state.loading = true
    })
    .addCase(updateProduct.fulfilled, (state, action) => {
      state.products =  [...state.products, action.payload]
      state.loading = false
      state.error = null
    })
    .addCase(updateProduct.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
}
})

export default productSlice.reducer

 
