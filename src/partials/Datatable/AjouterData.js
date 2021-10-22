import {
  Button,
  DialogActions,
  Grid,
  InputAdornment,
  TextField,
  Container,
} from "@material-ui/core";
import "date-fns";
import React, { useState } from "react";
import { useStyles } from "./style";

import { Ajouter_Articles } from "../../pages/Controller";
const AjouterData = (props) => {
  const classes = useStyles();

  const { Ajouter } = props;

  // =================== [State] ====================
  const [libell, setLibell] = useState("");
  const [famille, setFamille] = useState("");
  const [sousFamille, setSousFamille] = useState("");
  const [nomenclature, setNomenclature] = useState("");
  const [stcMin, setStcMin] = useState("");
  const [uniteMesure, setUniteMesure] = useState("");
  const [quantite, setQuantite] = useState("");
  const [fournisseur, setFournisseur] = useState("");
  const [prix, setPrix] = useState("");
  const [date, setDate] = useState("");
  const [clickAjouter, setClickAjouter] = useState(false);

  // ============== [Ajouter Article] ================
  const handleAjouter = () => {
    setClickAjouter(true);
    let article = {
      libell: libell,
      famille: famille,
      sousFamille: sousFamille,
      nomenclature: nomenclature,
      uniteMesure: uniteMesure,
      sockMin: stcMin,
      qtStock: quantite,
      fournisseur: fournisseur,
      prix: prix,
      date: date,
    };
    Ajouter(article)
      .then(console.log("ajouter Article"))
      .catch((e) => console.log(e));
    props.handleClose();
  };

  return (
    <>
      <form className="form" onSubmit={handleAjouter}>
        <Grid
          alignItems="center"
          justifyContent="center"
          maxWidth="80vh"
          container
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              autoCapitalize
              variant="outlined"
              label="libellé"
              placeholder="Libellé"
              name=""
              type="text"
              fullWidth
              value={libell}
              onChange={(e) => setLibell(String(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
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
                placeholder="Sous famille"
                name="famille"
                type="text"
                fullWidth
                onChange={(e) => setSousFamille(e.target.value)}
                value={sousFamille}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
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
                placeholder="Famille"
                type="text"
                fullWidth
                onChange={(e) => setFamille(e.target.value)}
                value={famille}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                // InputLabelProps={{style: {fontSize: 30, color:"black"}}}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              autoCapitalize
              variant="outlined"
              label="nomenclature"
              placeholder="Nomenclature"
              name="nomenclature"
              type="text"
              fullWidth
              onChange={(e) => setNomenclature(e.target.value)}
              value={nomenclature}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid container item xs={12} sm={12} spacing={1} />
          <Grid item xs={6} sm={6}>
            <TextField
              autoCapitalize
              variant="outlined"
              label="Unité mesure"
              placeholder="Unité mesure"
              name="uniteMesure"
              type="text"
              fullWidth
              onChange={(e) => setUniteMesure(e.target.value)}
              value={uniteMesure}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              autoCapitalize
              variant="outlined"
              label="Quantité Stock"
              placeholder="Quantité en stock"
              name="famille"
              type="text"
              fullWidth
              onChange={(e) => setQuantite(e.target.value)}
              value={quantite}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              autoCapitalize
              variant="outlined"
              label="Prix"
              placeholder="Prix"
              name="famille"
              type="text"
              fullWidth
              onChange={(e) => setPrix(e.target.value)}
              value={prix}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              autoCapitalize
              variant="outlined"
              label="Fournisseur"
              name="fournisseur"
              placeholder="Fournisseur"
              type="text"
              fullWidth
              onChange={(e) => setFournisseur(e.target.value)}
              value={fournisseur}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              variant="outlined"
              autoCapitalize
              label="Stock minimum"
              placeholder="Stock minimum"
              name="stcMin"
              type="text"
              fullWidth
              onChange={(e) => setStcMin(e.target.value)}
              value={stcMin}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              // InputLabelProps={{style: {fontSize: 30, color:"black"}}}
            />
          </Grid>
        </Grid>
      </form>
      {/* </DialogContent> */}
      <DialogActions>
        <Button
          className={classes.btnAA}
          onClick={() => {
            props.handleClose(false);
          }}
          variant="contained"
        >
          Annuler
        </Button>
        <Button className={classes.btnAA} onClick={handleAjouter}>
          Ajouter Article
        </Button>
      </DialogActions>
    </>
  );
};

export default AjouterData;
