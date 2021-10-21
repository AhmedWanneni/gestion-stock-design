import React,{useState} from 'react';

import {Paper,Button,FormControlLabel, Grid,Checkbox,Typography, DialogTitle,DialogContent,InputAdornment, TextField,Container } from "@material-ui/core";
import {Loogin} from "./controller"
import { Link, useHistory } from "react-router-dom"
import axios from 'axios';
const Login = () => {
  const Loogin = async (Info) => {
    const { data } =  await axios.post('http://localhost:1337/auth/local',Info); 
    localStorage.setItem("key",data.jwt)
      console.log(data)
      
     return data 
  };
  const history = useHistory()
  const [identifier,setIdentifier]=useState("")
  const[password,setPassword]=useState('')
  const  currentUser = localStorage.getItem("key")
  console.log(currentUser)
const handleConfirm=()=>{
   let Info={
      identifier:identifier,
password:password
   }
  Loogin(Info)
  .then(
    history.push("/")
    
    )
  .catch((e) => 
  localStorage.removeItem('key'));
}
     
     

    return ( <>
  <div style={{ padding: 30 }} onSubmit={handleConfirm}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="identifier" 
            name="identifier"
            onChange={(e) => setIdentifier(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField 
            name="password"
            label="Password" type={'password'}
            onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={handleConfirm}> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
    </> );
}
 
export default Login;