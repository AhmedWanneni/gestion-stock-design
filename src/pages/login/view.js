import React,{useState,useEffect} from 'react';

import {Paper,Button,FormControlLabel, Grid,Checkbox,Typography, DialogTitle,DialogContent,InputAdornment, TextField,Container } from "@material-ui/core";
import {Loogin} from "./controller"
import { Link, useHistory } from "react-router-dom"
import axios from 'axios';
import PropTypes from 'prop-types';
const Login = ({ setToken }) => {
 
  const history = useHistory()
  const [identifier,setIdentifier]=useState("")
  const[password,setPassword]=useState('')
  const [currentUser, setCurrentUser]=useState()
useEffect(() => {
  localStorage.setItem("key", "value")
}, )
  
const handleConfirm=()=>{
  Loogin({
    identifier:identifier,
    password:password
  }).then((res) => {
    setToken(res.jwt)
    localStorage.setItem("token",'f')
  console.log(res.jwt)
}).catch((err) => {
  console.log(err)
});
//localStorage.setItem("token",currentUser.jwt)
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
 
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Login;