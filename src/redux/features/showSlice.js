import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

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
    },
    
}));
export default showSlice.reducer