import React,{useState,useEffect} from 'react';
import { Grid, InputAdornment,InputLabel,Button, Dialog,Typography, DialogActions, DialogContent, DialogTitle, TextField, FormControl, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from "@material-ui/core";
import { useStyles } from "./style";
import {Ajouter_Fournisseurs}from "../../pages/Controller"
const AjouterFournisseur = (props) => {
    const classes = useStyles();
    const [nom ,setNom]=useState("")
    const [prenom ,setPrenom]=useState("")
    const [tel ,setTel]=useState("")
    const [adresse ,setAdresse]=useState("")
    const [clickAjouter, setClickAjouter] = useState(false);
    const [ajou,setAjou]=useState(false)
    const {title, children, openPopup, setOpenPopup} = props;
    const {Ajouter} = props;
    const handleAjouter = () => {
      setClickAjouter(true);
      let fournisseur= {
        nom:nom,
        prenom:prenom,
        adresse:adresse,
        tel:tel,
      };
      Ajouter(fournisseur)
        .then(console.log("ajouter fourniss"))
        .catch((e) => console.log(e));
      props.handleClose();
    };
    
    return ( <>
    <Dialog
     fullWidth
     
     maxWidth="lg"
     PaperProps={{
       style: {
         borderRadius: "50px",
         boxShadow: "none",
       },
     }}
    open={openPopup}>

{title ?  <DialogTitle>
   <Typography component="h1" variant="h4" align="center" style={{color: "#000000"}}>
       {title}
   </Typography>
</DialogTitle> : ''}
<DialogContent>
   <form onSubmit={handleAjouter} className="form"  >
       <Grid container spacing={2} >
           <Grid container item xs={12} sm={12} spacing={1}>
               
               </Grid>
               <Grid item  xs={12} sm={12}>
                   <TextField
                       variant="outlined"
                       autoCapitalize
                      // placeholder="nom"
                       margin="dense"
                       label="nom"
                       name="nom"
                       required
                       type="text"
                       fullWidth
                       InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            
                          </InputAdornment>
                        ),
                      }}
                       onChange={(e) => setNom(e.target.value)}
                       value={nom}
                       
                   />
               </Grid>
               <Grid item  xs={12} sm={12}>
                   
                   <TextField
                       autoCapitalize
                      // placeholder="prenom"
                       variant="outlined"
                       margin="dense"
                       label="prenom"
                       name="prenom"
                       type="text"
                       fullWidth
                       required
                       InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            
                          </InputAdornment>
                        ),
                      }}
                        onChange={(e) => setPrenom(e.target.value)}
                       value={prenom}
                   />
               </Grid>
               <Grid item  xs={12} sm={12}>
                   
                   <TextField
                       autoCapitalize
                      // placeholder="tel"
                       variant="outlined"
                       margin="dense"
                       label="tel"
                       name="tel"
                       type="text"
                       fullWidth
                       required
                       InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            
                          </InputAdornment>
                        ),
                      }}
                        onChange={(e) =>setTel(e.target.value)}
                       value={tel}
                   />
               </Grid>
               <Grid item  xs={12} sm={12}>
                   
                   <TextField
                       autoCapitalize
                       //placeholder="Adresse"
                       required
                       variant="outlined"
                       margin="dense"
                       label="Adresse"
                       name="adresse"
                       type="text"
                       fullWidth
                       InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            
                          </InputAdornment>
                        ),
                      }}
                        onChange={(e) =>setAdresse(e.target.value)}
                       value={adresse}
                   />
               </Grid>
               
           
           </Grid>
   
   </form>

</DialogContent>
<DialogActions  className={classes.dialAction}>
   <Button 
   className={classes.btnAA}
    
   onClick={() => {props.handleClose(false)}} 
   >
       Annuler
   </Button>
   <Button 
    onClick={handleAjouter}
   className={classes.btnAA} 
   >
       
       Ajouter fournisseur
   </Button>
</DialogActions>
</Dialog>	
    </> );
}
 
export default AjouterFournisseur;