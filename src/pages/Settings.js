import React ,{useState}from 'react';
import {Avatar,Button,DialogActions, Grid,Dialog,Typography, DialogTitle,DialogContent,InputAdornment, TextField,Container } from "@material-ui/core";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { useStyles } from "./style";
const Settings = () => {
    const classes = useStyles();
    const[sidebarOpen, setSidebarOpen] = useState(false);
    const[nom,setNom]=useState("")
    const[prenom,setPrenom]=useState("")
    const[email,setEmail]=useState("")
    const[image, setImage] = useState("");
    const[motDePasse,setMotDePasse]=useState('')
    return ( <>
  <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden white">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          
          {/*Datatable*/}

          <Typography
              component="h1"
              variant="h4"
             
              style={{ color: "#000000" }}
            >
              paramétre
            </Typography>
            
          <div  className={classes.content}>
<Grid container spacing={1} style={{justifyContent: "center",width:"120vh"}}>
    
    
    <Grid item xs={6} sm={6} style={{justifyContent: "center",alignItems:"center"}}>
    <div className={classes.container}>
    <Avatar style={{width:"23vh",height:"23vh",justifyContent:"center"}}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        align="center"
        
      />
      <div className="">
      <Typography
       component="h1"
       variant="h4"
       
       style={{ color: "#000000",marginLeft:"75px" }}> name  </Typography>
     
 <Button
  variant="contained"
  component="label"
  className={classes.btnAj}
>
  Changer la photo
  <input
    type="file"
    hidden
  />
</Button>
      </div>
      </div>
    </Grid>
<Grid item xs={6} sm={6} style={{justifyContent: "center"}}>
    <form className={classes.form}>
        <Grid  container 
            spacing={2}
            maxWidth="20vh">
           <Grid container item xs={12} sm={12} spacing={1}style={{justifyContent: "center"}}>
           <Grid item xs={12} sm={12}style={{justifyContent: "center"}}> 
           <input classsName={classes.input}
                  placeholder="Nom" style={{ borderRadius:"20px",
                  backgroundColor:"#d5d5d5",
                  height:"2.1876em",
                  
                //   boxShadow:"2px -9px 0px -3px rgba(0,0,0,0.11)",
                  marginBottom:"20px",
                  width:"100%",
                  textIndent:"20px"
                }}
                        />
                       </Grid>  
                       <Grid item xs={12} sm={12}> 
                       <input classsName={classes.input}
                  placeholder="Prénom" style={{ borderRadius:"20px",
                  backgroundColor:"#d5d5d5",
                  height:"2.1876em",
                  
                //   boxShadow:"2px -9px 0px -3px rgba(0,0,0,0.11)",
                  marginBottom:"20px",
                  width:"100%",
                  textIndent:"20px"
                }}
                        />
                       </Grid>  
                       <Grid item xs={12} sm={12}> 
                       <input classsName={classes.input}
                  placeholder="E-mail" style={{ borderRadius:"20px",
                  backgroundColor:"#d5d5d5",
                  height:"2.1876em",
                 
                //   boxShadow:"2px -9px 0px -3px rgba(0,0,0,0.11)",
                  marginBottom:"20px",
                  width:"100%",
                  textIndent:"20px"
                }}
                        />
                       </Grid>  
                       <Grid item xs={12} sm={12}> 
                       <input classsName={classes.input}
                  placeholder="Mot de passe" style={{ borderRadius:"20px",
                  backgroundColor:"#d5d5d5",
                  height:"2.1876em",
                  
                //   boxShadow:"2px -9px 0px -3px rgba(0,0,0,0.11)",
                  marginBottom:"20px",
                  width:"100%",
                  textIndent:"20px"
                }}
                        />
                       </Grid>  
                       <Grid item xs={12} sm={12}> 
                       <input classsName={classes.input}
                  placeholder="Confirmer mot de passe " style={{ borderRadius:"20px",
                  backgroundColor:"#d5d5d5",
                  height:"2.1876em",
                  
                //   boxShadow:"2px -9px 0px -3px rgba(0,0,0,0.11)",
                  marginBottom:"20px",
                  width:"100%",
                  textIndent:"20px"
                }}
                        />
                       </Grid>  
                       <Button
            className={classes.btnAA}
           
          >
            Enregistrer
          </Button>
           </Grid>
        </Grid>
    </form>
    </Grid>
    </Grid>
                        </div>
          
        </div>
      </div>

    </> );
}
 
export default Settings;