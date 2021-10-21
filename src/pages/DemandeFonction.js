import {
  Button,
  DialogActions,
  Grid,
  InputAdornment,
  TextField,
 
  Dialog,

  DialogContent,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import "date-fns";
import React, { useState } from "react";
import { useStyles } from "./style";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DemandeFonction = (props) => {
  const classes = useStyles();
  let history = useHistory ();
  const { Ajouter } = props;

  // =================== [State] ====================
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [description, setDescription] = useState("");
  const [clickAjouter,setClickAjouter] = useState(false);
  const [openPopup,setOpenPopup] = useState(true);
  // ============== [Ajouter Article] ================
  const handleAjouter = () => {
    setClickAjouter(true);
    let demande = {
      nom : nom,
      prenom : prenom,
      adresse: adresse,
      description : description
    };
    Ajouter(demande)
      .then(console.log("ajouter demande"))
      .catch((e) => console.log(e));
    props.handleClose();
  };

  return (
    <>
    <Dialog fullScreen open={openPopup}>
        <header className="sticky top-0 border-b border-gray-200 z-30 header">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 -mb-px">
              <div className="flex justify-content-center items-center"></div>
              {/* Header: Left side */}
              <div className="flex">
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  style={{ color: "#000000" }}
                >
                  {"Demande d'une fonction"}
                </Typography>
              </div>

              {/* Header: Right side */}
              <div
                className="flex"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <FontAwesomeIcon
                  onClick={() => {
                    setOpenPopup(false);
                    history.push("/")
                  }}
                  icon={faTimes}
                  style={{ width: "32px", height: "32px", color: "black" }}
                />
              </div>
            </div>
          </div>
        </header>
        <DialogContent
          className="w-2/4 self-center gap-4"
          dividers
        >
      <form className="form" onSubmit={handleAjouter}>
        <Grid
          alignItems="center"
          justifyContent="center"
          width="50%"
          container
          spacing={2}
        >
          <Grid container item xs={12} sm={12} spacing={1}>
            <Grid item xs={6} sm={6}>
              <label>Nom : </label>
              <TextField
                autoCapitalize
                variant="outlined"
                placeholder="Nom"
                name="famille"
                type="text"
                fullWidth
                onChange={(e) => setPrenom(e.target.value)}
                value={prenom}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
            <label>Prénom : </label>
              <TextField
                autoCapitalize
                variant="outlined"
                placeholder="Prénom"
                name="famille"
                type="text"
                fullWidth
                onChange={(e) => setAdresse(e.target.value)}
                value={adresse}
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
            <label>Adresse éléctronique : </label>
            <TextField
              placeholder="Adresse éléctronique"
              autoCapitalize
              variant="outlined"
              name="libell"
              type="text"
              fullWidth
              value={nom}
              onChange={(e) => setNom(String(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={12}>
            <label>Description</label>
            <TextField
              variant="outlined"
              placeholder="Description"
              fullWidth
              minRows={4}
            />
          </Grid>
          </Grid>
      </form>
      
      
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
        <Button
          className={classes.btnAA}
          onClick={handleAjouter}
          variant="contained"
        >
          Envoyer
        </Button>
      </DialogActions>
      </DialogContent>
      </Dialog>
    </>
  );
};

export default DemandeFonction;
