import {Grid,InputAdornment, Button, Dialog, DialogActions, DialogContent,Typography, DialogTitle, TextField } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PublicIcon from "@material-ui/icons/Public";
import RoomIcon from "@material-ui/icons/Room";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import "date-fns";
import React, { useEffect, useState } from "react";
import { countries, Modifier_Articles } from "./Controller";
import { useStyles } from "./style";
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ModifierData = (props) => {
	const classes = useStyles();
	const {id,Modifier} = props;
	const [pays, setPays] = useState([]);
	useEffect(() => {
		countries().then((res) => setPays(res.map((r) => r.name)));
	}, []);
	// =================== [State] =====================
	const [libell, setLibell] = useState("");
	const [famille, setFamille] = useState("");
	const [sousFamille, setSousFamille] = useState("");
	const [nomenclature, setNomenclature] = useState("");
	const [stcMin, setStcMin] = useState("");
	const [uniteMesure, setUniteMesure] = useState("");
	const [quantite,setQuantite] = useState("");
	const [fournisseur,setFournisseur] = useState("");
	const [prix,setPrix] = useState("");
	const [date,setDate] = useState("");
	const [clickAjouter, setClickAjouter] = useState(false);
	
	// ============= [Modifier patient] =================================
	const handleModifier = () => {
		let article = {
			libell : libell,
			famille : famille,
			sousFamille : sousFamille,
			nomenclature : nomenclature,
			uniteMesure : uniteMesure,
			sockMin : stcMin,
			qtStock : quantite,
			fournisseur : fournisseur,
			prix : prix,
			date : date
		  }
		Modifier(article,id)
			.then(console.log("modifier patient"))
			.catch((e) => console.log(e));
		props.handleClose();
	};
	// ==================================================================
	return (
		
			<Dialog 
      fullScreen
      open={props.openModifier} onClose={props.handleClose} aria-labelledby="form-dialog-title">
			       <header className="sticky top-0 border-b border-gray-200 z-30 header">
      <div className="px-4 sm:px-6 lg:px-8">
     
        <div className="flex items-center justify-between h-16 -mb-px">
        <div className="flex justify-content-center items-center"></div>
          {/* Header: Left side */}
          <div className="flex">
          <Typography component="h1" variant="h4" align="center" style={{color: "#000000"}}>
                    Modifier Article
                </Typography>
          </div>

          {/* Header: Right side */}
          <div className="flex" style={{alignItems:"center",justifyContent:"center"}}>
        
                <FontAwesomeIcon  
          onClick={() => {
            props.handleClose(false);
          }}
          icon={faTimes}  style={{width:"32px",height:"32px",color:"black"}} />

          </div>

        </div>
      </div>
    </header>
				<DialogContent>
				<form className="form" onSubmit={handleModifier} style={{marginTop:"50px"}} >
					<Grid  alignItems="center"

  justifyContent="center" 
  maxWidth="80vh"
  container spacing={2}
  >
          <Grid item  xs={12} sm={12}>
						
            <TextField
              autoCapitalize
              variant="outlined"
              label="libell"
              name="libell"
              type="text"
              fullWidth
              
              value={libell}
              onChange={(e) => setLibell(String(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
            />
            </Grid>
						<Grid container item xs={12} sm={12} spacing={1}>
							<Grid item xs={6} sm={6}>
								
              <TextField
              autoCapitalize
             
              variant="outlined"
             
              label="sous famille"
              name="famille"
              type="text"
              fullWidth
              onChange={(e) => setSousFamille(e.target.value)}
              value={sousFamille}
              
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
            />
							</Grid>
							<Grid item xs={6} sm={6}>
								
              <TextField
              autoCapitalize
             
              variant="outlined"
             
              label="famille"
              name="famille"
              type="text"
              fullWidth
              onChange={(e) => setFamille(e.target.value)}
              value={famille}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
              // InputLabelProps={{style: {fontSize: 30, color:"black"}}} 

            />
            
							</Grid>
							</Grid>
						
							<Grid item  xs={12} sm={12}>
								
							<TextField
              autoCapitalize
            
              variant="outlined"
              
              label="nomenclature"
              name="nomenclature"
              type="text"
              fullWidth
              onChange={(e) => setNomenclature(e.target.value)}
              value={nomenclature}
              
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
            />
							</Grid>
              <Grid container item xs={12} sm={12} spacing={1}/>
							<Grid item  xs={6} sm={6}>
								
							<TextField
              autoCapitalize
              variant="outlined"
              
              label="Unité mésure"
              name="uniteMesure"
              type="text"
              fullWidth
              onChange={(e) => setUniteMesure(e.target.value)}
              value={uniteMesure}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
            />
							</Grid>
	
							<Grid item  xs={6} sm={6}>
								
							<TextField
              autoCapitalize
              variant="outlined"
              
              label="Quantité Stock"
              name="famille"
              type="text"
              fullWidth
              onChange={(e) => setQuantite(e.target.value)}
              value={quantite}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
            />
							</Grid>
							<Grid item  xs={6} sm={6}>
								
              <TextField
              autoCapitalize
              
              variant="outlined"
             
              label="Prix"
              name="famille"
              type="text"
              fullWidth
              onChange={(e) => setPrix(e.target.value)}
              value={prix}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
            />
							</Grid>
							<Grid item  xs={6} sm={6}>
								
							<TextField
              autoCapitalize
              
              variant="outlined"
              
              label="Prix"
              name="famille"
              fullWidth
              onChange={(e) => setDate(e.target.value)}
              value={date}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
            />
							</Grid>
							<Grid item  xs={6} sm={6}>
								
							<TextField
              autoCapitalize
              
              variant="outlined"
              
              label="Fournisseur"
              name="fournisseur"
              type="text"
              fullWidth
              onChange={(e) => setFournisseur(e.target.value)}
              value={fournisseur}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
            />
							</Grid>
						
					
							<Grid item  xs={6} sm={6}>
								
              <TextField 
              variant="outlined"
              autoCapitalize
              label="Stock minimum"
              name="stcMin"
              type="text"
              fullWidth
              onChange={(e) => setStcMin(e.target.value)}
              value={stcMin}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }}
              // InputLabelProps={{style: {fontSize: 30, color:"black"}}} 
            />
							</Grid>
						
						
						</Grid>
				
				</form>
      </DialogContent>
      <DialogActions>
        <Button
        className={classes.btnAA}
          onClick={() => {
            props.handleClose(false);
          }}
          color="primary"
          variant="contained"
        >
          Annuler
        </Button>
        <Button 
        className={classes.btnAA} onClick={handleModifier} color="primary" variant="contained">
          <PersonAddIcon />
          Modifier Article
        </Button>
      </DialogActions></Dialog>
	);
};

export default ModifierData;
