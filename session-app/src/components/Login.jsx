import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [user,setUser]=useState({
        username:'',
        password:''
    })
    const navigate=useNavigate()
    let updateUser=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    let sendData=()=>{
        if ((user.username=="admin")&&(user.password=="1234")) 
            {  localStorage.setItem("username","admin")
               navigate('/dashboard')
            
        }
        else alert("Invalid")

    }

  return (
    <>
    <TextField
          required
          id="outlined-required"
          label="Username"
         
          name="username"
          value={user.username}
          onChange={updateUser}
        
        />
        <br />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Password"
         
          name="password"
          value={user.password}
          onChange={updateUser}
        
        />

        <br />
<br />
        <Button variant="contained" onClick={sendData}>Login</Button>
    
    
    
    
    
    
    </>
  )
}

export default Login