import {
  Button,
  DialogActions, Grid,
  InputAdornment, TextField
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PublicIcon from "@material-ui/icons/Public";
import RoomIcon from "@material-ui/icons/Room";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import "date-fns";
import React, { useState } from "react";
import { useStyles } from "./style";


const AjouterData = (props) => {
  const classes = useStyles();
 
  const {Ajouter} = props;
 
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
  


  // ============== [Ajouter Article] ================
  const handleAjouter = () => {
    setClickAjouter(true);
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
    Ajouter(article)
      .then(console.log("ajouter Article"))
      .catch((e) => console.log(e));
    props.handleClose();
    
  };

  return (
    <>
      {/* <DialogContent> */}

      <form className="form" onSubmit={handleAjouter}>
        <Grid container spacing={2} className={classes.root}>
          <Grid container xs={12} sm={12} spacing={1}>
            
            <Grid item xs={12} sm={12}>
              <TextField
                autoCapitalize
                placeholder="Libellé"
                variant="outlined"
                margin="dense"
                label="libell"
                name="libell"
                type="text"
                fullWidth
                value={libell}
                onChange={(e) => setLibell(String(e.target.value))}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SortByAlphaIcon className="gris" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          
          <Grid xs={12} sm={12}>
            <TextField
              autoCapitalize
              placeholder="Famille"
              variant="outlined"
              margin="dense"
              label="famille"
              name="famille"
              type="text"
              fullWidth
              onChange={(e) => setFamille(e.target.value)}
              value={famille}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomIcon className="gris" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12} sm={12}>
            <TextField
              autoCapitalize
              placeholder="Sous Famille"
              variant="outlined"
              margin="dense"
              label="sous famille"
              name="famille"
              type="text"
              fullWidth
              onChange={(e) => setSousFamille(e.target.value)}
              value={sousFamille}
              
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomIcon className="gris" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          

          <Grid xs={12} sm={12}>
            <TextField
              autoCapitalize
              placeholder="nomenclature"
              variant="outlined"
              margin="dense"
              label="nomenclature"
              name="nomenclature"
              type="text"
              fullWidth
              onChange={(e) => setNomenclature(e.target.value)}
              value={nomenclature}
              
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomIcon className="gris" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12} sm={12}>
            <TextField
              autoCapitalize
              placeholder="Unité mesure"
              variant="outlined"
              margin="dense"
              label="Unité mésure"
              name="uniteMesure"
              type="text"
              fullWidth
              onChange={(e) => setUniteMesure(e.target.value)}
              value={uniteMesure}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomIcon className="gris" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12} sm={12}>
            <TextField
              autoCapitalize
              placeholder="Quantité Stock"
              variant="outlined"
              margin="dense"
              label="Quantité Stock"
              name="famille"
              type="text"
              fullWidth
              onChange={(e) => setQuantite(e.target.value)}
              value={quantite}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomIcon className="gris" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12} sm={12}>
            <TextField
              autoCapitalize
              placeholder="Fournisseur"
              variant="outlined"
              margin="dense"
              label="Fournisseur"
              name="fournisseur"
              type="text"
              fullWidth
              onChange={(e) => setFournisseur(e.target.value)}
              value={fournisseur}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomIcon className="gris" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12} sm={12}>
            <TextField
              autoCapitalize
              placeholder="Prix"
              variant="outlined"
              margin="dense"
              label="Prix"
              name="famille"
              type="text"
              fullWidth
              onChange={(e) => setPrix(e.target.value)}
              value={prix}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomIcon className="gris" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
          <Grid xs={12} sm={12}>
            <TextField
              variant="outlined"
              autoCapitalize
              placeholder="Stock minimum"
              margin="dense"
              label="Stock minimum"
              name="stcMin"
              type="text"
              fullWidth
              onChange={(e) => setStcMin(e.target.value)}
              value={stcMin}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PublicIcon className="gris" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid xs={12} sm={12}>
            <TextField
              autoCapitalize
              placeholder="Prix"
              variant="outlined"
              margin="dense"
              label="Prix"
              name="famille"
              type="date"
              fullWidth
              onChange={(e) => setDate(e.target.value)}
              value={date}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomIcon className="gris" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
           
        </Grid>
      </form>
      {/* </DialogContent> */}
      <DialogActions>
        <Button
          onClick={() => {
            props.handleClose(false);
          }}
          color="primary"
          variant="contained"
        >
          Annuler
        </Button>
        <Button onClick={handleAjouter} color="primary" variant="contained">
          <PersonAddIcon />
          Ajouter Article
        </Button>
      </DialogActions>
    </>
  );
};

export default AjouterData;
