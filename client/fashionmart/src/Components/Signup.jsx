import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';

import {useNavigate}  from "react-router-dom"
export default function Signup() {
    let [register,setregister]=useState({
        name:"",
        username:"",
        phone:"",
        email:"",
        password:"",
        cpassword:""
    })
    var navigate = useNavigate()
    function getData(name,value){
        setregister((oldData)=>{
            return{
                ...oldData,
                [name]:value
            }
        })
    }
    async function postData(){
        if(register.password===register.cpassword){
            var item = {
                name:register.name,
                username:register.username,
                email:register.email,
                phone:register.phone,
                password:register.password
            }
            var response = await fetch("/user",{
                method:"post",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(item)
            })
            response = await response.json()
            if(response.result==="Done")
            navigate("/login")
            else
            alert(response.message)
        }
        else
            alert("Password and Confirm Password Doesn't Matched!!!!!!!")
    }
    return (
        <Grid container spacing={2}>
            <Grid item md={2} xs={12} >
            </Grid>
            <Grid item md={8} xs={12} >
                <h5 className='background text-light text-center p-2'>Signup Section</h5>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '98%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-name-input"
                            label="name*"
                            type="text"
                            autoComplete="current-name"
                            placeholder='Enter Name'
                            name="name"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-username-input"
                            label="UserName*"
                            type="text"
                            autoComplete="current-username"
                            placeholder='Enter User Name'
                            name="username"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-email-input"
                            label="Email*"
                            type="email"
                            autoComplete="current-email"
                            placeholder='Enter Email Id'
                            name="email"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-phone-input"
                            label="Phone*"
                            type="text"
                            autoComplete="current-phone"
                            placeholder='Enter Phone Number'
                            name="phone"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-password-input"
                            label="Password*"
                            type="password"
                            autoComplete="current-password"
                            placeholder='Enter Password'
                            name="password"
                        />
                        <TextField
                            onChange={(e)=>{
                                getData(e.target.name,e.target.value)
                            }}
                            id="outlined-cpassword-input"
                            label="Confirm Password*"
                            type="password"
                            autoComplete="current-cpassword"
                            placeholder='Confirm Password'
                            name="cpassword"
                        />
                        <Button variant="contained" className="background" onClick={postData}>Signup</Button>
                            <Link href="/login" color="inherit" underline="none">Already User? Login to Your Account</Link>
                    </Box>
            </Grid>
            <Grid item md={2} xs={12} >
            </Grid>
        </Grid>
    )
}