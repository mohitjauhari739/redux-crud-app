import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getPosts } from "./redux/features/showSlice";

export default function Show(){
    const state =useSelector((state)=>state?.post?.users?.list);
    console.log(state)
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])
    return(
    <div className="container-fluid">
       
   
   
    <table class="table table-dark">
  <thead>
    <tr>
      
      <th scope="col">SR NO</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {
            state?.map((item,index)=>{
return (
    <tr>
      
      <td>{index+1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.createdAt}</td>
      <td>{item.status.toString()}</td>
      
    </tr>
  
    
   
)
  }) }
        </tbody>
</table>

   </div>
    )
}