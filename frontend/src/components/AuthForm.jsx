import { useState } from "react";
import api from "../api"
import { useNavigate, useResolvedPath } from "react-router-dom";
import { ACCESS_TOKEN,REFRESH_TOKEN } from "../constants";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CustomNavbar from "../pages/Navbar";


function AuthForm({route,method}){

         const [username,setUsername]=useState("")
         const [password,setPassword]=useState("")
         const [loading,setLoading]=useState("")
         const navigate=useNavigate()
         const name=method==="login"? "Login":"Register"

         const handleSubmit= async (e)=>{
            setLoading(true)
            e.preventDefault()

            try{
                const res=await api.post(route,{username,password})
                if(method==="login"){
                    localStorage.setItem(ACCESS_TOKEN,res.data.access);
                    localStorage.setItem(REFRESH_TOKEN,res.data.refresh)
                    navigate("/")
                }else{
                    navigate("/login")
                }
            }
            catch(error){
                alert(error)
            }
            finally{
                setLoading(false)
            }
         }



         return (
           
            <div>
            <CustomNavbar/>
            <Form onSubmit={handleSubmit}>
            <p className="fs-1 ms-5 mt-2">{name}</p>
            <Form.Group className="mb-3 mx-5" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3 mx-5" controlId="exampleForm.ControlTextarea1">
            <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>
            <Button className="ms-5" variant="primary"type="submit">{name}</Button>
            </Form>
            </div>
         

         
         )

         

}
export default AuthForm