import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './features/authSlice'
import SneakerReducer from './features/sneakerSlice'


export default configureStore({
  reducer: {
    auth: AuthReducer,
    sneaker: SneakerReducer
  }
})
