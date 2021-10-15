import React ,{useState}from 'react';
import { Grid, InputAdornment,InputLabel,Button, Dialog,Typography, DialogActions, DialogContent, DialogTitle, TextField, FormControl, RadioGroup, FormControlLabel, Radio, Select, MenuItem } from "@material-ui/core";
import { useStyles } from "./style";
const ModifierMagasin = (props) => {
  const classes = useStyles();

    const [gerant, setGerant] = useState("");
    const [adresse, setAdresse] = useState("");
    const {id,Modifier} = props;
   
 const handleModifier = async ()=>{
    
  let Magasin={
    gerant:gerant,
    adress:adresse,

}
Modifier(Magasin,id)
.then(console.log("modifier "))
.catch((e) => console.log(e));
props.handleClose()
}
    return (<>
    <Dialog

fullWidth
maxWidth="lg"
PaperProps={{
  style: {
    borderRadius: "50px",
    boxShadow: "none",
  },
}}
      open={props.openModifier} onClose={props.handleClose} 
    
    >
<DialogContent>
<form className="form" onSubmit={handleModifier}>
          <Grid
            alignItems="center"
            justifyContent="center"
            maxWidth="80vh"
            container
            spacing={2}
          >
            <Grid container item xs={12} sm={12} spacing={1}>
              <Grid item xs={6} sm={6}>
                <TextField
                  autoCapitalize
                  variant="outlined"
                  label="Géran magasin"
                  name="nom"
                  type="text"
                  fullWidth
                  onChange={(e) => setGerant(e.target.value)}
                  value={gerant}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ style: { border: "1px solid black" } }}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  autoCapitalize
                  variant="outlined"
                  label="Adresse magasin "
                  name="adresse"
                  type="text"
                  fullWidth
                  onChange={(e) => setAdresse(e.target.value)}
                  value={adresse}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ style: { border: "1px solid black" } }}
                />
              </Grid>
            </Grid>
          </Grid>
        </form>

</DialogContent>
<DialogActions  className={classes.dialAction}>
   <Button className={classes.btnAA} variant="contained" className="close-btn" 
  onClick={() => {
    props.handleClose(false);
  }}
   >
       Annuler
   </Button>
   <Button className={classes.btnAA}  onClick={handleModifier} variant="contained" className="green">
       
       Edit Magasin
   </Button>
</DialogActions>
</Dialog>	
    </>  );
}
 
export default ModifierMagasin;