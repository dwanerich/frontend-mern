import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

// log in variable created
export const login = createAsyncThunk("auth/login",
  async({ formValue, navigate, toast }, {rejectWithValue}) => {
  try {
    const response = await api.signIn(formValue);
    toast.success("Login Succesfully");
    navigate("/")
    return response.data;
  } catch (err) {
    // console.log(err)
      return rejectWithValue(err.response.data)
  }
})

export const register = createAsyncThunk("auth/register",
  async({ formValue, navigate, toast }, {rejectWithValue}) => {
  try {
    const response = await api.signUp(formValue);
    toast.success("Registered Succesfully");
    navigate("/")
    return response.data;
  } catch (err) {
    // console.log(err)
      return rejectWithValue(err.response.data)
  }
})

export const googleSignIn = createAsyncThunk("auth/googleSignIn",
  async({ result, navigate, toast }, {rejectWithValue}) => {
  try {
    const response = await api.googleSignIn(result);
    toast.success("Google Sign in Succesful");
    navigate("/")
    return response.data;
  } catch (err) {
    // console.log(err)
      return rejectWithValue(err.response.data)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: '',
    loading: false
  },
  reducers: {
    setUser: ( state, action) => {
      state.user= action.payload;
    },
    setLogout: ( state, action) => {
      state.user = null;
    }
  },


  extraReducers: {
    [login.pending]: ( state, action) => {
      state.loading = true
    },
    [login.fulfilled]: ( state, action) => {
      state.loading = false
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
      state.user = action.payload
    },
    [login.rejected]: ( state, action) => {
      state.loading = false
      state.error = action.payload.message
    },

    [register.pending]: ( state, action) => {
      state.loading = true
    },
    [register.fulfilled]: ( state, action) => {
      state.loading = false
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
      state.user = action.payload
    },
    [register.rejected]: ( state, action) => {
      state.loading = false
      state.error = action.payload.message
    },

    [googleSignIn.pending]: ( state, action) => {
      state.loading = true
    },
    [googleSignIn.fulfilled]: ( state, action) => {
      state.loading = false
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
      state.user = action.payload
    },
    [googleSignIn.rejected]: ( state, action) => {
      state.loading = false
      state.error = action.payload.message
    },
  }
})

console.log(authSlice)
export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer
