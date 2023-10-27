import React from 'react'
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export default function Login() {
 const [user,setUser]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

let submitValue=()=>{
   axios.post("http://localhost:8000/api/user/login",{
    email:email,
    password:password,
   },{
    withCredentials:true,
   }) 
   .then(res=>setUser(res.data))
   .catch(err=>console.log(err.message))
       setEmail(""),
    setPassword("")
}


    return (
        <div className='row justify-content-center'>
            <div className='col-12 col-sm-12 col-md-8 col-lg-6'>
                <div className='card p-4 mt-4'>
                    <div className="mb-3"   >
                        <h3>Login</h3>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onChange={(e)=>{
                                  setEmail(e.target.value)
                        }} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={(e)=>{
                                  setPassword(e.target.value)
                        }} value={password} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button onClick={submitValue} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    )
}