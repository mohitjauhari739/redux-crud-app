import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
 import axios from "axios";



//Create Api
export const createUser = createAsyncThunk(
    "createUser",
    async (data) => {
      console.log("data", data);
      const response = await axios.post(`https://openuserapi.onrender.com/admin/create-user`,data)
   console.log(response)
      return response;
    

    }
  );

//show Api
export const getPosts=  createAsyncThunk ("post/getPosts", async ()=>{
return fetch("https://openuserapi.onrender.com/admin/users").then((res)=>
res.json()
);
});


const showSlice = createSlice(({
    name:"posts",
    initialState:{
        posts:[],
        loading:false
    },
    extraReducers: {
        [getPosts.pending]:(state,action)=>{
            state.loading=true;
        },
        [getPosts.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },
        [getPosts.rejected]:(state,action)=>{
            state.loading=false;
        },
        [createUser.pending]: (state) => {
            state.loading = true;
          },
     [createUser.fulfilled]: (state, action) => {
       state.loading = false;
       state.posts=action.payload;
          },
          [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message;
          },
    },
    
}));
export default showSlice.reducer