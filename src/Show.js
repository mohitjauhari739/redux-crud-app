import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getPosts } from "./redux/features/showSlice";
import { Link,useNavigate } from "react-router-dom";

export default function Show(){
  const navigate=useNavigate()

    const state =useSelector((state)=>state?.post?.users?.list);
    console.log(state)
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])

    function HandleEdit(id){
      navigate('edit/'+id)
      
     }
     
    return(
    <div className="container-fluid">
       
       <Link to='Add'>
        <button>ADD</button>
       </Link>
   
   
    <table className="table table-dark">
  <thead>
    <tr>
      
      <th scope="col">SR NO</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
      <th scope="col">Edit user</th>
      <th scope="col">Change status</th>

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
      <td><button onClick={()=>{HandleEdit(item._id)}}>Edit</button></td>
      <td><button>Change Status</button></td>
      
    </tr>
  
    
   
)
  }) }
        </tbody>
</table>

   </div>
    )
}