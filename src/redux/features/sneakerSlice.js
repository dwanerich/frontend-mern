import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

// log in variable created
export const createSneaker = createAsyncThunk(
  "sneakers/createSneaker",
  async({ updatedSneakerData, navigate, toast }, {rejectWithValue}) => {
  try {
    const response = await api.createSneaker(updatedSneakerData);
    toast.success("Sneaker Added Succesfully");
    navigate("/")
    return response.data;
  } catch (err) {
    // console.log(err)
      return rejectWithValue(err.response.data)
  }
})

const sneakerSlice = createSlice({
  name: "sneaker",
  initialState: {
    sneaker: {},
    sneakers: [],
    userSneakers: [],
    error: '',
    loading: false
  },

  extraReducers: {
    [createSneaker.pending]: ( state, action) => {
      state.loading = true
    },
    [createSneaker.fulfilled]: ( state, action) => {
      state.loading = false
      state.sneakers = [action.payload];
    },
    [createSneaker.rejected]: ( state, action) => {
      state.loading = false
      state.error = action.payload.message
    },
  }
})

console.log(sneakerSlice)

export default sneakerSlice.reducer
