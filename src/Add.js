import React,{useState} from "react";
import { createUser } from "./redux/features/showSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Add(){
    const [posts, setPosts] = useState({});
    const navigate=useNavigate()

    const dispatch=useDispatch()
    const getUserData = (e) => {
        setPosts({ ...posts, [e.target.name]: e.target.value });
    
    };
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(posts));
       // console.log("sdfa")

       navigate('/')
       
      };
      
    return(
        <>
       <div className="container">
        <div style={{color:"blue"}}className="card bg-info">
            <div className="card-title">
             <h2 className="text-center">AddUser</h2>
            </div>
            <div className="card-body bg-info">
                <form onSubmit={(e)=>handleSubmit(e)} >
                    <label>Name</label><br/>
                    <input type="text" name="name" onChange={getUserData}  autoComplete="off" className="form-control" placeholder="Enter ur good name" />
                    <label>Email</label><br/>
                    <input type="email" name="email" onChange={getUserData} className="form-control" placeholder="Enter ur mail id" />
                    <label>Phone</label><br/>
                    <input type="number" name="phone" onChange={getUserData} className="form-control" placeholder="Enter ur Mobile" />
                    <label>Password</label><br/>
                    <input type="password" name="password" onChange={getUserData} className="form-control" placeholder="Enter ur Password" /><br/>
                    <input style={{backgroundColor:"blue"}} type="submit" value="submit" className="btn btn-dark " />

                </form>
            </div>
        </div>
       </div>
        </>
    )
}