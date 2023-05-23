import { configureStore} from '@reduxjs/toolkit';
import PostReducer from "./features/showSlice"

export default configureStore({
   reducer:{
       post:PostReducer

   }
})