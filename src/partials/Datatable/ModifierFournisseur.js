import React,{useState} from 'react';
import { Grid, InputAdornment,InputLabel,Button, Dialog,Typography, DialogActions, DialogContent, DialogTitle, TextField, FormControl, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from "@material-ui/core";
import { useStyles } from "./style";
const ModifierFournisseur = (props) => {
    const classes = useStyles();
    const [nom ,setNom]=useState("")
    const [prenom ,setPrenom]=useState("")
    const [tel ,setTel]=useState("")
    const [adresse ,setAdresse]=useState("")
    const [clickAjouter, setClickAjouter] = useState(false);
    const {title,} = props;
    const {id,Modifier} = props;
    const handleModifier = async ()=>{
     let Fournisseur={
            nom:nom,
            prenom:prenom,
            tel:tel,
            adresse:adresse      
      }
      Modifier(Fournisseur,id)
      .then(console.log("modifier Fournisseur"))
      .catch((e) => console.log(e));
  props.handleClose();
      }
    return (  <>
      <Dialog 
      fullWidth
      maxWidth="lg"
      PaperProps={{
        style: {
          borderRadius: "50px",
          boxShadow: "none",
        },
      }}
      open={props.openModifier} onClose={props.handleClose}>

{title ?  <DialogTitle>
   <Typography component="h1" variant="h4" align="center" style={{color: "#000000"}}>
       {title}
   </Typography>
</DialogTitle> : ''}
<DialogContent>
<form onSubmit={handleModifier} className="form"  >
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
<DialogActions className={classes.dialAction}>
   <Button
   className={classes.btnAA} 

   variant="contained"  
   onClick={() => {
    props.handleClose(false);
  }}
   >
       Annuler
   </Button>
   <Button className={classes.btnAA}
     onClick={handleModifier} variant="contained" >
       
       Modifier
   </Button>
</DialogActions>
</Dialog>	
    </>);
}
 
export default ModifierFournisseur;