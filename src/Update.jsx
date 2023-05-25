// import React, { useEffect, useState } from "react"
 
//  import { useDispatch, useSelector } from "react-redux";
 



// const Update = () =>{


//      console.log(data)

//     return(
//         <>
//        <div className="container">
//         <div style={{color:"blue"}}className="card bg-info">
//             <div className="card-title">
//              <h2 className="text-center">Edit User</h2>
//             </div>
//             <div className="card-body bg-info">
//                 <form  onSubmit={(e)=>handleSubmit(e)}>
//                     <label>Name</label><br/>
//                     <input type="text" name="name" value={Update && Update[0].name}  autoComplete="off" className="form-control" placeholder="Enter ur good name" />
//                     <label>Email</label><br/>
//                     <input type="email" name="email"  className="form-control" placeholder="Enter ur mail id" />
//                     <label>Phone</label><br/>
//                     <input type="number" name="phone" className="form-control" placeholder="Enter ur Mobile" />
//                     <label>Password</label><br/>
//                     <input type="password" name="password"  className="form-control" placeholder="Enter ur Password" /><br/>
//                     <input style={{backgroundColor:"blue"}} type="submit" value="submit" className="btn btn-dark " />

//                 </form>
//             </div>
//         </div>
//        </div>
//         </>

//     )
// }
// export default Update;
import React, { useEffect, useState } from "react";
//import { createUser } from "./redux/features/showSlice";
import { singleUser } from "./redux/features/showSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UpdateUser } from "./redux/features/showSlice";
import { useNavigate } from "react-router-dom";



export default function Add() {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    //const [posts, setPosts] = useState({});
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')

    const { id } = useParams()
    //const [Update, setUpdate] = useState()

    const data = useSelector((state) => state?.post?.posts?.data?.list);
    //const data1 = useSelector((state) => state?.post?.posts?.data);

    
    //console.log(data);

    //console.log(data)
    useEffect(() => {
        if (id) {
            dispatch(singleUser(id))
            
        }
    }, [id,dispatch])
    useEffect(() => {
       if(data){
        setName(data.name)
        setEmail(data.email)
        setPhone(data.phone)
       }
    }, [data,id])

    // const getUserData = (e) => {
    //     setPosts({ ...posts, [e.target.name]: e.target.value });
        
    // };
   
    const handleSubmit = (e) => {
    
        console.log(data)
        e.preventDefault();
        dispatch(UpdateUser({id,name,email,phone}))

        navigate('/')
        
    };
    return (
        <>
            <div className="container">
                <div style={{ color: "blue" }} className="card bg-info">
                    <div className="card-title">
                        <h2 className="text-center">Edit User</h2>
                    </div>
                    <div className="card-body bg-info">
                        <form onSubmit={(e) => handleSubmit(e)} >
                            <label>Name</label><br />
                            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} autoComplete="off" className="form-control" placeholder="Enter ur good name" />
                            <label>Email</label><br />
                            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter ur mail id" />
                            <label>Phone</label><br />
                            <input type="number" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Enter ur Mobile" />
                
                            
                            <input style={{ backgroundColor: "blue" }} type="submit" value="submit" className="btn btn-dark " />

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}