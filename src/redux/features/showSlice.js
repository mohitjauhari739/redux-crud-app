import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
 import axios from "axios";



//Create Api
export const createUser = createAsyncThunk(
    "createUser",
    async (data) => {
      console.log("data", data);
      const response = await axios.post(`https://openuserapi.onrender.com/admin/create-user`,data.id)
   console.log(response)
      return response;
    

    }
  );
//get single user
export const singleUser = createAsyncThunk(
  "singleUser",
  async (id) => {
   // console.log("data", data);
    const response = await axios.get(`https://openuserapi.onrender.com/admin/user/${id}`)
    return response;
  }
);
//update Api
export const UpdateUser = createAsyncThunk(
  "UpdateUser",
  async (data) => {
   console.log( data);
    const response = await axios.put(`https://openuserapi.onrender.com/admin/update-user`,data)
 //console.log(id)
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
          [singleUser.pending]: (state) => {
            state.loading = true;
          },
     [singleUser.fulfilled]: (state, action) => {
       state.loading = false;
       state.posts=action.payload;
          },
          [singleUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message;
          },
          [UpdateUser.pending]: (state) => {
            state.loading = true;
          },
     [UpdateUser.fulfilled]: (state, action) => {
       state.loading = false;
       state.posts=action.payload;
       console.log(state.posts);
          },
          [UpdateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message;
          },
    },
    
}));
export default showSlice.reducer